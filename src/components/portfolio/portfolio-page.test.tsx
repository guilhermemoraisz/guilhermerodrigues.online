import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { en } from "@/content/messages/en";
import { pt } from "@/content/messages/pt";
import { portfolio } from "@/content/portfolio";
import { PortfolioPage } from "./portfolio-page";

vi.mock("next-themes", () => ({ useTheme: () => ({ resolvedTheme: "light", setTheme: vi.fn() }) }));

describe("PortfolioPage", () => {
  it("presents the full stack role, actual internship and education as separate sections", () => {
    render(<PortfolioPage locale="pt" messages={pt} />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("GuilhermeRodrigues");
    expect(screen.getByText(pt.hero.role)).toBeVisible();
    expect(screen.getByText(pt.experience.cit.role)).toBeVisible();
    const education = screen.getByRole("region", { name: /Formação/ });
    expect(within(education).getByText(pt.education.course)).toBeVisible();
    const experience = screen.getByRole("region", { name: /Experiência/ });
    expect(within(experience).queryByText(pt.education.course)).not.toBeInTheDocument();
    expect(within(experience).getByText("Screen Network")).toBeVisible();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });
  it("renders confirmed contacts without a broken resume", () => {
    render(<PortfolioPage locale="en" messages={en} />);
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", portfolio.github);
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", portfolio.linkedin);
    expect(screen.getByRole("link", { name: portfolio.email })).toHaveAttribute("href", `mailto:${portfolio.email}`);
    expect(screen.queryByRole("link", { name: /Résumé/ })).not.toBeInTheDocument();
  });
  it("renders a resume only when one is configured", () => {
    render(<PortfolioPage locale="en" messages={en} data={{ ...portfolio, resumeUrl: "/files/resume.pdf" }} />);
    expect(screen.getByRole("link", { name: /Résumé/ })).toHaveAttribute("href", "/files/resume.pdf");
  });
});
