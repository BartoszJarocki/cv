import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

type Interests = readonly string[];

interface InterestsProps {
  interests: Interests;
}

/**
 * Interests section rendered as outlined tag chips.
 */
export function Interests({ interests }: InterestsProps) {
  if (interests.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="text-xl font-bold" id="interests-section">
        Interests
      </h2>
      <ul
        className="flex list-none flex-wrap gap-1 p-0"
        aria-label="List of interests"
      >
        {interests.map((interest) => (
          <li key={interest}>
            <Badge
              variant="tag"
              className="text-xs print:text-[10px]"
              aria-label={`Interest: ${interest}`}
            >
              {interest}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
