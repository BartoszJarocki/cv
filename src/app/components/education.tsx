import { Section } from "@/components/ui/section";
import type { EducationEntry } from "@/lib/types";

interface EducationPeriodProps {
  start: EducationEntry["start"];
  end: EducationEntry["end"];
}

function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="shrink-0 text-[13px] tabular-nums text-muted-foreground print:leading-none"
      title={`Period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface EducationItemProps {
  education: EducationEntry;
}

function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <>
      <div className="flex items-baseline justify-between gap-x-2">
        <h3 className="text-sm font-medium leading-snug print:leading-none">
          {school}
        </h3>
        <EducationPeriod start={start} end={end} />
      </div>
      <div className="mt-1.5 text-sm text-body print:mt-1 print:text-[12px] print:leading-tight">
        {degree}
      </div>
    </>
  );
}

interface EducationListProps {
  education: readonly EducationEntry[];
}

export function Education({ education }: EducationListProps) {
  return (
    <Section title="Education" titleId="education-section">
      <div className="space-y-4 print:space-y-1">
        {education.map((item) => (
          <article key={item.school} className="print:break-inside-avoid">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
