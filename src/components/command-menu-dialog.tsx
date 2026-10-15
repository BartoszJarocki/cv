"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { Search, X } from "lucide-react";
import type { ContactLink } from "@/lib/resume";

export interface CommandMenuDialogProps {
  links: ContactLink[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const groupClassName =
  "overflow-hidden px-2 py-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [[cmdk-group]:not([hidden])~&]:pt-0";

const itemClassName =
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm text-body outline-none aria-selected:bg-accent aria-selected:text-accent-foreground";

export const CommandMenuDialog = ({
  links,
  open,
  onOpenChange,
}: CommandMenuDialogProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0 print:hidden" />
      <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-hidden border bg-background shadow-lg duration-200 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:slide-out-to-left-1/2 motion-safe:data-[state=closed]:slide-out-to-top-[48%] motion-safe:data-[state=open]:slide-in-from-left-1/2 motion-safe:data-[state=open]:slide-in-from-top-[48%] print:hidden sm:rounded-lg">
        <Dialog.Title className="sr-only">Command menu</Dialog.Title>
        <Command className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <Command.Empty className="py-6 text-center text-sm">
              No results found.
            </Command.Empty>
            <Command.Group heading="Actions" className={groupClassName}>
              <Command.Item
                className={itemClassName}
                onSelect={() => {
                  onOpenChange(false);
                  window.print();
                }}
              >
                Print
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Links" className={groupClassName}>
              {links.map(({ href, label }) => (
                <Command.Item
                  key={label}
                  className={itemClassName}
                  onSelect={() => {
                    onOpenChange(false);
                    window.open(href, "_blank");
                  }}
                >
                  {label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
        <Dialog.Close className="absolute right-3 top-3 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
