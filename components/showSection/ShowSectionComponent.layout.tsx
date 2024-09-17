import { cn } from "@/functions/cn";
import { ReactNode } from "react";

const ComponentLayout = ({
  title,
  className,
  children,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 flex flex-col gap-3", className)}>
      {title ? <p className="font-bold text-5xl">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
};

export default ComponentLayout;
