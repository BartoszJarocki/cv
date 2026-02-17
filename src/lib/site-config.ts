const LOCAL_SITE_BASE_URL = "http://localhost:3000";
const PRODUCTION_SITE_BASE_URL = "https://cv.ishahroz.com";

const isProduction = () => process.env.NODE_ENV === "production";

export const SITE_BASE_URL = isProduction()
  ? PRODUCTION_SITE_BASE_URL
  : LOCAL_SITE_BASE_URL;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_BASE_URL).toString();
}
