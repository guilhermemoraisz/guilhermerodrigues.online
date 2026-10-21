import type { Messages } from "./types";

export const en: Messages = {
  navigation: { skip: "Skip to content", experience: "Experience", education: "Education", contact: "Contact", home: "Home" },
  hero: {
    role: "Full Stack Developer",
    intro: "Interfaces, APIs, and everything in between.",
    summary: "Currently at CI&T, contributing to a project for a client in the automotive industry. I enjoy understanding the problem, building with a team, and looking after the details that make software work well.",
    resume: "Resume",
  },
  experience: {
    title: "Experience", present: "Present",
    cit: {
      role: "Software Engineering Intern",
      automotiveClient: {
        title: "Evolving an application in the automotive industry",
        paragraphs: [
          "I contribute to migrating legacy screens into a production application, adapting interfaces to the current project's code and styling conventions.",
          "I work with Angular and GCP, validating the screens I implement and their tests to preserve application integrity and maintain existing test coverage. The workflow also involves tools such as Fossa, 42Crunch, and SonarQube.",
        ],
      },
      bootcamp: {
        title: "From an idea to a feedback system",
        paragraphs: [
          "During CI&T's onboarding bootcamp, our team built a feedback collection system inspired by an existing company workflow. I worked across the React frontend, Spring backend, and Nginx infrastructure.",
          "I took part in business decisions, refinements, daily meetings, and demos. One contribution was helping review access to feedback forms: an explicit email address in the URL was replaced with a token processed by the backend to identify the user and load the required data.",
        ],
      },
    },
    screenNetwork: {
      role: "JavaScript Developer", kind: "Paid work",
      paragraphs: [
        "I developed a bot for a Discord and Minecraft community, with music playback, moderation commands, and automation for day-to-day server activities.",
        "I also built RPG and participation mechanics: message-based XP, random chests, and a reward economy connected to Minecraft items. It was hands-on experience building software around a real community's needs.",
      ],
    },
  },
  education: { title: "Education", course: "Systems Analysis and Development", institution: "PUC Goiás", expected: "Expected graduation in mid-2027" },
  contact: {
    title: "Contact", heading: "Let's talk.",
    description: "To exchange ideas about technology, share experiences, or simply say hello, feel free to get in touch.",
    email: "Send an email", backToTop: "Back to top",
  },
  theme: { light: "Switch to light theme", dark: "Switch to dark theme", loading: "Loading theme preference" },
  metadata: {
    title: "Guilherme Rodrigues — Full Stack Developer",
    description: "Full stack developer and Software Engineering Intern at CI&T, contributing to a project for a client in the automotive industry. Experience, education, and contact.",
  },
};
