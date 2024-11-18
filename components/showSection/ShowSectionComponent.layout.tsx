"use client";
import { cn } from "@/functions/cn";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Div } from "../common/elements";

interface LineNumberLayoutProps {
  children: ReactNode;
  lineHeight?: number; // Optional prop to customize line height
  startingNumber?: number; // Optional prop to start from a different number
  className?: string; // Optional class name for the container
  numberClassName?: string; // Optional class name for the line numbers
}

const LineNumberLayout: FC<LineNumberLayoutProps> = ({
  children,
  lineHeight = 24, // Default line height
  startingNumber = 1,
  className = "",
  numberClassName = "",
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const calculateLines = (): void => {
      if (contentRef.current) {
        const height: number = contentRef.current.offsetHeight;
        const lineCount = 30;
        setLineNumbers(
          Array.from({ length: lineCount }, (_, i) => i + startingNumber)
        );
      }
    };

    calculateLines();

    // Add resize observer to recalculate on content size changes
    const resizeObserver = new ResizeObserver(calculateLines);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children, lineHeight, startingNumber]);

  return (
    <div className={`flex ${className}`}>
      {/* Line numbers container */}
      <div
        className={`select-none px-4 border-x border-l-gray-700 border-r-[#569CD6]  flex flex-col items-center justify-center text-gray-500 font-mono ${numberClassName}`}
        style={{ lineHeight: `${lineHeight}px` }}>
        {lineNumbers.map((num: number) => (
          <div key={num} className="leading-6">
            {num}
          </div>
        ))}
      </div>

      {/* Content container */}
      <div
        ref={contentRef}
        className="flex-1"
        style={{ lineHeight: `${lineHeight}px` }}>
        {children}
      </div>
    </div>
  );
};

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
    <LineNumberLayout
      lineHeight={24}
      startingNumber={1}
      numberClassName="text-blue-500">
      <div
        className={cn(
          "px-4 pt-2 flex border-l border-[#569CD6] flex-col gap-2",
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
          <div className="w-fit flex flex-col gap-2">
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
    </LineNumberLayout>
  );
};

export default ComponentLayout;
