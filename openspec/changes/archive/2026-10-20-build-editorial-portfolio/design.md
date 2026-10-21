## Context

No início da mudança, o workspace continha apenas configuração de ferramentas e OpenSpec, sem aplicação ou código-fonte do site atual para migrar. O site publicado foi inspecionado via Playwright em desktop e mobile e serve apenas como referência. O usuário deseja apresentar sua trajetória full stack e prefere página única, identidade editorial minimalista, ausência de foto, títulos com aparência de código, dois temas e localização automática sem seletor. Na revisão final, esclareceu que não procura vaga atualmente e que o cliente deve permanecer anônimo.

Conteúdo confirmado:
- Nome: Guilherme Rodrigues; posicionamento no topo: Desenvolvedor Full Stack.
- CI&T: estágio de Engenharia de Software desde abril de 2026, incluindo bootcamp e posterior atuação em time que atende um cliente do setor automotivo; na revisão final, o usuário solicitou anonimização do cliente.
- Bootcamp: sistema de feedbacks construído em equipe com React, Spring, Nginx e bibliotecas auxiliares; atuação em frontend, backend, infraestrutura, decisões de negócio, dailies, refinamentos e demos.
- Exemplo de contribuição: substituição do e-mail explícito na URL por token processado no backend. O mecanismo criptográfico não foi confirmado; não afirmar algoritmo, invulnerabilidade, JWT ou ausência total de exposição.
- Cliente do setor automotivo: Angular, GCP e contato com Fossa, 42Crunch e SonarQube; migração de telas legadas para aplicação em produção, adequação a padrões de código e estilos, validação e compromisso de não reduzir cobertura. Não alegar resultados quantitativos nem especialização em segurança.
- Screen Network: trabalho remunerado, janeiro de 2018 a janeiro de 2019; bot JavaScript/discord.js para comunidade de Discord/Minecraft, música, moderação, XP, baús e recompensas/economia virtual. Firebase, SQLite, MySQL e PostgreSQL foram mencionados, sem arquitetura detalhada confirmada.
- PUC Goiás: Análise e Desenvolvimento de Sistemas, outubro de 2024 até conclusão prevista em meados de 2027.
- Contatos: `https://github.com/guilhermemoraisz`, `https://www.linkedin.com/in/guilhermemoraisz/`, `guilhermemorais.dev@gmail.com`.

## Goals / Non-Goals

**Goals:**
- Comunicar contribuição profissional real com leitura rápida e linguagem compatível com estágio.
- Criar aplicação responsiva e acessível em Next.js App Router, TypeScript, Tailwind e shadcn/ui.
- Manter paridade de conteúdo português/inglês e aparência cuidadosamente trabalhada nos dois temas.
- Produzir testes objetivos de conteúdo, idioma, tema e navegação.

**Non-Goals:**
- Foto, galeria de projetos fictícios, páginas de cases, blog, CMS, autenticação, banco e formulário de contato.
- Seletor de idioma, terminais simulados, animação de digitação, métricas inventadas ou barras de proficiência.
- Publicação, alteração de DNS, substituição do site no ar ou criação de commits nesta mudança.

## Decisions

### 1. Base da aplicação e limites cliente/servidor

Usar versões estáveis compatíveis de Next.js App Router, React, TypeScript e Tailwind no momento da implementação; registrar versões reais no lockfile. Usar npm e manter um único lockfile. Os arquivos de configuração serão `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs` e `components.json`.

`src/app/[locale]/page.tsx` renderizará a página como Server Component; `src/app/[locale]/layout.tsx` definirá `lang`, fontes e providers. Apenas o controle de tema e seus providers precisam de fronteira cliente. Preferir conteúdo tipado local a CMS porque as atualizações são esporádicas e não justificam serviço externo. Alternativa rejeitada: SPA totalmente cliente, por exigir JavaScript para conteúdo estático e dificultar metadados.

### 2. Estrutura editorial e componentes

`src/components/portfolio/portfolio-page.tsx` comporá `hero.tsx`, `experience-section.tsx`, `education-section.tsx` e `contact-section.tsx`. A experiência da CI&T terá subseções para atuação atual no cliente do setor automotivo e bootcamp, sem duplicar vínculo empregatício. Screen Network será outra experiência profissional; formação terá seção própria. Textos, metadados e chaves de dados usarão a descrição genérica ou `automotiveClient`, sem identificar o cliente.

O topo mostrará nome, título full stack, resumo da CI&T e atuação no setor automotivo e links principais. Experiências serão abertas, com poucos parágrafos ou bullets concretos; não ocultar as informações essenciais em accordions ou abas. Tecnologias aparecerão contextualizadas nas experiências, não como grade dominante. Finalizar com contato e links, convidando à troca de ideias e experiências sem afirmar busca por vaga.

`src/content/portfolio.ts` armazenará fatos compartilhados, URLs, períodos estruturados e configuração opcional do currículo; `src/content/messages/pt.ts` e `en.ts` terão textos e rótulos com o mesmo tipo, incluindo `hero.role`, `experience.cit`, `experience.screenNetwork`, `education`, `contact`, `theme` e `metadata`. Datas terão formatação por idioma; conclusão será uma previsão, não data exata inventada.

Alternativa rejeitada: home com links para cases separados, pois o volume atual de conteúdo favorece leitura única.

### 3. Identidade visual e shadcn/ui

Carregar Geist Mono e Geist Sans com `next/font`; títulos, rótulos editoriais e datas em mono e texto corrido em sans. Definir tokens semânticos em `src/app/globals.css` para fundo, texto, muted, border, foco e superfícies nos dois temas, exclusivamente neutros. shadcn/ui fornecerá `src/components/ui/button.tsx` e, apenas se necessário, tooltip; não incluir componentes sem uso nem usar cards por padrão.

Usar coluna legível de aproximadamente 760–860 px, margens fluidas, escala tipográfica clara, divisórias sutis e espaçamentos consistentes. No mobile, empilhar datas e conteúdo sem overflow. Evitar cinzas de contraste insuficiente; alvo WCAG AA para texto e foco visível. Interações curtas de hover/foco, sem animações de entrada obrigatórias; respeitar `prefers-reduced-motion`.

Alternativa rejeitada: paleta colorida, efeitos de vidro ou aparência de dashboard, pois não correspondem à direção escolhida.

### 4. Idioma determinado pelo navegador

Adotar rotas `/pt` e `/en` como páginas localizadas equivalentes da mesma página única, sem seletor e sem cookie de preferência linguística. `src/lib/locale.ts` exportará `resolveLocale(acceptLanguage)` e os tipos `Locale` e `SUPPORTED_LOCALES`.

Na entrada `/`, `src/proxy.ts` (ou convenção equivalente da versão estável adotada) lerá `Accept-Language` e redirecionará temporariamente. Ordenar faixas válidas por qualidade `q`, desconsiderar `q=0` e escolher a primeira preferência concreta válida. Apenas idioma primário `pt`, inclusive `pt-BR` e `pt-PT`, retorna `pt`; qualquer outro, wildcard, cabeçalho ausente ou sem faixa válida retorna `en`. Assim, `ja,pt;q=0.5` resulta em inglês; `pt-BR,en;q=0.8` resulta em português. Não escolher português apenas porque aparece como preferência secundária de um navegador configurado principalmente em outro idioma.

O redirecionamento deve variar por `Accept-Language` e não ser armazenado como decisão global de CDN. Rotas explícitas `/pt` e `/en` não serão redirecionadas, permitindo URLs estáveis e indexáveis; `/pt-br` e `/en-us` do site antigo serão aliases temporários às respectivas rotas novas para preservar links existentes. Demais locales inválidos retornarão 404. Excluir `_next`, arquivos públicos e rotas técnicas do matcher.

Metadados localizados, `html lang`, canonical e alternates serão produzidos no servidor; usar `SITE_URL` configurável, com domínio público validado antes da publicação. Alternativa rejeitada: decidir idioma com `navigator.language` após renderizar, devido a flash de conteúdo e metadados inconsistentes.

### 5. Temas

Usar `next-themes` com classe em `html`, `defaultTheme="system"` e persistência da seleção manual. `src/components/theme-provider.tsx` e `src/components/theme-toggle.tsx` encapsularão integração; botão shadcn terá nome acessível localizado que descreve o tema de destino. Não usar somente tooltip ou ícone como nome.

Sem escolha salva, seguir sistema; após clique, gravar preferência clara/escura e preservá-la entre visitas. Tratar montagem/hidratação mantendo espaço estável para o controle e sem representar tema incorreto antes da resolução. Falha no armazenamento não deve impedir alternância na sessão. Não adicionar opção visual de três estados sem solicitação.

### 6. Contatos e currículo

Links de GitHub/LinkedIn usarão as URLs confirmadas; e-mail usará `mailto:guilhermemorais.dev@gmail.com`. Não adicionar formulário, API ou serviço de envio. Links terão nomes claros; qualquer nova aba usará `rel="noopener noreferrer"`.

O PDF não existe no workspace. Reservar `resumeUrl` opcional em `src/content/portfolio.ts`: renderizar o link de currículo somente com URL/arquivo validado. Preferir `public/files/resume.pdf` quando o usuário fornecer o arquivo; não baixar/copiar silenciosamente o PDF atual e não fabricar documento. Disponibilidade do currículo é checklist de publicação, não motivo para quebrar a aplicação.

### 7. Estratégia de testes

Vitest e Testing Library: `src/lib/locale.test.ts` para matriz de cabeçalhos; `src/content/portfolio.test.ts` para paridade de traduções, períodos e contatos; `src/components/theme-toggle.test.tsx` para rótulo, foco e alternância; `src/components/portfolio/portfolio-page.test.tsx` para títulos, seção de formação e ausência de currículo inválido.

Playwright: `tests/e2e/portfolio.spec.ts` para conteúdo, contatos e mobile sem overflow; `tests/e2e/localization.spec.ts` para redirecionamentos, aliases, `lang` e metadados; `tests/e2e/theme.spec.ts` para sistema, persistência e dois temas. Screenshots de revisão em 390×844 e 1440×1000, nos dois idiomas e temas; não adicionar baselines artificiais sem revisão.

Scripts previstos: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e` e `npm run build`. Smoke test manual por teclado, com movimento reduzido e em viewport estreito de 320 px.

## Risks / Trade-offs

- [Relato profissional sensível] → Manter cliente anônimo em conteúdo, metadados e chaves de dados; não publicar telas, código, dados internos ou nomes de sistemas sem validação adicional.
- [Detalhes de segurança incertos] → Descrever a contribuição do token sem alegar criptografia confirmada ou proteção absoluta.
- [Sem seletor de idioma] → Honrar escolha do usuário, detectar no servidor e manter rotas estáveis; usuários não terão troca manual pela interface.
- [Currículo indisponível] → Link condicional; solicitar e validar PDF antes de publicar.
- [Paleta neutra parecer genérica] → Trabalhar hierarquia, ritmo, tipografia e conteúdo específico, não adicionar ornamentos.
- [Versão de Next definir convenção de proxy] → Confirmar versão instalada e escolher somente a convenção suportada; não manter proxy e middleware duplicados.
- [Cobertura e impacto sem métricas] → Apresentar responsabilidades e práticas de validação, não percentuais ou resultados não demonstrados.

## Migration Plan

Criar e validar a nova aplicação localmente sem tocar no site atual. Antes de qualquer publicação futura, confirmar texto final, metadados, currículo, domínio e destino dos links. Publicação e rollback são operações futuras separadas; o site atual permanece intacto nesta mudança.

## Open Questions

- Fornecimento/validação do currículo para ativar o link antes de publicar.
- Revisão final das descrições e eventuais detalhes profissionais não públicos pelo usuário.
