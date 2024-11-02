import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amr Monier",
  initials: "AM",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/cairo",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/43762965?v=4",
  personalWebsiteUrl: "https://amrmonier.com",
  contact: {
    email: "iam@amrmonier.com",
    tel: "+201027200070",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AmrMonier",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amr-monier-184b4b168/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/amr_monier",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Faculty of Science, Ain Shams Uni.",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Contact Financial Holding",
      link: "https://contact.eg",
      badges: ["Fin-tech"],
      title: "Software Engineer",
      logo: "ContactFinancialLogo",
      start: "Jan, 2023",
      end: "present",
      description:
        "Maintain Legacy codebase, help develop and introduce new features into the system. Mentor and guide junior developers. Make code reviews for helping the team improve the code quality. Technologies: TypeScript, NodeJs, NestJs, Postgres, AWS, Rest-APIs",
    },
    {
      company: "Eduact",
      link: "https://eduact.me",
      badges: ["fulltime", "E-Learning"],
      title: "Backend Developer",
      logo: "EduactLogo",
      start: "Feb, 2022",
      end: "Dec, 2022",
      description:
        "Developed and maintained software solutions, developed a fully functioning Exam and Quizzes module with automatic scoring, and contributed to project management. Technologies: TypeScript, Node.js, AdonisJs, AWS, PostgreSQL, Rest-APIs",
    },
    {
      company: "Independent Contractor",
      link: undefined,
      badges: ["Marketing"],
      title: "Freelance Backend Developer",
      logo: "ContractorLogo",
      start: "Jan, 2022",
      end: "May, 2022",
      description:
        "built a survey platform from 0 to 1 to make conduct surveys, gathering information and user responses with a reward system to encourage users taking more surveys. Technologies: JavaScript, ExpressJs, MongoDB, AWS, CI/CD, Rest-APIs",
    },
    {
      company: "Ministry of Defense",
      link: undefined,
      badges: ["Government"],
      title: "PL/SQL Developer",
      logo: "MoDLogo",
      start: "Dec, 2020",
      end: "Dec, 2021",
      description:
        "Develop PL/SQL scripts to automate daily tasks, efactor Legacy Code to meet modern standards with better performance which is the thing i'm proud of the most in my career from +2.8K lines od code to less than 1K and 3X faster in terms of performance, and Develop Procedures and Functions in the database layer for tasks which better being handled in the database instead of the application layer. Technologies: Oracle MySQL Database, Oracle PL/SQL",
    },

    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "AdonisJs",
    "NestJs",
    "ExpressJs",
    "MySQL",
    "PostgreSQL",
    "PHP",
    "Laravel",
    "VueJs",
    "Docker",
    "AWS",
    "Oracle Database",
    "MongoDB",
    "Git",
    "REST APIs",
    "CI/CD",
    "Angular",
    "Python",
    "C++",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
