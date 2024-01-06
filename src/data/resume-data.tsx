import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Alexis Zugasti",
  initials: "AZ",
  location: "Monterrey, CST",
  locationLink: "https://www.google.com/maps/place/Monterrey",
  about:
    "Web Developer and QA Enginner focused on building innovative products with extra attention to details",
  summary:
    "As a seasoned Front End Developer, I've spent three dynamic years shaping web experiences globally. Proficient in TypeScript, React, Node.js, and GraphQL, I navigate the full development lifecycle from prototyping to automated testing. Leading development teams fuels my passion for creating optimal work environments. With a background in QA engineering, I ensure not just visual appeal but also rigorous testing. My commitment to excellence and client satisfaction has led to successful products, marking my journey from local structures to a global digital landscape.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39324969?v=4",
  contact: {
    email: "alexiszugasti@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alexisavz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexis-zugasti-23a26a196/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Monterrey Institute of Technology",
      degree: "Bachelor's Degree in Digital Systems and Robotics Engineering",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Divelement Web Services",
      link: "https://divelement.io",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "Current",
      description:
        "Led Dev Team, Implemented new features, provided support for existing projects, developed new websites, experience migrating projects to new technologies. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Divelement Web Services",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "QA Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "Current",
      description:
        "Implemented automated testing for a different range of web applications. Led the process of conducting manual testing on several websites and applications. Spearheaded the implementation of Quality Assurance processes.",
    },
    {
      company: "CVA ITESM",
      link: "https://www.centroscomunitariosdeaprendizaje.org.mx/",
      badges: [],
      title: "Web Developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2020",
      description: "Migrated ITESM paid english course to newer technologies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/GatsbyJS",
    "Node.js",
    "ExpressJS",
    "GraphQL",
    "Playwright",
    "SQL",
    "Python",
    "HTML",
    "CSS",
    "Tailwind",
    "C",
  ],
  projects: [
    {
      title: "Fifty Plus Health",
      techStack: ["Lead Developer","Typescript", "React", "Drupal"],
      description:
        "Led development team, implemented new features, delegated work, and managed web infrastructure for a senior health website.",
      logo: MobileVikingsLogo,
    },
    {
      title: "MemoryCare",
      techStack: ["TypeScript", "React", "Next.js", "Contentful"],
      description:
        "Implemented new features as well as tracking metrics for a memory senior care provider.",
      logo: MonitoLogo,
      link: {
        label: "memorycare.com",
        href: "https://memorycare.com/",
      },
    },
    {
      title: "MetaCX",
      techStack: ["Typescript","React", "GatsbyJS", "Sanity"],
      description: "Implemented new features and provided support for website.",
      logo: JarockiMeLogo,
      link: {
        label: "metacx.com",
        href: "https://metacx.com",
      },
    },
    {
      title: "Rachio",
      techStack: ["Typescript","React", "Shopify", "Mailchimp"],
      description:
        "Managed sales events, implemented new features, provided support for Rachio's several e-commerce sites.",
      logo: Minimal,
      link: {
        label: "rachio.com",
        href: "https://rachio.com/",
      },
    },
    {
      title: "Confirm Biosciences",
      techStack: ["Typescript","React", "GatsbyJS", "Shopify", "Sanity"],
      description:
        "Managed sales events, implemented new features, provided support for Confirm's several e-commerce sites.",
      logo: BarepapersLogo,
      link: {
        label: "www.confirmbiosciences.com",
        href: "https://www.confirmbiosciences.com/",
      },
    },
    {
      title: "Caring Partners",
      techStack: ["TypeScript", "React", "GatsbyJS", "Contentful"],
      description:
        "Implemented new features and provided support for Caring partners portal",
      logo: YearProgressLogo,
      link: {
        label: "partners.caring.com",
        href: "https://partners.caring.com",
      },
    },
    {
      title: "ClimateCheck",
      techStack: ["TypeScript", "React", "Node.js", "GraphQL", "Sanity"],
      description: "Lead Front End Developer for ClimateCheck website",
      logo: ParabolLogo,
      link: {
        label: "climatecheck.com",
        href: "https://www.climatecheck.com",
      },
    },
    {
      title: "ScienceTrek",
      techStack: ["PHP", "HTML", "twig", "Javascript"],
      description: "Lead Frontend Developer for CBS Idaho program page",
      logo: EvercastLogo,
      link: {
        label: "sciencetrek.org",
        href: "https://sciencetrek.org/",
      },
    },
    {
      title: "Tyler Karu",
      techStack: ["Typescript", "React", "GatsbyJS", "Sanity"],
      description:
        "Implemented new features and provided support for Tyler Karu's landing page.",
      logo: MobileVikingsLogo,
      link: {
        label: "tylerkaru.com",
        href: "https://tylerkaru.com/",
      },
    },
    {
      title: "Basic English for a Daily Life",
      techStack: ["React", "Tailwind"],
      description:
        "Updated ITESM english paid course from deprecated technologies.",
      logo: MobileVikingsLogo,
      link: {
        label: "www.centroscomunitariosdeaprendizaje.org.mx",
        href: "https://www.centroscomunitariosdeaprendizaje.org.mx/capacitacion/conferencias/curso-en-basic-english-daily-life-0"
      },
    },
    {
      title: "Sonicop",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Playwright",
        "SQL",
        "Web App",
      ],
      description:
        "Building web apps to modernize music management operations.",
      logo: ConsultlyLogo,
      link: {
        label: "www.sonicop.com",
        href: "https://www.sonicop.com/",
      },
    },
    {
      title: "Visier",
      techStack: ["Manual Testing"],
      description:
        "Performed manual and functional testing.",
      logo: MobileVikingsLogo,
      link: {
        label: "www.visier.com",
        href: "https://www.visier.com/",
      },
    },
    {
      title: "Bitwarden",
      techStack: ["Manual Testing"],
      description:
        "Performed manual and functional testing.",
      logo: MobileVikingsLogo,
      link: {
        label: "Bitwarden",
        href: "https://bitwarden.com/help/",
      },
    },
    {
      title: "CDI-health",
      techStack: ["Automated Testing", "Playwright"],
      description:
        "Implemented automated testing for internal use web app.",
      logo: MobileVikingsLogo,
    },
  ],
} as const;
