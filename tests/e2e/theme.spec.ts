import { expect, test } from "@playwright/test";

for (const theme of ["light", "dark"] as const) {
  test(`uses ${theme} system preference initially`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto("/en");
    await expect(page.locator("html")).toHaveClass(new RegExp(`\\b${theme}\\b`));
    const destination = theme === "dark" ? "light" : "dark";
    await expect(page.getByRole("button", { name: `Switch to ${destination} theme` })).toBeEnabled();
  });
}

test("manual preference persists and the localized keyboard control retains focus", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/pt");
  const toggle = page.getByRole("button", { name: "Ativar tema claro" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  await expect(page.getByRole("button", { name: "Ativar tema escuro" })).toBeFocused();
  expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("light");
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  await page.getByRole("button", { name: "Ativar tema escuro" }).focus();
  await page.keyboard.press("Space");
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  expect(errors).toEqual([]);
});

test("theme follows system changes until overridden", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/en");
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
});

test("unavailable storage does not prevent session switching", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() { throw new DOMException("Storage blocked", "SecurityError"); },
    });
  });
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/en");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  expect(errors).toEqual([]);
});
