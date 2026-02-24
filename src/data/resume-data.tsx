import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nahom Kasa",
  initials: "NK",
  location: "Ethiopia, EAT",
  locationLink: "https://www.google.com/maps/place/Ethiopia",
  about:
    "Self-taught Developer & Civil Engineering Student. Full-stack developer passionate about building modern web applications.",
  summary: (
    <>
      Self-taught developer and civil engineering student with hands-on
      experience in full-stack development. Specializing in Next.js, React,
      Node.js, and modern JavaScript/TypeScript ecosystems. Experienced in MERN
      and PERN stacks with Supabase, MongoDB, and monorepo architectures.
      Integrates AI (e.g., Gemini) and APIs into applications. Skilled in
      authentication systems including BetterAuth, Clerk, Kindly, JWT, and more.
    </>
  ),
  avatarUrl: "https://res.cloudinary.com/dzimvdwb2/image/upload/v1771947754/protfolio_vnequr.jpg",
  personalWebsiteUrl: "https://nahomkasa.vercel.app",
  contact: {
    email: "nahomkasa345@gmail.com",
    tel: "+251929333563",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nahomkasa999",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nahomkasa",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/nahomkasa",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Civil Engineering University",
      degree: "B.Sc. Civil Engineering (Current Student)",
      start: "Present",
      end: "Ongoing",
    },
  ],
  work: [
    {
      company: "Ayautomate",
      link: "https://ayautomate.com/",
      badges: [
        "Remote",
        "Paris",
        "International",
        "Next.js",
        "React",
        "TypeScript",
      ],
      title: "Software Developer",
      start: "2024",
      end: null,
      description: (
        <>
          Working with Ayautomate in Paris and international clients on
          full-stack web applications.
          <ul className="list-inside list-disc">
            <li>Built scalable web applications with Next.js and React</li>
            <li>Collaborated with international teams on client projects</li>
          </ul>
        </>
      ),
    },
    {
      company: "Lelise Coffee",
      link: "#",
      badges: ["React", "Node.js", "Full Stack"],
      title: "Developer",
      start: "2023",
      end: "2024",
      description: <>Full-stack development for Lelise Coffee platform.</>,
    },
    {
      company: "Prekly",
      link: "#",
      badges: ["Next.js", "TypeScript", "Supabase"],
      title: "Developer",
      start: "2023",
      end: "2024",
      description: <>Worked on Prekly project. Project is currently paused.</>,
    },
  ],
  skills: [
    "Next.js",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Hono.js",
    "Monorepo",
    "Supabase",
    "MongoDB",
    "MERN Stack",
    "PERN Stack",
    "AI Integration (Gemini)",
    "REST & GraphQL APIs",
    "BetterAuth",
    "Clerk",
    "Kindly",
    "JWT",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Minimalist, print-friendly CV and portfolio built with Next.js 15 and modern tooling.",
      link: {
        label: "nahomkasa.vercel.app",
        href: "https://nahomkasa.vercel.app",
      },
    },
    // Add more projects when you provide the links
  ],
} as const;
