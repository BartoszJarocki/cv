import { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";
import { cx } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
