import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Shubham Kumar",
  initials: "SK",
  location: "Gurugram, India (IST)",
  locationLink: "https://www.google.com/maps/place/Gurugram,+India",
  about:
    "Cloud Platform Engineer / Site Reliability Engineer with a DevOps foundation, now increasingly focused on AI Platform Operations (AWS Bedrock, RAG, FinOps, and cost optimization).",
  summary: (
    <>
      Cloud Platform Engineer / Site Reliability Engineer with 7+ years of
      experience across DevOps, Kubernetes, and multi-cloud infrastructure (AWS,
      Azure, GCP) — building observable, automated, production-grade platforms.
      That foundation is still how I approach systems design today.
      <br />
      <br />
      Over the past year I&apos;ve been increasingly focused on AI Platform
      Operations: building and operating production AI tooling on AWS Bedrock
      with Claude models, including a human-gated RAG auto-triage agent and an
      AI-assisted incident RCA tool, alongside FinOps cost governance and Zero
      Trust identity (Keycloak, OIDC/OAuth2).
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/155751376?v=4",
  personalWebsiteUrl: "https://github.com/Shubham-Master",
  contact: {
    email: "shubham46.56@gmail.com",
    tel: "+91 8073314155",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Shubham-Master",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/contactshubham-kr/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "RNS Institute of Technology",
      degree: "B.E in Mechanical Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "SingleStore",
      link: "https://www.singlestore.com/",
      badges: [
        "AWS Bedrock",
        "FinOps",
        "Kubernetes",
        "Terraform",
        "Zero Trust",
      ],
      title: "Cloud Platform Engineer",
      start: "Feb 2026",
      end: "Present",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Designed and built ATLAS, an internal operational-intelligence
              platform (Airflow, SingleStore, Next.js) used daily by Support,
              Engineering, and Leadership to track SLA risk and recurring
              issues.
            </li>
            <li>
              Built production AI tooling on AWS Bedrock (Claude 3/3.5) — an
              AI-assisted incident RCA tool on Grafana MCP and a guardrailed RAG
              auto-triage agent, both human-gated by design.
            </li>
            <li>
              Implemented GPU-backed autoscaling on EKS using Karpenter, cutting
              ML infrastructure cost by 35%+ (utilization ~25% to 65%), measured
              via Kubecost against real AWS billing.
            </li>
            <li>
              Own the production Keycloak identity platform (Zero Trust,
              OIDC/OAuth2) serving ~150 daily internal users.
            </li>
            <li>
              Contribute Go backend code to an internal multi-cloud
              cost-governance (FinOps) platform.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "AirFi Aviation Solutions",
      link: "https://airfi.aero/",
      badges: ["DevOps", "Observability", "Incident Response", "Mentorship"],
      title: "Senior DevOps Engineer",
      start: "Aug 2025",
      end: "Feb 2026",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Led an uptime initiative that raised platform availability from
              97.8% to 99.95%.
            </li>
            <li>
              Cut incident resolution time by 45%+ through centralized
              observability and standardized runbooks.
            </li>
            <li>
              Mentored junior engineers and set incident-response and IaC
              standards adopted across every team on the shared platform.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "AirFi Aviation Solutions",
      link: "https://airfi.aero/",
      badges: ["CI/CD", "Terraform", "Ansible", "Automation", "Python"],
      title: "DevOps Engineer",
      start: "Oct 2023",
      end: "Jul 2025",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Built CI/CD pipelines and Terraform/Ansible automation that cut
              environment setup time from days to under an hour.
            </li>
            <li>
              Built DISCO, an internal Python tool for processing onboard
              infotainment logs at scale.
            </li>
            <li>
              Mentored engineers and helped set incident-response and
              infrastructure-as-code standards across the team.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Innoitus",
      link: "",
      badges: ["SRE", "Monitoring"],
      title: "Site Reliability Engineer",
      start: "Jun 2023",
      end: "Sep 2023",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Provided 24x7 production support, maintaining 99.9% service
              availability.
            </li>
            <li>
              Reduced critical incident frequency by 35% and incident response
              times by 30% through improved monitoring and reliability
              practices.
            </li>
            <li>
              Developed internal monitoring tools to enhance observability
              across day-to-day operations.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Amazon",
      link: "https://www.amazon.in/",
      badges: ["AWS", "CI/CD", "CloudFormation", "Terraform", "Kubernetes"],
      title: "Quality Analyst",
      start: "Oct 2021",
      end: "May 2023",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Built multi-region CI/CD pipelines with Jenkins and AWS
              CodePipeline, improving release consistency across regions.
            </li>
            <li>
              Provisioned and managed AWS infrastructure using CloudFormation
              and Terraform, focusing on scalability and dependable delivery
              workflows.
            </li>
            <li>
              Built CloudWatch dashboards and administered Kubernetes workloads
              with resource optimization across QA and production-adjacent
              systems.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Extreme Soft Management",
      link: "",
      badges: ["SRE", "GCP", "AWS Migration", "Automation"],
      title: "Site Reliability Engineer",
      start: "Apr 2019",
      end: "Aug 2021",
      description: (
        <>
          <ul className="list-disc list-inside mt-2">
            <li>
              Operated and maintained production infrastructure on Google Cloud
              Platform (GCP), introducing automation for repetitive operational
              tasks.
            </li>
            <li>
              Led a year-long GCP-to-AWS migration, modernizing the deployment
              stack end-to-end.
            </li>
            <li>
              Automated workflows that saved 80+ engineering hours per month
              across recurring processes.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: {
    tools: [
      {
        href: "https://kubernetes.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png",
        alt: "Kubernetes",
      },
      {
        href: "https://terraform.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/terraform-software-icon.png",
        alt: "Terraform",
      },
      {
        href: "https://aws.amazon.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
        alt: "AWS",
      },
      {
        href: "https://azure.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/azure-icon.png",
        alt: "Azure",
      },
      {
        href: "https://cloud.google.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-cloud-icon.png",
        alt: "Google Cloud Platform",
      },
      {
        href: "https://jenkins.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jenkins-icon.png",
        alt: "Jenkins",
      },
      {
        href: "https://ansible.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ansible-software-icon.png",
        alt: "Ansible",
      },
      {
        href: "https://docker.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
        alt: "Docker",
      },
      {
        href: "https://github.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png",
        alt: "GitHub",
      },
      {
        href: "https://argoproj.github.io/argo-cd/",
        icon: "https://layer5.io/static/23bd800be4880360f484c8e4a73f06d5/argo-cd-color.svg",
        alt: "Argo CD",
      },
      {
        href: "https://kafka.apache.org/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apache-kafka-icon.png",
        alt: "Apache Kafka",
      },
      {
        href: "https://www.linux.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
        alt: "Linux",
      },
      {
        href: "https://aws.amazon.com/bedrock/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
        alt: "AWS Bedrock / LLM Ops",
      },
      {
        href: "https://www.finops.org/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/cost-icon.png",
        alt: "FinOps / Cost Optimization",
      },
      {
        href: "https://www.keycloak.org/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-lock-black-icon.png",
        alt: "Keycloak / Zero Trust IAM",
      },
    ],

    frameworkAndRuntime: [
      {
        href: "https://nodejs.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        alt: "Node.js",
      },
      {
        href: "https://nextjs.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
        alt: "Next.js",
      },
      {
        href: "https://aws.amazon.com/lambda/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg",
        alt: "AWS Lambda",
      },
    ],

    programmingLanguage: [
      {
        href: "https://www.python.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
        alt: "Python",
      },
      {
        href: "https://go.dev/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
        alt: "Go",
      },
      {
        href: "https://www.typescriptlang.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
        alt: "TypeScript",
      },
      {
        href: "https://www.gnu.org/software/bash/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bash-unix-shell-icon.png",
        alt: "Bash",
      },
    ],

    databases: [
      {
        href: "https://www.mongodb.com/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
        alt: "MongoDB",
      },
      {
        href: "https://www.postgresql.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
        alt: "PostgreSQL",
      },
      {
        href: "https://www.elastic.co/elasticsearch/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/elasticsearch-icon.png",
        alt: "Elasticsearch",
      },
    ],
  },
  projects: [
    {
      title: "ATLAS — Operational Intelligence Platform",
      techStack: ["Airflow", "SingleStore", "Next.js", "TypeScript"],
      description:
        "Internal operational-intelligence platform used daily by Support, Engineering, and Leadership at SingleStore to track SLA risk and recurring issues. Built on Airflow for orchestration, SingleStore for storage, and a Next.js frontend.",
      link: {
        label: "GitHub Profile",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "AI-Assisted Incident RCA & RAG Auto-Triage",
      techStack: ["AWS Bedrock", "Claude", "Grafana MCP", "RAG", "Python"],
      description:
        "Production AI tooling on AWS Bedrock (Claude 3/3.5): an incident RCA tool built on Grafana MCP, and a guardrailed RAG auto-triage agent — both deliberately human-gated rather than fully autonomous.",
      link: {
        label: "GitHub Profile",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "GPU Autoscaling & ML Infra Cost Optimization",
      techStack: ["Karpenter", "EKS", "Kubernetes", "Kubecost", "AWS"],
      description:
        "Implemented GPU-backed autoscaling on EKS using Karpenter, cutting ML infrastructure cost by 35%+ and raising utilization from ~25% to ~65%, measured via Kubecost against real AWS billing.",
      link: {
        label: "GitHub Profile",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "k8s-gitops-platform",
      techStack: [
        "Kubernetes",
        "Terraform",
        "AWS",
        "Argo CD",
        "Prometheus",
        "Grafana",
        "Loki",
        "Tempo",
      ],
      description:
        "Production Kubernetes platform on AWS with automated cluster provisioning (Terraform) and GitOps deployments (Argo CD). Full observability stack — Prometheus, Grafana, Loki, and Tempo — for metrics, logs, and traces.",
      link: {
        label: "View Repository",
        href: "https://github.com/Shubham-Master/k8s-gitops-platform",
      },
    },
    {
      title: "Europe Job Hunter",
      techStack: ["Go", "React", "Python", "Gemini AI"],
      description:
        "A job search tool combining a Go REST API backend, a React frontend, and Python services, with Gemini AI integrated to assist with job matching.",
      link: {
        label: "GitHub Profile",
        href: "https://github.com/Shubham-Master",
      },
    },
  ],
} as const;
