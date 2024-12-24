import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "DUYI Store",
  description: "A simple store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
