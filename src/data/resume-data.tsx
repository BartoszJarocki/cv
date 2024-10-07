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
    "Developing Full Stack application since 2018 with various tech stack has taught me one thing, Learning and Adaptability is crucial part for a developer or any individual. I love to explore new things and bring best out of it.",
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
        "iOS app development",
        "Android development",
        "Kotlin",
        "Jenkins",
        "Nginx",
      ],

      title: "Senior Software Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Leading the front-end development and app development using technologies such as ",
    },
    {
      company: "Safa Globaltech",
      link: "#",
      badges: [
        "Hybrid",
        "React JS",
        "NodeJs",
        "MongoDB",
        "React native",
        "Typescript",
        "Cloudflare",
        "CDN",
        "Kotlin",
        "Jenkins",
        "Nginx",
      ],
      title: "Senior Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented HRMS system and developed a bid and award system, techstack were ",
    },
    {
      company: "Sevenchats Pvt Ltd.",
      link: "#",
      badges: [
        "On Site",
        "Native Android Development",
        "Kotlin",
        "Android studio",
        "git",
      ],
      title: " Android Developer ",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Created and maintained Android app for Social Media platform Sevenchats.  ",
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
      title: "Buyology",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Nginx",
        "Jenkins",
      ],
      description: "Refurbished E-commerce for greener world",
      logo: ParabolLogo,
      link: {
        label: "Buyology",
        href: "https://buyology.online/",
      },
    },
    {
      title: "Safa Globaltech Pvt Ltd.",
      techStack: ["Lead Frontend Developer", "TypeScript", "React", "Node.js"],
      description: "Website for the company with CMS",
      logo: EvercastLogo,
      link: {
        label: "Safa",
        href: "https://web.archive.org/web/20240425041954/https://safaglobaltech.com/",
      },
    },
  ],
} as const;
