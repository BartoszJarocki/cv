import type { Block, Entry, Inline } from "@/lib/document";

export function renderMarkdown(blocks: Block[]): string {
  return `${blocks.map(markdown).join("\n\n")}\n`;
}

function markdown(part: Block): string {
  switch (part.kind) {
    case "title":
      return `# ${escapeText(part.name)}\n\n> ${line(part.tagline)}`;
    case "rows":
      return part.rows
        .map(
          ({ label, text, link }) =>
            `- ${line(label)}: ${anchor(escapeText(text), link.href)}`
        )
        .join("\n");
    case "heading":
      return `## ${escapeText(part.text)}`;
    case "paragraph":
      return startLine(part.inlines.map(inline).join(""));
    case "entry":
      return entry(part);
    case "tags":
      return line(part.tags.join(" · "));
  }
}

function entry({
  name,
  link,
  dates,
  role,
  description,
  highlights,
  tags,
}: Entry): string {
  const heading = link ? anchor(escapeText(name), link.href) : escapeText(name);
  return [
    `### ${heading}`,
    line([role, dates].filter(Boolean).join(" · ")),
    description && line(description),
    highlights.map((item) => `- ${line(item)}`).join("\n"),
    line(tags.join(" · ")),
  ]
    .filter(Boolean)
    .join("\n\n");
}

function inline(value: Inline): string {
  return typeof value === "string" ? escapeText(value) : `\`${value.code}\``;
}

function anchor(text: string, href: string): string {
  return `[${text}](${/[\s()]/.test(href) ? `<${href}>` : href})`;
}

function escapeText(text: string): string {
  return text
    .replace(/[ \t\r\n]+/g, " ")
    .replace(/[\\`*_[\]<]/g, "\\$&")
    .replace(/&(?=#?\w+;)/g, "\\&")
    .replace(/ (#+) *$/, " \\$1");
}

function startLine(text: string): string {
  return text.replace(/^[#>+-]/, "\\$&").replace(/^(\d+)([.)])/, "$1\\$2");
}

function line(text: string): string {
  return startLine(escapeText(text));
}
