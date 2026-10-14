import { cn } from "@/lib/utils";

interface TagListProps {
  tags: readonly string[];
  label: string;
  className?: string;
}

export function TagList({ tags, label, className }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className={cn(
        "text-xs leading-relaxed text-muted-foreground print:text-[9px] print:leading-snug",
        className
      )}
      aria-label={label}
    >
      {tags.map((tag, index) => (
        <li key={tag} className="inline whitespace-nowrap">
          {tag}
          {index < tags.length - 1 && (
            // The no-break space keeps the dot on this tag's line. The
            // trailing space is where the line may wrap.
            <span
              className="whitespace-normal text-muted-foreground"
              aria-hidden="true"
            >
              {" · "}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
