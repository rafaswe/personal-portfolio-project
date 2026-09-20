import Blogs from "@/components/showSection/blogs/blogs.container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Technical articles and tutorials written by Mahiya Rahman Rafa on JavaScript, React and frontend engineering.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blogs | Mahiya Rahman Rafa",
    description: "Technical articles and tutorials written by Mahiya Rahman Rafa on JavaScript, React and frontend engineering.",
    url: "/blogs",
  },
};
const BlogsPage = () => {
  return <Blogs />;
};

export default BlogsPage;
