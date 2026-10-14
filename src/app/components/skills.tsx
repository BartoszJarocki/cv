import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";

interface SkillsProps {
  skills: readonly string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Skills" titleId="skills-section">
      <TagList
        tags={skills}
        label="List of skills"
        className="text-sm leading-relaxed text-body print:text-[10px]"
      />
    </Section>
  );
}
