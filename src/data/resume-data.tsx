import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ILOLogo } from "@/images/logos";
import { ReactNode } from "react";

type Social = {
  name: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string | null;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string | null;
  start: string;
  end: string | null;
  description: ReactNode;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
  techStack: string[];
};

type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Social[];
  };
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
};

export const RESUME_DATA: ResumeData = {
  name: "Patrick Lehmann",
  initials: "PL",
  location: "Berlin, Germany CET",
  locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
  about:
    "Senior Full-Stack Developer with 7+ years of experience delivering scalable web and mobile applications.",
  summary: (
    <>
      Currently driving end-to-end product delivery at code-b, translating
      complex requirements into robust solutions using React, Next.js, React
      Native, and TypeScript.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/32590221?v=4",
  personalWebsiteUrl: "https://ptrcklehmann.com",
  contact: {
    email: "connect@ptrcklehmann.com",
    tel: "+4915901345063",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ptrcklehmann",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ptrcklehmann",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "President Antônio Carlos University",
      degree: "BSc in Systems Analysis and Development",
      start: "01.2006",
      end: "07.2011",
    },
    {
      school: "Ironhack Berlin",
      degree: "Full-Stack Web Development Bootcamp",
      start: "01.2021",
      end: "05.2021",
    },
  ],
  work: [
    {
      company: "code-b",
      link: "https://code-b.com",
      badges: ["On Site", "TypeScript", "React", "Next.js", "React Native"],
      title: "Full-Stack Developer",
      logo: null,
      start: "06.2022",
      end: null,
      description: (
        <>
          Driving end-to-end product delivery:
          <ul className="list-inside list-disc">
            <li>
              Built & maintained scalable web & mobile apps with React, Next.js,
              React Native, and TypeScript
            </li>
            <li>
              Designed CI/CD pipelines for automated testing & deployments
            </li>
            <li>Mentored junior developers and enforced best practices</li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance",
      link: "https://ptrcklehmann.com",
      badges: ["TypeScript", "React", "React Native", "GraphQL"],
      title: "Full-Stack Developer",
      logo: null,
      start: "05.2018",
      end: "05.2022",
      description: (
        <>
          Independent development services:
          <ul className="list-inside list-disc">
            <li>
              Developed bespoke web & mobile solutions for diverse clients using
              modern full-stack technologies
            </li>
            <li>
              Implemented responsive designs and intuitive user interfaces
            </li>
            <li>
              Managed client relationships and project timelines independently
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ILO",
      link: "https://www.ilo.org",
      badges: ["Remote", "Graphic Design", "UI/UX", "Frontend"],
      title: "Frontend Developer / Graphic Design Consultant",
      logo: ILOLogo,
      start: "10.2019",
      end: "05.2022",
      description: (
        <>
          Digital presence enhancement:
          <ul className="list-inside list-disc">
            <li>
              Designed UI and visual identities for global reports & events,
              improving accessibility and user engagement
            </li>
            <li>
              Created compelling graphics for international campaigns and
              publications
            </li>
            <li>
              Collaborated with stakeholders across multiple countries and time
              zones
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Efficient Signer and Print Ltd",
      link: "https://efficientsigns.com/",
      badges: ["Graphic Design", "Print", "Digital"],
      title: "Graphic Designer",
      logo: null,
      start: "01.2015",
      end: "12.2015",
      description: (
        <>
          Creative design services:
          <ul className="list-inside list-disc">
            <li>
              Created marketing materials (print & digital), trend boards, and
              brand collateral
            </li>
            <li>
              Collaborated with clients to translate requirements into visual
              solutions
            </li>
            <li>
              Managed multiple design projects simultaneously with tight
              deadlines
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Contentful",
    "Headless CMS",
    "REST API",
    "SQL/MySQL",
    "MongoDB",
    "Jest",
    "Vitest",
    "CI/CD",
    "HTML5",
    "CSS",
  ],
  projects: [],
} as const;
