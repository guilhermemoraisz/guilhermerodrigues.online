import { describe, expect, it } from "vitest";
import { isLocale, resolveLocale } from "./locale";

describe("resolveLocale", () => {
  it.each([
    ["pt", "pt"], ["pt-BR", "pt"], ["pt-PT", "pt"], ["PT-br", "pt"],
    ["pt-BR,pt;q=0.9,en;q=0.8", "pt"], ["en;q=0.5,pt-BR;q=0.9", "pt"],
    ["en", "en"], ["en-US", "en"], ["ja", "en"], ["el-GR", "en"],
    ["ja,pt;q=0.5", "en"], ["en,pt", "en"], ["pt,en", "pt"],
    ["pt;q=0,en;q=0.5", "en"], ["pt;q=0", "en"], ["*", "en"],
    [null, "en"], [undefined, "en"], ["", "en"], ["!!!", "en"],
    ["pt;q=2", "en"], ["pt;q=-1", "en"], ["pt;q=banana", "en"],
    ["pt;q=0.9999", "en"], ["??? , pt-PT;q=0.8", "pt"],
    ["pt;q=0.8,en;q=0.8", "pt"], [" en ; q=0.5 , pt-BR ; q=0.9 ", "pt"],
  ] as const)("%s selects %s", (header, expected) => {
    expect(resolveLocale(header)).toBe(expected);
  });
  it("accepts only the supported route locales", () => {
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("ja")).toBe(false);
    expect(isLocale("pt-BR")).toBe(false);
  });
});
