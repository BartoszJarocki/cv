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
import { Github, ExternalLink, Youtube } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fatih Yarlıgan",
  initials: "FY",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisboa",
  about: "A developer who is curious about new technologies and wants to see the bigger picture",
  summary: "During my journey of self-discovery, I had experience in Full Stack, Mobile App and Machine Learning. I want to continue from the Back End area to get a handle on what's going on behind the scenes of everything. During my undergraduate education, I acquired skills such as C++, Java, OOP, Data Structures through project development-based learning. By working part-time in the last years of my education, I understood the importance of architecture and clean code principles in working as a team",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFubIcq64Htug/profile-displayphoto-shrink_800_800/0/1690649249709?e=1711584000&v=beta&t=z29-6SzhUergAB7yS_LSezSKYi-Yzyu7UDoazIA6v0w",
  personalWebsiteUrl: "https://yarliganfatih.github.io/",
  contact: {
    email: "fatih-yarligan@outlook.com",
    tel: "",
    tel2: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yarliganfatih",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yarliganfatih/",
        icon: LinkedInIcon,
      },
      {
        name: "Portfolio",
        url: "https://yarliganfatih.github.io/",
        icon: ExternalLink,
      },
    ],
  },
  education: [
    {
      school: "Bahçeşehir University",
      degree: "Bachelor's Degree in Computer Engineering with a full scholarship achieved by ranking in the top 0.3% in the central placement exam. Additionally, completed English Preparatory School and Software Engineering as a Minor Program",
      date: "2018 - 2023",
    },
    {
      school: "İstanbul University",
      degree: "Bachelor's Degree in Business (frozen registration)",
      date: "from 2020",
    },
  ],
  work: [
    {
      company: "NDB",
      link: "https://ndb.technology",
      badges: [
        "Hybrid"
      ],
      title: "Back End Developer | Spring Java",
      date: "from 12.2023",
      description: "I came to Lisbon, Portugal for this adventure, which I participated in with the Erasmus+ Internship Program. I joined a dynamic team to examine and develop existing projects. Projects are generally developed with Microservice Architecture. Technologies: Spring Framework",
    },
    {
      company: "BauGO",
      link: "https://baugo.online/",
      badges: [
        "Part Time"
      ],
      title: "Back End Developer | CodeIgniter PHP",
      date: "11.2021 - 07.2023",
      description: "Progressed from trainee to part-time, contributing to baugo.online and side projects using CodeIgniter (PHP framework). Developed REST APIs for Authorization and CRUD operations, implemented performance improvements, and conducted database normalization, involved in analysis tools. Also occasional work on DevOps, and front-end development using Vue.js. Technologies: CodeIgniter4, MVC, OAuth2, MySQL, RDBMS",
    },
    {
      company: "Vagustim Bioelectronics",
      link: "https://www.vagustim.io/",
      badges: [
        "Remote"
      ],
      title: "Back End Developer | Node.js",
      date: "06.2022 - 11.2022",
      description: "Initiated a demo project to embrace new technologies like NextJS and MongoDB, paving the way for our main project, E-tahlil. Gained valuable startup experience, employing Agile Project Management and implementing a microservices layered architecture. Contributed to the restAPI and developed OTP Authentication. Technologies: Node.js, Express.js, MongoDB, Firebase, AWS, Complex Git",
    },
    {
      company: "BAUSTEM",
      link: "https://inteach.org/",
      badges: [
        "Remote"
      ],
      title: "Front-End Developer | React.js",
      date: "02.2021 - 08.2021",
      description: "Served as a front-end developer for the Labstar project at BAUSTEM. Initially skilled in HTML, CSS, and JS, I enhanced my competencies and transitioned to React.js, Technologies: React.js, basic git commands, postman, yarn",
    },
  ],
  languages: [
    {
      label: "English",
      level: "Upper Intermediate"
    },
    {
      label: "German",
      level: "Elementary"
    }
  ],
  skills: [
    "Java",
    "MySQL / RDBMS",
    "MongoDB",
    "Node.js",
    "TypeScript",
    "React Native",
    "CodeIgniter / PHP",
    "MVC",
    "Dev-Ops",
    "C/C++",
  ],
  projects: [
    {
      title: "Rediscovery of Math",
      techStack: [
        "Node.js",
        "Unit Test"
      ],
      description: "Inspired by the \"Animation vs Math\" video, I showed through coding that mathematics consists of repetitive operations",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Rediscovery-of-Math",
      },
      links: [
        {
          label: "My Video",
          icon: "youtube",
          href: "https://www.youtube.com/watch?v=p-Cm_FkD2Dg",
        },
        {
          label: "Repository",
          icon: "github",
          href: "https://github.com/yarliganfatih/Rediscovery-of-Math",
        },
      ],
    },
    {
      title: "Sticky Timeline Portfolio",
      techStack: [
        "React.js",
        "TypeScript"
      ],
      description: "Show off the skills you have acquired effectively in bulk by displaying your portfolio on the timeline",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/sticky-timeline-portfolio",
      },
      links: [
        {
          label: "My Portfolio",
          icon: "external-link",
          href: "https://yarliganfatih.github.io/",
        },
      ],
    },
    {
      title: "İpekyol Akademi",
      techStack: [
        "CodeIgniter4",
        "MVC",
        "MySQL",
        "RDBMS"
      ],
      description: "I developed our Education Platform project, which we used as a draft, from scratch in accordance with Clean Code and Architecture",
      link: {
        label: "ipekyolakademi.com",
        href: "https://ipekyolakademi.com/test/home/index/baugo",
      },
      links: [
        {
          label: "bulkit theme",
          icon: "external-link",
          href: "https://ipekyolakademi.com/bulkit/home/index/baugo",
        }
      ],
    },
    {
      title: "Prediction System",
      techStack: [
        "Python",
        "Jupyter Notebook",
        "Machine Learning"
      ],
      description: "For our interdisciplinary capstone project, 'ML in the Textile Industry,' we developed a prediction algorithm for MRP, involving data pre-processing, model training, and project integration",
      link: {
        label: "github.com",
        href: "https://github.com/yarliganfatih/Machine-Learning-App-in-the-Textile-Industry",
      },
      links: undefined,
    },
    {
      title: "Baugo Online",
      techStack: [
        "CodeIgniter4",
        "MySQL",
        "RDBMS"
      ],
      description: "Led an award-winning project, expanding its features significantly over time. Implemented enhancements including MVC architecture, complex SQL queries, and Database Normalization",
      link: {
        label: "baugo.online",
        href: "https://baugo.online/",
      },
      links: [
        {
          label: "2022 Awards",
          icon: "external-link",
          href: "https://www.altinorumcek.com/2022/sonuclar/#egitim",
        }
      ],
    },
    {
      title: "E-tahlil",
      techStack: [
        "Node.js",
        "MongoDB",
        "Next.js",
        "Firebase",
        "Express.js",
        "AWS"
      ],
      description: "Contributed to the backend by developing RESTful APIs, including Payment and Auth Services utilizing Firebase. Implemented a service-layered architecture for modeling the NoSQL database in a flexible and agile manner",
      link: undefined,
      links: undefined,
    },
    {
      title: "Bakım Uzmanı",
      techStack: [
        "Freelance",
        "PHP",
        "MySQL",
        "RDBMS"
      ],
      description: "A platform where users can purchase services from institutions for e-commerce purposes, I developed 0 to 1 as Full-Stack",
      link: {
        label: "bakimuzmani.com",
        href: "https://bakimuzmani.com/",
      },
      links: undefined,
    },
    {
      title: "Research Projects",
      techStack: [
        "Side Project",
        "CodeIgniter3",
        "MySQL"
      ],
      description: "contributed some side projects for some updates requested by researchers",
      link: undefined,
      links: [
        {
          label: "etkilesimlikitapokuma",
          icon: "external-link",
          href: "https://etkilesimlikitapokuma.com/",
        },
        {
          label: "stopperai.com",
          icon: "external-link",
          href: "https://stopperai.com/survey/stopper-durduruculuk-testi-doktora-projesi-instagram-sut-reklami/1",
        }
      ],
    },
    {
      title: "Corporate Websites (WP)",
      techStack: [
        "Freelance",
        "Wordpress"
      ],
      description: "designed some corporate websites with a suitable theme and plugins for the client",
      link: undefined,
      links: [
        {
          label: "Medialoji",
          icon: "external-link",
          href: "https://medialoji.com/",
        },
        {
          label: "hasyapımuhendislik",
          icon: "external-link",
          href: "https://hasyapımuhendislik.com/",
        },
      ],
    },
    {
      title: "Gomekan",
      techStack: [
        "Freelance",
        "PHP",
        "MySQL",
        "RDBMS"
      ],
      description: "A platform where users can get discounts from cafes with a QR code, I developed 0 to 1 as Full-Stack",
      link: {
        label: "bakimuzmani.com",
        href: "https://bakimuzmani.com/",
      },
      links: [
        {
          label: "Webview Apps",
          icon: "external-link",
          href: "http://gomekan.com/app/",
        },
      ],
    },
    {
      title: "MapKit Native App",
      techStack: [
        "Kotlin",
        "MVVM",
        "Android Studio"
      ],
      description: "Collaborated with Huawei on a Mobile App Dev course to develop a map-based charging station locator",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Charge-Station-Map-Kit-App-with-HMS",
      },
      links: undefined,
    },
    {
      title: "Embedded Programming",
      techStack: [
        "C++",
        "Arduino",
        "Tinkercad"
      ],
      description: "contributed to a digital clock project for Embedded Programming course we take compulsory at university",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/CPP-Arduino-Digital-Clock/",
      },
      links: undefined,
    },
    {
      title: "Online Test System",
      techStack: [
        "Freelance",
        "PHP",
        "MySQL",
        "RDBMS"
      ],
      description: "University must RDBMS course reshaped my project approach, Thereupon, I developed a web project displaying test statistics from a question pool",
      link: {
        label: "pararena.com",
        href: "https://jobsangel.net/pararena/",
      },
      links: [
        {
          label: "Database",
          icon: "github",
          href: "https://github.com/yarliganfatih/SQL-RDBMS-Online-Test-System",
        },
        {
          label: "Web App",
          icon: "external-link",
          href: "https://jobsangel.net/pararena/",
        },
      ]
    },
    {
      title: "Simple Desktop Games",
      techStack: [
        "Java",
        "OOP",
        "GUI"
      ],
      description: "Some of the simple clone games I developed for the OOP courses we took at university",
      link: undefined,
      links: [
        {
          label: "Alien Invaders",
          icon: "github",
          href: "https://github.com/yarliganfatih/JAVA-GUI-Alien-Invaders-Game"
        },
        {
          label: "Knight",
          icon: "github",
          href: "https://github.com/yarliganfatih/JAVA-GUI-Knigth-Animation"
        },
        {
          label: "Console Game",
          icon: "github",
          href: "https://github.com/yarliganfatih/OOP-Console-Game"
        },
      ]
    },
    {
      title: "Simple Web Games",
      techStack: [
        "Javascript",
        "PHP"
      ],
      description: "Some games I developed to improve myself when I started university",
      link: undefined,
      links: [
        {
          label: "XOX Game",
          icon: "github",
          href: "https://github.com/yarliganfatih/Online-XOX-Game"
        },
        {
          label: "SOS Game",
          icon: "github",
          href: "https://github.com/yarliganfatih/Online-XOX-Game"
        },
        {
          label: "10FastFinger with Lyrics",
          icon: "github",
          href: "https://github.com/yarliganfatih/10FastFinger-with-Lyrics"
        },
      ]
    },
    {
      title: "ECG Filter",
      techStack: [
        "Matlab",
        "Data Visualization"
      ],
      description: "A project I developed to display the analyzes requested by biomedical engineering students based on data",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Matlab-ECG-Filter",
      },
      links: undefined,
    },
    {
      title: "JobsAngel",
      techStack: [
        "Freelance",
        "PHP",
        "MySQL"
      ],
      description: "A platform where users can buy and sell services as freelancers, I developed 0 to 1 as Full-Stack",
      link: {
        label: "jobsangel.net",
        href: "https://jobsangel.net/",
      },
      links: undefined,
    },
    {
      title: "Labstar",
      techStack: [
        "React.js",
        "CSS Libraries"
      ],
      description: "I contributed Admin Dashboard and Login Part on Front End Side",
      link: undefined,
      links: undefined,
    },
  ],
} as const;
