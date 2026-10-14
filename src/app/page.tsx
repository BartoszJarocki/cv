import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { getContactLinks } from "@/lib/resume";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { WorkExperience } from "./components/work-experience";

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();
  const commandMenuLinks = getContactLinks(RESUME_DATA).filter(
    ({ icon }) => icon !== "mail" && icon !== "phone"
  );

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16"
        id="main-content"
      >
        <section
          className="mx-auto w-full max-w-2xl space-y-8 print:max-w-none print:space-y-4"
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

        <CommandMenu links={commandMenuLinks} />
      </main>
    </>
  );
}
