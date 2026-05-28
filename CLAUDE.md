# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run lint       # Biome check (lint + formato)
npm run format     # corrige formatação automaticamente
npm run test       # roda todos os testes (Vitest)
npx vitest run src/components/pages/home/__tests__/tech-stack.test.tsx  # teste único
```

## Arquitetura

### Roteamento

O Next.js App Router usa dois route groups aninhados:

- `src/app/layout.tsx` — root layout: aplica fonte Inter, ThemeProvider e SEO metadata global
- `src/app/(pages)/layout.tsx` — limita a largura (`max-w-3xl`) e aplica padding a todas as páginas
- `src/app/(pages)/(home)/page.tsx` — única página existente (homepage)
- `src/app/not-found.tsx` — redireciona para `/` intencionalmente (escolha de design)

### Tema

O tema dark/light usa `next-themes` com estratégia de classe (`attribute="class"`). As cores são dois tokens CSS definidos em `globals.css` — `--color-text` e `--color-background` — invertidos pela classe `.dark`. Use sempre `text-text` e `bg-background` no Tailwind; nunca use `dark:` para essas propriedades (redundante).

### Componentes da homepage

Cada seção da homepage é um componente em `src/components/pages/home/`. Os dados de cada seção ficam como constante de módulo em UPPER_SNAKE_CASE no próprio arquivo do componente (ex: `EXPERIENCES_DATA`, `TECH_STACK_DATA`, `SOCIAL_LINKS`), abaixo da função do componente.

### Testes

Testes ficam em `__tests__/` junto ao componente. Componentes que usam `next/image` precisam de mock: `vi.mock("next/image", () => ({ default: ({ alt }) => <img alt={alt} /> }))`. O setup global está em `src/test/setup.ts`.

### Linting

O Biome exige classes Tailwind em ordem específica (`useSortedClasses`). Rode `npm run format` antes de commitar para corrigir automaticamente. Line width: 100 caracteres, aspas duplas, semicolons obrigatórios.
