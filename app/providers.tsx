"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

/**
 * App-wide client providers.
 *
 * This renders in the root layout, so anything imported here is loaded on every
 * route. It previously also mounted framer-motion's MotionConfig, which pulled
 * the whole animation library into the shared bundle. All animation is CSS now,
 * and `prefers-reduced-motion` is handled by the media query in globals.css.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={150}>
      {children}
    </TooltipProvider>
  );
}
