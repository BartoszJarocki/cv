import { cn } from "@/lib/utils";

const variants = {
  tags: "text-xs leading-relaxed text-muted-foreground print:text-[9px] print:leading-snug",
  skills:
    "text-sm leading-relaxed text-body print:text-[10px] print:leading-snug",
};

interface TagListProps {
  tags: readonly string[];
  label: string;
  variant?: keyof typeof variants;
  className?: string;
}

export function TagList({
  tags,
  label,
  variant = "tags",
  className,
}: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul className={cn(variants[variant], className)} aria-label={label}>
      {tags.map((tag, index) => (
        <li key={tag} className="inline whitespace-nowrap">
          {tag}
          {index < tags.length - 1 && (
            <span
              className="whitespace-normal text-muted-foreground"
              aria-hidden="true"
            >
              {"\u00a0· "}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
