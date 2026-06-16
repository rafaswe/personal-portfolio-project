import TerminalComponent from "@/components/common/terminalComponent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/sideBar/navbar.component";
import Sidebar from "@/components/sideBar/Sidebar";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

// NOTE: Geist is loaded but exposed as `--font-geist` (not `--font-sans`).
// In Tailwind v4 the `font-sans` utility resolves to `var(--font-sans)`, so
// naming the variable `--font-sans` would silently swap the whole site to
// Geist. The original design rendered with the default system sans stack, so
// we keep that by using a non-colliding variable name.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <title>Mahiya Rahman Rafa</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning
        className="h-screen flex flex-col hidden-scrollbar justify-between overflow-x-hidden">
        <Header />
        <div className="flex h-full min-w-0">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col bg-primary">
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
