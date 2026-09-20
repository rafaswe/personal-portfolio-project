"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideMenuProperties } from "../constant/enum";

/** The editor's open-file tab strip. */
const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav
      aria-label="Open files"
      className="flex items-center overflow-x-auto hidden-scrollbar text-sm bg-primary">
      {sideMenuProperties.map((menubar) => {
        const isActive = pathName === menubar?.pageLink;
        return (
          <Link
            href={menubar?.pageLink}
            key={menubar.id}
            aria-current={isActive ? "page" : undefined}
            title={menubar.text}
            className={cn(
              "flex w-fit shrink-0 items-center gap-2 border-r-2 border-secondary px-4 py-2.5 transition-colors duration-150",
              isActive
                ? "bg-secondary"
                : "bg-primary text-muted-foreground hover:bg-secondary/60 hover:text-current"
            )}>
            <Image
              src={`/images/${menubar.icon}.svg`}
              alt=""
              aria-hidden="true"
              height={15}
              width={15}
              className="h-[15px] w-[15px] shrink-0"
            />
            <span className="hidden md:block">{menubar.text}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
