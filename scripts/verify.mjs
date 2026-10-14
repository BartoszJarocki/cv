import { readFileSync } from "node:fs";

const read = (file) =>
  readFileSync(new URL(`../.next/server/app/${file}`, import.meta.url), "utf8");

const html = read("index.html");

const sectionHeadings = [
  "About",
  "Work Experience",
  "Education",
  "Skills",
  "Side projects",
];

const checks = [
  [
    "JSON-LD parses",
    () => {
      const scripts = [
        ...html.matchAll(
          /<script type="application\/ld\+json">(.*?)<\/script>/gs
        ),
      ];
      if (scripts.length === 0) return "no JSON-LD script";
      for (const [, json] of scripts) JSON.parse(json);
    },
  ],
  [
    "exactly one <title> in <head>",
    () => {
      const head = html.match(/<head\b[^>]*>(.*?)<\/head>/s)?.[1] ?? "";
      const titles = head.match(/<title[\s>]/g)?.length ?? 0;
      if (titles !== 1) return `found ${titles}`;
    },
  ],
  [
    "og:image is present",
    () => {
      if (!/<meta property="og:image" content="[^"]+"/.test(html)) {
        return "no og:image meta tag";
      }
    },
  ],
  ...sectionHeadings.map((heading) => [
    `"${heading}" heading renders`,
    () => {
      if (!html.includes(`>${heading}</h2>`)) return `no <h2>${heading}</h2>`;
    },
  ]),
];

let failures = 0;
for (const [name, check] of checks) {
  let problem;
  try {
    problem = check();
  } catch (error) {
    problem = error.message;
  }
  if (problem) failures++;
  console.log(problem ? `FAIL ${name}: ${problem}` : `ok   ${name}`);
}
process.exitCode = failures ? 1 : 0;
