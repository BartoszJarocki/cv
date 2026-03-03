import type { Metadata } from "next";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { WorkExperience } from "./components/work-experience";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://cv.jarocki.me/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["https://cv.jarocki.me/opengraph-image"],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 dark:bg-background"
          aria-label="Resume Content"
        >
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <Header />
          </div>

          <div className="space-y-8 print:space-y-4">
            <div className="animate-fade-in" style={{ animationDelay: "75ms" }}>
              <Summary summary={RESUME_DATA.summary} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <WorkExperience work={RESUME_DATA.work} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "225ms" }}
            >
              <Education education={RESUME_DATA.education} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Skills skills={RESUME_DATA.skills} />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "375ms" }}
            >
              <Projects projects={RESUME_DATA.projects} />
            </div>
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
