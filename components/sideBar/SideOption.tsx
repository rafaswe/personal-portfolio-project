import { cn } from "@/functions/cn";
import Image from "next/image";

const SideOption = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <button className="px-3">
        <Image src="/images/file.svg" alt="file icon" width={32} height={32} />
      </button>
    </div>
  );
};

export default SideOption;
