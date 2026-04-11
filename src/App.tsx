import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import avatarImage from "./images/avatar/loc.webp";

const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
};

export default function App() {
  return (
    <>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>

              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>

              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>

              {RESUME_DATA.spokenLanguages ? (
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                  {RESUME_DATA.spokenLanguages}
                </p>
              ) : null}

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
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={avatarImage} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>

            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.summary}
            </p>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company} className="print:break-inside-avoid">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card
                  key={education.school}
                  className="print:break-inside-avoid"
                >
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

                  <CardContent className="mt-2">
                    {education.degree}
                    <br />
                    {`Program: ${education.program}`}
                  </CardContent>

                  <CardContent className="mt-2">
                    {"Research:"}
                    <br />
                    {education.research.map((item) => (
                      <div key={item}>
                        - {item}.
                        <br />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Awards and certifications</h2>
            {RESUME_DATA.awards.map((item) => {
              return (
                <Card key={item.title} className="print:break-inside-avoid">
                  <CardHeader>
                    <h4 className="text-sm">{item.title}</h4>
                  </CardHeader>
                  <CardContent className="text-xs">{item.issuer}</CardContent>
                  <CardContent className="text-xs">{item.content}</CardContent>
                  <CardFooter className="text-xs">{item.time}</CardFooter>
                </Card>
              );
            })}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>

          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="flex flex-col gap-y-10 print:gap-y-0">
              {Array.from(
                { length: Math.ceil(RESUME_DATA.projects.length / 6) },
                (_, i) => RESUME_DATA.projects.slice(i * 6, i * 6 + 6),
              ).map((projectChunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className={
                    chunkIndex > 0 ? "print:break-before-page print:pt-12" : ""
                  }
                >
                  {chunkIndex > 0 && (
                    <h2 className="mb-4 hidden text-xl font-bold print:block">
                      Projects (continued)
                    </h2>
                  )}
                  <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                    {projectChunk.map((project, projectIndex) => {
                      return (
                        <ProjectCard
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          tags={project.techStack}
                          link={
                            "link" in project && project.link
                              ? project.link.href
                              : undefined
                          }
                          className={
                            projectIndex === projectChunk.length - 1 &&
                            projectChunk.length % 3 === 1
                              ? "md:col-span-2 lg:col-span-3 print:col-span-3"
                              : ""
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">References</h2>
            <div className="gap-y-1">
              {RESUME_DATA.references.map((item, id) => {
                return (
                  <CardContent key={item} className="">
                    {item}
                  </CardContent>
                );
              })}
            </div>
          </Section>
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
    </>
  );
}
