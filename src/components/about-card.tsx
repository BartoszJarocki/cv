import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  className?: string;
  title: string;
  tags: readonly string[];
}

export function AboutCard({ className="", title, tags }: Props) {
  return (
    <Card className={"flex flex-col overflow-hidden w-full border border-muted p-3 print:p-0 print:border-none".concat(" ", className)}>
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {
              title
            }
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-0 flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
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
