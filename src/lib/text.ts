import type { Block, Entry, Row } from "@/lib/document";

type Style = "bold" | "dim" | "plain";
type Run = { text: string; style: Style };
type Line = Run[];

const MARGIN = "  ";
const WIDTH = 76;
const MEASURE = 72;
const NO_BREAK = "\u00a0";
const TAG_SEPARATOR = `${NO_BREAK}· `;
const SGR: Record<Style, string | null> = { bold: "1", dim: "2", plain: null };

const run = (text: string, style: Style = "plain"): Run => ({ text, style });

export function renderText(blocks: Block[]): string {
  const lines = blocks.flatMap((part, i) => [
    ...(i && blocks[i - 1].kind !== "heading" ? [[]] : []),
    ...layout(part),
  ]);
  return ["", ...lines.map(serialize), "", ""].join("\n");
}

function layout(part: Block): Line[] {
  switch (part.kind) {
    case "title":
      return [
        ...wrap([run(part.name, "bold")], WIDTH),
        ...wrap([run(part.tagline)], MEASURE),
      ];
    case "rows":
      return rows(part.rows);
    case "heading":
      return wrap([run(part.text.toLowerCase(), "dim")], WIDTH);
    case "paragraph":
      return wrap(
        part.inlines.map((inline) =>
          run(typeof inline === "string" ? inline : inline.code)
        ),
        MEASURE
      );
    case "entry":
      return entry(part);
    case "tags":
      return wrap(tags(part.tags, "plain"), MEASURE);
  }
}

function entry({
  name,
  link,
  dates,
  role,
  description,
  highlights,
  tags: badges,
}: Entry): Line[] {
  const marker = run("- ", "dim");
  return [
    ...spread([run(name, "bold")], dates ? [run(dates, "dim")] : [], WIDTH),
    ...(role ? wrap([run(role)], MEASURE) : []),
    ...(description ? wrap([run(description)], MEASURE) : []),
    ...highlights.flatMap((item) =>
      wrap([run(item)], MEASURE - 2).map((line, i) => [
        i ? pad(2) : marker,
        ...line,
      ])
    ),
    ...(badges.length ? wrap(tags(badges, "dim"), MEASURE) : []),
    ...(link ? wrap([run(link.url, "dim")], WIDTH) : []),
  ];
}

function rows(items: Row[]): Line[] {
  const indent = Math.max(10, ...items.map(({ label }) => width(label))) + 3;
  return items.flatMap(({ label, text, link }) => {
    const lead = [run(label.toLowerCase(), "dim")];
    const trail = link.url === text ? [] : [run(link.url, "dim")];
    return spread([run(text)], trail, WIDTH - indent).map((line, i) => [
      ...(i ? [pad(indent)] : [...lead, pad(indent - width(label))]),
      ...line,
    ]);
  });
}

function tags(items: string[], style: Style): Run[] {
  return items.flatMap((tag, i) => [
    ...(i ? [run(TAG_SEPARATOR, "dim")] : []),
    run(tag.replaceAll(" ", NO_BREAK), style),
  ]);
}

function spread(left: Run[], right: Run[], room: number): Line[] {
  const gap = room - columns(left) - columns(right);
  if (right.length === 0) return wrap(left, room);
  if (gap >= 3) return [[...left, pad(gap), ...right]];
  return [...wrap(left, room), ...wrap(right, room)];
}

function wrap(runs: Run[], room: number): Line[] {
  const lines: Line[] = [[]];
  let used = 0;
  for (const word of words(runs)) {
    const size = columns(word);
    const line = lines[lines.length - 1];
    if (used === 0) {
      line.push(...word);
      used = size;
    } else if (used + 1 + size > room) {
      lines.push([...word]);
      used = size;
    } else {
      const left = line[line.length - 1].style;
      line.push(run(" ", left === word[0].style ? left : "plain"), ...word);
      used += 1 + size;
    }
  }
  return lines;
}

function words(runs: Run[]): Line[] {
  const found: Line[] = [];
  let word: Run[] = [];
  for (const { text, style } of runs) {
    for (const piece of text.split(/([ \t\r\n]+)/)) {
      if (/^[ \t\r\n]+$/.test(piece)) {
        if (word.length) found.push(word);
        word = [];
      } else if (piece) {
        word.push(run(piece, style));
      }
    }
  }
  if (word.length) found.push(word);
  return found;
}

function serialize(line: Line): string {
  const merged: Run[] = [];
  for (const { text, style } of line) {
    const last = merged.at(-1);
    if (last?.style === style) last.text += text;
    else merged.push(run(text, style));
  }
  while (merged.length && !merged[merged.length - 1].text.trim()) merged.pop();
  if (merged.length === 0) return "";
  const last = merged[merged.length - 1];
  last.text = last.text.trimEnd();
  const text = merged
    .map(({ text, style }) =>
      SGR[style] ? `\x1b[${SGR[style]}m${text}\x1b[0m` : text
    )
    .join("");
  return MARGIN + text.replaceAll(NO_BREAK, " ");
}

function pad(size: number): Run {
  return run(" ".repeat(size));
}

function width(text: string): number {
  return [...text].length;
}

function columns(runs: Run[]): number {
  return runs.reduce((sum, { text }) => sum + width(text), 0);
}
