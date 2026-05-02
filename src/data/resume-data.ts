import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Saiful Islam",
  initials: "SI",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about:
    "Senior Software Engineer building cloud-native backends, AI integrations, and reliable infrastructure at scale.",
  summary:
    "Senior software engineer with 6+ years of experience designing and shipping scalable backend systems in Python, AWS, and Terraform. Led teams across AI-driven network operations, marketing automation, and serverless products — with hands-on ownership of microservices, CI/CD, observability, and production reliability.",
  avatarUrl: "/avatar.jpeg",
  personalWebsiteUrl: "https://www.linkedin.com/in/sirayhan/",
  contact: {
    email: "sirayhancse@gmail.com",
    tel: "+8801630907832",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sirayhan/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Southeast University",
      degree: "Bachelor of Computer Science & Engineering",
      start: "2019",
      end: "2022",
    },
    {
      school: "Feni Polytechnic Institute",
      degree: "Diploma in Computer Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  certifications: [
    {
      title: "AWS Certified: Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/badges/aws-certified-solutions-architect-associate",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      url: "https://www.credly.com/org/hashicorp/badge/hashicorp-certified-terraform-associate-003",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
  ],
  awards: [
    {
      title: "Champion of Google I/O 2017 Code Contest",
      issuer: "Google Developers Group - Bangladesh",
      year: "2017",
    },
    {
      title: "Digital World 2017 Best Innovator Award",
      issuer: "ICT Division, Government of Bangladesh",
      year: "2017",
    },
  ],
  work: [
    {
      company: "Cefalo Bangladesh LTD",
      link: "https://www.cefalo.com/",
      badges: ["Python", "Django REST", "LLMs", "Ollama", "ELK", "Cisco", "AI"],
      title: "Senior Software Engineer L-2",
      start: "Mar 2025",
      end: null,
      description:
        "Leading backend and AI development of a multi-vendor network infrastructure monitoring and management platform.",
      highlights: [
        "Designed scalable backend APIs in Python / Django REST Framework for long-term maintainability",
        "Deployed a local LLM stack (Ollama + Gemma) and built a “Chat with your Network” conversational interface",
        "Built an AI-driven discovery engine that auto-categorizes devices across Cisco Meraki, Fortinet, and Cisco MCP",
        "Automated Network Runbook generation with specialized LLM agents, cutting manual documentation time",
        "Shipped ELK-based log analytics with automated incident ticketing and real-time LLM triage",
        "Built custom Python monitoring agents and a full-cycle internal ticketing system for incident response",
        "Drove Agile delivery with code reviews and technical mentorship across the engineering team",
      ],
    },
    {
      company: "Cefalo Bangladesh LTD",
      link: "https://www.cefalo.com/",
      badges: [
        "Python",
        "Flask",
        "PHP → Python",
        "SMS API",
        "Marketing Automation",
      ],
      title: "Senior Software Engineer L-2",
      start: "Jan 2024",
      end: "Feb 2025",
      description:
        "Led modernization of a marketing automation platform, expanding it from email-only workflows to multi-channel campaigns.",
      highlights: [
        "Expanded automation capabilities from email-only to unified SMS + email campaigns",
        "Led major SMS sending and sender-management API integrations end-to-end",
        "Migrated a core platform from PHP to Python, improving performance and maintainability",
        "Hardened core features for reliability and scale across production traffic",
        "Provided technical guidance through rigorous code reviews and Agile delivery",
      ],
    },
    {
      company: "Cefalo Bangladesh LTD",
      link: "https://www.cefalo.com/",
      badges: [
        "Python",
        "FastAPI",
        "AWS",
        "Terraform",
        "OpenAI",
        "Whisper",
        "CI/CD",
      ],
      title: "Senior Software Engineer",
      start: "Jan 2023",
      end: "Dec 2023",
      description:
        "Built AI-powered journalism tooling for a Norwegian news broadcaster, letting journalists publish articles sourced from public datasets.",
      highlights: [
        "Shipped an automated journalism tool using OpenAI GPT for article generation and Whisper for audio-to-text transcription",
        "Owned AWS infrastructure across ECS, RDS (Postgres), S3, CloudFront, and Auth0 authentication",
        "Authored infrastructure as code in Terraform for repeatable, auditable environments",
        "Built data pipelines aggregating multiple upstream sources to power article generation",
        "Ran CI/CD via TeamCity and Octopus Deploy with Sentry for monitoring and alerting",
      ],
    },
    {
      company: "Cefalo Bangladesh LTD",
      link: "https://www.cefalo.com/",
      badges: [
        "Python",
        "FastAPI",
        "MongoDB",
        "TimescaleDB",
        "Kong",
        "Keycloak",
        "AWS",
      ],
      title: "Software Engineer",
      start: "Jul 2021",
      end: "Dec 2022",
      description:
        "Led backend development of a digital-twin platform and automation workflows for an Intelligent Railway Technology company in Norway.",
      highlights: [
        "Built FastAPI microservices powering real-time sensor and customer data",
        "Integrated MongoDB and TimescaleDB (PostGIS) for high-volume geospatial and time-series data",
        "Centralized microservices behind Kong Gateway with JBoss Keycloak authentication",
        "Stood up an internal PyPI repository, private Docker registry, and MinIO object storage",
        "Ran CI/CD on GitHub Actions and observability via Datadog on AWS infrastructure",
      ],
    },
    {
      company: "KAZ Software LTD",
      link: "https://kaz.com.bd/",
      badges: [
        "Python",
        "FastAPI",
        "Microservices",
        "PostgreSQL",
        "Redis",
        "Keycloak",
      ],
      title: "Software Engineer",
      start: "Sep 2020",
      end: "Apr 2021",
      description:
        "Led server-side development of a microservices CRM platform with social, email, and chat integrations deployed on Docker and Postgres.",
      highlights: [
        "Split the platform into domain microservices (Conversion, Campaign, Conversation, Marketing, Advertisement)",
        "Integrated Gmail and Facebook Graph APIs for unified multi-channel customer conversations",
        "Built real-time messaging and notifications with Redis and FastAPI WebSockets",
        "Integrated JBoss Keycloak authentication and a RASA decision-tree chatbot",
        "Shipped meeting scheduling via Google Calendar and Calendly; ChatWoot-powered web chat widget",
      ],
    },
    {
      company: "InNeed Cloud",
      link: "https://www.linkedin.com/company/inneed-cloud/",
      badges: ["AWS", "Serverless", "Lambda", "Amazon Connect", "Django"],
      title: "Software Engineer",
      start: "Apr 2019",
      end: "Sep 2020",
      description:
        "Designed and delivered cloud-native and serverless products for US and global clients as a top-resource engineer.",
      highlights: [
        "Shipped a serverless GDS (Amadeus) travel aggregator on Lambda, Step Functions, DynamoDB, Aurora, Cognito, S3, and CloudFront",
        "Delivered a scalable cloud contact center with Amazon Connect, AWS Lex, Dialogflow, and Kinesis",
        "Led development of an Employee Advocacy Platform (Django + jQuery) with Twitter and LinkedIn integrations",
        "Built a voice-controlled OS for Boston Dynamics using Alexa, Lambda, Raspberry Pi, and Adafruit Eye Bonnet",
      ],
    },
    {
      company: "STITBD",
      link: "https://www.linkedin.com/company/stitbd/",
      badges: ["Java Swing", "PHP", "Desktop Apps", "Web Apps"],
      title: "Application Developer",
      start: "Feb 2018",
      end: "Mar 2019",
      description:
        "Built desktop and web management applications for a diverse client base and supported deployments across their environments.",
      highlights: [
        "Built a real-time teacher scheduling and subject management system with Java Swing and a Java text-to-speech framework",
        "Delivered a Point-of-Sale (POS) system for hotel and restaurant management",
        "Developed educational websites for multiple academic institutions",
        "Managed domain, hosting, and server deployment for multiple PHP client environments",
      ],
    },
  ],
  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Bangla", proficiency: "Native" },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Python", "Django REST", "FastAPI", "Flask", "Java", "PHP"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Terraform",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Serverless",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "TimescaleDB", "DynamoDB", "Redis"],
    },
    {
      category: "AI & Integrations",
      items: [
        "OpenAI GPT",
        "Whisper",
        "Ollama",
        "Amazon Connect",
        "AWS Lex",
        "Keycloak",
      ],
    },
    {
      category: "Observability",
      items: ["ELK", "Datadog", "Sentry"],
    },
  ],
  interests: [
    "Cloud Architecture",
    "AI & LLMs",
    "IoT",
    "Robotics",
    "Automation",
    "Open Source",
  ],
} as const;
