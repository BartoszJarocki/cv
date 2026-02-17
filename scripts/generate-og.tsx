import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import React from "react";
import satori from "satori";
import sharp from "sharp";

// Ensure TSX modules (like RESUME_DATA) can access React when evaluated via tsx/ts-node.
(globalThis as typeof globalThis & { React?: typeof React }).React = React;

const OUTPUT_PATH = resolve(process.cwd(), "public", "opengraph-image.png");
const WIDTH = 1200;
const HEIGHT = 630;

async function loadFont(filename: string) {
  const fontPath = resolve(process.cwd(), "public", "fonts", filename);
  return readFile(fontPath);
}

async function generateOgImage() {
  const [{ RESUME_DATA }, { reactToString }] = await Promise.all([
    import("../src/data/resume-data"),
    import("../src/lib/types"),
  ]);

  const [interRegular, interBold] = await Promise.all([
    loadFont("Inter-Regular.ttf"),
    loadFont("Inter-Bold.ttf"),
  ]);

  const summary = reactToString(RESUME_DATA.about);
  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px",
        backgroundColor: "#ffffff",
        fontFamily: "Inter",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Rendering inside satori */}
      <img
        src={RESUME_DATA.avatarUrl}
        width={160}
        height={160}
        style={{ borderRadius: "16px", marginBottom: "32px" }}
        alt={RESUME_DATA.name}
      />
      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#111827",
          marginBottom: "24px",
        }}
      >
        {RESUME_DATA.name}
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#4B5563",
          maxWidth: "820px",
          lineHeight: 1.4,
          marginBottom: "24px",
        }}
      >
        {summary}
      </div>
      <div style={{ display: "flex", gap: "12px", fontSize: 24, color: "#6B7280" }}>
        {RESUME_DATA.contact.social
          .filter((social) => ["github", "linkedin"].includes(social.icon))
          .map((social) => (
            <span key={social.name}>{social.name}</span>
          ))}
      </div>
    </div>,
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(OUTPUT_PATH, png);
console.log(`OG image generated at ${OUTPUT_PATH}`);
}

generateOgImage().catch((error) => {
  console.error("Failed to generate OG image:", error);
  process.exitCode = 1;
});
