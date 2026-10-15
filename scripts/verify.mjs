import { readdirSync, readFileSync } from "node:fs";
import module from "node:module";

if (!module.registerHooks) {
  console.error(
    `pnpm verify needs Node 22.15 or later for module.registerHooks. This is Node ${process.version}.`
  );
  process.exit(1);
}

const stubImages = (url, context, nextLoad) =>
  /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i.test(url)
    ? { format: "module", source: "export default {}", shortCircuit: true }
    : nextLoad(url, context);
const loadTypeScriptAsModules = (url, context, nextLoad) =>
  nextLoad(
    url,
    url.endsWith(".ts") ? { ...context, format: "module-typescript" } : context
  );
module.registerHooks({ load: stubImages });
module.registerHooks({ load: loadTypeScriptAsModules });
const { RESUME_DATA } = await import("../src/data/resume-data.ts");

const read = (file) =>
  readFileSync(new URL(`../.next/server/app/${file}`, import.meta.url), "utf8");

const html = read("index.html");
const sources = readdirSync(new URL("../src", import.meta.url), {
  recursive: true,
})
  .filter((file) => /\.(tsx?|css)$/.test(file))
  .map((file) => [
    file,
    readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8"),
  ]);
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

const hrefs = (fragment) =>
  [...fragment.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(([, href]) => href);

const destination = (url) => {
  const { host, pathname, search, hash } = new URL(url);
  return `${host.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}${search}${hash}`;
};
const showsUrl = (text, href) =>
  URL.canParse(`https://${text}`) &&
  destination(`https://${text}`) === destination(href);

const sectionHeadings = [
  "About",
  "Work Experience",
  "Education",
  "Skills",
  "Side projects",
];

const checks = [
  [
    "exactly one <h1>",
    () => {
      const count = html.match(/<h1[\s>]/g)?.length ?? 0;
      if (count !== 1) return `found ${count}`;
    },
  ],
  [
    "no list inside a heading",
    () => {
      const headings = [...html.matchAll(/<(h[1-6])\b[^>]*>(.*?)<\/\1>/gs)];
      const nested = headings.filter(([, , inner]) =>
        /<(ul|ol)[\s>]/.test(inner)
      );
      if (nested.length > 0) return `found ${nested.length}`;
    },
  ],
  [
    'no role="feed"',
    () => {
      const count = html.match(/role="feed"/g)?.length ?? 0;
      if (count > 0) return `found ${count}`;
    },
  ],
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
  [
    "every project link prints a URL outside the heading that leads to it",
    () => {
      const section = html.match(/>Side projects<\/h2>(.*?)<\/section>/s)?.[1];
      if (!section) return "no projects section";
      const missing = [];
      for (const [article] of section.matchAll(/<article\b.*?<\/article>/gs)) {
        const [link] = hrefs(article);
        if (!link) continue;
        const heading = article.match(/<h3\b.*?<\/h3>/s)?.[0] ?? "";
        const texts = [
          ...article.replace(heading, "").matchAll(/>([^<]+)</g),
        ].map(([, text]) => decode(text));
        if (!heading || !texts.some((text) => showsUrl(text, decode(link)))) {
          missing.push(link);
        }
      }
      if (missing.length > 0) return `missing ${missing.join(", ")}`;
    },
  ],
  [
    "the print contact row has every contact link",
    () => {
      const header = html.match(/<header\b.*?<\/header>/s)?.[0] ?? "";
      const buttons = header.match(
        /<ul\b[^>]*aria-label="Contact links"[^>]*>.*?<\/ul>/s
      )?.[0];
      if (!buttons) return "no contact links list";
      const printed = [
        ...header
          .replace(buttons, "")
          .matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>[^<]+<\/a>/g),
      ].map(([, href]) => href);
      const missing = hrefs(buttons).filter((href) => !printed.includes(href));
      if (missing.length > 0) return `missing ${missing.join(", ")}`;
    },
  ],
  [
    "no text class below 9px",
    () => {
      const sizes = [...html.matchAll(/\btext-\[(\d+(?:\.\d+)?)px\]/g)];
      const small = new Set(
        sizes.map(([, px]) => Number(px)).filter((px) => px < 9)
      );
      if (small.size > 0) return `found ${[...small].join("px, ")}px`;
    },
  ],
  [
    "no entry lists its tags twice",
    () => {
      const repeated = ["Work Experience", "Side projects"].flatMap((name) => {
        const section =
          html.match(new RegExp(`>${name}</h2>(.*?)</section>`, "s"))?.[1] ??
          "";
        return [...section.matchAll(/<article\b.*?<\/article>/gs)].filter(
          ([article]) =>
            (article.match(/aria-label="Technologies used"/g)?.length ?? 0) > 1
        );
      });
      if (repeated.length > 0) return `${repeated.length} entries`;
    },
  ],
  [
    "tag separators keep the dot on the tag's line",
    () => {
      const lists = html.match(
        /<ul\b[^>]*aria-label="(?:Technologies used|List of skills)".*?<\/ul>/gs
      );
      const separators = (lists ?? []).flatMap((list) => [
        ...list.matchAll(
          /<span\b[^>]*aria-hidden="true"[^>]*>([^<]*)<\/span>/g
        ),
      ]);
      const breaking = separators.filter(
        ([, text]) => !text.startsWith("\u00a0")
      );
      if (breaking.length > 0)
        return `${breaking.length} without a no-break space`;
    },
  ],
  [
    "colors come from the theme tokens",
    () => {
      const literal =
        /\b[a-z]+-(?:(?:black|white)\b|(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}|\[(?:#|hsl|rgb|oklch))/g;
      const found = sources.flatMap(([file, source]) =>
        (source.match(literal) ?? []).map((match) => `${file}: ${match}`)
      );
      if (found.length > 0) return `found ${found.join(", ")}`;
    },
  ],
  [
    "every enter and exit animation class is motion-safe",
    () => {
      const enterExit =
        /^(?:animate-(?:in|out)|(?:fade|zoom|spin)-(?:in|out)(?:-.+)?|slide-(?:in-from|out-to)-.+)$/;
      const found = sources.flatMap(([file, source]) =>
        (source.match(/[^\s"'`]+/g) ?? [])
          .filter((token) => enterExit.test(token.split(":").at(-1)))
          .filter((token) => !token.includes("motion-safe:"))
          .map((token) => `${file}: ${token}`)
      );
      if (found.length > 0) return `found ${found.join(", ")}`;
    },
  ],
  [
    "preloads only the two fonts the page uses",
    () => {
      const fonts =
        html.match(/<link rel="preload" href="[^"]*" as="font"/g)?.length ?? 0;
      if (fonts !== 2) return `preloads ${fonts}`;
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
