import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dean Yang",
  initials: "DY",
  location: "Taichung, Taiwan, UTC+8 (Open to Remote/International Roles)",
  locationLink:
    "https://www.google.com/maps/place/406%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8C%97%E5%B1%AF%E5%8D%80",
  about:
    "Innovative Full Stack Engineer with a unique blend of technical expertise and a background in healthcare, dedicated to delivering scalable, high-performance solutions for global markets.",
  summary: (
    <>
      Experienced Full Stack Engineer with a strong focus on backend development
      and cloud-native architecture. Transitioning from a successful career in
      physical therapy, I combine empathy and analytical skills to drive
      innovation. Notable achievements include leading a migration from Node.js
      to Java that boosted performance by over <strong>30%</strong>, and
      developing enterprise-level systems using Docker, AWS, and CI/CD
      pipelines. Passionate about building products that meet international
      standards and enhance user experience.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/97731209?v=4",
  personalWebsiteUrl: "https://shengshengyang.github.io/",
  contact: {
    email: "someofagun@gmail.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shengshengyang",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%E7%9B%9B%E7%9B%9B-%E6%A5%8A-a84338258/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "iSpan Full Stack Java Software Engineer Training Class",
      degree: "Full Stack Java Certification",
      start: "2022",
      end: "2022",
    },
    {
      school: "National Cheng Kung University ",
      degree: "Bachelor's Degree in Physical Therapy",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Athena Information Systems",
      link: "https://www.athena.com.tw/en/",
      badges: ["On Site", "Java", "Docker", "GitLab", "PostgresSQL", "Oracle"],
      title: "Backend Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Key contributor in transforming our Restaurant Management System by
          migrating from Node.js to Java, resulting in a performance boost of
          over <strong>30%</strong> and significant reductions in latency and
          downtime.
          <ul className="list-inside list-disc">
            <li>
              Spearheaded migration to Java, improving system performance by
              over 30%
            </li>
            <li>
              Developed a cloud-based reservation system using Spring Boot and
              PostgresSQL, increasing booking efficiency by 35%
            </li>
            <li>
              Established robust QA and CI/CD pipelines, reducing bugs by 20%
              and accelerating release cycles by 50%
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Da Fon Environmental Technology",
      link: "https://www.df-recycle.com/",
      badges: [
        "On Site",
        "Java",
        "Spring Boot",
        "Spring",
        "Android",
        "React",
        "Node.js",
        "BootStrap 5",
      ],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description: (
        <>
          Progressed from a junior role to a full stack developer, delivering a
          comprehensive recycling car tracking system.
          <ul className="list-inside list-disc">
            <li>
              Developed an end-to-end tracking system using Spring Boot and
              Android for real-time logistics insights
            </li>
            <li>
              Instituted streamlined workflows that enhanced team productivity
              and code quality
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Cherish Physical Therapy Clinic",
      link: "",
      badges: ["Orthopaedics Physical Therapy", "Sports injuries"],
      title: "Physical Therapy",
      logo: ClevertechLogo,
      start: "2018",
      end: "2021",
      description: (
        <>
          Delivered personalized physical therapy sessions and successfully
          negotiated business collaborations, showcasing strong communication
          and client relationship skills.
        </>
      ),
    },
    {
      company: "Decathlon Taiwan",
      link: "https://www.decathlon.tw/",
      badges: ["Pilates", "Sports Leader"],
      title: "Pilates Sports Leader",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2019",
      description: (
        <>
          Championed the promotion of Pilates, enhancing in-store customer
          engagement and brand visibility.
        </>
      ),
    },
    {
      company: "NTU BioMedical Park Hospital Chu-Tung Campus",
      link: "https://www.hch.gov.tw/english/",
      badges: ["Physical Therapy"],
      title: "Physical Therapy",
      logo: NSNLogo,
      start: "2016",
      end: "2018",
      description:
        "Provided specialized physical therapy services, including orthopedic, cardiopulmonary, and neurological treatments, in a fast-paced hospital setting.",
    },
  ],
  skills: [
    "Java",
    "Spring",
    "Docker",
    "JavaScript",
    "AWS",
    "Node.js",
    "Vue",
    "System Architecture",
  ],
  projects: [
    {
      title: "baby-development-backend",
      techStack: [
        "Java",
        "Spring",
        "MySql",
        "Flyway",
        "Docker",
        "Maven",
        "Thymeleaf",
      ],
      description:
        "Developed robust backend APIs for a baby development tracking app, featuring user management, milestone tracking, and dynamic report generation.",
      logo: MonitoLogo,
      link: {
        label: "baby development",
        href: "https://github.com/shengshengyang/baby-development-backend",
      },
    },
    {
      title: "baby-development-frontend",
      techStack: ["Vue", "Quasar", "Vite", "Typescript", "Node.js"],
      description:
        "Engineered an intuitive frontend interface for the baby development app, ensuring responsive design and seamless user experience.",
      logo: ConsultlyLogo,
      link: {
        label: " baby development",
        href: "https://github.com/shengshengyang/baby-development-frontend-quasar",
      },
    },
    {
      title: "Clock In Project",
      techStack: [
        "Java",
        "Spring",
        "Kafka",
        "MySql",
        "Flyway",
        "Docker",
        "Maven",
      ],
      description:
        "Built a real-time clock-in tracking system leveraging Kafka for data processing, delivering scalable and reliable work time management.",
      logo: MonitoLogo,
      link: {
        label: "Clock In",
        href: "https://github.com/shengshengyang/clockin",
      },
    },
  ],
} as const;
