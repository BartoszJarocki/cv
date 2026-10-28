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
const { RESUME_DATA, SECTION_TITLES } = await import(
  "../src/data/resume-data.ts"
);

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

const showsUrl = (text, href) => {
  const link = new URL(href);
  return ["", "www."].some((www) => {
    const shown = URL.parse(`${link.protocol}//${www}${text}`);
    return (
      shown?.host === link.host &&
      [shown.pathname, `${shown.pathname}/`].includes(link.pathname) &&
      shown.search === link.search &&
      shown.hash === link.hash
    );
  });
};

const headings = [...html.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/gs)].map(
  ([, text]) => decode(text)
);
const sections = new Map(
  [
    ...html.matchAll(
      /<section\b[^>]*>\s*<h2\b[^>]*>(.*?)<\/h2>(.*?)<\/section>/gs
    ),
  ].map(([, heading, body]) => [decode(heading), body])
);
const hasData = (key) => RESUME_DATA[key].length > 0;
const articles = (key) => {
  if (!hasData(key)) return [];
  const section = sections.get(SECTION_TITLES[key]);
  if (section === undefined) {
    throw new Error(`no "${SECTION_TITLES[key]}" section`);
  }
  const found = [...section.matchAll(/<article\b.*?<\/article>/gs)].map(
    ([article]) => article
  );
  if (found.length !== RESUME_DATA[key].length) {
    throw new Error(
      `${found.length} articles in "${SECTION_TITLES[key]}" for ${RESUME_DATA[key].length} entries`
    );
  }
  return found;
};

const styledText = read("index.txt.body");
const text = styledText.replace(/\x1b\[[0-9;]*m/g, "");
const markdown = read("index.md.body");
const llms = read("llms.txt.body");
const unescape = (md) => md.replace(/\\([!-/:-@[-`{-~])/g, "$1");
const site = new URL(RESUME_DATA.siteUrl).origin;

const dimLineAfterBlankLine = /(?<=\n\n) {2}\x1b\[2m([^\x1b\n]+)\x1b\[0m$/gm;
const sectionHeadings = [
  ["page", headings, (title) => title],
  [
    "text",
    [...styledText.matchAll(dimLineAfterBlankLine)].map(([, title]) => title),
    (title) => title.toLowerCase(),
  ],
  [
    "markdown",
    [...markdown.matchAll(/^## (.*)$/gm)].map(([, title]) => unescape(title)),
    (title) => title,
  ],
];
const showing = (title) =>
  sectionHeadings
    .filter(([, found, shown]) => found.includes(shown(title)))
    .map(([version]) => version);

const entryName = {
  work: ({ company }) => company,
  education: ({ school }) => school,
  projects: ({ title }) => title,
};
const entryNames = Object.keys(SECTION_TITLES)
  .filter((key) => key in entryName)
  .flatMap((key) => RESUME_DATA[key].map(entryName[key]));

const dataLinks = [
  RESUME_DATA.locationLink,
  RESUME_DATA.personalWebsiteUrl,
  ...RESUME_DATA.contact.social.map(({ url }) => url),
  ...RESUME_DATA.work.map(({ link }) => link),
  ...RESUME_DATA.projects.map(({ link }) => link),
].filter(Boolean);

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
  ...Object.entries(SECTION_TITLES).map(([key, heading]) =>
    hasData(key)
      ? [
          `"${heading}" heading renders in the page, the text, and the markdown`,
          () => {
            const missing = sectionHeadings
              .map(([version]) => version)
              .filter((version) => !showing(heading).includes(version));
            if (missing.length > 0) return `missing in ${missing.join(", ")}`;
          },
        ]
      : [
          `empty ${key} hides the "${heading}" heading`,
          () => {
            if (showing(heading).length > 0) {
              return `found in ${showing(heading).join(", ")}`;
            }
          },
        ]
  ),
  [
    "the page, the text, and the markdown list the sections in one order",
    () => {
      const titles = Object.entries(SECTION_TITLES)
        .filter(([key]) => hasData(key))
        .map(([, title]) => title);
      const wrong = sectionHeadings.filter(
        ([, found, shown]) => found.join("\n") !== titles.map(shown).join("\n")
      );
      if (wrong.length > 0) {
        return wrong
          .map(([version, found]) => `${version} has ${found.join(", ")}`)
          .join("; ");
      }
    },
  ],
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
      const expected =
        x && `@${new URL(x.url).pathname.split("/").find(Boolean)}`;
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
      const missing = [];
      const problems = [];
      for (const [index, article] of articles("projects").entries()) {
        const { title, link } = RESUME_DATA.projects[index];
        if (!link) continue;
        const heading = article.match(/<h3\b.*?<\/h3>/s)?.[0] ?? "";
        const texts = [
          ...article.replace(heading, "").matchAll(/>([^<]+)</g),
        ].map(([, text]) => decode(text));
        if (!heading || !texts.some((text) => showsUrl(text, link))) {
          missing.push(link);
        }
        const links = hrefs(article).map(decode);
        if (links.length !== 2) {
          problems.push(`${title} has ${links.length} links, expected 2`);
        }
        for (const href of links.filter((href) => href !== link)) {
          problems.push(`${title} links to ${href}`);
        }
      }
      if (missing.length > 0) problems.unshift(`missing ${missing.join(", ")}`);
      if (problems.length > 0) return problems.join("; ");
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
      const links = hrefs(buttons);
      const { personalWebsiteUrl, contact } = RESUME_DATA;
      const contacts = [
        personalWebsiteUrl,
        contact.email && `mailto:${contact.email}`,
        contact.tel && `tel:${contact.tel}`,
        ...contact.social.map(({ url }) => url),
      ].filter(Boolean);
      if (links.length !== contacts.length) {
        const shown = links.map(decode);
        return [
          `${links.length} contact links for ${contacts.length} contacts`,
          ...contacts
            .filter((href) => !shown.includes(href))
            .map((href) => `no link for ${href}`),
          ...shown
            .filter((href) => !contacts.includes(href))
            .map((href) => `extra link ${href}`),
        ].join(", ");
      }
      const missing = links.filter((href) => !printed.includes(href));
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
    "each entry lists its tags once",
    () => {
      const entries = [
        ...articles("work").map((article, index) => [
          article,
          RESUME_DATA.work[index].company,
          RESUME_DATA.work[index].badges,
        ]),
        ...articles("projects").map((article, index) => [
          article,
          RESUME_DATA.projects[index].title,
          RESUME_DATA.projects[index].techStack,
        ]),
      ];
      const wrong = entries.flatMap(([article, name, tags]) => {
        const found =
          article.match(/aria-label="Technologies used"/g)?.length ?? 0;
        const expected = tags.length > 0 ? 1 : 0;
        return found === expected
          ? []
          : `${name} has ${found} "Technologies used" lists, expected ${expected}`;
      });
      if (wrong.length > 0) return wrong.join("; ");
    },
  ],
  [
    "tag separators keep the dot on the tag's line",
    () => {
      const tagLists = {
        "List of skills": [RESUME_DATA.skills],
        "Technologies used": [
          ...RESUME_DATA.work.map(({ badges }) => badges),
          ...RESUME_DATA.projects.map(({ techStack }) => techStack),
        ],
      };
      const problems = [];
      for (const [label, tagSets] of Object.entries(tagLists)) {
        const filled = tagSets.filter((tags) => tags.length > 0);
        const expected = filled.reduce((sum, tags) => sum + tags.length - 1, 0);
        const lists =
          html.match(
            new RegExp(`<ul\\b[^>]*aria-label="${label}".*?</ul>`, "gs")
          ) ?? [];
        const separators = lists.flatMap((list) =>
          [
            ...list.matchAll(
              /<span\b[^>]*aria-hidden="true"[^>]*>([^<]*)<\/span>/g
            ),
          ].map(([, text]) => text)
        );
        if (lists.length !== filled.length || separators.length !== expected) {
          problems.push(
            `${lists.length} "${label}" lists with ${separators.length} separators, expected ${filled.length} with ${expected}`
          );
        }
        const breaking = separators.filter(
          (text) => !text.startsWith("\u00a0")
        );
        if (breaking.length > 0) {
          problems.push(
            `${breaking.length} "${label}" separators without a no-break space`
          );
        }
      }
      if (problems.length > 0) return problems.join("; ");
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
  [
    "the text starts with the name in bold",
    () => {
      const first = styledText.split("\n").find((line) => line.trim());
      if (!first?.startsWith("  \x1b[1m")) return `starts with ${first}`;
      if (!text.trim().replace(/\s+/g, " ").startsWith(RESUME_DATA.name)) {
        return `the first words are not ${RESUME_DATA.name}`;
      }
    },
  ],
  [
    "the markdown starts with # and the name",
    () => {
      const first = unescape(markdown.split("\n")[0]);
      if (first !== `# ${RESUME_DATA.name}`) return `starts with "${first}"`;
    },
  ],
  [
    "the text and the markdown show every company, school, and project in order",
    () => {
      const problems = [];
      const words = text.replace(/\s+/g, " ");
      let at = 0;
      for (const name of entryNames) {
        const found = words.indexOf(name, at);
        if (found === -1) problems.push(`the text lacks ${name}`);
        else at = found + name.length;
      }
      const titles = [...markdown.matchAll(/^### (.*)$/gm)].map(([, title]) =>
        unescape(title.replace(/^\[(.*)\]\((?:<[^>]*>|[^)]*)\)$/, "$1"))
      );
      if (titles.join("\n") !== entryNames.join("\n")) {
        problems.push(`the markdown has ${titles.join(", ")}`);
      }
      if (problems.length > 0) return problems.join("; ");
    },
  ],
  [
    "the text and the markdown show every link in the data",
    () => {
      const { email, tel } = RESUME_DATA.contact;
      const words = text.split(/\s+/).filter((word) => {
        const host = word.split(/[/?#]/)[0];
        return host === host.toLowerCase();
      });
      const hrefs = [
        email && `mailto:${email}`,
        tel && `tel:${tel}`,
        ...dataLinks,
      ].filter(Boolean);
      const missing = [
        ...dataLinks
          .filter((href) => !words.some((word) => showsUrl(word, href)))
          .map((href) => `the text lacks ${href}`),
        ...[email, tel]
          .filter((value) => value && !words.includes(value))
          .map((value) => `the text lacks ${value}`),
        ...hrefs
          .filter(
            (href) =>
              !markdown.includes(`](${href})`) &&
              !markdown.includes(`](<${href}>)`)
          )
          .map((href) => `the markdown lacks ${href}`),
      ];
      if (missing.length > 0) return missing.join("; ");
    },
  ],
  [
    "no text line passes 80 columns, except a URL on its own",
    () => {
      const lines = text.split("\n");
      if (!lines.some((line) => line.trim())) return "the text is empty";
      const long = lines.filter(
        (line) =>
          [...line].length > 80 &&
          !dataLinks.some((href) => showsUrl(line.trim(), href))
      );
      if (long.length > 0) {
        return `${long.length} lines, the first is "${long[0].trim()}"`;
      }
    },
  ],
  [
    "llms.txt is the markdown with a paragraph on the other formats after the blockquote",
    () => {
      const lines = llms.split("\n");
      const [title, , quote, , formats] = lines;
      const problems = [];
      if (title !== markdown.split("\n")[0]) {
        problems.push(`starts with ${title}`);
      }
      if (unescape(quote ?? "") !== `> ${RESUME_DATA.about}`) {
        problems.push(`has ${quote} for the blockquote`);
      }
      for (const name of [
        `curl ${site}`,
        `${site}/index.md`,
        "Accept: text/markdown",
      ]) {
        if (!formats?.includes(`\`${name}\``)) {
          problems.push(`does not name ${name}`);
        }
      }
      if ([...lines.slice(0, 4), ...lines.slice(6)].join("\n") !== markdown) {
        problems.push("differs from the markdown outside that paragraph");
      }
      if (problems.length > 0) return problems.join("; ");
    },
  ],
  [
    "the page links its markdown version",
    () => {
      const href = html.match(
        /<link rel="alternate" type="text\/markdown" href="([^"]*)"/
      )?.[1];
      const expected = new URL("/index.md", site).href;
      if (href === undefined || new URL(href, site).href !== expected) {
        return `alternate is ${href}`;
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
