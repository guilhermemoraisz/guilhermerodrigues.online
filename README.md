# Guilherme Rodrigues — Portfolio

Portfólio full stack de página única, com Next.js App Router, React, TypeScript, Tailwind CSS e shadcn/ui. Design editorial monocromático com Geist Mono nos títulos e Geist Sans no texto.

## Desenvolvimento local

Use Node.js 22.13+ (ou Node.js 24 LTS) e npm.

```bash
npm ci
npm run dev
```

Abra `http://127.0.0.1:3000`. A entrada `/` detecta o idioma do navegador. Para revisar cada tradução diretamente, abra `/pt` ou `/en`.

## Validação

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright install chromium
npm run test:e2e
```

Os testes E2E iniciam a versão de produção, por isso execute o build antes. A porta 3000 deve estar livre para evitar que os testes reutilizem outro servidor local. No CI, `CI=1` desabilita a reutilização de servidor e ativa retries. Os relatórios estão em `playwright-report/`, com screenshots de revisão em `test-results/`; ambos são ignorados no Git. Use `npx playwright show-report` para abrir o relatório.

Os testes cobrem negociação de idioma, metadados no HTML do servidor, aliases, preferências de tema, persistência, armazenamento bloqueado, navegação por teclado, movimento reduzido, conteúdo, ausência de overflow e auditoria automatizada WCAG A/AA com axe. Revisões visuais cobrem 390×844 e 1440×1000 nos dois idiomas e temas; há também teste de overflow em 320 px. Auditoria automática não substitui revisão humana de acessibilidade.

## Idiomas

- A entrada `/` interpreta `Accept-Language` no servidor, ordenando preferências por `q` e ignorando entradas inválidas, `q=0` e wildcard.
- Se a preferência concreta principal for `pt`, `pt-BR`, `pt-PT` ou outra variante portuguesa, vai para `/pt`.
- Todos os outros idiomas, ausência de cabeçalho ou ausência de preferência válida vão para `/en`.
- Exemplo: `ja,pt;q=0.5` resulta em inglês, não português.
- Não há seletor, cookie de idioma ou troca tardia de tradução no cliente.
- `/pt` e `/en` são estáveis, independentemente do idioma de quem acessa. Os links antigos `/pt-br` e `/en-us` redirecionam para as novas rotas.
- O redirecionamento usa status 307, `Cache-Control: private, no-store` e `Vary: Accept-Language` para não compartilhar uma decisão de idioma entre visitantes.

## Temas

A primeira visita segue a preferência de tema do sistema. O botão no cabeçalho alterna claro/escuro e lembra a escolha no armazenamento local (`theme`), prevalecendo sobre o sistema. Sem armazenamento disponível, a alternância continua funcionando na sessão. Para voltar a seguir o sistema, remova essa chave nos dados do site do navegador.

## Conteúdo e componentes

- `src/content/portfolio.ts`: fatos compartilhados, contatos, períodos, tecnologias e URL opcional do currículo.
- `src/content/messages/pt.ts` e `en.ts`: conteúdo e rótulos localizados, com contrato em `types.ts`.
- `src/lib/locale.ts`: resolução testável do idioma.
- `src/proxy.ts`: redirecionamentos e aliases.
- `src/app/[locale]/layout.tsx`: fontes, metadados, idioma do documento e provider de tema.
- `src/components/portfolio/`: apresentação, experiência, formação e contato.
- `src/components/ui/button.tsx`: componente gerado pelo CLI shadcn/ui, usando o utilitário local `cn` e Radix Slot.
- `src/app/globals.css`: tokens dos dois temas, tipografia e espaçamentos.

Ao editar conteúdo, mantenha as duas traduções equivalentes. O posicionamento é full stack, mas o cargo de estágio na CI&T deve continuar explícito. Não publique métricas, imagens, código interno ou garantias de segurança sem confirmação.

## Currículo

O currículo da versão anterior do projeto foi restaurado em `public/files/resume.pdf` e está disponível na rota `/files/resume.pdf`.

Para atualizar o currículo:

1. Coloque o arquivo em `public/files/resume.pdf` ou valide uma URL pública existente.
2. Defina `resumeUrl` em `src/content/portfolio.ts` para `/files/resume.pdf` ou a URL validada.
3. Confira o download no navegador e revise os dados pessoais antes da publicação.

O link aparece no topo nos dois idiomas, configurado por `resumeUrl` em `src/content/portfolio.ts`. Não há formulário ou backend de contato.

## Metadados e publicação

Copie `.env.example` para `.env.local` se precisar mudar `SITE_URL`. O domínio padrão é `https://www.guilhermerodrigues.online`; essa configuração alimenta canonical, alternates e Open Graph no build. Confirme o domínio e refaça o build antes de publicar.

```bash
npm run build
npm run start
```

Esta implementação não faz deploy, não altera DNS e não modifica o site publicado.

## Dependências e segurança

As versões reais estão fixadas em `package.json` e `package-lock.json`. TypeScript 6 e ESLint 9 foram mantidos dentro da compatibilidade dos plugins do Next.js; jsdom 29 é compatível com o Node.js disponível.

Na validação inicial, `npm audit --omit=dev` não apontou vulnerabilidades de produção. O audit completo identificou um alerta de stack-exhaustion em `braces` (GHSA-vfj7-8cjw-p6xm), propagado pela cadeia `micromatch` → `fast-glob` → plugin ESLint do Next.js (cinco entradas de desenvolvimento). Não foi aplicado `npm audit fix --force`, pois a sugestão regride a configuração para outra versão major do Next. Revisar atualizações compatíveis quando houver correção; não executar lint contra padrões de glob de origem não confiável.
