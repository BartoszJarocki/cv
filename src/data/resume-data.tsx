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
  name: "Riddhi Raj Ghosh",
  initials: "RRG",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "CS Engineer focused on building products with extra attention to detail",
  summary:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lacinia tincidunt, nunc nunc ldolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "rrg.connect@gmail.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RiddhiRaj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/riddhi-raj-ghosh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rrgindeed",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Management, Kolkata",
      degree: "B.Tech. in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning",
      start: "2021",
      end: "2025",
    },
    {
      school: "The Modern Academy, Kolkata",
      degree: "Higher Secondary Education (10+2) specializing in Science with Computer Science and Mathematics as major subjects",
      start: "2008",
      end: "2021",
    },
    
  ],
  work: [
    {
      company: "Calcutta Electric Supply Corporation Ltd.",
      link: "",
      badges: [],
      title: "Java Developer Intern",
      // logo: ParabolLogo,
      start: "June 5, 2023",
      end: "July 1, 2023",
      description:
        "Engineered a scalable system for Meter Inspection, streamlining data collection and analysis processes. Used Oracle databases to efficiently manage and store critical data, ensuring data integrity and reliability, with Spring Boot to enhance system performance, optimize resource utilization, and simplify application deployment",
    },
    
    {
      company: "ISRO",
      link: "https://www.isro.gov.in",
      badges: [],
      title: "Online Training Programme",
      // logo: NSNLogo,
      start: "July 20, 2023",
      end: "August 7, 2023",
      description: "Explored the significance and history of space research and exploration, & ISRO's role in it; astrophysical principles,including celestial phenomena, cosmic structures, and the behavior of matter and energy in the universe and delved into astrochemistry, exploring the chemical composition of cosmic objects.",
    },
  ],
  skills: [
    "HTML","CSS","JavaScript","C","C++","Java",
    "Latex","Markdown",
    "Bootstrap","Tailwind CSS","Springboot","Thymeleaf","Flask",
    "MySql","Oracle","Node.js",
    "Python","Scikit learn","Numpy","Panda","Tensorflow", "Keras", "PyTorch", "OpenCV",
    "GCP for AI"

  ],
  projects: [
    {
      title: "Personal Portfolio",
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
        "My personal website and blog. Built with Next.js and Notion API",
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
        "Minimalist calendars, habit trackers and planners generator",
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
      description:
        "Howdy is a place for you to join communities you care about",
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
