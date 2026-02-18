import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Atom,
  Boxes,
  BrainCircuit,
  Building,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileJson,
  Radio,
  RefreshCw,
  Ruler,
  Server,
  ServerCog,
  Share2,
  Sparkles,
  Split,
  Users,
  Wifi,
  Wind,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { ResumeData, SkillIconConfig } from "@/lib/types";
import { cn } from "@/lib/utils";

type SkillGroups = ResumeData["skills"];
type SkillItem = SkillGroups[number]["items"][number];

const DEFAULT_ICON: LucideIcon = Sparkles;

const SKILL_ICON_MAP: Record<string, LucideIcon> = {
  languages: Code2,
  frameworks: Boxes,
  systems: ServerCog,
  typescript: FileCode2,
  javascript: FileJson,
  python: BrainCircuit,
  sql: Database,
  react: Atom,
  nextjs: AppWindow,
  remix: RefreshCw,
  nodejs: Server,
  graphql: Share2,
  relay: Split,
  tailwind: Wind,
  design: Ruler,
  restapi: Share2,
  cloud: Cloud,
  keycloak: Building,
  shadcn: Sparkles,
  mantine: Ruler,
  webrtc: Radio,
  websockets: Wifi,
  architecture: Building,
  leadership: Users,
};

interface SkillsListProps {
  skills: SkillItem[];
  className?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
}

function getSkillIcon(iconKey?: string): LucideIcon {
  if (!iconKey) {
    return DEFAULT_ICON;
  }

  return SKILL_ICON_MAP[iconKey] ?? DEFAULT_ICON;
}

type IconInput = SkillIconConfig;

function SkillIcon({
  icon,
  className,
}: {
  icon?: IconInput;
  className?: string;
}) {
  if (icon && typeof icon === "object") {
    const { type = "lucide", value } = icon;
    if (type === "devicon") {
      return (
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-3.5 w-3.5 items-center justify-center text-[12px]",
            className
          )}
        >
          <i className={value} />
        </span>
      );
    }

    const IconComponent = getSkillIcon(value);
    return (
      <IconComponent
        aria-hidden="true"
        className={cn("size-3.5 text-muted-foreground", className)}
      />
    );
  }

  const IconComponent = getSkillIcon(icon);
  return (
    <IconComponent
      aria-hidden="true"
      className={cn("size-3.5 text-muted-foreground", className)}
    />
  );
}

/**
 * Renders a list of skill badges with icons
 */
function SkillsList({
  skills,
  className,
  ariaLabel,
  ariaLabelledby,
}: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1.5 p-0", className)}
      aria-label={ariaLabel ?? "List of skills"}
      aria-labelledby={ariaLabelledby}
    >
      {skills.map((skill) => (
        <li key={skill.name}>
          <Badge
            className="flex items-center gap-1.5 py-1 print:text-[10px]"
            aria-label={`Skill: ${skill.name}`}
            title={skill.description}
          >
            <SkillIcon icon={skill.icon} />
            <span>{skill.name}</span>
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: SkillGroups;
  className?: string;
}

/**
 * Skills section component with grouped subsections
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={cn("gap-5", className)}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="space-y-5">
        {skills.map((group) => (
          <section
            key={group.name}
            className="space-y-1.5"
            aria-labelledby={`skill-group-${group.name}`}
          >
            <div className="flex items-center gap-2">
              <SkillIcon icon={group.icon} className="size-4" />
              <h3
                id={`skill-group-${group.name}`}
                className="text-base font-semibold leading-none tracking-tight"
              >
                {group.name}
              </h3>
            </div>
            {group.description ? (
              <p className="text-sm text-muted-foreground print:text-[10px]">
                {group.description}
              </p>
            ) : null}
            <SkillsList skills={group.items} className="ml-6 pt-1" />
          </section>
        ))}
      </div>
    </Section>
  );
}
