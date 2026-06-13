import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { HomeTechStack } from "../tech-stack";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

const EN_LABELS = {
  frontend: "Front-End",
  backend: "Back-End",
  database: "Database",
  tools: "Tools",
};

const PT_LABELS = {
  frontend: "Front-End",
  backend: "Back-End",
  database: "Banco de Dados",
  tools: "Ferramentas",
};

describe("HomeTechStack", () => {
  it("renders section title in English", () => {
    render(<HomeTechStack sectionTitle="Tech Stack" categoryLabels={EN_LABELS} />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders section title in Portuguese", () => {
    render(<HomeTechStack sectionTitle="Stack de Tecnologias" categoryLabels={PT_LABELS} />);
    expect(screen.getByText("Stack de Tecnologias")).toBeInTheDocument();
  });

  it("renders all category buttons with English labels", () => {
    render(<HomeTechStack sectionTitle="Tech Stack" categoryLabels={EN_LABELS} />);
    expect(screen.getByText("Front-End")).toBeInTheDocument();
    expect(screen.getByText("Back-End")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
  });

  it("renders category buttons with Portuguese labels", () => {
    render(<HomeTechStack sectionTitle="Stack de Tecnologias" categoryLabels={PT_LABELS} />);
    expect(screen.getByText("Banco de Dados")).toBeInTheDocument();
    expect(screen.getByText("Ferramentas")).toBeInTheDocument();
  });

  it("shows Front-End items by default", () => {
    render(<HomeTechStack sectionTitle="Tech Stack" categoryLabels={EN_LABELS} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("switches items when clicking a different category", async () => {
    render(<HomeTechStack sectionTitle="Tech Stack" categoryLabels={EN_LABELS} />);
    await userEvent.click(screen.getByText("Back-End"));
    expect(screen.getByText("NestJS")).toBeInTheDocument();
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });

  it("all tech items link to external URLs in a new tab", () => {
    render(<HomeTechStack sectionTitle="Tech Stack" categoryLabels={EN_LABELS} />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
