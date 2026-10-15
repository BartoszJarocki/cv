import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
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
      className="hover:underline"
      aria-label={`${title} project (opens in new tab)`}
    >
      {title}
      <ExternalArrow />
    </a>
  );
}

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  const { title, description, techStack, link } = project;

  return (
    <>
      <h3 className="text-sm font-medium leading-snug print:leading-none">
        <ProjectLink title={title} link={link} />
      </h3>
      {link && (
        <a
          className="hidden underline print:block print:break-words print:text-[10px] print:leading-tight"
          href={link}
        >
          {displayUrl(link)}
        </a>
      )}
      <p className="mt-1 text-pretty text-xs text-body print:mt-0.5 print:text-[10px] print:leading-tight">
        {description}
      </p>
      <TagList
        tags={techStack}
        label="Technologies used"
        className="mt-2 print:mt-0.5"
      />
    </>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      title={SECTION_TITLES.projects}
      titleId="side-projects"
      className="scroll-mb-16"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-4">
        {projects.map((project) => (
          <article key={project.title} className="print:break-inside-avoid">
            <ProjectItem project={project} />
          </article>
        ))}
      </div>
    </Section>
  );
}
