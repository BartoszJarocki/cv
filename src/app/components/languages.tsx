import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type LanguagesData = (typeof RESUME_DATA)["languages"];

interface LanguagesProps {
  languages: LanguagesData;
}

/**
 * Languages section rendered as a compact list of name + proficiency rows.
 */
export function Languages({ languages }: LanguagesProps) {
  if (languages.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="text-xl font-bold" id="languages-section">
        Languages
      </h2>
      <ul
        className="flex list-none flex-col gap-1 p-0 font-mono text-sm text-foreground/80 print:text-[11px]"
        aria-label="Spoken languages"
      >
        {languages.map((language) => (
          <li key={language.name} className="flex items-baseline gap-x-2">
            <span className="font-medium text-foreground">{language.name}</span>
            <span aria-hidden="true" className="text-foreground/30">
              —
            </span>
            <span className="text-foreground/60">{language.proficiency}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
