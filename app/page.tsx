import TerminalComponent from "@/components/common/terminalComponent";
import HomeComponent from "@/components/showSection/home/HomeComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahiya Rahman Rafa | Home",
};
export default function Home() {
  return (
    <div className="flex h-full  w-full">
      <HomeComponent />
    </div>
  );
}
