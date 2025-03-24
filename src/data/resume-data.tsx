import { ReactNode } from "react";

type Social = {
  name: string;
  url: string;
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
};

// Define the main resume data type
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
    "Senior Full‑Stack Developer with 7+ years of experience delivering scalable web and mobile applications.",
  summary: (
    <>
      Currently driving end‑to‑end product delivery at code‑b, translating
      complex requirements into robust solutions using React, Next.js, React
      Native, and TypeScript.
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "https://ptrcklehmann.com",
  contact: {
    email: "connect@ptrcklehmann.com",
    tel: "+4915901345063",
    social: [],
  },
  education: [
    {
      school: "Ironhack Berlin",
      degree: "Full‑Stack Web Development Bootcamp",
      start: "01.2021",
      end: "05.2021",
    },
    {
      school: "President Antônio Carlos University",
      degree: "BSc in Systems Analysis and Development",
      start: "01.2006",
      end: "07.2011",
    },
  ],
  work: [
    {
      company: "code‑b agile websolutions GmbH",
      link: "https://code-b.com",
      badges: [
        "On Site",
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "CI/CD",
      ],
      title: "Full‑Stack Developer",
      logo: null,
      start: "06.2022",
      end: null,
      description: (
        <>
          Driving end‑to‑end product delivery:
          <ul className="list-inside list-disc">
            <li>
              Built and maintained scalable web & mobile apps with React,
              Next.js, React Native, and TypeScript
            </li>
            <li>Designed CI/CD pipelines to automate testing & deployments</li>
            <li>Mentored junior developers and enforced best practices</li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote", "React", "Next.js", "TypeScript"],
      title: "Full‑Stack Developer",
      logo: null,
      start: "05.2018",
      end: "present",
      description:
        "Developed bespoke web applications for various clients using modern frontend and backend technologies.",
    },
    {
      company: "International Labour Organization",
      link: "https://www.ilo.org",
      badges: ["Remote", "React", "Design"],
      title: "Frontend Developer / Graphic Design Consultant",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description:
        "Designed UI and visual identities for global reports and events, improving accessibility and user engagement.",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "GraphQL",
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
