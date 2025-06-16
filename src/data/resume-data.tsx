import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ReactNode, SVGProps, ReactElement } from "react";

type Social = {
  name: string;
  url: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
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
  about: "Frontend Developer",
  summary: (
    <>
      <p className="print:leading-snug">
        Frontend Engineer specialising in React ecosystems with 5+ years of
        experience delivering scalable web and mobile applications.
      </p>
      <p className="print:leading-snug">
        Led high-impact projects (e.g. ThePioneer.de, Tabletop Herald) from
        architecture to production, improving performance and deployment speed
        through CI/CD automation and modern JS tooling. Combines a strong UI/UX
        design foundation with deep technical skill in TypeScript, GraphQL, and
        React Native to build user-centric, maintainable frontends.
      </p>
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
      badges: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "GraphQL",
        "CI/CD",
      ],
      title: "Frontend Developer",
      logo: null,
      start: "06.2022",
      end: "04.2025",
      description: (
        <ul className="list-inside list-disc space-y-0.5 ">
          <li className="print:leading-relaxed">
            Delivered multiple production-ready web and mobile apps using React
            ecosystems, including{" "}
            <a
              className="underline hover:text-foreground"
              href="https://thepioneer.de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ThePioneer"
            >
              ThePioneer.de
            </a>{" "}
            (news platform) and{" "}
            <a
              className="underline hover:text-foreground"
              href="https://tabletop-herald.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tabletop Herald"
            >
              Tabletop Herald
            </a>{" "}
            (gaming community portal).
          </li>
          <li className="print:leading-relaxed">
            Spearheaded CI/CD automation using GitHub Actions and test coverage
            with Jest, reducing deployment time by 30% and improving release
            confidence.
          </li>
          <li className="print:leading-relaxed">
            Owned full product lifecycle on key features: from technical
            planning and implementation to deployment and post-launch iteration.
          </li>
          <li className="print:leading-relaxed">
            Introduced TypeScript best practices and reusable component patterns
            that enhanced scalability and reduced bugs across projects.
          </li>
          <li className="print:leading-relaxed">
            Mentored 2 junior developers through code reviews and onboarding,
            leading to faster ramp-up and improved team-wide code quality.
          </li>
        </ul>
      ),
    },
    {
      company: "Freelance",
      link: "https://ptrcklehmann.com",
      badges: ["TypeScript", "React", "React Native", "GraphQL", "Node.js"],
      title: "Full-Stack Developer",
      logo: null,
      start: "05.2016",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Delivered full-featured web and mobile applications for clients in
            media, education, and non-profit sectors, often working solo from
            scoping to deployment.
          </li>
          <li className="print:leading-relaxed">
            Modernised legacy codebases by migrating to React + GraphQL,
            reducing tech debt and enabling feature velocity for long-term
            clients.
          </li>
          <li className="print:leading-relaxed">
            Built high-availability interfaces using React Native and
            TypeScript, focusing on accessibility, maintainability, and
            performance.
          </li>
          <li className="print:leading-relaxed">
            Acted as primary technical point of contact: managed expectations,
            sprint priorities, and delivery timelines directly with
            stakeholders.
          </li>
        </ul>
      ),
    },
    {
      company: "International Labour Organization (UN)",
      link: "https://www.ilo.org",
      badges: ["UI/UX", "Design Systems", "Figma", "HTML/CSS"],
      title: "UI/Frontend Developer (Contract)",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Designed and implemented branded UI components for global
            initiatives like Global Social Protection Week, ensuring alignment
            with UN accessibility standards.
          </li>
          <li className="print:leading-relaxed">
            Translated complex policy data into clean, engaging visuals
            (infographics, interactive layouts) for reports and event platforms
            viewed by thousands worldwide.
          </li>
          <li className="print:leading-relaxed">
            Collaborated cross-functionally across multiple time zones,
            delivering projects on tight UN publication deadlines.
          </li>
          <li className="print:leading-relaxed">
            Modernised digital publications by introducing consistent design
            systems and web-optimised assets, improving readability and user
            navigation.
          </li>
        </ul>
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
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Designed impactful marketing packages, including compelling print
            materials, brochures, banners, and signage, significantly improving
            brand visibility and market presence.
          </li>
          <li className="print:leading-relaxed">
            Produced insightful trend boards and conducted market analysis to
            identify emerging opportunities, enabling strategic business
            decisions and capitalizing on industry shifts.
          </li>
          <li className="print:leading-relaxed">
            Managed multiple design projects simultaneously with tight
            deadlines.
          </li>
        </ul>
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
    "Headless CMS",
    "REST API",
    "SQL/MySQL",
    "Git",
    "CI/CD",
    "Jest",
    "Vitest",
    "Docker",
    "Xcode",
    "Android Studio",
    "Figma",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Agile/Scrum",
  ],
  projects: [],
} as const;
