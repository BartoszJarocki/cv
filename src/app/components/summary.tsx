import { SECTION_TITLES } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section
      title={SECTION_TITLES.summary}
      titleId="about-section"
      className={className}
    >
      <div className="text-pretty text-sm text-body print:text-[12px] print:leading-tight">
        {summary}
      </div>
    </Section>
  );
}
