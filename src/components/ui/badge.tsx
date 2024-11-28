import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-mono transition-color focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-700 text-primary-foreground hover:bg-neutral-700/80 print:border-muted print:text-secondary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 print:border-muted",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 print:border-muted",
        outline: "text-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
