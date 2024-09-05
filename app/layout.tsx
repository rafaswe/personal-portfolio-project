import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sideBar/Sidebar';
import { ReactNode } from 'react';
import './globals.css';
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
          <div className="w-full bg-secondary">
            <div></div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
