import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import type { RESUME_DATA } from "../../data/resume-data";
import type { ProjectStatus } from "../../lib/types";
import { cn } from "../../lib/utils";

const PROJECT_STATUS_CONFIG: Record<
  ProjectStatus,
  {
    label: string;
    dotClass: string;
    tooltipBgClass: string;
    tooltipTextClass: string;
  }
> = {
  finished: {
    label: "Finished",
    dotClass: "bg-emerald-500",
    tooltipBgClass: "bg-emerald-100",
    tooltipTextClass: "text-black",
  },
  wip: {
    label: "In progress",
    dotClass: "bg-amber-400",
    tooltipBgClass: "bg-amber-100",
    tooltipTextClass: "text-black",
  },
  deprecated: {
    label: "Deprecated",
    dotClass: "bg-red-500",
    tooltipBgClass: "bg-red-100",
    tooltipTextClass: "text-black",
  },
};

const DEFAULT_PROJECT_STATUS: ProjectStatus = "finished";

function ProjectStatusIndicator({
  status,
  className,
}: {
  status?: ProjectStatus;
  className?: string;
}) {
  const resolvedStatus = status ?? DEFAULT_PROJECT_STATUS;
  const { label, dotClass, tooltipBgClass, tooltipTextClass } =
    PROJECT_STATUS_CONFIG[resolvedStatus] ??
    PROJECT_STATUS_CONFIG[DEFAULT_PROJECT_STATUS];

  return (
    <span
      role="img"
      aria-label={label}
      className="group relative inline-flex outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rounded-full", dotClass, className)}
      />
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 bottom-full z-20 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-semibold tracking-[0.2em] shadow-sm ring-1 ring-black/10",
          "opacity-0 transition-all duration-150",
          "group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
          tooltipBgClass,
          tooltipTextClass
        )}
      >
        {label.toUpperCase()}
      </span>
    </span>
  );
}

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
  status?: ProjectStatus;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link, status }: ProjectLinkProps) {
  const resolvedStatus = status ?? DEFAULT_PROJECT_STATUS;
  const statusLabel =
    PROJECT_STATUS_CONFIG[resolvedStatus]?.label ??
    PROJECT_STATUS_CONFIG[DEFAULT_PROJECT_STATUS].label;

  const linkContent = link ? (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:underline"
        aria-label={`${title} project, status ${statusLabel} (opens in new tab)`}
      >
        {title}
      </a>
      <span
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </span>
    </>
  ) : (
    <span>{title}</span>
  );

  return (
    <span className="inline-flex items-center gap-3">
      {linkContent}
      <ProjectStatusIndicator status={status} />
    </span>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
  status?: ProjectStatus;
}

/**
 * Card component displaying project information
 */
function ProjectCard({
  title,
  description,
  tags,
  link,
  status,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-visible border p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} status={status} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full" // Added h-full here
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
              status={project.status}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
