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
  name: "Vishnu Prasad K.",
  initials: "K",
  location: [
    {
      location: "Bengaluru, Karnataka, India  ",
      locationLink:
        "https://www.google.com/maps/place/J.+P.+Nagar,+Bengaluru,+Karnataka+560078/@12.8896982,77.5780749,14z/data=!3m1!4b1!4m6!3m5!1s0x3bae150d7349a72b:0xf3d03ea1e1dd3d46!8m2!3d12.9063433!4d77.5856825!16zL20vMGg1bjJ4?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      location: "Kasaragod, Kerala,  India  ",
      locationLink: "https://maps.app.goo.gl/2y8jugZ1W8oFsBqp8",
    },
  ],
  about:
    "Full stack developer who loves exploring technologies and thrives to solve challenges.",
  summary:
    "Developing Full Stack application since 2018 with various tech stack has taught me one thing, Learning and Adaptibility is crucial part for a developer or any individual. I love to explore new things and bring best out of it.",
  avatarUrl: "https://avatars.githubusercontent.com/u/19173030?v=4",
  personalWebsiteUrl: "https://vishnuprasadkuntar.me",
  contact: {
    email: "kuntarvishnuprasad41@gmail.com",
    tel: "+91 8547580204",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kuntarvishnuprasad41",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishnu-prasad-kuntar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kuvi41",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jain University",
      degree: "Master Of Computer Applications",
      start: "2022",
      end: "2024",
    },
    {
      school: "Bangalore University",
      degree: "Bachelor Of Computer Applications",
      start: "2018",
      end: "2021",
    },
    {
      school: "DTE",
      degree: "Diploma in Computer Science and Engineering",
      start: "2013",
      end: "2016",
    },
  ],
  work: [
    {
      company: "SSC Pvt Ltd.",
      link: "https://sscinitiatives.com",
      badges: [
        "Remote",

        "React native",
        "Next.js",
        "ts",
        "js",
        "NodeJs",
        "PostgreSQL",
      ],

      title: "Senior Software Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Leading the front-end development and app development. Skills: iOS app development, Android development, Kotlin , typescript, Publishing apps, Jenkins, Linux + above mentioned. ",
    },
    {
      company: "Sevenchats Pvt Ltd. | Project Safa Globaltech",
      link: "https://safaglobaltech.com",
      badges: ["Hybrid", "React JS", "NodeJs", "MongoDB"],
      title: "Senior Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented HRMS system and developed a bid and award system, Skills: React natice, Typescript, javascript, Cloudflare, Jenkins, Git ",
    },
    {
      company: "Sevenchats Pvt Ltd.",
      link: "https://sevenchats.com",
      badges: ["On Site"],
      title: " Android Developer ",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Created and maintained Android app for Social Media platform Sevenchats. Skills: Kotlin, Android studio, git",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",

    "Nginx",
    "jenkins",
    "Native Android Development",
    "WebRTC",
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
