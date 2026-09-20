import AboutMe from "@/components/showSection/about/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, education and skills of Mahiya Rahman Rafa, a React and Next.js frontend developer.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Mahiya Rahman Rafa",
    description: "Background, experience, education and skills of Mahiya Rahman Rafa, a React and Next.js frontend developer.",
    url: "/about",
  },
};
const AboutPage = () => {
  return <AboutMe />;
};

export default AboutPage;
