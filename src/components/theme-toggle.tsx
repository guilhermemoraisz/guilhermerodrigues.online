"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import type { Messages } from "@/content/messages/types";

const subscribe = () => () => {};

export function ThemeToggle({ labels }: { labels: Messages["theme"] }) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const label = mounted ? (isDark ? labels.light : labels.dark) : labels.loading;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      aria-label={label}
      title={label}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full text-muted-foreground hover:text-foreground"
    >
      {mounted ? (isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />) : <span className="size-4" />}
    </Button>
  );
}
