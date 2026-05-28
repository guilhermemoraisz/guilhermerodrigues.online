import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { HomeTechStack } from "../tech-stack";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe("HomeTechStack", () => {
  it("renders all category buttons", () => {
    render(<HomeTechStack />);
    expect(screen.getByText("Front-End")).toBeInTheDocument();
    expect(screen.getByText("Back-End")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
  });

  it("shows Front-End items by default", () => {
    render(<HomeTechStack />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("switches items when clicking a different category", async () => {
    render(<HomeTechStack />);
    await userEvent.click(screen.getByText("Back-End"));
    expect(screen.getByText("NestJS")).toBeInTheDocument();
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });

  it("all tech items link to external URLs in a new tab", () => {
    render(<HomeTechStack />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
