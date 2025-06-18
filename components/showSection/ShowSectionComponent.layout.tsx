"use client";
import { cn } from "@/functions/cn";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { Div } from "../common/elements";

interface LineNumberLayoutProps {
  children: ReactNode;
  lineHeight?: number; // Optional prop to customize line height
  startingNumber?: number; // Optional prop to start from a different number
  className?: string; // Optional class name for the container
  numberClassName?: string; // Optional class name for the line numbers
}

interface LineNumberLayoutProps {
  children: React.ReactNode;
  lineHeight?: number;
  startingNumber?: number;
  className?: string;
  numberClassName?: string;
}

export const LineNumberLayout: FC<LineNumberLayoutProps> = ({
  children,
  lineHeight = 24, // Default line height
  startingNumber = 1,
  className = "",
  numberClassName = "",
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  // Use the useWindowSize hook to get window dimensions
  const windowSize = useWindowSize();

  useEffect(() => {
    const calculateLines = (): void => {
      if (contentRef.current) {
        // Use viewport height for calculation
        const viewportHeight = windowSize.height;
        // Calculate how many lines would fit in the viewport with 10px gaps
        const effectiveLineHeight = lineHeight + 10; // Adding 10px gap between lines
        const lineCount = Math.ceil(viewportHeight / effectiveLineHeight);

        setLineNumbers(
          Array.from({ length: lineCount }, (_, i) => i + startingNumber)
        );
      }
    };

    calculateLines();

    // Add resize observer for content changes
    const resizeObserver = new ResizeObserver(calculateLines);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [windowSize, lineHeight, startingNumber]);

  return (
    <div className={`flex h-[90vh] ${className}`}>
      {/* Line numbers container */}
      <div
        className={`select-none px-4 border-x border-l-2 border-l-gray-700 border-r-[#569CD6] flex flex-col items-center text-gray-500 font-mono ${numberClassName}`}>
        {lineNumbers.map((num: number) => (
          <div
            key={num}
            className="leading-6"
            style={{
              height: `${lineHeight}px`,
              marginBottom: "12px", // Adding 10px gap between line numbers
            }}>
            {num}
          </div>
        ))}
      </div>

      {/* Content container */}
      <div
        ref={contentRef}
        className="flex-1 overflow-auto"
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
      <div className={cn("px-4 pt-2 flex  flex-col gap-2", className)}>
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
