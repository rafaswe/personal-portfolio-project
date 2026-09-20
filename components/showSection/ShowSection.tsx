import { cn } from "@/lib/utils";
import NavBar from "./NavBarSection/navBar";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <NavBar />
    </div>
  );
};

export default ShowSection;
