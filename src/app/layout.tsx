import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";
import type React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { getPageTitle } from "@/lib/resume";

// geist/font/pixel declares all five Pixel variants, and Next preloads every
// font a module declares, so only the Square variant is declared here.
const geistPixelSquare = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel-square",
  weight: "500",
  adjustFontFallback: false,
});

const xProfile = RESUME_DATA.contact.social.find(({ icon }) => icon === "x");

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.siteUrl),
  title: getPageTitle(RESUME_DATA),
  description: RESUME_DATA.about,
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: `${RESUME_DATA.name}'s CV`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: xProfile && `@${new URL(xProfile.url).pathname.split("/")[1]}`,
  },
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0c0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistMono.variable} ${geistPixelSquare.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
