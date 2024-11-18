import { cn } from "@/functions/cn";
import NavBar from "./NavBarSection/navBar";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <NavBar />

    </div>
  );
};

export default ShowSection;
