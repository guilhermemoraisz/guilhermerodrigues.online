# Guilherme Rodrigues - Portfolio

My personal portfolio website showcasing my work, skills, and experience as a Full Stack Developer.

## About

Full Stack Developer based in Goias, Brazil. Specialized in **React** and **TypeScript** on the front-end, and **NestJS/Spring Boot** on the back-end. Focused on building modern, scalable applications with clean code.

## Tech Stack

### Front-End
- TypeScript
- React / React Native
- Next.js
- Svelte
- TailwindCSS

### Back-End
- NestJS
- Spring Boot
- Java

### Database
- PostgreSQL
- MySQL
- MongoDB
- Prisma
- Drizzle

### Tools
- Git
- Recoil

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding content

- **New experience:** add an entry to `EXPERIENCES_DATA` in `src/components/pages/home/experiences.tsx`
- **New technology:** add an entry to the relevant category in `TECH_STACK_DATA` in `src/components/pages/home/tech-stack.tsx`

## Built With

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Theme:** next-themes (dark/light mode)
- **Linting:** Biome

## Project Structure

```
src/
├── app/
│   ├── (pages)/        # Route groups
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
└── providers/          # Context providers
```

## License

MIT
