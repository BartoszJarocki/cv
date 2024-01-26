import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Header } from "@/components/header"
import { RESUME_DATA } from "@/data/resume-data";
import { Providers } from "@/providers";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <html lang="en" className={inter.className}>
      <body>
      <Providers>
        <Header/>
        {children} 
      </Providers>
      </body>
      <Analytics />
    </html>
  );
}
