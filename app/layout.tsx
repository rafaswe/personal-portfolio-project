import TerminalComponent from "@/components/common/terminalComponent";
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
      <body className="h-screen flex flex-col hidden-scrollbar justify-between">
        <Header />
        <div className="flex h-full">
          <Sidebar />
          <div className="w-full flex flex-col  bg-secondary">
            <Navbar />
            <div className="flex-1 h-full w-full overflow-hidden relative">
              {children}
              <TerminalComponent />
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
