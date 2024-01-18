import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Derrick Momanyi",
  initials: "DM",
  location: "Nairobi, Kenya, GMT+3",
  locationLink: "https://maps.app.goo.gl/o7TFRdL8StmcfQTE7",
  about:
    "Full Stack Software Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with PHP Laravel, React, Vue JS, Javascript,  Ruby on Rails and Node.js. As a recent graduate in Software Engineering, I am eager to embark on a journey of continuous learning and growth within the dynamic field of software development",
  avatarUrl: "", //look for a nice image
  personalWebsiteUrl: "",
  contact: {
    email: "hellomomanyi@gmail.com",
    tel: "+254703528403",
  social: [
      {
        name: "GitHub",
        url: "https://github.com/derrickmomanyi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/derrickmomanyi",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/guylikericky",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Moringa School",
      degree: "Software Engineering",
      start: "2022",
      end: "2023",
    },
    {
      school: "Kenyatta University",
      degree: "Mechanical Engineering (called off to pursue Software Engineering)",
      start: "2017",
      end: "2021",
    },
    {
      school: "Kiambu High School",
      degree: "Secondary School",
      start: "2013",
      end: "2016",
    },

  ],
  work: [
    {
      company: "Zynamis",
      link: "https://parabol.co",
      badges: ["Remote, In Office"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "date",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Bootstrap to Tailwind CSS and more. Technologies: React, Laravel, Vue JS",
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "React/Next.js/Remix",
    "Node.js",
    "PHP Laravel",
    "Vue JS",
  ],
  projects: [
    {
      title: "Hazi",
      techStack: [
        "Bootstrap",
        "Laravel",
        "JQuery",        
      ],
      description: "Hazi is a bulk communication tool, the all-in-one communication platform.",
      logo: ConsultlyLogo,
      link: {
        label: "hazi.co.ke/",
        href: "https://hazi.co.ke/",
      },
    },
    {
      title: "Tuni",
      techStack: ["Vue JS", "Tailwind", "Laravel",],
      description:
        "Tuni allows businesses to reach out to their audience in a fun and interactive way.",
      logo: MonitoLogo,
      link: {
        label: "tuni.ke/",
        href: "https://tuni.ke/",
      },
    },
    {
      title: "Gig",
      techStack: ["Vue JS", "Tailwind", "Laravel", 'Blade'],
      description: "GiG is a self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.",
      logo: YearProgressLogo,
      link: {
        label: "gig.co.ke",
        href: "https://gig.co.ke/",
      },
    },
    {
      title: "SoundScape",
      techStack: ["Tailwind", "Ruby on Rails", "React JS"],
      description:
        "SoundScape is a cutting-edge music app that allows you to fully immerse yourself in your favorite songs. With its sleek design and user-friendly interface",
      logo: JarockiMeLogo,
      link: {
        label: "soundscape.com",
        href: "",
      },
    },
    {
      title: "Tikiti Tamasha",
      techStack: ["Bootstrap", "Ruby on Rails", "React JS"],
      description:
        "This is an e-ticketing app that allows a user to view all current and upcoming events that have been posted by our various organizers",
      logo: BarepapersLogo,
      link: {
        label: "tikititamasha.com",
        href: "",
      },
    },   
   
  ],
} as const;
