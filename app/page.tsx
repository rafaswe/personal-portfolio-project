import HomeComponent from "@/components/showSection/home/HomeComponent";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  // `title.absolute` opts out of the root template so the home page is not
  // titled "Mahiya Rahman Rafa | Mahiya Rahman Rafa".
  title: { absolute: "Mahiya Rahman Rafa — Frontend Developer" },
  alternates: { canonical: "/" },
};
export default function Home() {
  return (
    <div className="flex h-full  w-full">
      <HomeComponent />
    </div>
  );
}
