import { ReactNode } from "react";

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
  location: "Berlin, Germany",
  locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
  about: "Frontend Developer",
  personalWebsiteUrl: "https://ptrcklehmann.com",
  contact: {
    email: "connect@ptrcklehmann.com",
    tel: "+4915901345063",
  },
  company: {
    name: "Zalando",
    location: "Berlin, Germany",
  },
  date: "20.04.2025",
  greeting: <p>Dear Bazi Nzirubusa,</p>,
  body: (
    <article className="space-y-3 text-pretty text-foreground print:text-[11px]">
      <p>
        I&apos;m excited to apply for the Frontend Engineer role in Customer
        Care Technology at Zalando. With over five years of experience building
        responsive, scalable web and mobile applications using React,
        TypeScript, and GraphQL, I am confident in my ability to contribute
        effectively to your team&apos;s mission of enhancing customer
        self-service experiences.
      </p>
      <p>
        In my current role at Code-B, I have developed performant applications
        such as{" "}
        <a
          className="underline hover:text-foreground/70"
          href="https://thepioneer.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Pioneer"
        >
          thepioneer.de
        </a>{" "}
        and{" "}
        <a
          className="underline hover:text-foreground/70"
          href="https://tabletop-herald.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tabletop Herald"
        >
          tabletop-herald.com
        </a>
        , significantly improving user engagement and application performance.
        My experience includes optimising CI/CD pipelines to enhance stability
        and streamline deployment processes, closely aligning with your
        team&apos;s focus on scalable and maintainable systems.
      </p>
      <p>
        I am particularly drawn to Zalando&apos;s commitment to innovation and
        user-centric design. My background in creating cohesive visual
        identities and intuitive user interfaces at the International Labour
        Organization further aligns with your objective of empowering customers
        through seamless digital interactions.
      </p>
      <p>
        I would welcome the opportunity to discuss how my technical expertise
        and passion for frontend development can contribute to Zalando&apos;s
        ongoing success in customer satisfaction and operational efficiency.
      </p>
      <p className="pb-6">Best regards,</p>
      <p>Patrick Lehmann</p>
    </article>
  ),
} as const;
