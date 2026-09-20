"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import useTerminalStore from "@/service/store/useTerminalStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuProperties } from "../constant/enum";

const railItem =
  "pr-3 pl-2.5 py-3 border-l-2 transition-colors duration-150 hover:bg-surface-hover focus-visible:bg-surface-hover";

const SideOption = ({ className }: { className?: string }) => {
  const sideMenu = menuProperties.slice(0, menuProperties.length - 2);
  const personalInfoProperties = menuProperties.slice(-2);

  const pathName = usePathname();
  const { toggleTerminal, isTerminalClicked } = useTerminalStore();

  const renderLink = (singleProperty: (typeof menuProperties)[number]) => {
    const isActive = pathName === singleProperty.link;

    return (
      <Tooltip key={singleProperty.id}>
        <TooltipTrigger asChild>
          <Link
            href={singleProperty.link}
            aria-label={singleProperty.altText}
            aria-current={isActive ? "page" : undefined}
            className={cn(railItem, {
              "border-tertiary": isActive,
              "border-transparent": !isActive,
              "cursor-not-allowed": !singleProperty?.link,
            })}>
            <Image
              src={`/images/${singleProperty.image}.svg`}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              // Was `"w-24 h-24 " + pathName === singleProperty.link ? … : …`,
              // where `+` binds tighter than `===`. That compared the joined
              // string to the link and so was always false, leaving every icon
              // permanently at opacity-20.
              className={cn(
                "transition-opacity duration-150",
                isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
              )}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{singleProperty.altText}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <nav
      aria-label="Activity bar"
      className={cn("flex flex-col w-10 md:w-12 justify-between", className)}>
      <div className="flex flex-col">{sideMenu?.map(renderLink)}</div>

      <div className="flex flex-col">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={toggleTerminal}
              aria-label={isTerminalClicked ? "Close terminal" : "Open terminal"}
              aria-pressed={isTerminalClicked}
              className={cn(railItem, {
                "border-tertiary": isTerminalClicked,
                "border-transparent": !isTerminalClicked,
              })}>
              <Image
                src="/images/terminal.svg"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className={cn(
                  "transition-opacity duration-150",
                  isTerminalClicked
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-80"
                )}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Toggle terminal</TooltipContent>
        </Tooltip>

        {personalInfoProperties?.map(renderLink)}
      </div>
    </nav>
  );
};

export default SideOption;
