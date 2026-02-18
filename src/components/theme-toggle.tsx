"use client";

import { Moon, Sun } from "lucide-react";
import type { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps extends HTMLAttributes<HTMLButtonElement> {}

export function ThemeToggle({
  className,
  ...props
}: ThemeToggleProps): JSX.Element | null {
  const { resolvedTheme, toggleTheme, isReady } = useTheme();

  if (!isReady) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        className={cn(
          "h-8 w-8 rounded-full border border-border opacity-70 sm:h-9 sm:w-9",
          className
        )}
        disabled={true}
        aria-label="Loading theme toggle"
        {...props}
      >
        <Sun className="size-4" />
        <span className="sr-only">Loading...</span>
      </Button>
    );
  }

  const nextMode = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "h-8 w-8 rounded-full border border-border sm:h-9 sm:w-9",
        className
      )}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} mode`}
      aria-pressed={resolvedTheme === "dark"}
      {...props}
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
