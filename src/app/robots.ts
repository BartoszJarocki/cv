import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_BASE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
      crawlDelay: 1,
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_BASE_URL,
  };
}
