
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ozcan Ozgur",
  initials: "OZ",
  location: "Istanbul, Turkey, CET",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Dedicated Software Engineer specializing in the creation of premium quality products.",
  summary:
    "As a Software Engineer, I specialize in taking products from concept to launch. I excel in creating mobile apps and taking responsibility where individuals perform at their best. Currently, I work mostly with TypeScript, React, React Native. I have over 5 years of experience working remotely and Hybrid with companies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13644092?v=4",
  personalWebsiteUrl: "https://ozcanozgur.com",
  contact: {
    email: "ozcanozgur123@gmail.com",
    tel: "+905394947484",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ozcanozgur",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ozcan-ozgur/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@ozcan-ozgur",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Istanbul Kultur University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Innovance Consultancy",
      link: "https://innovance.com.tr/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "2023",
      end: null,
      description:
        "Developing and maintaining React & React Native applications. Technologies: React, React Native, TypeScript",
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["Hybrid"],
      title: "Software Developer",
      start: "2020",
      end: "2023",
      description:
        "Implemented new features of HMS(Huawei Mobile Service) Core, led a squad, community support, delivered comprehensive documentation, demos, and articles. Technologies: React Native, TypeScript, Java, Swift",
    },
    {
      company: "Aktif Bank",
      link: "https://www.aktifbank.com.tr/",
      badges: ["On Site"],
      title: "Intership",
      start: "2021",
      end: "2021",
      description:
        "Developed a Windows Form application to analyze and compare data between versions related to the transportation system. Technologies: C#, Windows Form Application, SQLite",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Java",
    "Swift",
  ],
  projects: [
    {
      title: "Huawei HMS Core",
      techStack: [
        "Lead React Native Developer",
        "Typescript",
        "Java",
        "Swift",
      ],
      description:
        "Developed React Native plugins, led development teams, and authored technical articles & documents. Managed community support.",
      link: {
        href: "https://github.com/HMS-Core/hms-react-native-plugin",
      },
    },
    {
      title: "Vodafone Pay",
      techStack: ["React", "React Native", "TypeScript"],
      description:
        "Developed a digital wallet application using React Native, focusing on mobile and back office solutions.",
      link: {
        href: "https://www.vodafonepay.com.tr/",
      },
    },
    {
      title: "Letim",
      techStack: ["React Native", "TypeScript", "Native Modules", "React Query"],
      description:
        "Developed and maintained a React Native mobile wallet app focused on money transfers.",
      link: {
        href: "https://letim.app/",
      },
    },
    {
      title: "Baskent Kart",
      techStack: ["React Native", "React Native Web", "TypeScript", "Redux"],
      description:
        "Contributed to the development of a wallet application for the capital city of Turkey",
      link: {
        href: "https://www.baskentkart.com.tr/",
      },
    },
    {
      title: "Sutbir",
      techStack: ["React Native", "TypeScript"],
      description: "Developed a React Native app for managing livestock and distributing government financial aid to farmers.",
    },
    {
      title: "E-Vital",
      techStack: ["Java", "Android", "IoT"],
      description:
        "Android application integrated with Arduino that wirelessly monitors vital signs of the human body.",
    },
  ],
} as const;
