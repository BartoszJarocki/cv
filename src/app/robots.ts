import type { MetadataRoute } from "next";
import { SITE_BASE_URL, absoluteUrl } from "@/lib/site-config";

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
