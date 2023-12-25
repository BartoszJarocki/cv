import { Inter } from "next/font/google";

import ClevertechLogo from "../images/logos/clevertech.png";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Link from "next/link";

import { PrintButton } from "../components/print-button";

const ResumeData = {
  name: "Bartosz Jarocki",
  email: "bartosz.jarocki@hey.com",
  about: "I am a software engineer with a passion for building things.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/BartoszJarocki",
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Parabol",
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description: "",
    },
    {
      company: "Clevertech",
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Creating mobile apps for companies like Vision Media, DKMS, AAA and Evercast",
    },
    {
      company: "Jojo Mobile",
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for Polish biggest companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
} as const;

const getResumeData = async () => {
  return ResumeData;
};

export default async function Home() {
  const resumeData = await getResumeData();

  return (
    <main className="container mx-auto p-1 md:p-6 relative overflow-auto">
      <section className="w-full max-w-3xl mx-auto bg-white p-6 space-y-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{resumeData.name}</h1>
            <p className="text-gray-500">Software Engineer</p>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>
        </div>
        <section>
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <p className="text-gray-600 font-mono text-sm">{resumeData.about}</p>
        </section>
        <section className="flex flex-col min-h-0 gap-y-5">
          <h2 className="text-xl font-bold my-2">Work Experience</h2>
          {resumeData.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <h3 className="text-lg font-semibold leading-none">
                    {work.company}
                  </h3>
                  <h4 className="text-sm leading-none">{work.title}</h4>
                  <div className="text-gray-500 text-sm">
                    {work.start} - {work.end}
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="text-gray-600 font-mono text-sm text-pretty">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {resumeData.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <h3 className="text-lg font-semibold">{education.school}</h3>
                  <p className="text-gray-500">
                    {education.degree}, {education.start} - {education.end}
                  </p>
                </CardHeader>
              </Card>
            );
          })}
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Angular</Badge>
            <Badge>Git</Badge>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col gap-2">
            <Link className="text-blue-500 hover:underline" href="#">
              your-email@example.com
            </Link>
            <Link className="text-blue-500 hover:underline" href="#">
              +1234567890
            </Link>
            <Link className="text-blue-500 hover:underline" href="#">
              your-website.com
            </Link>
          </div>
        </section>
      </section>

      <PrintButton />
    </main>
  );
}
