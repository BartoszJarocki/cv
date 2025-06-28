import type { StaticImageData } from "next/image";

export type ResumeIcon = React.ComponentType<React.SVGProps<SVGSVGElement>> | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string | React.ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  work: Array<{
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string | null;
    description: string | React.ReactNode;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
}

// GraphQL compatible types (without React components)
export interface GraphQLSocial {
  name: string;
  url: string;
}

export interface GraphQLContact {
  email: string;
  tel: string;
  social: GraphQLSocial[];
}

export interface GraphQLEducation {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface GraphQLWork {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
}

export interface GraphQLLink {
  label: string;
  href: string;
}

export interface GraphQLProject {
  title: string;
  techStack: string[];
  description: string;
  link?: GraphQLLink;
}

export interface GraphQLMe {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: GraphQLContact;
  education: GraphQLEducation[];
  work: GraphQLWork[];
  skills: string[];
  projects: GraphQLProject[];
}

// Helper function to convert React content to string
export function reactToString(content: React.ReactNode): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map(reactToString).join("");
  }
  if (typeof content === "object" && content && "props" in content) {
    const { children } = content.props;
    if (children) return reactToString(children);
  }
  return "";
}

// Transform function to convert ResumeData to GraphQL compatible format
export function resumeDataToGraphQL(data: ResumeData): GraphQLMe {
  return {
    name: data.name,
    initials: data.initials,
    location: data.location,
    locationLink: data.locationLink,
    about: data.about,
    summary: reactToString(data.summary),
    avatarUrl: data.avatarUrl,
    personalWebsiteUrl: data.personalWebsiteUrl,
    contact: {
      email: data.contact.email,
      tel: data.contact.tel,
      social: data.contact.social.map(({ name, url }) => ({ name, url })),
    },
    education: data.education,
    work: data.work.map((job) => ({
      company: job.company,
      link: job.link,
      badges: job.badges,
      title: job.title,
      start: job.start,
      end: job.end || "Present",
      description: reactToString(job.description),
    })),
    skills: data.skills,
    projects: data.projects.map((project) => ({
      title: project.title,
      techStack: project.techStack,
      description: project.description,
      link: project.link,
    })),
  };
}
