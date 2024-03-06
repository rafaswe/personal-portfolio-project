import { cn } from "@/functions/cn";
import Home from "./home/Home";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      ShowSection
      <Home />
    </div>
  );
};

export default ShowSection;
