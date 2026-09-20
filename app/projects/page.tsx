import Projects from "@/components/projects/Project-Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend projects built with React, Next.js, TypeScript and Redux by Mahiya Rahman Rafa.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Mahiya Rahman Rafa",
    description: "Selected frontend projects built with React, Next.js, TypeScript and Redux by Mahiya Rahman Rafa.",
    url: "/projects",
  },
};
const ProjectsPage = () => {
  return (
    <div className="w-full h-full overflow-y-auto hidden-scrollbar bg-secondary">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
