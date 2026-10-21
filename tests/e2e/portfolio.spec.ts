import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("shows real experience, separate education and correct contact links", async ({ page }) => {
  await page.goto("/pt");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("GuilhermeRodrigues.");
  await expect(page.getByText("Desenvolvedor Full Stack", { exact: true })).toBeVisible();
  await expect(page.getByText("Estagiário de Engenharia de Software", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "CI&T", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Screen Network", exact: true })).toBeVisible();
  await expect(page.getByRole("region", { name: /Formação/ })).toContainText("Análise e Desenvolvimento de Sistemas");
  await expect(page.getByRole("region", { name: /Formação/ })).toContainText("meados de 2027");
  await expect(page.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", "https://github.com/guilhermemoraisz");
  await expect(page.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", "https://www.linkedin.com/in/guilhermemoraisz/");
  await expect(page.getByRole("link", { name: "guilhermemorais.dev@gmail.com" })).toHaveAttribute("href", "mailto:guilhermemorais.dev@gmail.com");
  await expect(page.getByRole("link", { name: /Currículo/ })).toHaveCount(0);
  await expect(page.locator("form, select, img")).toHaveCount(0);
});

test("keyboard skip link, section navigation and reduced motion work", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  expect(await skip.evaluate((node) => getComputedStyle(node).outlineStyle)).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("heading", { name: "Let's talk." })).toBeInViewport();
  expect(await page.locator("html").evaluate((node) => getComputedStyle(node).scrollBehavior)).toBe("auto");
});

for (const locale of ["pt", "en"] as const) {
  for (const theme of ["light", "dark"] as const) {
    for (const size of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }]) {
      test(`${locale} ${theme} at ${size.width}px is accessible and fits`, async ({ page }, testInfo) => {
        const errors: string[] = [];
        page.on("pageerror", (error) => errors.push(error.message));
        page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
        await page.setViewportSize(size);
        await page.emulateMedia({ colorScheme: theme });
        await page.goto(`/${locale}`);
        await expect(page.locator("html")).toHaveClass(new RegExp(`\\b${theme}\\b`));
        await page.evaluate(() => document.fonts.ready);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        expect(accessibility.violations).toEqual([]);
        expect(errors).toEqual([]);
        const screenshot = await page.screenshot({ path: testInfo.outputPath(`${locale}-${theme}-${size.width}.png`), fullPage: true });
        await testInfo.attach("Visual review", { body: screenshot, contentType: "image/png" });
      });
    }
  }
}

test("small 320px viewport has no overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/pt");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
