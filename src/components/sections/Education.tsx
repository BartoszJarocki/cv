import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../ui/section";
import { Card, CardContent, CardHeader } from "../ui/card";

export const Education = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Education</h2>
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
            <CardContent className="mt-2">{education.degree}</CardContent>
          </Card>
        );
      })}
    </Section>
  );
};
