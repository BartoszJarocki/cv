import { StaticImageData } from "next/image";
export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.ComponentType;
    }[];
  };
  education: {
    school: string;
    degree: string;
    badges: string[];
    grade?: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo: React.ComponentType<{}> | StaticImageData;
    start: string;
    end: string;
    description: string | string[];
    customBullet?: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    logo: React.ComponentType<{}> | StaticImageData;
    link?: {
      label: string;
      href: string;
    };
  }[];
  certification: {
    name: string;
    providerName: string;
    link: string;
    issueDate: string;
    expirationDate: string;
    certificateId: string;
  }[];
};