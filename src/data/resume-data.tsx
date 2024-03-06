import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Simranjot Singh",
  initials: "",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Currently managing Product at Canonic.",
  summary: "Accomplished professional with a background in engineering and a strong entrepreneurial spirit. I have over 7 years of experience working with product companies and a special love for developer tools.",
  avatarUrl: "https://avatars.githubusercontent.com/u/14364505?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "iamsimranjot@gmail.com",
    tel: "+919914370072",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/iamsimranjot",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamsimranjot/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/iamsimranjot",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chitkara University",
      degree: "Bachelor's Degree in Computer Science (8.3)",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Canonic",
      link: "https://canonic.dev",
      badges: [],
      title: "Co-founder",
      start: "2020",
      end: "Present",
      description:(
        <>
        <li>
        Led product development and strategy for Canonic which allows users to develop full stack applications without code.
        </li>
        <li>
        Implemented analytical frameworks, including dashboards and alerts, for monitoring and decision-making.
        </li>
        <li>
        Oversee legal and administrative functions of the company in the US and India.
        </li>
        </>
      )
        
    },
    {
      company: "Haptik",
      link: "https://www.haptik.ai/",
      badges: [],
      title: "iOS Engineer",
      start: "2017",
      end: "2020",
      description: (
        <>
          <li>
          Developed and managed the iOS SDK from inception, enabling AI-powered chatbots within iOS applications.
          </li>
          <li>
          Facilitated the company's transition from a B2C to B2B business model.
          </li>
          <li>
          Integrated the SDK with prominent brands such as FuturePay, Times, and Jio, etc.
          </li>
        </>
      ),
    },
    {
      company: "Novoinvent",
      link: "https://www.novoinvent.com/",
      badges: [],
      title: "iOS Intern",
      start: "2016",
      end: "2017",
      description:(
        <>
        <li>
        Developed a customizable Health Insurance Marketplace framework for iOS, streamlining enrollment and purchase of health insurance for US citizens.
        </li>
        <li>
        Implemented architecture to cater to specific state applications (e.g., Access Health CT for Connecticut, Enroll MHC for Maryland).
        </li>
        </>
      )        ,
    },
  ],
  projects: [
    {
      title: "Mixpanel - Analytics",
      description: "Mixpanel for Product Analytics.",
      link: {
        label: "Mixpanel Blog",
        href: "https://canonic.dev/blog/using-mixpanel-for-product-analysis",
      },
    },
    {
      title: "Canonic - Product Hunt",
      description: "Product Hunt Launches",
      link: {
        label: "Product Hunt",
        href: "https://www.producthunt.com/products/canonic",
      },
    },
    // {
    //   title: "Case Study",
    //   description: "Product Hunt Launches",
    //   link: {
    //     label: "Product Hunt",
    //     href: "https://www.producthunt.com/products/canonic",
    //   },
    // },
  ],
  skills: [
    "Product Development",
    "Engineering Collaboration",
    "User Research",
    "Developer Tools",
    "Scrum",
    "Financial Compliances",
  ],
} as const;
