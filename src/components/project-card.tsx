import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { Button } from "./ui/button";

interface LinkObj {
  label: string;
  icon?: string;
  href: string;
}
interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: LinkObj;
  links?: Array<LinkObj> | undefined;
}

export function ProjectCard({ title, description, tags, link, links }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.label}
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {links?.map((link) => (
            <Badge
              variant="outline"
              className="w-100"
              key={link.label}
            >
              <a
                className="flex flex-wrap gep-5 mt-1"
                href={link.href}
                target="_blank"
              >
                {link.icon=="youtube" ? <Youtube className="size-3 mr-2" /> : ""}
                {link.icon=="external-link" ? <ExternalLink className="size-3 mr-2" /> : ""}
                {link.icon=="github" ? <Github className="size-3 mr-2" /> : ""}
                <div>{link.label}</div>
              </a>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
