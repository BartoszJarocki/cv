import { ConsultlyLogo, JojoMobileLogo, NSNLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luis Mesajil",
  initials: "BJ",
  location: "Lima, Perú, UTC",
  locationLink: "https://www.google.com/maps/place/Lima",
  about:
    "Full Stack Engineer prioritizing high-quality, scalable products with a focus on user experience.",
  summary:
    "I'm currently pursuing a degree in computer engineering and have experience in fullstack projects using React and Node.js. My studies in computer science provide me with a strong foundation, complemented by my participation in employability accelerators where I've gained skills in innovative and agile development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/45523084?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "lhmesajil@gmail.com",
    tel: "+51940709267",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mesajil",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lhmesajil/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/LuisMesajil",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SoyHenry",
      degree: "Full Stack Developer with Agile Focus",
      start: "2023",
      end: "2023",
    },
    {
      school: "Pontificia Universidad Católica del Perú",
      degree: "Top third student in computer engineering",
      start: "2014",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Memory Kings",
      link: "https://memorykings.pe/",
      badges: [],
      title: "Payment Records Processor → Excel Macros Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2021",
      description:
        "Programmed the final design for printing customer data in the home delivery product shipping process. Managed the processing of payment receipts, credit notes, and debit notes.",
    },
    {
      company: "AprendeHoy",
      link: "https://www.instagram.com/aprendehoyinfo/?hl=en",
      badges: [],
      title: "Employability Bootcamp Graduate",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "Collaborated with a multidisciplinary team to develop a solution for our client aimed at enhancing engagement on their social media platforms. Gained practical experience in innovation tools and agile development methodologies",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
    "Node.js",
    "CSS",
    "SQL",
    "Git/Github",
  ],
  projects: [
    {
      title: "DigiShoes",
      techStack: [
        "Learning Project",
        "Material UI",
        "React.js",
        "Express.js",
        "Sequelize",
      ],
      description: "Ecommerce for footwear sales",
      logo: ConsultlyLogo,
      link: {
        label: "storecalzado.vercel.app",
        href: "https://storecalzado.vercel.app/",
      },
    },
    {
      title: "GymSpace",
      techStack: [
        "Learning Project",
        "Material UI",
        "React.js",
        "Express.js",
        "Sequelize",
      ],
      description: "Fitness Ecommerce and Gym Service Management Platform",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/LautaroEZM/GymSpaceFront",
        href: "https://github.com/LautaroEZM/GymSpaceFront",
      },
    },
    {
      title: "Food Recipes",
      techStack: [
        "Learning Project",
        "CSS",
        "React.js",
        "Vite",
        "Express.js",
        "Sequelize",
      ],
      description: "Recipe Discovery and Favorites Manager",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/mesajil/food-henry-project",
        href: "https://github.com/mesajil/food-henry-project",
      },
    },
    {
      title: "Rick and Morty",
      techStack: [
        "Learning Project",
        "CSS",
        "React.js",
        "Express.js",
        "Sequelize",
      ],
      description: "Rick and Morty Character Encyclopedia",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/mesajil/rick_and_morty",
        href: "https://github.com/mesajil/rick_and_morty",
      },
    },
  ],
} as const;
