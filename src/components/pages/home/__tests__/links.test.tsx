import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeLinks } from "../links";

describe("HomeLinks", () => {
  it("renders all three social links", () => {
    render(<HomeLinks />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("all links open in a new tab", () => {
    render(<HomeLinks />);
    const anchors = screen.getAllByRole("link");
    for (const anchor of anchors) {
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
