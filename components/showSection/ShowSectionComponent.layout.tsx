import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { Div } from "../common/elements";

const LINE_HEIGHT = 24;
const LINE_GAP = 12;

/**
 * Enough gutter numbers to cover any realistic viewport.
 *
 * The previous version measured the window with `useWindowSize`, recomputed the
 * count in an effect and re-ran it from a ResizeObserver, which forced this
 * layout — and therefore the whole About page inside it — to be a client
 * component. The column is clipped by `overflow-hidden`, so rendering a fixed
 * run of numbers and letting the surplus be cut off gives the same picture with
 * no measurement, no effect and no client JavaScript.
 * 80 lines * 36px covers 2880px of height.
 */
const LINE_COUNT = 80;

interface LineNumberLayoutProps {
  children: ReactNode;
  lineHeight?: number;
  startingNumber?: number;
  className?: string;
  numberClassName?: string;
}

export const LineNumberLayout: FC<LineNumberLayoutProps> = ({
  children,
  lineHeight = LINE_HEIGHT,
  startingNumber = 1,
  className = "",
  numberClassName = "",
}) => (
  <div className={cn("flex h-full min-w-0 overflow-hidden", className)}>
    <div
      aria-hidden="true"
      className={cn(
        "flex shrink-0 select-none flex-col items-center border-x border-l-2 border-l-gray-700 border-r-code-tag px-1.5 font-mono text-gray-500 sm:px-4",
        numberClassName
      )}>
      {Array.from({ length: LINE_COUNT }, (_, i) => (
        <div
          key={i}
          className="leading-6"
          style={{ height: `${lineHeight}px`, marginBottom: `${LINE_GAP}px` }}>
          {i + startingNumber}
        </div>
      ))}
    </div>

    <div
      className="min-w-0 flex-1 overflow-auto"
      style={{ lineHeight: `${lineHeight}px` }}>
      {children}
    </div>
  </div>
);

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
  const validTitle = title?.split(" ").join("_");

  return (
    <LineNumberLayout numberClassName="text-blue-500">
      <div className={cn("flex min-w-0 flex-col gap-2 px-2 pt-2 sm:px-4", className)}>
        {title ? (
          <div className="w-fit">
            <p className={cn("text-lg font-medium sm:text-2xl", titleClassName)}>
              <span className="text-code-tag">const</span>{" "}
              <span className="text-code-function"> {`${validTitle}`} </span>{" "}
              <span>{`=`}</span> <span className="text-code-function">{`( )`}</span>{" "}
              <span className="text-code-tag">{`=>`}</span>{" "}
              <span className="text-code-keyword">{`(`}</span>
            </p>
          </div>
        ) : null}

        <Div>{children}</Div>

        {title ? (
          <div className="flex w-fit flex-col gap-2">
            <p className={cn("text-lg font-medium sm:text-2xl", titleClassName)}>
              <span className="text-code-keyword">{`)`}</span>
              <span>{`;`}</span>
            </p>
            <p className={cn("text-lg sm:text-2xl", titleClassName)}>
              <span className="text-code-keyword">{"export default "}</span>{" "}
              <span className="text-code-function"> {`${validTitle}`}</span>;
            </p>
          </div>
        ) : null}
      </div>
    </LineNumberLayout>
  );
};

export default ComponentLayout;
