import type { Locale } from "@/lib/locale";
import { en } from "./en";
import { pt } from "./pt";

export function getMessages(locale: Locale) {
  return locale === "pt" ? pt : en;
}
