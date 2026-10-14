import type React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  titleId: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, titleId, className, children }: SectionProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3 print:gap-y-1", className)}
    >
      <h2
        className="text-sm lowercase leading-[1.4] text-muted-foreground print:leading-tight"
        id={titleId}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
