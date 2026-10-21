import { expect, test } from "@playwright/test";

test.describe("browser localization", () => {
  for (const [language, destination] of [
    ["pt-BR,pt;q=0.9,en;q=0.8", "/pt"],
    ["pt-PT", "/pt"],
    ["en-US", "/en"],
    ["ja,pt;q=0.5", "/en"],
    ["el-GR", "/en"],
    ["en;q=0.5,pt-BR;q=0.9", "/pt"],
    ["*", "/en"],
  ]) {
    test(`${language} redirects to ${destination}`, async ({ request }) => {
      const response = await request.get("/", { headers: { "Accept-Language": language }, maxRedirects: 0 });
      expect(response.status()).toBe(307);
      expect(new URL(response.headers().location, response.url()).pathname).toBe(destination);
      expect(response.headers()["cache-control"]).toContain("no-store");
      expect(response.headers().vary).toContain("Accept-Language");
    });
  }

  test("missing language falls back to English", async ({ request }) => {
    const response = await request.get("/", { maxRedirects: 0 });
    expect(new URL(response.headers().location, response.url()).pathname).toBe("/en");
  });

  test("localized URLs stay stable with server-rendered metadata", async ({ browser, request }) => {
    const context = await browser.newContext({ locale: "pt-BR", javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/en");
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page).toHaveTitle("Guilherme Rodrigues — Full Stack Developer");
    await expect(page.getByText("Full Stack Developer", { exact: true })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.guilhermerodrigues.online/en");
    await expect(page.locator('link[hreflang="pt"]')).toHaveAttribute("href", "https://www.guilhermerodrigues.online/pt");
    await page.goto("/pt");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt");
    await expect(page).toHaveTitle("Guilherme Rodrigues — Desenvolvedor Full Stack");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /estagiário/);
    await context.close();

    for (const [alias, destination] of [["/en-us", "/en"], ["/pt-br", "/pt"]]) {
      const response = await request.get(alias, { maxRedirects: 0 });
      expect(response.status()).toBe(307);
      expect(new URL(response.headers().location, response.url()).pathname).toBe(destination);
    }
  });

  test("assets are not negotiated and unknown locales return 404", async ({ request }) => {
    for (const asset of ["/robots.txt", "/icon.svg"]) {
      const response = await request.get(asset, { headers: { "Accept-Language": "pt-BR" }, maxRedirects: 0 });
      expect(response.status()).toBe(200);
      expect(response.headers().location).toBeUndefined();
    }
    const response = await request.get("/ja");
    expect(response.status()).toBe(404);
  });
});
