## 1. Base da aplicação

- [x] 1.1 Criar aplicação Next.js App Router com TypeScript e npm na raiz sem sobrescrever `.opencode` ou `openspec`; registrar versões compatíveis e lockfile em `package.json` e `package-lock.json`.
- [x] 1.2 Configurar `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs` e `src/app/globals.css` para Next.js, Tailwind e imports `@/*`.
- [x] 1.3 Inicializar shadcn/ui em `components.json`, adicionar `src/components/ui/button.tsx` e utilitário `src/lib/utils.ts`, sem gerar componentes não utilizados.
- [x] 1.4 Configurar `vitest.config.ts`, setup de Testing Library, `playwright.config.ts` e scripts `lint`, `typecheck`, `test`, `test:e2e` e `build` em `package.json`.

## 2. Conteúdo tipado e traduções

- [x] 2.1 Criar `src/content/portfolio.ts` com nome, contatos confirmados, períodos CI&T/Screen Network/PUC Goiás e `resumeUrl` opcional; não inventar PDF ou data exata de conclusão.
- [x] 2.2 Criar tipo compartilhado de mensagens e `src/content/messages/pt.ts` e `src/content/messages/en.ts` com `hero.role`, experiências, formação, contato, tema e metadados; traduzir conteúdo equivalente e nomes acessíveis.
- [x] 2.3 Redigir CI&T como estágio desde abril de 2026 com subseções cliente do setor automotivo e bootcamp; incluir tecnologias e contribuições confirmadas, sem identificar o cliente, inventar métricas, garantias criptográficas ou especialização de segurança não demonstrada.
- [x] 2.4 Redigir Screen Network como desenvolvimento remunerado JavaScript/discord.js de janeiro de 2018 a janeiro de 2019 e PUC Goiás como formação separada com conclusão prevista para meados de 2027.
- [x] 2.5 Adicionar `src/content/portfolio.test.ts` validando paridade das mensagens, períodos, título full stack, estágio explícito, formação e destinos de contato.

## 3. Localização e rotas

- [x] 3.1 Implementar `resolveLocale`, `Locale` e `SUPPORTED_LOCALES` em `src/lib/locale.ts`: considerar qualidade do `Accept-Language`, ignorar `q=0`, selecionar português apenas para preferência principal `pt` e inglês nos demais casos.
- [x] 3.2 Adicionar `src/lib/locale.test.ts` cobrindo `pt`, `pt-BR`, `pt-PT`, inglês, japonês, grego, `ja,pt;q=0.5`, qualidades fora de ordem, wildcard, cabeçalho ausente e entradas inválidas.
- [x] 3.3 Criar `src/proxy.ts` ou equivalente da versão instalada para redirecionamento temporário de `/`, aliases `/pt-br` e `/en-us`, exclusão de ativos e proteção contra cache compartilhado incorreto; preservar rotas localizadas explícitas.
- [x] 3.4 Criar `src/app/[locale]/layout.tsx` e `src/app/[locale]/page.tsx` com validação de `pt`/`en`, 404 para locale inválido e renderização no servidor; definir `html lang`, fontes, metadata localizada, canonical e alternates com `SITE_URL` configurável.
- [x] 3.5 Adicionar `tests/e2e/localization.spec.ts` cobrindo negociação, cabeçalhos de cache, aliases, idioma explícito, ativos sem redirecionamento, 404 e metadados sem depender de troca cliente.

## 4. Design editorial e temas

- [x] 4.1 Definir em `src/app/globals.css` tokens neutros claros/escuros, Geist Mono nos títulos, Geist Sans no corpo, coluna legível, espaçamento fluido e foco visível; respeitar `prefers-reduced-motion`.
- [x] 4.2 Adicionar `src/components/theme-provider.tsx` usando `next-themes` com preferência inicial do sistema e classe em `html`.
- [x] 4.3 Implementar `src/components/theme-toggle.tsx` com Button shadcn, rótulo localizado de destino, persistência manual, fallback para armazenamento indisponível e montagem sem erro de hidratação ou deslocamento.
- [x] 4.4 Adicionar `src/components/theme-toggle.test.tsx` para nome acessível, tema de destino, foco e interação; adicionar `tests/e2e/theme.spec.ts` para sistema claro/escuro, recarga com escolha salva e armazenamento bloqueado.

## 5. Página única e contato

- [x] 5.1 Criar `src/components/portfolio/hero.tsx` com Guilherme Rodrigues, título full stack, resumo CI&T e cliente do setor automotivo e links principais; sem foto, seletor de idioma ou terminal simulado.
- [x] 5.2 Criar `src/components/portfolio/experience-section.tsx` com experiências abertas CI&T e Screen Network, contribuições contextualizadas e datas localizadas; sem duplicar bootcamp como emprego separado.
- [x] 5.3 Criar `src/components/portfolio/education-section.tsx` e `src/components/portfolio/contact-section.tsx` com ADS/PUC Goiás, e-mail `mailto:`, GitHub, LinkedIn e currículo condicional somente quando validado; descrição de contato para troca de ideias, sem busca atual por vaga.
- [x] 5.4 Compor `src/components/portfolio/portfolio-page.tsx` e integrar à rota localizada com landmarks, um `h1`, ordem coerente de títulos e controle de tema discreto.
- [x] 5.5 Adicionar `src/components/portfolio/portfolio-page.test.tsx` verificando título, estágio, formação separada, contatos e presença/ausência condicional de currículo; garantir ausência de formulário e seletor de idioma.
- [x] 5.6 Adicionar `tests/e2e/portfolio.spec.ts` verificando conteúdo, destinos dos links, teclado e ausência de overflow em 320 px e 390 px.

## 6. Validação integrada e entrega local

- [x] 6.1 Executar `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e` e `npm run build`; corrigir falhas sem reduzir as asserções para acomodar defeitos.
- [x] 6.2 Revisar screenshots em 390×844 e 1440×1000 para português/inglês e claro/escuro; conferir hierarquia, contraste WCAG AA, quebras de linha, foco, hidratação e movimento reduzido.
- [x] 6.3 Documentar em `README.md` instalação, scripts, regra de idioma, comportamento de tema, edição de conteúdo, `SITE_URL` e ativação de currículo; registrar pendência do PDF caso não fornecido.
- [x] 6.4 Conferir que conteúdo não expõe informações internas, não exagera resultados, não contém links locais quebrados e que nenhum deploy ou alteração no site publicado foi realizado.
