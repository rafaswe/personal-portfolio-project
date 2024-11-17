import { PropsWithChildren } from "react";

interface DivProps extends PropsWithChildren {
  className?: string;
}
export const Div = ({ children, className = "" }: DivProps) => {
  return (
    <div className={className}>
      <span className="ml-4 text-[#569CD6] font-medium">{`<div>`}</span>
      <div className="flex-1 ml-8">{children}</div>
      <span className="ml-4 text-[#569CD6] font-medium">{`</div>`}</span>
    </div>
  );
};
