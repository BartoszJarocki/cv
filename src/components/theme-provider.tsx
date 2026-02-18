"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  isReady: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "cv-theme";

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

function applyTheme(nextTheme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.toggle("dark", nextTheme === "dark");
  root.style.setProperty("color-scheme", nextTheme);
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  } catch {
    return null;
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>("dark");
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveTheme = () => {
      const storedTheme = getStoredTheme();
      return storedTheme ?? "dark";
    };

    const nextTheme = resolveTheme();
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    setIsReady(true);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return;
      const updatedTheme = event.matches ? "dark" : "light";
      setThemeState(updatedTheme);
      applyTheme(updatedTheme);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const persistTheme = React.useCallback((nextTheme: Theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      /* no-op */
    }
    applyTheme(nextTheme);
  }, []);

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      persistTheme(nextTheme);
    },
    [persistTheme]
  );

  const toggleTheme = React.useCallback(() => {
    setThemeState((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      persistTheme(nextTheme);
      return nextTheme;
    });
  }, [persistTheme]);

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme: theme,
      setTheme,
      toggleTheme,
      isReady,
    }),
    [theme, setTheme, toggleTheme, isReady]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
