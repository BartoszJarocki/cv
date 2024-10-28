import { DolbyLogo } from "@/images/logos";
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
      degree:
        "Engineer's degree in Computer Science - Cloud Systems and Applications",
      start: "2022",
      end: "2025",
    },
  ],
  cert_and_award: [
    {
      what: "1st Place, HackYeah",
      desc:
        "Awarded for winning Hackathon in Kraków, showcasing problem-solving and technical skills. I played a pivotal role in frontend development and the DevOps aspects of our project.",
      when: "2023",
    },
    {
      what: "Introduction to Cybersecurity - Cisco Networking Academy",
      desc:
        "Completed Cisco's Intro to Cybersecurity course.",
      when: "2023",
    },
    {
      what: "PCAP: Programming Essentials in Python",
      desc:
        "Attained PCAP certification in Python programming.",
      when: "2023",
    },
    {
      what: "AWS Educate Certificates",
      desc:
        "10+ AWS Educate certificates in various cloud computing topics.",
      when: "2023",
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
      company: "ManaCode s. c.",
      link: "",
      badges: [],
      title: "Main Programmer and Co-owner",
      start: "08.2022",
      end: "08.2023",
      description:
        "Co-owner of ManaCode s. c. civil partnership providing programming services. Technologies: React, React Native, JavaScript, Redux, Expo, Git, GitLab, Jira, Linux, Bash, GitLab, Nginx, SSH, SSL, Cloud, Scrum, Agile",
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
    "LLM",
    "Artificial Intelligence",
    "Object-Oriented Programming",
    "Cloud Computing",
    "Computer Networking",
  ],
  projects: [
    {
      title: "Train Qualitier",
      techStack: [
        "Big Project",
        "React",
        "JavaScript",
        "sqlite3",
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "Linux",
        "Raspberry Pi",
        "Internet of Things",
        "Sensors",
      ],
      description:
        "Train Qualitier is a cutting-edge application aimed at enhancing passengers' travel experiences by monitoring and assessing the quality of train rides through real-time data collection from various sensors.",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/train-qualitier-backend",
      },
    },
    {
      title: "Weather App",
      techStack: [
        "Side Project",
        "React",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "Nginx",
      ],
      description: "Weather app that shows current weather in your location",
      link: {
        label: "github.com",
        href: "https://weather.mkuch.pl",
      },
    },
    {
      title: "Colors Game",
      techStack: [
        "Side Project",
        "Python",
        "Discord.py",
        "Docker",
        "bash",
        "Linux",
        "DevChatOps",
      ],
      description:
        "FantasyRatBot is a helpful bot for the FantasyRat Discord server. It is written in Python using the discord.py library.",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/evil-rat-bot",
      },
    },
  ],
} as const;
