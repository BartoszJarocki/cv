import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { EducationEntry } from "@/lib/types";

interface EducationPeriodProps {
  start: EducationEntry["start"];
  end: EducationEntry["end"];
}

function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-muted-foreground print:leading-none"
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
    <Card className="border-none">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none print:text-sm print:leading-none">
            {school}
          </h3>
          <EducationPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent className="mt-2 text-foreground/80 print:mt-1 print:text-[12px] print:leading-tight">
        {degree}
      </CardContent>
    </Card>
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
