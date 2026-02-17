const DEFAULT_LOCAL_SITE_BASE_URL = "http://localhost:3000";
const DEFAULT_PRODUCTION_SITE_BASE_URL = "https://cv.ishahroz.com";

const isProduction = () => process.env.NODE_ENV === "production";

const resolveSiteBaseUrl = () => {
  const envOverride =
    process.env.NEXT_PUBLIC_SITE_BASE_URL ?? process.env.CF_PAGES_URL;

  if (envOverride && envOverride.length > 0) {
    return envOverride;
  }

  return isProduction()
    ? DEFAULT_PRODUCTION_SITE_BASE_URL
    : DEFAULT_LOCAL_SITE_BASE_URL;
};

export const SITE_BASE_URL = resolveSiteBaseUrl();

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_BASE_URL).toString();
}
