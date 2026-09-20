"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { sideMenuProperties } from "../constant/enum";

const SideMenu = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathName = usePathname();
  const listId = useId();

  return (
    <nav aria-label="Explorer" className={cn("text-code-text py-2 text-sm", className)}>
      <h2 className="px-4 font-bold tracking-wide">EXPLORER</h2>

      <div className="w-full">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={listId}
          className="my-2 flex w-full items-center gap-1 rounded-sm pl-4 pr-2 py-0.5 transition-colors hover:bg-secondary">
          <ChevronRight
            size={14}
            aria-hidden="true"
            className={cn("transition-transform duration-200", {
              "rotate-90": isOpen,
            })}
          />
          <span>PORTFOLIO</span>
        </button>

        {/* Collapse animated with a 0fr -> 1fr grid row rather than
            framer-motion. This component renders in the root layout, so any
            library it imports is loaded on every route; CSS keeps the same
            height transition at no bundle cost. */}
        <div
          id={listId}
          className={cn(
            "grid overflow-hidden transition-all duration-250 ease-in-out motion-reduce:transition-none",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}>
          <div className="min-h-0">
              <ul className="flex flex-col">
                {sideMenuProperties.map((menue) => {
                  const isActive = pathName === menue?.pageLink;
                  return (
                    <li key={menue.id}>
                      <Link
                        href={menue?.pageLink}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          // was `items-cente` — a typo, so nothing aligned
                          "flex w-full items-center gap-2.5 rounded-sm py-0.5 pl-4 transition-colors hover:bg-secondary",
                          { "bg-secondary": isActive }
                        )}>
                        <Image
                          src={`/images/${menue.icon}.svg`}
                          alt=""
                          aria-hidden="true"
                          height={15}
                          width={15}
                          className="h-[15px] w-[15px] shrink-0"
                        />
                        <span className="truncate">{menue.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
