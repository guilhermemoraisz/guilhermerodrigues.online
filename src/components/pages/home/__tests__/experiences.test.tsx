import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HomeExperiences } from "../experiences";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe("HomeExperiences", () => {
  it("renders the section title", () => {
    render(<HomeExperiences />);
    expect(screen.getByText("Experiences")).toBeInTheDocument();
  });

  it("renders all experience entries", () => {
    render(<HomeExperiences />);
    expect(screen.getByText("CI&T")).toBeInTheDocument();
    expect(screen.getByText("Puc GO")).toBeInTheDocument();
    expect(screen.getByText("Screen Network")).toBeInTheDocument();
  });

  it("renders role and duration for each entry", () => {
    render(<HomeExperiences />);
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Apr 2026 - Present")).toBeInTheDocument();
  });
});
