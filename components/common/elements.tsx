import { cn } from "@/functions/cn";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  className?: string;
}
export const Div = ({ children, className = "" }: Props) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <p className="ml-4 text-lg text-code-tag font-medium">{`<div>`}</p>
      <div className="flex ">
        <div className="w-6 shrink-0 border-r border-gray-700"></div>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
      <p className="ml-4 text-lg text-code-tag font-medium">{`</div>`}</p>
    </div>
  );
};

// .......................

export const P = ({ children, className = "" }: Props) => (
  <div className={cn("flex flex-col gap-1", className)}>
    <p className="ml-4 text-lg text-code-tag font-medium">{`<p>`}</p>
    <div className="flex ">
      <div className="w-6 shrink-0 border-r border-gray-700"></div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
    <p className="ml-4 text-lg text-code-tag font-medium">{`</p>`}</p>
  </div>
);

export const Span = ({ children, className = "" }: Props) => (
  <div className={cn("flex items-center gap-0.5", className)}>
    <span className="ml-4 text-lg text-code-tag font-medium">{`<div>`}</span>
    <span> {children} </span>
    <span className="text-lg text-code-tag font-medium">{`</div>`}</span>
  </div>
);
export const H2 = ({ children, className = "" }: Props) => (
  <div className={cn("flex items-center gap-0.5", className)}>
    <span className="ml-4 text-lg  text-code-tag font-medium">{`<h2>`}</span>
    <span className="text-2xl"> {children} </span>
    <span className="text-code-tag text-lg  font-medium">{`</h2>`}</span>
  </div>
);

interface CommentSectionProps {
  title: string;
  className?: string;
}
export const CommentSection = ({
  title,
  className = "",
}: CommentSectionProps) => (
  <p className={cn("text-lg font-medium", className)}>
    <span className="text-code-tag">{`{`}</span>
    <span className="text-code-comment">{`/* -----------------${title}-----------------*/`}</span>
    <span className="text-code-tag">{`}`}</span>
  </p>
);

export const Ul = ({ children, className }: Props) => (
  <div className={cn("flex flex-col gap-0.5", className)}>
    <p className="ml-4 text-lg text-code-tag font-medium">{`<ul>`}</p>
    <div className="flex ">
      <div className="w-6 shrink-0 border-r border-gray-700"></div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
    <p className="ml-4 text-lg text-code-tag font-medium">{`</ul>`}</p>
  </div>
);
export const Li = ({ children, className }: Props) => (
  <div className={cn("flex items-center gap-0.5", className)}>
    <span className="ml-4 text-lg text-code-tag font-medium">{`<li>`}</span>
    <span> {children} </span>
    <span className="text-lg text-code-tag font-medium">{`</li>`}</span>
  </div>
);
