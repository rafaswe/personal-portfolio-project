"use client";
import { cn } from "@/functions/cn";
import { ReactNode, useMemo } from "react";
import { Div } from "../common/elements";

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
  const validTitle = useMemo(() => {
    return title?.split(" ").join("_");
  }, [title]);
  return (
    <div className={cn("p-4 flex flex-col gap-3", className)}>
      {title ? (
        <div className="w-fit">
          <p className={cn(" text-3xl text-[#4EC9B0]", titleClassName)}>
            <span>const</span> {`${validTitle}`} <span>{`= () => (`}</span>
          </p>
        </div>
      ) : null}

      <Div>{children}</Div>

      {title ? (
        <div className="w-fit">
          <p className={cn("text-3xl text-[#4EC9B0]", titleClassName)}>
            {`);`}
          </p>
          <p className={cn("text-3xl text-[#4EC9B0]", titleClassName)}>
            {`export default ${validTitle};`}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ComponentLayout;
