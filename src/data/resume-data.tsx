import {
  UCL,
  avatar,
  icon_red,
  psymplicity,
  digitalclay,
  goldman,
  jpmorgan,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Moshe Simon",
  initials: "MS",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Machine Learning Engineer looking to improve the world with the help of AI.",
  summary:
    "As a recent First Class Honours M.Eng graduate in Electronic and Electrical Engineering from UCL, I am now looking to pursue a career in Machine Learning & AI. My academic journey, conducting advanced research in the field of Deep Reinforcement Learning, and hands-on experiences in leading AI projects at Innovate AI, has fuelled my passion for applying AI to real-world challenges. I am eager to leverage my skills in Machine Learning and Software Development to help build innovative solutions.",
  avatar: avatar,
  personalWebsiteUrl: "https://moshesimon.com/",
  contact: {
    email: "moshesimon@outlook.com",
    tel: "+447512146239",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/moshesimon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/moshesimon/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/realMosheSimon",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University College London",
      degree: "Master of Engineering, Electronic & Electrical",
      grade: 'First Class Honours',
      awards: 'Most Outstanding MEng Project, Class of 2023',
      start: "2019",
      end: "2023",
      logo: UCL,
    },
  ],
  work: [
    {
      company: "Innovate AI",
      link: "https://innovateai.uk/",
      badges: [],
      title: "Founder & CEO",
      logo: icon_red,
      start: "2023",
      end: "Present",
      description:
        "At Innovate AI, we provide a suite of AI services including; AI consulting, AI software development and AI educational workshops. We serviced 8 clients in our first 3 months.",
    },
    {
      company: "Psymplicity",
      link: "https://psymplicity.com/",
      badges: [],
      title: "Machine Learning Engineer",
      logo: psymplicity,
      start: "Summer 2023",
      description:
        "Led a small team in building a patient-therapist matching algorithm using Machine Learning.",
    },
    {
      company: "Goldman Sachs",
      link: "https://www.goldmansachs.com/",
      badges: [],
      title: "Software Engineer Intern - Virtual Experience",
      logo: goldman,
      start: "Winter 2021",
      description: "Decoded vulnerable passwords using HashCat and presented my suggested improvements to strengthen security.",
    },
    {
      company: "Digital Clay",
      link: "https://www.digital-clay.com/",
      badges: [],
      title: "Software Engineer Intern",
      logo: digitalclay,
      start: "Summer 2021",
      description: "Built a mobile application to allow clients to access the company's services from an embedded web-browser within the app.",
    },
    {
      company: "JP Morgan Chase",
      link: "https://www.jpmorgan.com/global",
      badges: [],
      title: "Software Engineer Intern - Virtual Experience",
      logo: jpmorgan,
      start: "Winter 2010",
      description: "Contributed to a codebase that handled the cleaning and processing of financial data, and then displayed the data in a user-friendly manner.",
    },
  ],
  skills: [
    "Python",
    "Node.js",
    "Java",
    "C/C++",
    "PyTorch/TensorFlow",
    "React/Next.js",
    "AWS",
    "Django/Flask",
    "MongoDB/MySQL",
    "Problem solving", 
    "Teamwork",
  ],
  projects: [
    {
      title: "University Research Project - Deep Reinforcement Learning",
      techStack: ["Python", 'Deep RL', "WandB", 'stablebaselines3', 'Optical Networks', "research"],
      description: "Researched the application of Deep RL in Elastic Optical Networks to help with routing and spectrum allocation using Deep Mind's Atari games algorithm to solve an arcade game representation of the RSA problem. My research was presented at the OFC Conference 2023 by my supervisor, Dr Beghelli, and published in their Conference paper.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/DeepEON",
      },
    },
    
    {
      title: "Server Hosted Oracle Chatbot Project",
      techStack: ["Server deployment", "Client/server communication", "ML"],
      description:
        "Developed and implemented an Oracle chatbot utilizing machine learning for time series forecasting of stock market price. The chatbot was deployed on a server and featured a client interface for interaction via the terminal.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/SNSD",
      },
    },
    {
      title: "Stock Price Prediction Machine Learning Project",
      techStack: ["Data analysis", 'cleaning', "visualisation", "transformation", "exploration", "NLP sentiment analysis", "MongoDB"],
      description:
        "Predicted the future price of Apple stock by analyzing historical stock data and sentiment analysis of tweets from 75 news accounts. Involving data cleaning, transformation, and exploration, as well as training a model to make predictions based on the acquired data.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/DAPS_Assignment_2023",
      },
    },
    {
      title: "Image Classification Machine Learning Project",
      techStack: ["TensorFlow", "Sklearn", 'Python', 'Keras'],
      description:
        "Explored and compared multiple machine learning approaches to solve binary and multi class classification tasks on cartoon images.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/AMLS_assignment22_23",
      },
    },
    {
      title: "Cancer Detection Machine Learning Project",
      techStack: ["TensorFlow", 'Sklearn', "Python", "Keras", "CNNs", "SVMs", "Kaggle"],
      description:
        "Built a ML model based on EfficientNet2 to detect breast cancer in Mammography scans.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/AMLS_II_assignment22_23",
      },
    },
    {
      title: "Natural Language Processing Project",
      techStack: ["PyTorch", "HuggingFace", "Transformers", "NLP", "Python"],
      description: "Fine-tuned a Machine Translation model on a low resource language and beat existing benchmarks.",
      link: {
        label: "github.com",
        href: "https://github.com/moshesimon/DLNLP_assignment_23",
      },
    },

  ],
} as const;
