export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  spokenLanguages?: string;

  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;

  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    program: string;
    research: string[];
    start: string;
    end: string;
  }[];
  references: string[];
  activities: {
    title: string;
    content: string;
    time: string;
  }[];
  awards: {
    title: string;
    content: string;
    time: string;
    issuer: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo: string | undefined;
    start: string;
    end: string;
    description?: string;
  }[];
  skills: string[];
  frameworkDetails: {
    name: string;
    yoe: number;
  }[];

  projects: {
    title: string;
    techStack: string[];
    description: string;
    logo: string | undefined;
    link?: {
      label: string;
      href: string;
    };
    monthDuration?: number;
    start?: string;
    end?: string;
  }[];
};
