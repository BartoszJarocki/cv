import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";

interface SkillsProps {
  skills: readonly string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Skills" titleId="skills-section">
      <TagList tags={skills} label="List of skills" variant="skills" />
    </Section>
  );
}
