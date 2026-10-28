import { SECTION_TITLES } from "@/data/resume-data";
import {
  displayUrl,
  getContactLinks,
  getSections,
  type SectionKey,
} from "@/lib/resume";
import type { ResumeData } from "@/lib/types";

export interface Link {
  href: string;
  url: string;
}

export interface Row {
  label: string;
  text: string;
  link: Link;
}

export interface Entry {
  name: string;
  link?: Link;
  dates?: string;
  role?: string;
  description?: string;
  highlights: string[];
  tags: string[];
}

export type Inline = string | { code: string };

export type Block =
  | { kind: "title"; name: string; tagline: string }
  | { kind: "rows"; rows: Row[] }
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; inlines: Inline[] }
  | ({ kind: "entry" } & Entry)
  | { kind: "tags"; tags: string[] };

const web = (href: string): Link => ({ href, url: displayUrl(href) });

const dates = (start: string, end: string | null) =>
  `${start} - ${end ?? "Present"}`;

const sections: Record<SectionKey, (data: ResumeData) => Block[]> = {
  summary: ({ summary }) => [{ kind: "paragraph", inlines: [summary] }],
  work: ({ work }) =>
    work.map((job) => ({
      kind: "entry",
      name: job.company,
      link: web(job.link),
      dates: dates(job.start, job.end),
      role: job.title,
      description: job.description,
      highlights: job.highlights ?? [],
      tags: job.badges,
    })),
  education: ({ education }) =>
    education.map((school) => ({
      kind: "entry",
      name: school.school,
      dates: dates(school.start, school.end),
      role: school.degree,
      highlights: [],
      tags: [],
    })),
  skills: ({ skills }) => [{ kind: "tags", tags: skills }],
  projects: ({ projects }) =>
    projects.map((project) => ({
      kind: "entry",
      name: project.title,
      link: project.link ? web(project.link) : undefined,
      description: project.description,
      highlights: [],
      tags: project.techStack,
    })),
};

const title = ({ name, about }: ResumeData): Block => ({
  kind: "title",
  name,
  tagline: about,
});

const body = (data: ResumeData): Block[] => [
  {
    kind: "rows",
    rows: [
      { label: "Location", text: data.location, link: web(data.locationLink) },
      ...getContactLinks(data).map(({ label, text, href }) => ({
        label,
        text,
        link: { href, url: text },
      })),
    ],
  },
  ...getSections(data).flatMap((key): Block[] => [
    { kind: "heading", text: SECTION_TITLES[key] },
    ...sections[key](data),
  ]),
];

export function resumeBlocks(data: ResumeData): Block[] {
  return [title(data), ...body(data)];
}

export function llmsBlocks(data: ResumeData): Block[] {
  const site = new URL(data.siteUrl).origin;
  return [
    title(data),
    {
      kind: "paragraph",
      inlines: [
        "This CV also comes as 80-column text from ",
        { code: `curl ${site}` },
        ", and as markdown from ",
        { code: `${site}/index.md` },
        " or from any request that sends ",
        { code: "Accept: text/markdown" },
        ".",
      ],
    },
    ...body(data),
  ];
}
