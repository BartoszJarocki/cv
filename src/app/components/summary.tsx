import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2
        className="text-xl font-bold print:text-base print:leading-tight"
        id="about-section"
      >
        About
      </h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px] print:leading-tight">
        {summary}
      </div>
    </Section>
  );
}
