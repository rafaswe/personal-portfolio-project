import { cn } from "@/functions/cn";
import { ContactContainer } from "./contact/Contact.container";

const ShowSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      {/* ShowSection */}
      {/* <HomeComponent /> */}
      {/* <AboutMe /> */}
      {/* <Search /> */}
      <ContactContainer />
    </div>
  );
};

export default ShowSection;
