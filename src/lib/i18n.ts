export type Locale = "en-us" | "pt-br";

export const SUPPORTED_LOCALES: Locale[] = ["en-us", "pt-br"];
export const DEFAULT_LOCALE: Locale = "en-us";

export interface Messages {
  hero: { title: string; subtitle: string; bio: string };
  links: { resume: string };
  sections: { experiences: string; techStack: string };
  categories: { frontend: string; backend: string; database: string; tools: string };
  seo: { title: string; description: string };
}

const MESSAGES: Record<Locale, Messages> = {
  "en-us": {
    hero: {
      title: "Hey, I'm Guilherme Rodrigues",
      subtitle: "A Web Developer based in Goias, Brazil.",
      bio: "Full Stack Developer specialized in React and TypeScript on the front-end, and NestJS/Spring Boot on the back-end. Focused on building modern, scalable applications with clean code.",
    },
    links: { resume: "Resume" },
    sections: { experiences: "Experiences", techStack: "Tech Stack" },
    categories: { frontend: "Front-End", backend: "Back-End", database: "Database", tools: "Tools" },
    seo: {
      title: "Guilherme Rodrigues - Web Developer",
      description:
        "Full Stack Developer specialized in React and TypeScript on the front-end, and NestJS/Spring Boot on the back-end. Focused on building modern, scalable applications with clean code.",
    },
  },
  "pt-br": {
    hero: {
      title: "Oi, eu sou o Guilherme Rodrigues",
      subtitle: "Desenvolvedor Web de Goiás, Brasil.",
      bio: "Desenvolvedor Full Stack especializado em React e TypeScript no front-end, e NestJS/Spring Boot no back-end. Focado em construir aplicações modernas e escaláveis com código limpo.",
    },
    links: { resume: "Currículo" },
    sections: { experiences: "Experiências", techStack: "Stack de Tecnologias" },
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      database: "Banco de Dados",
      tools: "Ferramentas",
    },
    seo: {
      title: "Guilherme Rodrigues - Desenvolvedor Web",
      description:
        "Desenvolvedor Full Stack especializado em React e TypeScript no front-end, e NestJS/Spring Boot no back-end. Focado em construir aplicações modernas e escaláveis com código limpo.",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}

export function detectLocale(acceptLanguage: string): Locale {
  return acceptLanguage.toLowerCase().includes("pt") ? "pt-br" : DEFAULT_LOCALE;
}
