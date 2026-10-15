import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";
import { getCurrentRole, getPageTitle } from "@/lib/resume";

export const alt = getPageTitle(RESUME_DATA);
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const colors = { bg: "#fafaf8", ink: "#1a1815", body: "#4a4744" };

const avatarTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
};

// The import only yields a hashed URL, such as
// /_next/static/media/avatar.<hash>.jpg?dpl=<id>, so read the file it names.
async function readAvatar() {
  const { pathname } = new URL(RESUME_DATA.avatar.src, "file:");
  const [, name, extension] =
    pathname.match(/([^/]+)\.[^./]+\.([^./]+)$/) ?? [];
  const file = `src/data/${name}.${extension}`;
  const type = extension && avatarTypes[extension];
  if (!type) {
    throw new Error(`The OG image can't draw ${file}. Use a JPEG, PNG or SVG.`);
  }
  const bytes = await readFile(join(process.cwd(), file));
  return `data:${type};base64,${bytes.toString("base64")}`;
}

const readGeist = (file: string) =>
  readFile(
    join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans", file)
  );

export default async function Image() {
  const [avatar, geistRegular, geistBold] = await Promise.all([
    readAvatar(),
    readGeist("Geist-Regular.ttf"),
    readGeist("Geist-Bold.ttf"),
  ]);
  const currentRole = getCurrentRole(RESUME_DATA.work);

  return new ImageResponse(
    <div
      style={{
        background: colors.bg,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: ImageResponse context requires img element */}
        <img
          src={avatar}
          alt={RESUME_DATA.name}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10%",
            marginBottom: "2rem",
          }}
        />
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            color: colors.ink,
          }}
        >
          {RESUME_DATA.name}
        </div>
        {currentRole && (
          <div
            style={{
              fontSize: "1.75rem",
              color: colors.ink,
              marginTop: "0.5rem",
            }}
          >
            {currentRole.title}
          </div>
        )}
        <div
          style={{
            fontSize: "1.5rem",
            color: colors.body,
            maxWidth: "600px",
            lineHeight: "1.4",
            marginTop: "1rem",
          }}
        >
          {RESUME_DATA.about}
        </div>
        <div
          style={{ fontSize: "1rem", color: colors.body, marginTop: "2rem" }}
        >
          {new URL(RESUME_DATA.siteUrl).host}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
      ],
    }
  );
}
