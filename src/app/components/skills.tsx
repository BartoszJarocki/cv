import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Skills = (typeof RESUME_DATA)["skills"];
type SkillGroup = Skills[number];

interface SkillGroupRowProps {
  group: SkillGroup;
}

function SkillGroupRow({ group }: SkillGroupRowProps) {
  return (
    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-[10rem_1fr] sm:gap-3 print:grid-cols-[10rem_1fr] print:gap-2">
      <div
        className="font-mono text-[11px] uppercase tracking-wider text-foreground/60 sm:pt-1 print:text-[9px]"
        aria-hidden="true"
      >
        <span className="text-foreground/40">›&nbsp;</span>
        {group.category}
      </div>
      <ul
        className="flex list-none flex-wrap gap-1 p-0"
        aria-label={`${group.category} skills`}
      >
        {group.items.map((item) => (
          <li key={item}>
            <Badge
              variant="tag"
              className="text-xs print:text-[10px]"
              aria-label={`Skill: ${item}`}
            >
              {item}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="flex flex-col gap-y-2 print:gap-y-1">
        {skills.map((group) => (
          <SkillGroupRow key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
