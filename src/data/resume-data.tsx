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
  DolbyLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Miłosz Kucharski",
  initials: "MK",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Python Cloud QA Intern | Computer Science Student | Aspiring DevOps Engineer",
  summary:
    "Enthusiastic and detail-oriented QA Engineer with a passion for quality and innovation. Currently a working student diving deep into the realms of software testing and quality assurance, I am on a transformative journey towards becoming a skilled DevOps developer, particularly in cloud technologies.    ",
  avatarUrl: "https://avatars.githubusercontent.com/u/43927240?v=4",
  personalWebsiteUrl: "https://mkuch.pl",
  contact: {
    email: "miloszkucharski@gmail.com",
    tel: "contact for phone number",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Butterski",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Lower Silesia DSW (current)",
      degree: "Engineer's degree in Computer Science - Cloud Systems and Applications",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Dolby",
      link: "https://www.dolby.com/",
      badges: ["Hybrid"],
      title: "Python Cloud QA Intern",
      logo: DolbyLogo,
      start: "08.2023",
      end: "now",
      description:
        "Implemented new testing tools and test cases, worked on improving the tests. Technologies: Python, Pytest, JSON, Docker, AWS, Linux, Bash",
    },
    {
      company: "Adam Świrkowski",
      link: "",
      badges: [],
      title: "Professional Practice with React Native",
      start: "10.2021",
      end: "10.2022",
      description:
        "Helping with developing React Native application for a client. Technologies: React Native, TypeScript, Redux, Expo, Git, GitLab, Jira, Scrum, Agile",
    },
    {
      company: "SkillWeb",
      link: "skillweb.pl",
      badges: [],
      title: "WordPress Developer",
      start: "03.2021",
      end: "11.2021",
      description:
        "Developing WordPress websites for clients, helping with sites deployement. Technologies: WordPress, PHP, HTML, CSS",
    },
  ],
  skills: [
    "Python",
    "Pytest",
    "JavaScript",
    "TypeScript",
    "React/React Native",
    "Node.js",
    "MySQL",
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "Bash",
    "WordPress",
    "Nginx",
    "Cloud Computing",
    "Computer Networking",
  ],
  projects: [
    {
      title: "PizzaClicker Game",
      techStack: [
        "Side Project",
        "React",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "Docker"
      ],
      description: "Simple Cookie Clicker clone with pizza theme",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/pizza-clicker",
      },
    },
    {
      title: "Film Repertuar App",
      techStack: ["Side Project", "React", "Express", "JavaScript", "MySQL", "HTML", "CSS"],
      description:
        "Simple web application for browsing movies and cinemas made to train my skills in React and Express",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/film-repertuar-app",
      },
    },
    {
      title: "Colors Game",
      techStack: ["Side Project", "React", "TypeScript", "TailwindCSS", "HTML"],
      description:
        "Silly game where you guess the random color RGB value based on color preview",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/color-game",
      },
    },
    
  ],
} as const;
