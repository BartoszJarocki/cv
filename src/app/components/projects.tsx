import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { displayUrl } from "@/lib/resume";
import type { Project } from "@/lib/types";

interface ProjectLinkProps {
  title: string;
  link?: string;
}

function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 hover:underline"
      aria-label={`${title} project (opens in new tab)`}
    >
      {title}
      <span className="size-1 rounded-full bg-green-500" aria-hidden="true" />
    </a>
  );
}

interface ProjectTagsProps {
  tags: readonly string[];
}

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
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[9px] print:leading-tight"
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
  tags: readonly string[];
  link?: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          {link && (
            <a
              className="hidden font-mono underline print:block print:break-words print:text-[10px]"
              href={link}
            >
              {displayUrl(link)}
            </a>
          )}
          <CardDescription className="text-pretty font-mono text-xs print:text-[10px]">
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
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:mx-0 print:grid-cols-3 print:gap-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full transition-all duration-200 hover:shadow-sm motion-safe:hover:-translate-y-0.5 print:hover:translate-y-0 print:hover:shadow-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
