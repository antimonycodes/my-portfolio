import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
// import Threejs from "@/components/ui/Threejs";
import { Hero } from "@/components/ui/Hero";
// import Threejs from "@/components/ui/Threejs";
// import FuzzyOverlayExample from "@/components/ui/FuzzyOverlayExample";
// import Hero from "@/components/ui/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {/* <Threejs /> */}
        <Hero />
        {/* <FuzzyOverlayExample /> */}
        {children}
      </body>
    </html>
  );
}
