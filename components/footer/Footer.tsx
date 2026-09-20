import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const itemClass =
  "px-2 flex h-6 w-fit items-center gap-0.5 text-sm transition-colors hover:bg-surface-hover";

/** Status-bar cell that carries a tooltip instead of a `title` attribute. */
const StatusItem = ({
  label,
  className,
  href,
  children,
}: {
  label: string;
  className?: string;
  href?: string;
  children: ReactNode;
}) => {
  const content = href ? (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn(itemClass, className)}>
      {children}
    </Link>
  ) : (
    <div aria-label={label} className={cn(itemClass, className)}>
      {children}
    </div>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent side="top">{label}</TooltipContent>
    </Tooltip>
  );
};

const Footer = () => {
  return (
    <footer className="h-6 shrink-0 overflow-hidden bg-primary">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center">
          <StatusItem label="Open in a new window" className="bg-tertiary hover:bg-tertiary">
            <Image src="/images/remote.svg" alt="" aria-hidden="true" width={18} height={18} />
          </StatusItem>

          <StatusItem
            label="Mahiya Rahman Rafa (Git) — main. Check out GitHub"
            href="https://github.com/rafaswe">
            <Image src="/images/branch.svg" alt="" aria-hidden="true" width={16} height={16} />
            <p>main*</p>
          </StatusItem>

          <StatusItem label="No problems" className="hidden sm:flex">
            <span className="flex items-center gap-0.5">
              <Image src="/images/cross.svg" alt="" aria-hidden="true" width={16} height={16} />
              <span>0</span>
            </span>
            <span className="flex items-center gap-0.5 pl-1">
              <Image src="/images/warning.svg" alt="" aria-hidden="true" width={16} height={16} />
              <span>0</span>
            </span>
          </StatusItem>

          <StatusItem label="No ports forwarded" className="hidden sm:flex">
            <Image src="/images/tower.svg" alt="" aria-hidden="true" width={16} height={16} />
          </StatusItem>
        </div>

        <div className="flex shrink-0 items-center text-sm">
          <StatusItem label="Go live" className="hidden sm:flex">
            <Image src="/images/live.svg" alt="" aria-hidden="true" width={18} height={18} />
            <p>Live</p>
          </StatusItem>

          <div className="flex h-6 w-fit items-center gap-0.5 whitespace-nowrap px-2 text-xs sm:text-sm">
            <p>&copy; Mahiya Rahman Rafa</p>
          </div>

          <StatusItem label="Formatted with Prettier" className="hidden sm:flex">
            <Image src="/images/tick.svg" alt="" aria-hidden="true" width={18} height={18} />
            <p>Prettier</p>
          </StatusItem>

          <StatusItem label="No notifications" className="hidden sm:flex">
            <Image src="/images/bell.svg" alt="" aria-hidden="true" width={14} height={14} />
          </StatusItem>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
