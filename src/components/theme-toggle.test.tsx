import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { pt } from "@/content/messages/pt";
import { en } from "@/content/messages/en";
import { ThemeToggle } from "./theme-toggle";

vi.mock("next-themes", () => ({ useTheme: vi.fn() }));
const setTheme = vi.fn();

describe("ThemeToggle", () => {
  beforeEach(() => {
    setTheme.mockReset();
    vi.mocked(useTheme).mockReturnValue({ resolvedTheme: "light", setTheme, themes: ["light", "dark"] });
  });
  it("labels the destination in Portuguese and switches from light to dark", () => {
    render(<ThemeToggle labels={pt.theme} />);
    fireEvent.click(screen.getByRole("button", { name: pt.theme.dark }));
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
  it("labels the destination in English and switches from dark to light", () => {
    vi.mocked(useTheme).mockReturnValue({ resolvedTheme: "dark", setTheme, themes: ["light", "dark"] });
    render(<ThemeToggle labels={en.theme} />);
    fireEvent.click(screen.getByRole("button", { name: en.theme.light }));
    expect(setTheme).toHaveBeenCalledWith("light");
  });
  it("is keyboard focusable and supports Enter and Space", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle labels={pt.theme} />);
    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(setTheme).toHaveBeenCalledTimes(2);
    expect(screen.getByRole("button")).toHaveFocus();
  });
});
