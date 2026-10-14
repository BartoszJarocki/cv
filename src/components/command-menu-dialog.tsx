"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { ContactLink } from "@/lib/resume";

export interface CommandMenuDialogProps {
  links: ContactLink[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandMenuDialog = ({
  links,
  open,
  onOpenChange,
}: CommandMenuDialogProps) => (
  <CommandDialog open={open} onOpenChange={onOpenChange}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem
          onSelect={() => {
            onOpenChange(false);
            window.print();
          }}
        >
          <span>Print</span>
        </CommandItem>
      </CommandGroup>
      <CommandGroup heading="Links">
        {links.map(({ href, label }) => (
          <CommandItem
            key={label}
            onSelect={() => {
              onOpenChange(false);
              window.open(href, "_blank");
            }}
          >
            <span>{label}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  </CommandDialog>
);
