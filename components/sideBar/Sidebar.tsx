import { cn } from "@/functions/cn";
import SideMenu from "./SideMenu";
import SideOption from "./SideOption";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-[300px] flex ", className)}>
      <SideOption className="bg-secondary" />
      <SideMenu className="bg-primary flex-1" />
    </div>
  );
};

export default Sidebar;
