import { cn } from "@/functions/cn";
import Search from "./search/Search.container";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      {/* ShowSection */}
      {/* <HomeComponent /> */}
      {/* <AboutMe /> */}
      <Search />
    </div>
  );
};

export default ShowSection;
