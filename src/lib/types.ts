import type { StaticImageData } from "next/image";

export type SocialIcon = "github" | "linkedin" | "x";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export interface WorkEntry {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string | null;
  description: string;
  highlights?: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string | null;
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatar: StaticImageData;
  siteUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
  education: EducationEntry[];
  work: WorkEntry[];
  skills: string[];
  projects: Project[];
}
