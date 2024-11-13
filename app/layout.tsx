import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/sideBar/navbar.component";
import Sidebar from "@/components/sideBar/Sidebar";
import { ReactNode } from "react";
import "./globals.css";
type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mahiya Rahman Rafa</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="h-screen flex flex-col justify-between">
        <Header />
        <div className="flex h-full">
          <Sidebar />
          <div className="w-full flex flex-col gap-y-8 bg-secondary">
            <Navbar />
            <div className="flex-1 h-full">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
