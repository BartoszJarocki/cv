import type { StaticImageData } from "next/image";
import React from "react";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export type ProjectStatus = "finished" | "wip" | "deprecated";

export type SkillIconConfig =
  | string
  | {
      type?: "devicon" | "lucide";
      value: string;
    };

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationFlag?: string;
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
    employmentTypes?: string[];
    title: string;
    location: string;
    locationType?: "Hybrid" | "Remote" | "On-site";
    locationUrl?: string;
    locationFlag?: string;
    start: string;
    end: string | null;
    description: string | React.ReactNode;
  }>;
  skills: Array<{
    name: string;
    icon?: SkillIconConfig;
    items: Array<{
      name: string;
      icon?: SkillIconConfig;
      description?: string;
    }>;
    description?: string;
  }>;
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
    status?: ProjectStatus;
  }>;
}

export function reactToString(content: React.ReactNode): string {
  if (typeof content === "string" || typeof content === "number") {
    return String(content);
  }

  if (Array.isArray(content)) {
    return content.map(reactToString).join("");
  }

  if (React.isValidElement(content)) {
    return reactToString(content.props.children);
  }

  return "";
}
