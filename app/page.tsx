import ShowSection from "@/components/showSection/ShowSection";
import Sidebar from "@/components/sideBar/Sidebar";

export default function Home() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <ShowSection className="bg-secondary flex-1" />
    </div>
  );
}
