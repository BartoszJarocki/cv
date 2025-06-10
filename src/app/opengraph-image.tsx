/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const runtime = "edge";

export const alt = "Minimalist Resume";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fontData = await fetch(
    new URL("../fonts/Geomanist-Medium.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geomanist, sans-serif",
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
          <img
            src={RESUME_DATA.avatarUrl}
            alt={RESUME_DATA.name}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginBottom: "2rem",
            }}
          />
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              textTransform: "uppercase",
              color: "#12191f",
              marginBottom: "0.8rem",
            }}
          >
            {RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "#737373",
              maxWidth: "600px",
              lineHeight: "1.4",
            }}
          >
            {RESUME_DATA.about}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "1rem",
            }}
          >
            {RESUME_DATA.personalWebsiteUrl && (
              <div style={{ fontSize: "1.2rem", color: "#737373" }}>
                {RESUME_DATA.personalWebsiteUrl.slice(8)}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          data: fontData,
          name: "Geomanist Bold",
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
