import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ReactNode } from "react";

type Social = {
  name: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type CoverLetterData = {
  name: string;
  location: string;
  locationLink: string;
  about: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
  };
  company: {
    name: string;
    location: string;
  };
  date: string;
  greeting: ReactNode;
  body: ReactNode;
};

export const COVER_LETTER_DATA: CoverLetterData = {
  name: "Patrick Lehmann",
  location: "Berlin, Germany CET",
  locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
  about: "Full-Stack Developer",
  personalWebsiteUrl: "https://ptrcklehmann.com",
  contact: {
    email: "connect@ptrcklehmann.com",
    tel: "+4915901345063",
  },
  company: {
    name: "Company Name",
    location: "City, Country",
  },
  date: "Date",
  greeting: <p>Dear Hiring Manager</p>,
  body: (
    <article className="text-pretty text-foreground print:text-[11px]">
      <p className="mb-2">
        I am writing to express my interest in the Full-Stack Developer position
        at {`"${"Company Name"}"`}. With a strong background in software
        development and a passion for creating innovative solutions, I believe I
        would be a valuable addition to your team.
      </p>
      <p className="mb-2">
        I have a proven track record of successfully delivering high-quality
        software projects on time and within budget. My experience includes
        working with various programming languages, frameworks, and tools,
        allowing me to adapt quickly to new technologies and challenges.
      </p>
      <p className="mb-2">
        I am particularly drawn to {`"${"Company Name"}"`} because of its
        commitment to excellence and innovation in the tech industry. I admire
        your focus on creating user-centric products and your dedication to
        continuous improvement.
      </p>
      <p className="mb-2">
        I am excited about the opportunity to contribute my skills and expertise
        to your team. I am confident that my technical abilities, combined with
        my strong problem-solving skills and collaborative mindset, would make
        me a valuable asset to {`"${"Company Name"}"`}.
      </p>
      <p className="mb-2">
        I am eager to learn more about the position and how I can contribute to
        the success of {`"${"Company Name"}"`}. Thank you for considering my
        application. I look forward to the opportunity to discuss my
        qualifications further.
      </p>
      <p className="mb-5">
        I am available for an interview at your earliest convenience and can be
        reached at{" "}
        <a
          className="text-right underline hover:text-foreground/70"
          href="tel:+4915901345063"
          aria-label="Call Patrick Lehmann"
        >
          +4915901345063
        </a>{" "}
        or via email at{" "}
        <a
          className="text-right underline hover:text-foreground/70"
          href="mailto:connect@ptrcklehmann.com"
          aria-label="Email Patrick Lehmann"
        >
          connect@ptrcklehmann.com
        </a>
        . Thank you for your time and consideration.
      </p>
      <p className="mb-2">I look forward to hearing from you soon.</p>
      <p className="mb-6">Best regards,</p>
      <p className="mb-2">Patrick Lehmann</p>
    </article>
  ),
} as const;
