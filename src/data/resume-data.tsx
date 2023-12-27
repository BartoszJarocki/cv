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
  name: "Đinh Duy Phong",
  initials: "BJ",
  location: "Nam Tu Liem, Hanoi, VN",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Full Stack Developer",
  summary:
    "As a seasoned software developer with a cumulative 5 years of experience, I have a specialized focus on the Laravel framework for the past 3 years and the FastAPI framework for 2 years. My skill set extends to DevOps such as Linux System Administration, Docker, and CI/CD, and I have also delved into frontend development using JavaScript frameworks such as Vue.js.",
  avatarUrl: "https://avatars.githubusercontent.com/u/15725832?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "fonger900@gmail.com",
    tel: "+84969022470",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fonger900",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fonger900/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/fonger900",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "FPT University",
      degree: "Bachelor's Degree in Information Assurance",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "FPT Information System",
      link: "https://www.fis.com.vn/",
      badges: [],
      title: "Senior Back End Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Maintain, refactor, and design Core Backend Service. Write automation scripts in Python. Administer GitLab server. Mentor junior developers and more. Technologies: Python, RESTful API, FastAPI, RabbitMQ, Apache Kafka, PostgreSQL, GitLab",
    },
    {
      company: "FPT Information System",
      link: "https://www.fis.com.vn/",
      badges: [],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "2017",
      end: "2021",
      description:
        "Implement, deploy, and manage an Incident management web portal. Design UI/ UX. Write software documents. Technologies: Laravel, Javascript, jQuery, Chart.js, Bootstrap 4, NodeJS, MySQL, Docker, Figma, Balsamiq Wireframe",
    }
  ],
  skills: [
    "Python",
    "FastAPI",
    "Laravel",
    "NodeJS",
    "Bootstrap 4",
    "RESTful API",
    "Linux System Administration",
    "PostgreSQL",
    "Docker",
    "GitLab",
    "GitLab CI/CD",
    "Figma"
  ],
  projects: [
    {
      title: "Core Backend Service",
      techStack: [
        "Back End Developer",
        "FastAPI",
        "Docker",
        "PostgreSQL",
      ],
      description: "A set of RESTful API endpoints designed to handle supportive functions for security operations. These include tasks such as synchronizing data between databases, managing on-call shift schedules, and providing data to reporting services.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Oncall-schedule Generator",
      techStack: ["Back End Developer", "Python"],
      description:
        "A Python script that creates a monthly on-call shift schedule that complies with intricate requirements, including random and equitable distribution of shifts, and generating schedule to CSV format.",
      logo: MonitoLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Phone-call Bot",
      techStack: ["Back End Developer", "Python", "RESTful API", "PostgreSQL", "Asterisk"],
      description:
        "Notify on-call users of phone calls according to schedule and escalation policy.",
      logo: JarockiMeLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Email Delivery Service",
      techStack: ["Back End Developer", "FastAPI", "RabbitMQ", "Docker"],
      description:
        "A microservice is responsible for managing the email-sending functionality by exposing a RESTful API to other services. It operates in a queue-style fashion, effectively mitigating the risk of request loss to the SMTP server caused by exceeding the maximum number of requests per second.",
      logo: Minimal,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Incident Management Web Portal",
      techStack: ["Full Stack Developer", "Laravel", "Javascript", "jQuery", "Bootstrap 4", "NodeJS","MySQL", "Nginx", "Docker"],
      description:
        "Effectively oversee security incidents through the web portal. Key functionalities include incident management, user administration, and email notifications, among others.",
      logo: BarepapersLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
