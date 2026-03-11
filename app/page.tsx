import HomeComponent from "@/components/showSection/home/HomeComponent";
import type { Metadata } from "next/types";

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
