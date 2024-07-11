import { MonitoLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abe Chen",
  initials: "AC",
  location: "Taichung City, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taichung,+Taiwan",
  about:
    "Frontend Developer focused on building products with extra attention to details. My work ethos revolves around 'Solving problems, creating value'",

  summary:
    "As a Frontend Developer, I've led the development of several products from start to finish, guiding teams to create optimal working environments. My focus is on TypeScript, React, Next.js, Vue3, and Nuxt3. With over 3 years of experience, I've honed my ability to balance remote and in-person collaboration for efficient task completion and effective teamwork.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46858104?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "abe1272001@gmail.com",
    tel: "+886 955124733",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abe1272001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abe127/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/abe_chen1212",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yuan Ze University of Management",
      degree:
        "Bachelor's Degree of Business Administration(Global Business Management Program)",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "TWJOIN 哲煜科技",
      link: "https://twjoin.com/",
      badges: ["Partial Remote"],
      title: "Senior Frontend Developer",
      start: "2022.12",
      end: null,
      description:
        "Managed a six-person frontend team, established project infrastructures from scratch, assigned project tasks, conducted code reviews, mentored new team members, and maintained frontend documentation standards. Collaborated with PMs, UI/UX designers, backend engineers, and app engineers. Capable of independently developing frontend projects. Technologies: TypeScript, Next.js/React, Nuxt3/Vue3, TanStack Query, Docker, Pinia, Jotai, TailwindCSS, ChakraUI, Shadcn/ui, VantUI",
    },
    {
      company: "Farmland 農田科技股份有限公司",
      link: "https://farmland.tw/",
      badges: [],
      title: "Frontend Developer",
      start: "2022.05",
      end: "2022.11",
      description:
        "Developed Next.js/React project to implement a management system, developed macOS Apps using SwiftUI and integrated SDKs and backend APIs. Technologies: Next.js, React, Redux RTK, TypeScript, TailwindCSS, ChakraUI",
    },
    {
      company: "Hyena Inc. 凱納股份有限公司",
      link: "https://www.hyena-ebike.com/?lang=zh-hant",
      badges: [],
      title: "Frontend Developer",
      start: "2021.10",
      end: "2022.04",
      description:
        "Developed the desktop application Hyena Service Tool using ElectronJS and VueJS to integrate the electric bicycle SDK and backend APIs. Utilized Vuex and Pinia for state management, with hands-on experience transitioning from Vuex to Pinia. Managed version releases using Azure Pipeline. Implemented client-side error and operation monitoring using Datadog. Collaborated with PMs, UI/UX designers, backend engineers and app engineers, familiar with Agile development methodologies. Technologies: Electron.js, Vue, Vuex, Pinia, TypeScript, SCSS",
    },
    {
      company: "Project 普羅傑有限公司",
      link: "",
      badges: [],
      title: "Frontend Developer",
      start: "2021.02",
      end: "2021.10",
      description:
        "Maintained portal and admin website for gaming companies. Refactor and optimized the website to improve performance and user experience. Collaborated with backend engineers to implement new features and integrate new technologies. Technologies: JavaScript, React, Bootstrap, JQuery",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue3/Nuxt3",
    "Electron.js",
    "Node.js",
    "TailwindCSS",
    "TanStack Query",
    "Git Flow",
  ],
  hobbies: [
    "Investing",
    "Dancing",
    "Planting",
    "Reading",
    "Running",
    "Music",
    "Poker",
  ],
  projects: [
    {
      title: "AI Training Tool",
      techStack: [
        "TypeScript",
        "Next.js/React",
        "TanStack Query",
        "Shadcn/ui",
        "TailwindCSS",
        "D3",
      ],
      description: "A Model training platform that assists users to train ai models for various tasks",
    },
    {
      title: "CarFinder 智慧找車",
      techStack: [
        "TypeScript",
        "Nuxt3/Vue3",
        "TanStack Query",
        "VantUI",
        "UnoCSS",
        "SEO",
      ],
      description:
        "A web platform for the Yulon Group that assists users in finding their ideal car, comparing prices, and scheduling appointments with dealers",
      link: {
        label: "https://carfinder.oppenai.io/",
        href: "https://carfinder.oppenai.io/",
      },
    },
    {
      title: "Wowprime 王品瘋美食",
      techStack: [
        "Next.js/React",
        "Javascript",
        "ChakraUI",
        "Redux",
        "Google Maps",
        "GA4",
        "Flutter Webview",
      ],
      description:
        "Web application for Wowprime group, enabling members to manage orders, payments, and discover interesting restaurants to visit",
      link: {
        label: "wowprime-mobile-web.wowfmsapp.com",
        href: "https://wowprime-mobile-web.wowfmsapp.com/onboarding",
      },
    },
    {
      title: "Hyena Service Tool",
      techStack: ["ElectronJS", "Vue3", "Pinia", "Vuex", "Datadog", "SCSS"],

      description:
        "Desktop application for supporting e-bike dealers in optimizing the maintenance work of e-bikes and the end-user experience",
      link: {
        label: "www.hyena-ebike.com",
        href: "https://www.hyena-ebike.com/software_service/service_tool/?lang=zh-hant",
      },
    },
  ],
} as const;
