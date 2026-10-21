import type { Locale } from "@/lib/locale";

export type YearMonth = `${number}-${number}`;

export const portfolio = {
  name: "Guilherme Rodrigues",
  email: "guilhermemorais.dev@gmail.com",
  github: "https://github.com/guilhermemoraisz",
  linkedin: "https://www.linkedin.com/in/guilhermemoraisz/",
  resumeUrl: "/files/resume.pdf" as string | undefined,
  periods: {
    cit: { start: "2026-04" as YearMonth },
    screenNetwork: { start: "2018-01" as YearMonth, end: "2019-01" as YearMonth },
    education: { start: "2024-10" as YearMonth, expectedCompletionYear: 2027 },
  },
  technologies: {
    automotiveClient: ["Angular", "GCP", "Fossa", "42Crunch", "SonarQube"],
    bootcamp: ["React", "Spring", "Nginx"],
    screenNetwork: ["JavaScript", "discord.js"],
  },
};

export type Portfolio = typeof portfolio;

export function formatMonth(value: YearMonth, locale: Locale) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en", {
    month: "short", year: "numeric", timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
