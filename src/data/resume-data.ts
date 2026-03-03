import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Bartosz Jarocki",
  initials: "BJ",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "Full Stack Engineer building products from the ground up.",
  summary:
    "Full Stack Engineer with 15+ years of experience and 10+ years working remotely. Building high-performance web applications, leading distributed teams, and creating open source tools used by thousands of developers.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Motion",
      link: "https://motionapp.com/",
      badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
      title: "Senior Software Engineer",
      start: "2025",
      end: null,
      description:
        "Building an internal AI agents platform that enables marketing teams to create and manage AI-powered workflows.",
    },
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      start: "2024",
      end: "2025",
      description:
        "Led technical architecture of a blockchain-based film funding platform.",
      highlights: [
        "Architected migration from CRA to Next.js for improved performance, SEO, and DX",
        "Established release process enabling faster deployments and reliable rollbacks",
        "Implemented system-wide monitoring and security improvements",
      ],
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description:
        "Led a product squad building an enterprise agile meeting platform.",
      highlights: [
        "Built design system with Tailwind CSS, improving development speed and time to market",
        "Implemented engineering practices: PR automation, code review guidelines, and workflows",
        "Open source contributions to Relay DevTools and React i18n tooling",
      ],
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      start: "2015",
      end: "2021",
      description:
        "Transitioned from mobile to full-stack development while leading distributed teams across multiple client projects.",
      highlights: [
        "Led frontend team at Evercast, building real-time platform supporting 30+ users per room with HD streaming and collaboration tools",
        "Developed offline-first Android app for DKMS, improving donor registration process",
        "Led development teams across multiple successful client projects",
      ],
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2012",
      end: "2015",
      description:
        "First Android developer, grew and led a team of 15+ engineers. Established mobile engineering culture and delivery processes.",
      highlights: [
        "Developed apps for major Polish companies including LOT, Polskie Radio, and Agora",
        "Built and mentored high-performing mobile development team",
      ],
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale. Built strong foundations in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Node.js",
    "AI/LLMs",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "GraphQL",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "AI", "Browser Extension"],
      description: "Autonomous QA AI agent for web applications",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "43frames",
      techStack: ["TypeScript", "Next.js", "AI"],
      description: "AI-powered image and video generation studio",
      link: {
        label: "43frames.com",
        href: "https://43frames.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Open source, print-friendly CV template. 9,600+ stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
