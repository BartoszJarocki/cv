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
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Fermin Rodriguez Penelas",
  initials: "FRP",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires/",
  about:
    "Me gusta construir productos digitales, es mi trabajo y es mi tiempo libre",
  summary:
    "Llevo muchos años co-creando productos digitales. Desde side projects chicos con un par de visital al mes, a productos de inversion usados por 22 millones de latinoamericanos. En el camino aprendi lo basico de diseño y programación para poder llevar a la realidad las ideas que tengo.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1523984386340831233/jSlYyvDj_400x400.jpg",
  personalWebsiteUrl: "https://ferminrp.com",
  contact: {
    email: "cv@m.ferminrp.com",
    tel: "+541156924049",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ferminrp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ferminrp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ferminrp",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Católica Argentina",
      degree: "Lic. en Administración de Empresas",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Pedidos Ya",
      link: "https://pedidosya.com",
      badges: ["Product"],
      title: "Group Product Manager",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        'Lidere el dominio de "pricing and incentives" de cinco equipos a cargo de las promociones, descuentos, comisiones y propinas de la plataforma en todo latam.',
    },
    {
      company: "belo",
      link: "https://belo.app",
      badges: ["Product"],
      title: "Head of Product",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Lidere el equipos de producto y UX para la wallet, exchange y tarjeta.",
    },
    {
      company: "Mercado Pago",
      link: "https://mercadopago.com/",
      badges: ["Product"],
      title: "Product Manager",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2021",
      description:
        "Product Manager de los productos de asset management, con mas de 22 millones de latinoamericanos invertidos entre Argentina, Brasil y Mexico.",
    },
    {
      company: "Media Lab",
      link: "https://www.medialab.agency/",
      badges: ["Growth"],
      title: "Growth Analyst",
      logo: NSNLogo,
      start: "2017",
      end: "2019",
      description: "Automatizacion de los flujos de ventas b2b con web scrapping, armado de reportes automatico y cold emailing.",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "Svelte.js",
    "Figma",
    "SQL",
  ],
  projects: [
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
