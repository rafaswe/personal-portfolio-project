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
        <p className={cn("font-bold text-3xl", titleClassName)}>{title}</p>
      ) : null}
      <div>{children}</div>
    </div>
  );
};

export default ComponentLayout;
