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
            variant="tag"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[9px] print:leading-tight"
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
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
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

interface WorkGroup {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
  roles: WorkExperience[];
}

function groupConsecutiveRolesByCompany(work: WorkExperience[]): WorkGroup[] {
  return work.reduce<WorkGroup[]>((groups, role) => {
    const previousGroup = groups[groups.length - 1];

    if (previousGroup && previousGroup.company === role.company) {
      previousGroup.roles.push(role);
      return groups;
    }

    groups.push({
      company: role.company,
      link: role.link,
      roles: [role],
    });

    return groups;
  }, []);
}

interface WorkExperienceGroupProps {
  group: WorkGroup;
}

/**
 * Renders one company with one or more role entries.
 */
function WorkExperienceGroup({ group }: WorkExperienceGroupProps) {
  const { company, link, roles } = group;

  return (
    <Card className="border-none py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <h3 className="inline-flex items-center gap-x-1 text-base font-semibold leading-none print:text-sm">
          <CompanyLink company={company} link={link} />
        </h3>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 print:space-y-2">
          {roles.map((role) => (
            <div key={`${role.title}-${role.start}`}>
              <div className="flex items-center justify-between gap-x-2">
                <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
                  {role.title}
                </h4>
                <WorkPeriod start={role.start} end={role.end} />
              </div>

              <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
                {role.description}
                {role.highlights && role.highlights.length > 0 && (
                  <ul className="list-inside list-disc">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-2 hidden sm:block">
                <BadgeList className="flex-wrap gap-1" badges={role.badges} />
              </div>
              <div className="mt-2 sm:hidden">
                <BadgeList
                  className="-mx-2 flex-wrap gap-1"
                  badges={role.badges}
                />
              </div>
            </div>
          ))}
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
  const groupedWork = groupConsecutiveRolesByCompany([...work]);

  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Work Experience
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {groupedWork.map((group) => (
          <article key={`${group.company}-${group.roles[0]?.start ?? ""}`}>
            <WorkExperienceGroup group={group} />
          </article>
        ))}
      </div>
    </Section>
  );
}
