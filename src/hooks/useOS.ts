import { useEffect, useState } from "react";

export type OS = "mac" | "other";

export const useOS = () => {
  const [os, setOs] = useState<OS>("mac");
  useEffect(() => {
    setOs(
      window.navigator.userAgent.toLowerCase().includes("mac")
        ? "mac"
        : "other",
    );
  }, []);

  return os;
};
