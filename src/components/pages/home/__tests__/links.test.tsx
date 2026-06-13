import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeLinks } from "../links";

describe("HomeLinks", () => {
  it("renders GitHub and LinkedIn links", () => {
    render(<HomeLinks resumeLabel="Resume" />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders resume label in English", () => {
    render(<HomeLinks resumeLabel="Resume" />);
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("renders resume label in Portuguese", () => {
    render(<HomeLinks resumeLabel="Currículo" />);
    expect(screen.getByText("Currículo")).toBeInTheDocument();
  });

  it("all links open in a new tab", () => {
    render(<HomeLinks resumeLabel="Resume" />);
    const anchors = screen.getAllByRole("link");
    for (const anchor of anchors) {
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
