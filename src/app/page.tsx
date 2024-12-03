import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";

import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: `${RESUME_DATA.about}`,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <Header />

        <Summary summary={RESUME_DATA.summary} />

        <WorkExperience work={RESUME_DATA.work} />

        <Education education={RESUME_DATA.education} />

        <Skills skills={RESUME_DATA.skills} />

        <Projects projects={RESUME_DATA.projects} />
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
