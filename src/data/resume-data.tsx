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
import { Github, ExternalLink, StickyNote, Youtube } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fatih Yarlıgan",
  initials: "FY",
  location: "İstanbul, Türkiye",
  locationLink: "https://www.google.com/maps/place/istanbul",
  about: "A engineer who is curious about new technologies and wants to see bigger picture",
  summary: "During my journey of self-discovery, I had experience in many Web App, Mobile App and Machine Learning. In light of these my experiences, I decided to build my career based on back end development. During my undergraduate education, I acquired skills such as C++, Java, OOP, Data Structures through project development-based learning. By working part-time in last years of my education, I noticed importance of architecture and clean code principles in working as part of a team.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQHiNcw0LdhWKA/profile-displayphoto-shrink_400_400/0/1716917137118?e=1722470400&v=beta&t=_0_gpRu4-XFyYzPZiqdZhh4hp5PH-Acl-jlitKdOIjg",
  personalWebsiteUrl: "https://yarliganfatih.github.io/",
  contact: {
    email: "fatih-yarligan@outlook.com",
    tel: "+905348700025",
    social: [
      {
        name: "@yarliganfatih",
        url: "https://github.com/yarliganfatih",
        icon: GitHubIcon,
      },
      {
        name: "@yarliganfatih",
        url: "https://www.linkedin.com/in/yarliganfatih/",
        icon: LinkedInIcon,
      },
      {
        name: "Portfolio",
        url: "https://yarliganfatih.github.io/",
        icon: ExternalLink,
      },
      {
        name: "CV",
        url: "https://yarliganfatih.github.io/cv/",
        icon: StickyNote,
      },
    ],
  },
  education: [
    {
      school: "Bahçeşehir University",
      degree: "Bachelor's Degree in Computer Engineering with a full scholarship achieved by ranking in top 0.3% in central placement exam. Additionally, completed English Preparatory School and Software Engineering as a Minor Program",
      date: "09.2018 - 07.2023",
    },
    {
      school: "İstanbul University",
      degree: "Bachelor's Degree in Business",
      date: "from 03.2020",
    },
  ],
  work: [
    {
      company: "NDB Technology",
      link: "https://ndb.technology",
      location: "Lisbon, Portugal",
      projectsTag: "contributed :",
      badges: [
        "Hybrid"
      ],
      title: "Back End Engineer | Spring Boot Java",
      date: "12.2023 - 06.2024",
      description: "I went to Lisbon, Portugal for this adventure, which I participated in with Erasmus+ Internship Program. I joined a dynamic team to examine and develop existing projects. Projects are generally developed with Microservice Architecture. There are also some works on Blockchain. Technologies: Spring Boot, GraphQL, Docker, React.ts",
      projects: [
        {
          title: "Spring Boot GraphQL API",
          techStack: [
            "Java",
            "Spring Boot",
            "JPA Hibernate",
            "Oracle",
            "GraphQL"
          ],
          description: "developed a GraphQL API based on provided database schemas for NDB. In addition to concepts of Query and Mutation, I learned how to easily document API with Playground",
          link: undefined,
          links: undefined,
        },
        {
          title: "OrbVPN",
          techStack: [
            "Java",
            "Spring Boot",
            "React.ts",
            "GraphQL"
          ],
          description: "contributed to web app of project, whose mobile app was completed",
          link: {
            label: "orbvpn.com",
            icon: "external-link",
            href: "https://orbvpn.com",
          },
          links: undefined,
        },
      ],
    },
    {
      company: "BAU Global Online",
      link: "https://baugo.online/",
      location: "İstanbul, Türkiye",
      projectsTag: "contributed :",
      badges: [
        "Part Time",
        "Hybrid"
      ],
      title: "Back End Developer | CodeIgniter4 PHP",
      date: "11.2021 - 07.2023",
      description: "Progressed from trainee to part-time, contributed to baugo.online which \"Led an award-winning project\" and some side projects using CodeIgniter4 (a PHP MVC framework). Developed REST APIs for Authorization and CRUD operations, implemented performance improvements with complex SQL queries, and conducted database normalization, involved in analysis tools. Also occasional work on DevOps, and front-end development using Vue.js. Technologies: CodeIgniter4, MVC, OAuth2, MySQL, RDBMS",
      projects: [
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
          title: "etkilesimlikitapokuma",
          techStack: [
            "Side Project",
            "CodeIgniter3",
            "MySQL"
          ],
          description: "contributed some side projects for some updates requested by researchers",
          links: undefined,
          link: {
            label: "etkilesimlikitapokuma",
            icon: "external-link",
            href: "https://etkilesimlikitapokuma.com/",
          },
        },
        {
          title: "stopperai",
          techStack: [
            "Side Project",
            "CodeIgniter3",
            "MySQL"
          ],
          description: "contributed some side projects for some updates requested by researchers",
          links: undefined,
          link: {
            label: "stopperai.com",
            icon: "external-link",
            href: "https://stopperai.com/survey/stopper-durduruculuk-testi-doktora-projesi-instagram-sut-reklami/1",
          },
        },
        {
          title: "İpekyol Akademi",
          techStack: [
            "CodeIgniter4",
            "MVC",
            "MySQL",
            "RDBMS"
          ],
          description: "developed our Education Platform project, which we used as a draft, from scratch in accordance with Clean Code and Architecture",
          link: {
            label: "ipekyolakademi.com",
            href: "https://ipekyolakademi.com/bulkit/home/index/baugo",
          },
          links: [
            {
              label: "bulkit theme",
              icon: "external-link",
              href: "https://ipekyolakademi.com/bulkit/home/index/baugo",
            }
          ],
        },
      ],
    },
    {
      company: "USCEW",
      link: "https://uscew.com/services-version-one/",
      location: "İstanbul, Türkiye",
      projectsTag: "developed 0 to 1 :",
      badges: [
        "Freelance",
        "Remote"
      ],
      title: "Full Stack Developer | PHP",
      date: "02.2021 - 07.2023",
      description: "Gained a lot of experience in this initiative, which I participated in as a start-up project. With first project I developed, Jobsangel, hundreds of users bought and sold services, then Gomekan, dozens of businesses provided digital subscriptions and discounts to their customers. Finally, I developed an influencer-based e-commerce web app with BakımUzmanı. Apart from these, we gained various customer interactions and investments. Technologies: PHP, MySQL, Bootstrap, Wordpress",
      projects: [
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
      ],
    },
    {
      company: "Vagustim Bioelectronics",
      link: "https://www.vagustim.io/",
      location: "İTÜ Teknokent",
      projectsTag: "contributed :",
      badges: [
        "Remote"
      ],
      title: "Back End Developer | Node.js",
      date: "06.2022 - 11.2022",
      description: "Initiated a demo project to embrace new technologies like Next.js and MongoDB, paving way for our main project, E-tahlil. Gained valuable startup experience, employing Agile Project Management and implementing a microservices layered architecture. Contributed to restAPI and developed OTP Authentication. Technologies: Node.js, Express.js, Next.js, MongoDB, Firebase, AWS, Complex Git",
      projects: [
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
          description: "Contributed to backend by developing RESTful APIs, including Payment and Auth Services utilizing Firebase. Implemented a service-layered architecture for modeling NoSQL database in a flexible and agile manner",
          link: undefined,
          links: undefined,
        },
      ]
    },
    {
      company: "BAUSTEM",
      link: "https://inteach.org/",
      location: "İstanbul, Türkiye",
      projectsTag: "contributed :",
      badges: [
        "Remote"
      ],
      title: "Front-End Developer | React.js",
      date: "02.2021 - 08.2021",
      description: "Served as a front-end developer for Labstar project at BAUSTEM. Initially skilled in HTML, CSS, and JS, I enhanced my competencies and transitioned to React.js, Technologies: React.js, basic git commands, postman, yarn",
      projects: [
        {
          title: "Labstar",
          techStack: [
            "React.js",
            "CSS Libraries"
          ],
          description: "I contributed Admin Dashboard and Login Part on Front End Side",
          link: {
            label: "labstar.org",
            href: "http://labstar.inteach.org/"
          },
          links: undefined,
        },
      ]
    },
  ],
  languages: [
    {
      label: "English",
      level: "B2"
    },
    {
      label: "German",
      level: "A2"
    }
  ],
  skills: [
    "Spring Boot | Java",
    "GraphQL",
    "MySQL | RDBMS",
    "MongoDB",
    "AWS",
    "GCP",
    "Node.js",
    "TypeScript",
    "React.js",
    "React Native",
    "Python",
    "CodeIgniter4 | PHP",
    "MVC",
    "DevOps",
  ],
  projects: [
    {
      title: "Java Principles with Mathematical Notations",
      techStack: [
        "Java",
        "OOP",
        "Unit Test"
      ],
      description: "created an architecture with Mathematical Notations to show how to use Java patterns, principles, and snippets in practice",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Java-Principles-with-Mathematical-Notations",
      },
      links: [
        {
          label: "Repository",
          icon: "github",
          href: "https://github.com/yarliganfatih/Java-Principles-with-Mathematical-Notations",
        },
      ],
    },
    {
      title: "Google Places Map",
      techStack: [
        "React.js",
        "Typescript",
        "Spring Boot",
        "GCP"
      ],
      description: "A draft of a web app for Google Places API, I added middleware API to minimize api request so app is more secure and less costly",
      link: {
        label: "github.com",
        href: "https://github.com/yarliganfatih/google-placesMap",
      },
      links: [
        {
          label: "frontEnd",
          icon: "github",
          href: "https://github.com/yarliganfatih/google-placesMap",
        },
        {
          label: "backEnd",
          icon: "github",
          href: "https://github.com/yarliganfatih/placesmap-restapi",
        },
      ]
    },
    {
      title: "Audit Logger restAPI",
      techStack: [
        "Java",
        "Spring Boot",
        "JPA Hibernate",
        "MySQL",
        "OAuth2"
      ],
      description: "developed a draft restAPI for Spring Boot with OAuth2 and Audit Logger, Records CRUD operations made to entities defined in AuditListener and when and by whom (with auth)",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Spring-Boot-Audit-Logger-restAPI",
      },
      links: [
        {
          label: "Repository",
          icon: "github",
          href: "https://github.com/yarliganfatih/Spring-Boot-Audit-Logger-restAPI",
        },
      ],
    },
    {
      title: "Rediscovery of Math",
      techStack: [
        "Node.js",
        "Unit Test"
      ],
      description: "Inspired by \"Animation vs Math\" video, I showed through coding that math consists of repetitive operations",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Rediscovery-of-Math",
      },
      links: [
        {
          label: "YT",
          icon: "youtube",
          href: "https://www.youtube.com/watch?v=p-Cm_FkD2Dg",
        },
        {
          label: "Post",
          icon: "medium",
          href: "https://medium.com/@yarliganfatih/rediscovery-of-math-afa300388d47",
        },
        {
          label: "Repo",
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
      description: "Show off skills you have acquired effectively in bulk by displaying your portfolio on timeline",
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
        {
          label: "Repo",
          icon: "github",
          href: "https://github.com/yarliganfatih/sticky-timeline-portfolio",
        }
      ],
    },
    {
      title: "Cross-Platform Apps",
      techStack: [
        "React Native",
        "Expo",
      ],
      description: "Unlike Flutter, I quickly adapted to React Native since I was in Javascript and React ecosystem",
      link: null,
      links: [
        {
          label: "WhatsappGPT",
          icon: "github",
          href: "https://github.com/yarliganfatih/WhatsappGPT",
        },
        {
          label: "Demo",
          icon: "github",
          href: "https://github.com/yarliganfatih/Cross-Platform-Mobile-App-Demo",
        },
      ]
    },
    {
      title: "Prediction System",
      techStack: [
        "Python",
        "Jupyter Notebook",
        "Machine Learning"
      ],
      description: "For our interdisciplinary capstone project, 'ML in The Textile Industry,' we developed a prediction algorithm for MRP, involving data pre-processing, model training, and project integration",
      link: {
        label: "github.com",
        href: "https://github.com/yarliganfatih/Machine-Learning-App-in-the-Textile-Industry",
      },
      links: undefined,
    },
    {
      title: "Chrome Extensions",
      techStack: [
        "Javascript",
        "Google Cloud Platform"
      ],
      description: "developed some projects by adding features to websites that I wondered 'why they didn't develop this?' through DOM manipulation",
      link: null,
      links: [
        {
          label: "Youtube Live Comments",
          icon: "github",
          href: "https://github.com/yarliganfatih/Youtube-Live-Comments",
        },
        {
          label: "Twitter Collections",
          icon: "github",
          href: "https://github.com/yarliganfatih/Twitter-Collections",
        },
      ]
    },
    {
      title: "Corporate Websites",
      techStack: [
        "Freelance",
        "Wordpress",
        "CSS"
      ],
      description: "designed some corporate websites with a suitable theme and plugins for customers",
      link: undefined,
      links: [
        {
          label: "Medialoji",
          icon: "external-link",
          href: "https://medialoji.com/",
        },
        {
          label: "nisaelektrik",
          icon: "github",
          href: "https://yarliganfatih.github.io/HTML-Template/",
        },
        {
          label: "hasyapımuhendislik",
          icon: "lock",
          href: "",
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
      links: [
        {
          label: "Repository",
          icon: "github",
          href: "https://github.com/yarliganfatih/Charge-Station-Map-Kit-App-with-HMS",
        }
      ],
    },
    {
      title: "ECG Filter",
      techStack: [
        "Matlab",
        "Data Visualization"
      ],
      description: "A project I developed to display analyzes requested by biomedical engineering students based on data",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/yarliganfatih/Matlab-ECG-Filter",
      },
      links: [
        {
          label: "Repository",
          icon: "github",
          href: "https://github.com/yarliganfatih/Matlab-ECG-Filter",
        }
      ],
    },
    {
      title: "Online Test System",
      techStack: [
        "Freelance",
        "PHP",
        "MySQL",
        "RDBMS"
      ],
      description: "University must RDBMS course reshaped my project approach, Thereupon, I developed a web project displaying test statistics from a quiz pool",
      link: null,
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
      title: "Programming at University",
      techStack: [
        "C++",
        "Python",
        "Java",
      ],
      description: "Computer Engineering at university with project based courses: Algorithm, OOP, Data Structures, Network, RDBMS..",
      link: {
        label: "github.com/yarliganfatih",
        href: "https://github.com/stars/yarliganfatih/lists/my-course-projects",
      },
      links: [
        {
          label: "Embedded Programming",
          icon: "github",
          href: "https://github.com/yarliganfatih/SQL-RDBMS-Online-Test-System",
        },
        {
          label: "Socket Programming",
          icon: "github",
          href: "https://github.com/yarliganfatih/TCP-UDP-File-Transfer",
        },
        {
          label: "Object Oriented Prog..",
          icon: "github",
          href: "https://github.com/stars/yarliganfatih/lists/my-course-projects",
        }
      ],
    },
    {
      title: "Simple Games",
      techStack: [
        "Java",
        "OOP",
        "GUI",
        "Javascript",
        "PHP"
      ],
      description: "Some desktop games I developed for OOP courses we took at university, Some web games I developed to improve myself",
      link: undefined,
      links: [
        {
          label: "Desktop Games",
          icon: "github",
          href: "https://github.com/stars/yarliganfatih/lists/my-desktop-games"
        },
        {
          label: "Web Games",
          icon: "github",
          href: "https://github.com/stars/yarliganfatih/lists/my-web-games"
        },
      ]
    },
  ],
} as const;
