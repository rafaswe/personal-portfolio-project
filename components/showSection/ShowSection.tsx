import { cn } from "@/functions/cn";
import NavBar from "./NavBarSection/navBar";
import AboutMe from "./about/AboutMe";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <NavBar />

      {/* <HomeComponent /> */}
      <AboutMe />
    </div>
  );
};

export default ShowSection;
