import { cn } from "@/functions/cn";
import AboutMe from "./about/AboutMe";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      ShowSection
      {/* <HomeComponent /> */}
      <AboutMe />
    </div>
  );
};

export default ShowSection;
