import { readFileSync } from "node:fs";
import { registerHooks } from "node:module";

const stubImages = (url, context, nextLoad) =>
  url.endsWith(".jpg")
    ? { format: "module", source: "export default {}", shortCircuit: true }
    : nextLoad(url, context);
const loadTypeScriptAsModules = (url, context, nextLoad) =>
  nextLoad(
    url,
    url.endsWith(".ts") ? { ...context, format: "module-typescript" } : context
  );
registerHooks({ load: stubImages });
registerHooks({ load: loadTypeScriptAsModules });
const { RESUME_DATA } = await import("../src/data/resume-data.ts");

const read = (file) =>
  readFileSync(new URL(`../.next/server/app/${file}`, import.meta.url), "utf8");

const html = read("index.html");
const jsonLdScripts = [
  ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
].map(([, json]) => json);

const entities = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
};
const decode = (text) =>
  text.replace(/&(?:amp|lt|gt|quot|#x27);/g, (entity) => entities[entity]);
const meta = (key) =>
  html.match(
    new RegExp(`<meta (?:name|property)="${key}" content="([^"]*)"`)
  )?.[1];
const isSiteUrl = (url) =>
  url !== undefined && new URL(url).href === new URL(RESUME_DATA.siteUrl).href;

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
      if (jsonLdScripts.length === 0) return "no JSON-LD script";
      for (const json of jsonLdScripts) JSON.parse(json);
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
  [
    "canonical URL is siteUrl",
    () => {
      const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
      if (!isSiteUrl(canonical)) return `canonical is ${canonical}`;
    },
  ],
  [
    "og:url is siteUrl and og:site_name is set",
    () => {
      if (!isSiteUrl(meta("og:url"))) return `og:url is ${meta("og:url")}`;
      if (!meta("og:site_name")) return "no og:site_name";
    },
  ],
  [
    "twitter:creator matches the X link",
    () => {
      const x = RESUME_DATA.contact.social.find(({ icon }) => icon === "x");
      const expected = x && `@${x.url.split("/").filter(Boolean).at(-1)}`;
      const creator = meta("twitter:creator");
      if (creator !== expected) return `expected ${expected}, found ${creator}`;
    },
  ],
  [
    "JSON-LD has one Person and no estimatedSalary",
    () => {
      const jsonLd = jsonLdScripts.join("\n");
      const people = jsonLd.match(/"@type":"Person"/g)?.length ?? 0;
      if (people !== 1) return `found ${people} Person objects`;
      if (jsonLd.includes("estimatedSalary")) return "has estimatedSalary";
    },
  ],
  [
    "title names the current role",
    () => {
      const role =
        RESUME_DATA.work.find(({ end }) => end === null)?.title ?? "Resume";
      const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
      if (!title.includes(role)) return `"${title}" lacks "${role}"`;
    },
  ],
  [
    "generated robots.txt allows /_next/",
    () => {
      if (/^Disallow:\s*\/_next\//im.test(read("robots.txt.body"))) {
        return "disallows /_next/";
      }
    },
  ],
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
