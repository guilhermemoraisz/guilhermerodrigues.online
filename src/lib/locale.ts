export const SUPPORTED_LOCALES = ["pt", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
}

/** Only the browser's highest-priority concrete preference selects Portuguese. */
export function resolveLocale(acceptLanguage: string | null | undefined): Locale {
  const preferences = (acceptLanguage ?? "")
    .split(",")
    .flatMap((entry, index) => {
      const match = entry.trim().match(/^([a-z]{2,8}(?:-[a-z0-9]{1,8})*|\*)(?:\s*;\s*q=(0(?:\.\d{0,3})?|1(?:\.0{0,3})?))?$/i);
      if (!match) return [];
      const quality = match[2] === undefined ? 1 : Number(match[2]);
      if (quality === 0 || match[1] === "*") return [];
      return [{ language: match[1].toLowerCase(), quality, index }];
    })
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  return preferences[0]?.language.split("-")[0] === "pt" ? "pt" : "en";
}
