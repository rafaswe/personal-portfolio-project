import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mahiya Rahman Rafa</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
