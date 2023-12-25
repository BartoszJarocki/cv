import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="border border-muted p-3 overflow-hidden flex flex-col">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="hover:underline inline-flex items-center gap-1"
              >
                {title}{" "}
                <span className="bg-green-500 rounded-full h-1 w-1"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="text-xs hidden print:visible underline font-mono">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-xs font-mono">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge
              className="text-[10px] px-1 py-0"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
