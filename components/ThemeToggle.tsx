"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn("inline-flex h-9 w-9 rounded-lg border border-border bg-surface", className)}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-border/50",
        className
      )}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
