import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import parsePhoneNumber from 'libphonenumber-js';

import { RESUME_DATA } from "@/data/resume-data";
import { AboutCard } from "@/components/about-card";
import { ToolsCard } from "@/components/tools-card-popover";
import { WorkCard } from "@/components/work-card";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 pt-4 print:pt-0 md:pt-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div>
          <h1 className="text-2xl font-bold sm:hidden">{RESUME_DATA.name}</h1>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold hidden sm:block">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden justify-items-start gap-1 grid-cols-3 font-mono text-sm text-muted-foreground print:grid print:text-[12px]">
                <Button
                  key="location"
                  className="h-4 px-0 text-xs text-muted-foreground"
                  variant="link"
                  size="sm"
                  asChild
                >
                  <a
                    className="gap-1"
                    href={RESUME_DATA.locationLink}
                    target="_blank"
                  >
                    <GlobeIcon className="size-3" />
                    {RESUME_DATA.location}
                  </a>
                </Button>
                {RESUME_DATA.contact.email ? (
                  <Button
                    key="email"
                    className="col-span-2 h-4 px-0 text-xs text-muted-foreground"
                    variant="link"
                    size="sm"
                    asChild
                  >
                    <a
                      className="gap-1"
                      href={`mailto:${RESUME_DATA.contact.email}`}
                    >
                      <MailIcon className="size-3" />
                      {RESUME_DATA.contact.email}
                    </a>
                  </Button>
                  ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    key="phone"
                    className="h-4 px-0 text-xs text-muted-foreground"
                    variant="link"
                    size="sm"
                    asChild
                  >
                      <a
                        className="gap-1 oldstyle-nums word-spacing"
                        href={`tel:${RESUME_DATA.contact.tel}`}
                      >
                        <PhoneIcon className="size-3" />
                        {parsePhoneNumber(RESUME_DATA.contact.tel)?.formatInternational()}
                      </a>
                    </Button>
                  ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="col-span-2 h-4 px-0 text-xs text-muted-foreground"
                    variant="link"
                    size="sm"
                    asChild
                  >
                    <a
                      className="gap-1"
                      href={social.url}
                    >
                      <social.icon className="size-3"/>
                      {social.url}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Avatar className="size-28 border border-muted">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Обо мне</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>

          <div className="-mx-3 grid gap-3 grid-cols-1 md:grid-cols-3 print:grid-cols-12 print:gap-0 print:mx-0 print:border-none">
              <AboutCard
                className="print:col-span-3"
                title="Качества"
                tags={RESUME_DATA.qualities}
              />
              <AboutCard
                className="md:col-span-2 print:col-span-5"
                title="Навыки"
                tags={RESUME_DATA.skills}
              />
              <ToolsCard
                className="md:col-span-3 print:col-span-4"
                title="Инструменты"
                tags={RESUME_DATA.tools}
              />
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Опыт</h2>
          <div className="-mx-3 grid grid-cols-1 gap-1 sm:gap-3">
            {RESUME_DATA.work.map((work) => {
              return (
                <WorkCard
                  key={work.company}
                  title={work.title}
                  logo={work.logo}
                  link={work.link}
                  badges={work.badges}
                  company={work.company}
                  description={work.description}
                  start={work.start}
                  end={work.end}
                  responsibility={work.responsibility}
                  achievements={work.achievements}
                  quit={work.quit}
                />
              );
            })}
          </div>
        </Section>

        {/* <Section>
          <h2 className="text-xl font-bold">Образование</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section> */}

        {/* <Section className="print-force-new-page scroll-mb-16"> */}
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Проекты</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-4 print:gap-2 md:grid-cols-2 lg:grid-cols-3 print:mx-0">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  description_short={project.description_short}
                  problems={"problems" in project ? project.problems : undefined}
                  result={"result" in project ? project.result : undefined}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  images={"images" in project ? project.images : undefined}
                  className="transition-colors hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none print:border-none print:p-0"
                />
              );
            })}
          </div>
        </Section>
      </section>

      <Separator
        orientation="horizontal"
        className="mt-5 mx-auto w-full max-w-2xl data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
      />
      <footer className="print:hidden">
        <div className="group flex items-center justify-center gap-1 my-2 text-xs text-center font-mono text-muted-foreground hover:text-foreground">
          Based on
          <Button
            className="px-0 text-xs text-muted-foreground group-hover:text-foreground focus-visible:ring-offset-[0.01em]"
            variant="link"
            size="sm"
            asChild
          >
            <a
              className="gap-1"
              href="https://github.com/BartoszJarocki/cv"
              target="_blank"
            >
              <GitHubIcon className="size-4"/>
              Bartosz Jarocki&apos;s
            </a>
          </Button>
          excellent work
        </div>
      </footer>
    </main>
  );
}