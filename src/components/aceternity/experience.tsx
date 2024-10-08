"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MovingBorder } from "./moving-border";

export function Experience({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-full w-full  overflow-hidden bg-transparent p-[1px] text-xl ",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="100%" ry="100%">
          <div
            className={cn(
              "h-[256px] w-[256px] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
            style={{
              background:
                "radial-gradient(circle, var(--sky-500) 20%, var(--purple-500) 40%, var(--pink-500) 60%, transparent 80%)",
            }}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const ExperienceCard = ({ children, work }: any) => {
  if (!work.end) {
    return (
      <Experience duration={10000} borderRadius="10px">
        {children}
      </Experience>
    );
  } else {
    return children;
  }
};