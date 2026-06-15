import GitHubProfile from "@/components/showSection/github/GitHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahiya Rahman Rafa | GitHub",
};
const GitHubPage = () => {
  return (
    <div className="w-full h-full flex justify-center px-3 sm:px-4 py-4 overflow-y-auto hidden-scrollbar bg-secondary">
      <GitHubProfile />
    </div>
  );
};

export default GitHubPage;
