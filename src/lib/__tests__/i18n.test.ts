import { describe, expect, it } from "vitest";
import { detectLocale, getMessages } from "../i18n";

describe("detectLocale", () => {
  it("detects pt-BR", () => {
    expect(detectLocale("pt-BR,pt;q=0.9,en;q=0.8")).toBe("pt-br");
  });

  it("detects generic pt", () => {
    expect(detectLocale("pt")).toBe("pt-br");
  });

  it("detects pt-PT as pt-br", () => {
    expect(detectLocale("pt-PT,pt;q=0.9")).toBe("pt-br");
  });

  it("returns en-us for en-US", () => {
    expect(detectLocale("en-US,en;q=0.9")).toBe("en-us");
  });

  it("returns en-us for Spanish", () => {
    expect(detectLocale("es-ES,es;q=0.9")).toBe("en-us");
  });

  it("returns en-us for empty string", () => {
    expect(detectLocale("")).toBe("en-us");
  });
});

describe("getMessages", () => {
  it("returns English hero title for en-us", () => {
    expect(getMessages("en-us").hero.title).toBe("Hey, I'm Guilherme Rodrigues");
  });

  it("returns Portuguese hero title for pt-br", () => {
    expect(getMessages("pt-br").hero.title).toBe("Oi, eu sou o Guilherme Rodrigues");
  });

  it("returns Currículo for pt-br resume label", () => {
    expect(getMessages("pt-br").links.resume).toBe("Currículo");
  });

  it("returns Resume for en-us resume label", () => {
    expect(getMessages("en-us").links.resume).toBe("Resume");
  });
});
