import GitHubProfile from "@/components/showSection/github/GitHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub",
  description: "Open source repositories, contribution activity and language breakdown for Mahiya Rahman Rafa.",
  alternates: { canonical: "/gitHub" },
  openGraph: {
    title: "GitHub | Mahiya Rahman Rafa",
    description: "Open source repositories, contribution activity and language breakdown for Mahiya Rahman Rafa.",
    url: "/gitHub",
  },
};
const GitHubPage = () => {
  return (
    <div className="h-full w-full overflow-y-auto hidden-scrollbar bg-secondary px-3 py-4 sm:px-4">
      <GitHubProfile />
    </div>
  );
};

export default GitHubPage;
