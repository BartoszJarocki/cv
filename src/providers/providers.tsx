'use client';

import { ThemeProvider } from "@/contexts/theme-context";
import { ReactNode } from "react";

export function Providers({ children } : { children: ReactNode} ) {
  return (
    <ThemeProvider>
    {children}
    </ThemeProvider>
  );
}