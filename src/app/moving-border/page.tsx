"use client";
import { MySection } from "@/components/aceternity/moving-border";
import React from "react";

export default function MovingBorderDemo() {
  return (
    <div>
      <MySection
        borderRadius="0.5rem"
        className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white "
        duration={10000}
      >
        Borders are cool
      </MySection>
    </div>
  );
}
