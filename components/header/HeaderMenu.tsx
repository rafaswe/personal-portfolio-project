"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import useTerminalStore from "@/service/store/useTerminalStore";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MENU_LINKS = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Help",
] as const;

/**
 * The editor menu bar.
 *
 * The mobile variant used to be a `useMediaQuery` branch rendering an absolutely
 * positioned div with a click-outside listener — no focus trap, no Escape, and
 * a hydration mismatch risk because `useMediaQuery` resolves to `false` on the
 * server and flips on mount. It is now a Radix Sheet, and the breakpoint is
 * handled in CSS so both variants render identically on server and client.
 */
const HeaderMenu = ({ className }: { className?: string }) => {
  const { toggleTerminal } = useTerminalStore();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      {/* Desktop: inline menu bar */}
      <nav aria-label="Editor menu" className="hidden gap-3 md:flex">
        {MENU_LINKS.map((label) => (
          <Link
            key={label}
            href="/"
            className="rounded-sm px-1 transition-colors hover:text-white hover:underline underline-offset-4">
            {label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggleTerminal}
          className="rounded-sm px-1 transition-colors hover:text-white hover:underline underline-offset-4">
          Terminal
        </button>
      </nav>

      {/* Mobile: sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="size-8 md:hidden">
            <Menu size={18} aria-hidden="true" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-64 border-border bg-primary p-0 text-current">
          <SheetHeader className="border-b border-border">
            <SheetTitle className="text-left text-sm font-semibold tracking-wide">
              MENU
            </SheetTitle>
          </SheetHeader>

          <nav aria-label="Editor menu" className="flex flex-col p-2">
            {MENU_LINKS.map((label) => (
              <SheetClose asChild key={label}>
                <Link
                  href="/"
                  className="rounded-sm px-3 py-2 text-sm transition-colors hover:bg-surface-hover">
                  {label}
                </Link>
              </SheetClose>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTerminal();
                setOpen(false);
              }}
              className="rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-surface-hover">
              Terminal
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderMenu;
