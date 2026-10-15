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
  const sections = [
    { key: "summary", content: <Summary summary={RESUME_DATA.summary} /> },
    { key: "work", content: <WorkExperience work={RESUME_DATA.work} /> },
    {
      key: "education",
      content: <Education education={RESUME_DATA.education} />,
    },
    { key: "skills", content: <Skills skills={RESUME_DATA.skills} /> },
    { key: "projects", content: <Projects projects={RESUME_DATA.projects} /> },
  ] as const;

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
          className="mx-auto w-full max-w-2xl space-y-8 print:max-w-none print:space-y-3"
          aria-label="Resume Content"
        >
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <Header />
          </div>

          {sections
            .filter(({ key }) => RESUME_DATA[key].length > 0)
            .map(({ key, content }, index) => (
              <div
                key={key}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 75}ms` }}
              >
                {content}
              </div>
            ))}
        </section>

        <CommandMenu links={commandMenuLinks} />
      </main>
    </>
  );
}
