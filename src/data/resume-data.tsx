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
  name: "Joey Robinson",
  initials: "JR",
  location: "Novato CA",
  locationLink: "https://www.google.com/maps/place/Novato+CA",
  about: "Backend Software Engineer | Design and Architecture",
  summary: 
    "Dynamic and results-driven Software Engineer with 5 years of experience specializing in leading cross-functional teams and automation engineering to enhance system reliability and performance. Proactively participating in a leadership mentor program and possessing extensive experience with backend web services designed for scale in multiplayer game titles.",
  avatarUrl: "https://avatars.githubusercontent.com/u/37429829?s=400&u=5996d841789f1af892210b23654713bcd3cddfea&v=4", // Add if available
  personalWebsiteUrl: "www.linkedin.com/in/joerob624", // LinkedIn profile as personal website
  contact: {
    email: "joerob624@gmail.com",
    tel: "707-787-7063",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joerob624",
        icon: LinkedInIcon, // Define LinkedInIcon
      },
    ],
  },
  education: [
    {
      school: "Sonoma State University",
      degree: "Bachelor's in Computer Science With Distinction",
      start: "2017", // Start date not specified
      end: "2019",
    },
  ],
  work: [
    {
      company: "2K Publishing",
      link: "https://www.2k.com/en-US/", // Add if available
      badges: ["BaaS, Distributed Systems"],
      title: "Lead Software Developer in Test",
      logo: "", // Add company logo URL if available
      start: "January 2023",
      end: "Present",
      description: 
        "Lead teams of 2-4 QA Engineers in areas such as cloud technologies, telemetry, game security, and web proxy services, focusing on creating automation to facilitate rapid continuous feature development. Achieved a notable 99.9% service uptime across major AAA game releases including NBA 2K24, Lego 2K Drive, and WWE 2K23. Spearheaded QA standards within CoreTech teams, resulting in an 80% improvement in system coverage and the development of integration test suites for continuous delivery. Initiated the QA Guild to promote effective cross-team collaboration and stakeholder engagement. Played a pivotal role in enhancing processes, particularly through advanced JIRA practices, and standardized Kubernetes scalability and load testing, handling up to 300k requests per second, while significantly contributing to architectural decisions to align with end-user specifications. Technologies: ",
    },
    {
      company: "Keysight Technologies",
      link: "https://www.keysight.com/us/en/home.html", // Add if available
      badges: ["Proprietary .NET Applications"],
      title: "R&D Software Engineer II",
      logo: "", // Add company logo URL if available
      start: "April 2020",
      end: "December 2022",
      description: 
        "Managing teams focused on cloud telemetry, game security, and web proxy services, and delivering high service uptime for AAA game titles.",
    },
    {
      company: "Sonoma Deep Thought",
      link: "https://www.2k.com/en-US/", // Add if available
      badges: ["Artificial Intelligence Platform"],
      title: "Research and Development Engineer",
      logo: "", // Add company logo URL if available
      start: "January 2018",
      end: "January 2020",
      description: 
        "Managed a team of engineers in developing an image classification framework utilizing Keras and TensorFlow, specifically for analyzing specialized data sets in geological applications, leading to the creation of a nationwide geological classification database. Emphasized robust system design for data analysis and classification, showcasing expertise in data-driven solutions. Achieved a significant 30% improvement in classification accuracy through the implementation of innovative image manipulation techniques. Demonstrated both technical expertise and communication skills by presenting development work at prominent industry conferences. Technologies: Keras, Tensorflow, Python, Neural Network",
    },

    // Add more work experience following the same format
  ],
  skills: [
    "CI/CD", "Kubernetes", "Cross-functional Leadership", "Javascript", "WPF", "C#", "C++", "Java", "Golang", "Python Scripting", "Unreal Engine", "Kafka", "Cloud Technologies (AWS/GCP)", "API Design", "System Design", "AI and Machine Learning", "Process Improvement", "Public Speaking and Presentation Skills", "Product Management", "Agile Methodology"
  ],
  projects: [
    {
      title: "Geological Cyber-Infrastructure",
      techStack: ["Lead Developer", "Python", "Tensorflow", "Convolutional Neural Networks"],
      description:
        "Infrastructure for building a nationawide database for automatic classification of geological photomicrographs",
      link: {
        label: "American Geophysical Union",
        link: "https://agu2019fallmeeting-agu.ipostersessions.com/Default.aspx?s=74-88-7F-AA-19-8B-C8-7E-19-67-80-F9-6F-16-B1-E0"
      }
    },
  ],
} as const;
