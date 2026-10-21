import type { Messages } from "./types";

export const pt: Messages = {
  navigation: { skip: "Pular para o conteúdo", experience: "Experiência", education: "Formação", contact: "Contato", home: "Início" },
  hero: {
    role: "Desenvolvedor Full Stack",
    intro: "Entre interfaces, APIs e o que conecta tudo isso.",
    summary: "Atualmente na CI&T, contribuindo em um projeto para um cliente do setor automotivo. Gosto de entender o problema, construir em equipe e cuidar dos detalhes que fazem o software funcionar bem.",
    resume: "Currículo",
  },
  experience: {
    title: "Experiência", present: "Atual",
    cit: {
      role: "Estagiário de Engenharia de Software",
      automotiveClient: {
        title: "Evoluindo uma aplicação no setor automotivo",
        paragraphs: [
          "Contribuo na migração de telas de um sistema legado para uma aplicação em produção, adaptando interfaces aos padrões de código e estilos do projeto atual.",
          "Trabalho com Angular e GCP, validando as telas implementadas e seus testes para preservar a integridade da aplicação e não reduzir a cobertura existente. O fluxo também envolve ferramentas como Fossa, 42Crunch e SonarQube.",
        ],
      },
      bootcamp: {
        title: "Da ideia ao sistema de feedbacks",
        paragraphs: [
          "No bootcamp de entrada da CI&T, construímos em equipe um sistema de coleta de feedbacks inspirado em um fluxo existente na empresa. Atuei no frontend com React, no backend com Spring e na infraestrutura com Nginx.",
          "Participei de decisões de negócio, refinamentos, dailies e demos. Entre as contribuições, ajudei a revisar o acesso aos formulários: o e-mail explícito na URL deu lugar a um token processado no backend para identificar o usuário e carregar os dados necessários.",
        ],
      },
    },
    screenNetwork: {
      role: "Desenvolvedor JavaScript", kind: "Trabalho remunerado",
      paragraphs: [
        "Desenvolvi um bot para uma comunidade de Discord e Minecraft, com reprodução de música, comandos de moderação e automações para o dia a dia do servidor.",
        "Também construí mecânicas de RPG e participação: XP por mensagem, baús aleatórios e uma economia de recompensas conectada a itens no Minecraft. Foi uma experiência criando software para as necessidades de uma comunidade real.",
      ],
    },
  },
  education: { title: "Formação", course: "Análise e Desenvolvimento de Sistemas", institution: "PUC Goiás", expected: "Conclusão prevista para meados de 2027" },
  contact: {
    title: "Contato", heading: "Vamos conversar?",
    description: "Para trocar ideias sobre tecnologia, compartilhar experiências ou simplesmente conversar, é só me escrever.",
    email: "Enviar e-mail", backToTop: "Voltar ao início",
  },
  theme: { light: "Ativar tema claro", dark: "Ativar tema escuro", loading: "Carregando preferência de tema" },
  metadata: {
    title: "Guilherme Rodrigues — Desenvolvedor Full Stack",
    description: "Desenvolvedor full stack e estagiário de Engenharia de Software na CI&T, contribuindo em um projeto para um cliente do setor automotivo. Experiência, formação e contato.",
  },
};
