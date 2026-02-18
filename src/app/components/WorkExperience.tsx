import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  const isCurrent = !end;

  const endContent = isCurrent ? (
    <span className="inline-flex items-center gap-1">
      <span>Present</span>
      <span
        className="relative inline-flex h-[0.3rem] w-[0.3rem] print:hidden"
        aria-hidden="true"
      >
        <span className="absolute inline-flex h-[0.3rem] w-[0.3rem] animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-[0.3rem] w-[0.3rem] rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
      </span>
      <span className="sr-only">Current role indicator</span>
    </span>
  ) : (
    <span>{end}</span>
  );

  return (
    <div
      className="flex items-center gap-1 text-sm tabular-nums text-foreground/65"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      <span>{start}</span>
      <span aria-hidden="true">-</span>
      {endContent}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
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
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

interface WorkLocationProps {
  city?: string;
  flag?: string;
  url?: string;
  type?: WorkExperience["locationType"];
}

/**
 * Displays a subtle work arrangement label followed by the city/flag, optionally as a link
 */
function WorkLocation({ city, flag, url, type }: WorkLocationProps) {
  if (!city && !flag && !type) return null;

  const content = (
    <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/70">
      {city || flag ? (
        <span className="inline-flex items-center gap-1">
          {city ? <span>{city}</span> : null}
          <span aria-hidden="true" className="text-base leading-none">
            {flag ?? "📍"}
          </span>
        </span>
      ) : null}
      {type ? (
        <span className="text-[11px] uppercase tracking-wide text-foreground/50">
          {type}
        </span>
      ) : null}
    </div>
  );

  if (url) {
    return (
      <a
        className="inline-flex"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open ${city ?? "location"} in Google Maps`}
      >
        {content}
      </a>
    );
  }

  return content;
}

interface EmploymentTypeListProps {
  types?: WorkExperience["employmentTypes"];
}

/**
 * Minimal uppercase text labels for employment type(s) placed directly next to the company name
 */
function EmploymentTypeList({ types }: EmploymentTypeListProps) {
  if (!types?.length) return null;

  return (
    <span className="ml-2 inline-flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/65">
      <span aria-hidden="true" className="text-foreground/40">
        |
      </span>
      {types.map((type, index) => (
        <span key={type} className="inline-flex items-center gap-1">
          {index > 0 ? (
            <span aria-hidden="true" className="text-foreground/40">
              /
            </span>
          ) : null}
          <span>{type}</span>
        </span>
      ))}
    </span>
  );
}

/**
 * Individual work experience card component
 * Places technology badges below the job description for consistency
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const {
    company,
    link,
    badges,
    employmentTypes,
    title,
    start,
    end,
    description,
    location,
    locationFlag,
    locationType,
    locationUrl,
  } = work;
  const technologyBadges: WorkBadges = badges;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="space-y-2 print:space-y-1">
        <div className="flex flex-col gap-2 text-base sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="inline-flex flex-wrap items-center gap-2 font-semibold leading-none print:text-sm">
              <CompanyLink company={company} link={link} />
              <EmploymentTypeList types={employmentTypes} />
            </h3>
            <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
              {title}
            </h4>
          </div>
          <div className="flex flex-col items-start gap-1 text-left sm:items-end sm:text-right">
            <WorkPeriod start={start} end={end} />
            <WorkLocation
              city={location}
              flag={locationFlag}
              type={locationType}
              url={locationUrl}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-3">
          <BadgeList
            className="flex flex-wrap gap-1"
            badges={technologyBadges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-5 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`}>
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
