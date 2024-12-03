import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";
import { cn } from "../../lib/utils";

interface WorkExperienceBadgesProps {
  className?: string;
  badges: (typeof RESUME_DATA)["work"][number]["badges"];
}

export const WorkExperienceBadgs = ({
  className,
  badges,
}: WorkExperienceBadgesProps) => {
  return (
    <span className={className}>
      {badges.map((badge) => (
        <Badge
          variant="secondary"
          className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          key={badge}
        >
          {badge}
        </Badge>
      ))}
    </span>
  );
};

interface WorkExperienceItemProps {
  work: (typeof RESUME_DATA)["work"][number];
}

export const WorkExperienceItem = ({ work }: WorkExperienceItemProps) => {
  return (
    <Card key={work.company} className="py-1">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <a className="hover:underline" href={work.link}>
              {work.company}
            </a>

            <WorkExperienceBadgs
              className="hidden gap-x-1 sm:inline-flex"
              badges={work.badges}
            />
          </h3>

          <div className="text-sm tabular-nums text-gray-500">
            {work.start} - {work.end ?? "Present"}
          </div>
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {work.title}
        </h4>
      </CardHeader>

      <CardContent className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px]">
        {work.description}
      </CardContent>

      <WorkExperienceBadgs
        className="-mx-2 mt-2 inline-flex flex-wrap gap-1 sm:hidden"
        badges={work.badges}
      />
    </Card>
  );
};

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

export const WorkExperience = ({ work }: WorkExperienceProps) => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>

      {work.map((work) => {
        return <WorkExperienceItem key={work.company} work={work} />;
      })}
    </Section>
  );
};
