import Search from "@/components/showSection/search/Search.container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Online Presence",
  description: "Awards, press coverage and public recognition for Mahiya Rahman Rafa.",
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Online Presence | Mahiya Rahman Rafa",
    description: "Awards, press coverage and public recognition for Mahiya Rahman Rafa.",
    url: "/search",
  },
};
const SearchPage = () => {
  return <Search />;
};

export default SearchPage;
