"use client";

import type React from "react";
import { ErrorBoundary } from "./error-boundary";

interface Props {
  children: React.ReactNode;
  sectionName: string;
}

export function SectionErrorBoundary({ children, sectionName }: Props) {
  return (
    <ErrorBoundary
      fallback={
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">
            Failed to load {sectionName} section. Some information may be
            missing.
          </p>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
