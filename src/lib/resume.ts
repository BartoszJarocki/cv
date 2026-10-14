import type { WorkEntry } from "@/lib/types";

export function getCurrentRole(work: WorkEntry[]): WorkEntry | undefined {
  return work.find((job) => job.end === null);
}
