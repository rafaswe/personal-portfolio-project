"use client";

import { cn } from "@/functions/cn";
import useTerminalStore from "@/service/store/useTerminalStore";
import Link from "next/link";
import React from "react";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";

const HeaderMenu = ({ className }: { className?: string }) => {
  const { toggleTerminal } = useTerminalStore();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef as React.RefObject<HTMLDivElement>, () =>
    setOpen(false),
  );

  const menuItems = (
    <>
      <Link href="/" onClick={() => setOpen(false)}>
        File
      </Link>
      <Link href="/" onClick={() => setOpen(false)}>
        Edit
      </Link>
      <Link href="/" onClick={() => setOpen(false)}>
        Selection
      </Link>
      <Link href="/" onClick={() => setOpen(false)}>
        View
      </Link>
      <Link href="/" onClick={() => setOpen(false)}>
        Go
      </Link>
      <Link href="/" onClick={() => setOpen(false)}>
        Run
      </Link>
      <button
        onClick={() => {
          toggleTerminal();
          setOpen(false);
        }}
        className="text-start md:text-center">
        Terminal
      </button>
      <Link href="/" onClick={() => setOpen(false)}>
        Help
      </Link>
    </>
  );

  return (
    <div className={cn("relative", className)}>
      {isMobile ? (
        <div className="flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 focus:outline-none">
            {/* simple hamburger icon */}
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      ) : (
        <div className={cn("flex gap-3", className)}>{menuItems}</div>
      )}

      {isMobile && open && (
        <div
          className="absolute top-full left-0 mt-2 border w-30 z-50 bg-primary shadow-lg flex flex-col gap-2 p-2"
          ref={menuRef}>
          {menuItems}
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
