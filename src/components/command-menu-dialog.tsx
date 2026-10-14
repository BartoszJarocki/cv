"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export interface CommandMenuDialogProps {
  links: { url: string; title: string }[];
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
        {links.map(({ url, title }) => (
          <CommandItem
            key={url}
            onSelect={() => {
              onOpenChange(false);
              window.open(url, "_blank");
            }}
          >
            <span>{title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  </CommandDialog>
);
