import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Shahroz Ahmad",
  initials: "SA",
  location: "Halifax, Canada, AST",
  locationFlag: "🇨🇦",
  locationLink: "https://maps.app.goo.gl/38BsbJWK1TTqAZxW7",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Full Stack Engineer specializing in high-performance React applications,
      scalable Node.js services, and real-time collaboration systems.
      Experienced in technical architecture design and remote team leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/97090106?v=4",
  personalWebsiteUrl: "https://ishahroz.com",
  contact: {
    email: "ishahrozahmad90@gmail.com",
    tel: "+19024527130",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ishahroz",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ishahroz/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Dalhousie University",
      degree: "Master of Applied Computer Science (MACS), Computer Science",
      start: "2023",
      end: "2024",
    },
    {
      school: "National University of Computer and Emerging Sciences",
      degree: "Bachelor of Science (BS), Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Davies North America",
      link: "https://www.davies-group.com",
      badges: ["AI/ML", "Amazon Bedrock"],
      employmentTypes: ["Full-time"],
      title: "Full-Stack AI/ML Engineer",
      location: "Halifax",
      locationType: "Hybrid",
      locationUrl: "https://maps.app.goo.gl/38BsbJWK1TTqAZxW7",
      locationFlag: "🇨🇦",
      start: "Apr 2025",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li>
            Leading automation of insurance claims with a RAG system on AWS
            Bedrock, LangChain, LlamaIndex, Textract, S3, and Lambda, replacing
            manual OnBase workflows.
          </li>
          <li>
            Building a fraud detection app that connects React frontends, Python
            ML pipelines, and Dagster to analyze loss data within the ICM
            ecosystem.
          </li>
          <li>
            Implementing MCP and A2A automations to cross-verify claims against
            descriptions and photos while integrating modern ML services with
            legacy OnBase systems.
          </li>
        </ul>
      ),
    },
    {
      company: "Acuicy",
      link: "https://www.acuicy.com/",
      badges: ["Deep Learning", "MLflow"],
      employmentTypes: ["Contract"],
      title: "Machine Learning Researcher - LLM",
      location: "Halifax",
      locationType: "Hybrid",
      locationUrl: "https://maps.app.goo.gl/38BsbJWK1TTqAZxW7",
      locationFlag: "🇨🇦",
      start: "Aug 2024",
      end: "Mar 2025",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Enhanced the NetZero engine by adding non-linear ML models tracked
            and deployed via MLflow, improving CAPEX, ROI, and emissions
            estimates by 20%.
          </li>
          <li>
            Automated carbon data retrieval and fine-tuned LLMs with Adaptive
            RAG, LoRA, and QLoRA, serving them through vLLM for batched
            inference.
          </li>
          <li>
            Built Dagster ETL pipelines that pull graph data from ArangoDB,
            process it, and land curated features in ClickHouse for training.
          </li>
          <li>
            Connected ClickHouse to Superset for interactive analytics and
            shipped an open-source Superset Python client for microservice
            automation.
          </li>
        </ul>
      ),
    },
    {
      company: "Detect",
      link: "https://detectinspections.com/",
      badges: ["Deep Learning", "MLflow"],
      employmentTypes: ["Co-op"],
      title: "Machine Learning Engineer - Computer Vision",
      location: "Halifax",
      locationType: "Hybrid",
      locationUrl: "https://maps.app.goo.gl/38BsbJWK1TTqAZxW7",
      locationFlag: "🇨🇦",
      start: "Sep 2024",
      end: "Dec 2024",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Built a high-throughput EgoBlur inference service to anonymize faces
            and plates prior to delivering annotated inspection datasets.
          </li>
          <li>
            Fine-tuned Faster R-CNN, YOLO, and Mask R-CNN models in PyTorch,
            pushing mAP beyond 0.7 for defect-feature pair detection.
          </li>
          <li>
            Developed Dagster-driven pipelines that trigger training or
            retraining when new data or class labels arrive, using assets,
            partitions, and ops graphs.
          </li>
          <li>
            Integrated MLflow and Hydra into the MLOps toolchain for experiment
            tracking, configuration, evaluation, and deployment.
          </li>
        </ul>
      ),
    },
    {
      company: "Acuicy",
      link: "https://www.acuicy.com/",
      badges: ["Amazon Bedrock"],
      employmentTypes: ["Contract", "Part-time"],
      title: "Machine Learning Engineer",
      location: "Halifax",
      locationType: "Hybrid",
      locationUrl: "https://maps.app.goo.gl/38BsbJWK1TTqAZxW7",
      locationFlag: "🇨🇦",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "Developed Amazon Bedrock powered services that automated client onboarding checks and accelerated proof-of-value engagements.",
    },
    {
      company: "Scale AI",
      link: "https://scale.com/",
      badges: ["LLM", "RLHF"],
      employmentTypes: ["Contract"],
      title: "LLM Engineer - Training",
      location: "San Francisco",
      locationUrl: "https://maps.app.goo.gl/L86trxXSADKqTeqT9",
      locationType: "Remote",
      locationFlag: "🇺🇸",
      start: "Dec 2023",
      end: "May 2024",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Produced high-quality training data across multiple programming
            languages and frameworks as a "Platinum" rank team member, leading
            5+ campaigns that improved SOTA LLM model capabilities by 30%.
          </li>
          <li>
            Audited training data, developed eval sets, and optimized model
            performance with RLHF by enhancing correctness, informativeness,
            clarity, and creativity, resulting in a significant LLM reasoning
            uplift.
          </li>
          <li>
            Implemented chain-of-thought prompting techniques to improve the
            model's coding and reasoning abilities, achieving a 15% increase in
            problem-solving accuracy.
          </li>
          <li>
            Enhanced SOTA LLM model performance by 40% on the SWE-bench dataset,
            improving code generation, bug fixing, and code documentation tasks.
          </li>
        </ul>
      ),
    },
    {
      company: "Arbisoft",
      link: "https://arbisoft.com/",
      badges: ["Open edX", "Microfrontends"],
      employmentTypes: ["Full-time"],
      title: "Software Engineer",
      location: "McKinney",
      locationUrl: "https://maps.app.goo.gl/rTBRUYHLg6A82oQf9",
      locationType: "Remote",
      locationFlag: "🇺🇸",
      start: "Jan 2022",
      end: "Jul 2023",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Worked as an open-source core contributor in the Open edX community,
            helping revamp the "edx-platform" from a monolithic architecture to
            a distributed microfrontends and microservices architecture.
          </li>
          <li>
            Reduced critical production and security issues by 20% for thousands
            of online learners through dependency upgrades and fixes.
          </li>
          <li>
            Enhanced CI/CD pipelines with GitHub Actions, automating tasks like
            semantic versioning and repository translations, saving significant
            manual effort.
          </li>
          <li>
            Developed a scalable web application for "Unlisted," handling
            thousands of concurrent users, scraping and indexing tens of
            thousands of property data points, and implementing 20+ AI-powered
            property proposal features.
          </li>
          <li>
            Led quality engineering and data analysis on 50+ property features
            for "Unlisted," improving search criteria by 40%.
          </li>
        </ul>
      ),
    },
    {
      company: "Dubizzle Labs",
      link: "https://www.dubizzlelabs.com/",
      badges: ["ELK", "Geo"],
      employmentTypes: ["Full-time"],
      title: "Software Engineer",
      location: "Lahore",
      locationUrl: "https://maps.app.goo.gl/mXQ8A8ZgVwZFcZG88",
      locationType: "On-site",
      locationFlag: "🇵🇰",
      start: "Aug 2021",
      end: "Dec 2021",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Conducted in-depth research and integrated the ELK stack into the
            existing Propforce backend architecture.
          </li>
          <li>
            Optimized spatial database indexing and implemented Elasticsearch
            geo-queries, reducing full-length address lookup times from 2-3
            seconds to under 300 milliseconds.
          </li>
          <li>
            Developed a scalable, multi-tenant backend for Propforms, a national
            land balloting project, supporting 1,000+ tenants and handling
            10,000+ ballots daily with high availability.
          </li>
        </ul>
      ),
    },
    {
      company: "i2c",
      link: "https://www.i2cinc.com/",
      badges: ["Payments", "NLP"],
      employmentTypes: ["Full-time"],
      title: "Software Engineer",
      location: "Redwood City",
      locationUrl: "https://maps.app.goo.gl/u7W7d4iyZqa9xmGf7",
      locationType: "Remote",
      locationFlag: "🇺🇸",
      start: "Jul 2020",
      end: "Aug 2021",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Developed globally active, highly scalable, multi-threaded digital
            payment backend services and batch schedulers for major clients,
            including CIBC, Sightline, Petal, and Vantage Bank.
          </li>
          <li>
            Horizontally scaled the Direct Deposit Scheduler, increasing
            transactions per second from 50 to 500.
          </li>
          <li>
            Improved customer care service by automating call evaluation with
            NLP, resulting in a 15% increase in the Customer Satisfaction Score.
          </li>
          <li>
            Mentored junior engineers through training sessions and code
            reviews, leading to a 40% improvement in code quality and a 90% job
            satisfaction rate.
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
