import { RESUME_DATA } from "@/data/resume-data";
import { llmsBlocks } from "@/lib/document";
import { renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderMarkdown(llmsBlocks(RESUME_DATA)), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
