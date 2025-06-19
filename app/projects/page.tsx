import Projects from "@/components/projects/Project-Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahiya Rahman Rafa | Projects",
};
const ProjectsPage = () => {
  return (
    <div className="w-full h-[88vh] overflow-y-auto hidden-scrollbar  bg-secondary">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
