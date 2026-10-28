import { RESUME_DATA } from "@/data/resume-data";
import { resumeBlocks } from "@/lib/document";
import { renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderMarkdown(resumeBlocks(RESUME_DATA)), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}
