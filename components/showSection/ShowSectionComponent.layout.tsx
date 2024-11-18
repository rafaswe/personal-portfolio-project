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
    <div
      className={cn(
        "px-4 pt-2 flex border-l border-[#569CD6] flex-col gap-1",
        className
      )}>
      {title ? (
        <div className="w-fit">
          <p className={cn(" text-2xl font-medium", titleClassName)}>
            <span className="text-[#569CD6]">const</span>{" "}
            <span className="text-[#DCDCAA]"> {`${validTitle}`} </span>{" "}
            <span>{`=`}</span> <span className="text-[#DCDCAA]">{`( )`}</span>{" "}
            <span className="text-[#569CD6]">{`=>`}</span>{" "}
            <span className="text-[#C586C0]">{`(`}</span>
          </p>
        </div>
      ) : null}

      <Div>{children}</Div>

      {title ? (
        <div className="w-fit">
          <p className={cn(" text-2xl font-medium", titleClassName)}>
            <span className="text-[#C586C0]">{`)`}</span>
            <span>{`;`}</span>
          </p>
          <p className={cn("text-2xl", titleClassName)}>
            <span className="text-[#C586C0]">{"export default "}</span>{" "}
            <span className="text-[#DCDCAA]"> {`${validTitle}`}</span>;
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ComponentLayout;
