import TerminalComponent from "@/components/common/terminalComponent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/sideBar/navbar.component";
import Sidebar from "@/components/sideBar/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "./sitemap";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

// NOTE: Geist is loaded but exposed as `--font-geist` (not `--font-sans`).
// In Tailwind v4 the `font-sans` utility resolves to `var(--font-sans)`, so
// naming the variable `--font-sans` would silently swap the whole site to
// Geist. The original design rendered with the default system sans stack, so
// we keep that by using a non-colliding variable name.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const SITE_DESCRIPTION =
  "Portfolio of Mahiya Rahman Rafa — frontend developer working in React and Next.js. Projects, experience, writing and contact, presented as a code editor.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mahiya Rahman Rafa",
    template: "%s | Mahiya Rahman Rafa",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Mahiya Rahman Rafa — Portfolio",
  authors: [{ name: "Mahiya Rahman Rafa" }],
  creator: "Mahiya Rahman Rafa",
  keywords: [
    "Mahiya Rahman Rafa",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    siteName: "Mahiya Rahman Rafa",
    title: "Mahiya Rahman Rafa — Frontend Developer",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahiya Rahman Rafa — Frontend Developer",
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};


const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahiya Rahman Rafa",
  url: SITE_URL,
  jobTitle: "Frontend Developer",
  description: SITE_DESCRIPTION,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/rafaswe",
    "https://medium.com/@rahmanrafa",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1f2428",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      {/* The shell is locked to the viewport: `h-dvh` (not `h-screen`, which
          ignores a mobile browser's collapsing URL bar) plus `overflow-hidden`,
          so the document itself never scrolls. Only the content pane scrolls,
          which keeps the header, activity bar, tab strip and status bar fixed
          the way a real editor does. */}
      <body
        suppressHydrationWarning
        className="h-dvh overflow-hidden flex flex-col hidden-scrollbar">
        <script
          type="application/ld+json"
          // Static object defined in this file, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-100 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground">
            Skip to content
          </a>
          <Header />
          <div className="flex min-h-0 min-w-0 flex-1">
            <Sidebar />
            <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-primary">
              <Navbar />
              <main
                id="main-content"
                className="relative min-h-0 w-full flex-1 overflow-hidden">
                {children}
                <TerminalComponent />
              </main>
            </div>
          </div>
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
