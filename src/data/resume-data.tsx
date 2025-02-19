import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo
} from "@/images/logos";

export const RESUME_DATA = {
    name: "Federico Benedetti",
    initials: "FB",
    location: "Fermignano, Marche, Italy",
    locationLink: "https://www.google.com/maps/place/Fermignano",
    about:
        "Fullstack Software Developer · UX/UI enthusiast · Co-founder of Yourself App",
    summary: "As a full-stack developer at Proximo Srl with a background in computer science from the University of Marche, I specialize in software engineering, database management, and system architecture. I've developed a range of software from enterprise solutions to mobile apps. Committed to high-quality code and innovative problem-solving, I excel in remote work and teamwork.",
    avatarUrl: "https://avatars.githubusercontent.com/u/26311786?v=4",
    personalWebsiteUrl: "https://fexx.dev",
    contact: {
        email: "fexxdev@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/fexxdev",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/fexxdev/",
                icon: LinkedInIcon,
            },
            {
                name: "X",
                url: "https://twitter.com/fexxdev",
                icon: XIcon,
            },
        ],
    },
    education: [
        {
            school: "ITIS E. Mattei",
            degree: "High School Diploma in Computer Science",
            start: "2013",
            end: "2018",
        },
    ],
    work: [
         {
            company: "Nebula S.R.L.",
            link: "https://teamnebula.it/",
            badges: ["Hybrid"],
            title: "Full Stack Developer",
            logo: null,
            start: "Oct 2023",
            end: "Today",
            description:
                "Full stack software developer. Building a variety of software solutions for clients from enterprise solutions to mobile apps.",
        },
        {
            company: "Proximo S.R.L.",
            link: "https://www.prxm.it/",
            badges: ["Hybrid"],
            title: "Full Stack Developer",
            logo: null,
            start: "Feb 2019",
            end: "Today",
            description:
                "Full stack software developer. Building a variety of software solutions for clients from enterprise solutions to mobile apps.",
        },
        {
            company: "Loccioni",
            link: "https://www.loccioni.com/it/",
            badges: ["Internship"],
            title: "Frontend Developer",
            logo: null,
            start: "Aug 2017",
            end: "Sept 2017",
            description:
                "Frontend developer in Loccioni.",
        },
        {
            company: "Loccioni",
            link: "https://www.loccioni.com/it/",
            badges: ["Internship"],
            title: "Frontend Developer",
            logo: null,
            start: "May 2017",
            end: "June 2017",
            description: "Frontend developer @ Aulos team in Loccioni.",
        },
        {
            company: "Regini Informatica S.R.L.",
            link: "https://www.regini.it/wp/",
            badges: ["Internship"],
            title: "Computer Technician",
            logo: null,
            start: "May 2016",
            end: "June 2016",
            description: "Computer technician for a local company",
        },
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "React Native",
        "Xamarin Forms / MAUI",
        "C#",
        "Angular",
        "MongoDB",
        "Elasticsearch",
        "TailwindCSS"
    ],
    projects: [
        {
            title: "Yourself",
            techStack: [
                "Side Project",
                "TypeScript",
                "React Native",
                "Firebase",
            ],
            description: "A platform that guides you through the process of exploring your inner self",
            logo: ConsultlyLogo,
            link: {
                label: "Yourself",
                href: "https://www.your-self.it/",
            },
        }
    ]
} as const;
