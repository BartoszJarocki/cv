"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

interface Props {
  className: string;
  title: string;
  tags: readonly any[];
}

function HoverPopover(name: string, tooltip: string) {
  const [open, setOpen] = useState(false);
  const debouncedOpen = useDebounce(open, 100);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Popover key={name} open={debouncedOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        asChild
      >
        <Badge
          className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          variant="default"
          key={name}
        >
          {name}
        </Badge>
      </PopoverTrigger>
      {tooltip ?
        <PopoverContent
          className="bg-neutral-700 rounded-xl font-mono text-popover text-sm text-pretty w-auto max-w-xs md:max-w-[400px] print:hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {tooltip}
        </PopoverContent>
      : null}
    </Popover>
  );
};

export function ToolsCard({ className="", title, tags }: Props) {
  return (
    <Card
      className={"flex flex-col overflow-hidden border border-muted p-3 print:p-0 print:-mx-3 print:border-none".concat(" ", className)}
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-0 flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            HoverPopover(tag.name, tag.tooltip)
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
