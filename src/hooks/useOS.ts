import { useMemo } from "react";

export type OS = "mac" | "windows" | "linux" | "other";

export const useOS = (): OS => {
  const getOperatingSystem = (): OS => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("mac")) return "mac";
    if (userAgent.includes("win")) return "windows";
    if (userAgent.includes("linux")) return "linux";

    return "other";
  };

  return useMemo(() => getOperatingSystem(), []);
};
