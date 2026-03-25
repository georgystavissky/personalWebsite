import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgii Stavisskii",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <Cursor />
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
