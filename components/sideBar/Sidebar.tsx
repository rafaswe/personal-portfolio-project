import { cn } from "@/functions/cn";
import SideMenu from "./SideMenu";
import SideOption from "./SideOption";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("md:w-[350px] lg:w-[300px] flex ", className)}>
      <SideOption className="bg-secondary" />
      <SideMenu className="bg-primary flex-1 md:block hidden" />
    </div>
  );
};

export default Sidebar;
