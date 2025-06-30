import GitHubProfile from "@/components/showSection/github/GitHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahiya Rahman Rafa | GitHub",
};
const GitHubPage = () => {
  return (
    <div className="w-full h-[88vh] flex justify-center py-4 overflow-y-auto hidden-scrollbar   bg-secondary">
      <GitHubProfile />
    </div>
  );
};

export default GitHubPage;
