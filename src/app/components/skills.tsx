import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";

interface SkillsProps {
  skills: readonly string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title={SECTION_TITLES.skills} titleId="skills-section">
      <TagList tags={skills} label="List of skills" variant="skills" />
    </Section>
  );
}
