import { describe, expect, it } from "vitest";
import { en } from "./messages/en";
import { pt } from "./messages/pt";
import { formatMonth, portfolio } from "./portfolio";

function leafKeys(value: object, prefix = ""): string[] {
  return Object.entries(value).flatMap(([key, item]) => {
    const path = `${prefix}${key}`;
    return typeof item === "object" && item !== null
      ? leafKeys(item, `${path}.`)
      : [path];
  });
}

describe("portfolio content", () => {
  it("keeps the automotive client anonymous in both languages and shared data", () => {
    expect(JSON.stringify({ pt, en, portfolio })).not.toMatch(/ford/i);
    expect(pt.hero.summary).toContain("cliente do setor automotivo");
    expect(en.hero.summary).toContain("client in the automotive industry");
  });
  it("keeps translations complete and structurally equivalent", () => {
    expect(leafKeys(pt)).toEqual(leafKeys(en));
    expect(JSON.stringify(pt)).not.toContain('""');
    expect(JSON.stringify(en)).not.toContain('""');
  });
  it("distinguishes full stack positioning from the actual internship", () => {
    expect(pt.hero.role).toBe("Desenvolvedor Full Stack");
    expect(en.hero.role).toBe("Full Stack Developer");
    expect(pt.experience.cit.role).toContain("Estagiário");
    expect(en.experience.cit.role).toContain("Intern");
    expect(pt.experience.screenNetwork.kind).toBe("Trabalho remunerado");
    expect(pt.education.course).toBe("Análise e Desenvolvimento de Sistemas");
    expect(pt.education.expected).toContain("meados de 2027");
  });
  it("preserves confirmed periods, contact details and the restored resume URL", () => {
    expect(portfolio.periods).toEqual({
      cit: { start: "2026-04" },
      screenNetwork: { start: "2018-01", end: "2019-01" },
      education: { start: "2024-10", expectedCompletionYear: 2027 },
    });
    expect(portfolio.github).toBe("https://github.com/guilhermemoraisz");
    expect(portfolio.linkedin).toBe("https://www.linkedin.com/in/guilhermemoraisz/");
    expect(portfolio.email).toBe("guilhermemorais.dev@gmail.com");
    expect(portfolio.resumeUrl).toBe("/files/resume.pdf");
  });
  it("formats month/year in the selected language without timezone drift", () => {
    expect(formatMonth("2026-04", "en")).toBe("Apr 2026");
    expect(formatMonth("2026-04", "pt")).toContain("abr");
    expect(formatMonth("2018-01", "en")).toBe("Jan 2018");
  });
});
