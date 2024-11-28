"use client"

import * as React from "react"
import {
  Card,
  CardHeader,
  CardContent,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  ChevronsUpDown,
  ChevronsDownUp,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "./ui/collapsible";

interface Props {
  company: string;
  link: string;
  badges: readonly string[];
  title: string;
  logo?: any;
  start: string;
  end: string;
  description: string;
  responsibility: string;
  achievements?: readonly string[];
  quit?: readonly string[];
}

export function WorkCard({
  company,
  link,
  badges,
  title,
  logo,
  start,
  end,
  description,
  responsibility,
  achievements,
  quit
 }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsibleTrigger asChild>
        <Card key={company} className="group flex flex-col overflow-hidden px-3 py-1">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <Button variant="ghost" size="icon" className="absolute opacity-0 transition-all group-hover:opacity-50 -ml-9 w-6 h-6 p-0 hidden focus:opacity-100 md:flex print:hidden hover:scale-110 hover:!opacity-100 group-hover:border">
                {open ? <ChevronsDownUp className="h-4 w-4" /> : <ChevronsUpDown className="h-4 w-4"/> }
                <span className="sr-only">Toggle</span>
              </Button>
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a className="hover:underline" target="_blank" href={link} onClick={(event) => event.stopPropagation()}>
                  {company}
                </a>

                <span className="inline-flex gap-x-1">
                  {badges.map((badge) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">
                {start}&nbsp;- {end ?? "по настоящее время"}
              </div>
            </div>
            <h4 className="font-mono text-sm leading-none print:text-[12px]">
              {title}
            </h4>
          </CardHeader>
          <CardContent className="flex gap-2 mt-2 text-xs print:text-[10px]">
            <div>
              <div>{description}</div>
              <CollapsibleContent
                className="text-xs print:text-[10px] print:hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
              >
                <h4 className="mt-2 text-sm font-semibold">Обязанности</h4>
                <div className="text-xs print:text-[10px]">{responsibility}</div>
                {achievements ? (
                  <div>
                    <h4 className="mt-2 text-sm font-semibold">Достижения</h4>
                    <ul className="ml-6 text-xs print:text-[10px] list-square">
                      {achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ) : null }
                {quit ? (
                  <div>
                    <h4 className="mt-2 text-sm font-semibold">Почему ушёл</h4>
                    <ul className="ml-6 text-xs print:text-[10px] list-square">
                      {quit.map((quit) => (
                        <li key={quit}>{quit}</li>
                      ))}
                    </ul>
                  </div>
                ) : null }
              </CollapsibleContent>
            </div>
            <Button
              variant="outline"
              size="icon_vertical"
              className="flex-shrink-0 border-muted print:hidden md:hidden opacity-50 group-hover:opacity-100 transition-all"
            >
              {open ? <ChevronsDownUp className="w-4" /> : <ChevronsUpDown className="w-4"/> }
              <span className="sr-only">Toggle</span>
            </Button>
          </CardContent>
        </Card>
      </CollapsibleTrigger>
    </Collapsible>
  )
}