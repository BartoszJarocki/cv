import { RESUME_DATA } from "@/data/resume-data";
import { resumeBlocks } from "@/lib/document";
import { renderText } from "@/lib/text";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderText(resumeBlocks(RESUME_DATA)), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      Vary: "User-Agent, Accept",
    },
  });
}
