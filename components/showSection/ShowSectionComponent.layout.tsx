import { cn } from "@/functions/cn";
import { ReactNode } from "react";

const ComponentLayout = ({
  title,
  className,
  children,
  titleClassName = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={cn("p-4 flex flex-col gap-3", className)}>
      {title ? (
        <div className="relative w-fit">
          <p className={cn("font-bold text-3xl", titleClassName)}>{title}</p>
          <div className="line-animation absolute -bottom-2 left-0 h-[3px] bg-tertiary rounded-lg"></div>
        </div>
      ) : null}

      <div>{children}</div>
    </div>
  );
};

export default ComponentLayout;
