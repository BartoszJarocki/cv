import { DateRange } from "@/components/ui/date-range";
import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { WorkEntry } from "@/lib/types";

interface CompanyLinkProps {
  company: WorkEntry["company"];
  link: WorkEntry["link"];
}

function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
      <ExternalArrow />
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkEntry;
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, highlights } =
    work;

  return (
    <>
      <div className="space-y-1 print:space-y-0.5">
        <div className="flex items-baseline justify-between gap-x-2">
          <h3 className="text-sm font-medium leading-snug print:leading-none">
            <CompanyLink company={company} link={link} />
          </h3>
          <DateRange start={start} end={end} label="Employment period" />
        </div>
        <h4 className="text-sm leading-snug text-body print:text-[12px] print:leading-tight">
          {title}
        </h4>
      </div>
      <div className="mt-1.5 text-pretty text-xs text-body print:mt-0.5 print:text-[10px] print:leading-tight">
        {description}
        {highlights && highlights.length > 0 && (
          <ul className="list-inside list-disc">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      <TagList
        tags={badges}
        label="Technologies used"
        className="mt-2 print:mt-0.5"
      />
    </>
  );
}

interface WorkExperienceProps {
  work: WorkEntry[];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section title={SECTION_TITLES.work} titleId="work-experience">
      <div className="space-y-8 print:space-y-1.5">
        {work.map((item) => (
          <article
            key={`${item.company}-${item.start}`}
            className="print:break-inside-avoid"
          >
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
