"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * App-wide client providers.
 *
 * `MotionConfig reducedMotion="user"` is the important one: it makes every
 * framer-motion animation in the app honour `prefers-reduced-motion` without
 * touching the individual components. Transform/opacity animations are reduced
 * to instant state changes for users who ask for that.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={300} skipDelayDuration={150}>
        {children}
      </TooltipProvider>
    </MotionConfig>
  );
}
