"use client";

import Image from "next/image";
import { useState } from "react";
import type { Messages } from "@/lib/i18n";

type CategoryKey = "frontend" | "backend" | "database" | "tools";

interface TechStackItem {
  name: string;
  url: string;
  icon: string;
}

interface TechStackCategory {
  category: CategoryKey;
  items: TechStackItem[];
}

interface CategoryButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

interface HomeTechStackProps {
  sectionTitle: string;
  categoryLabels: Messages["categories"];
}

function CategoryButton({ label, selected, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-shrink-0 whitespace-nowrap transform cursor-pointer border-b-2 px-1 transition-transform hover:scale-105 ${
        selected ? "border-text text-text" : "border-background text-text/50"
      }`}
    >
      {label}
    </button>
  );
}

export function HomeTechStack({ sectionTitle, categoryLabels }: HomeTechStackProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(
    TECH_STACK_DATA[0].category,
  );

  const currentItems = TECH_STACK_DATA.find((s) => s.category === selectedCategory)?.items ?? [];

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-lg">{sectionTitle}</p>

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          {TECH_STACK_DATA.map((stack) => (
            <CategoryButton
              key={stack.category}
              label={categoryLabels[stack.category]}
              selected={selectedCategory === stack.category}
              onClick={() => setSelectedCategory(stack.category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 max-[410px]:grid-cols-1">
          {currentItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform items-center gap-3 rounded-md border border-text/20 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-text hover:text-background hover:shadow-md"
            >
              <Image unoptimized src={item.icon} alt={item.name} width={24} height={24} />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const TECH_STACK_DATA: TechStackCategory[] = [
  {
    category: "frontend",
    items: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        url: "https://react.dev/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        url: "https://reactnative.dev/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Svelte",
        url: "https://svelte.dev/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      },
      {
        name: "TailwindCSS",
        url: "https://tailwindcss.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    category: "backend",
    items: [
      {
        name: "NestJS",
        url: "https://nestjs.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Spring Boot",
        url: "https://spring.io/projects/spring-boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Java",
        url: "https://www.java.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "database",
    items: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        url: "https://www.mysql.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Prisma",
        url: "https://www.prisma.io/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Drizzle",
        url: "https://orm.drizzle.team/",
        icon: "https://images.opencollective.com/drizzle-orm/9405571/logo/256.png",
      },
    ],
  },
  {
    category: "tools",
    items: [
      {
        name: "Git",
        url: "https://git-scm.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Recoil",
        url: "https://recoiljs.org/",
        icon: "https://recoiljs.org/img/logo.svg",
      },
    ],
  },
];
