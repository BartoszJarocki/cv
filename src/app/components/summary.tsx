import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section title="About" titleId="about-section" className={className}>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px] print:leading-tight">
        {summary}
      </div>
    </Section>
  );
}
