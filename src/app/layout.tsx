import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";

const font = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgii Stavisskii",
  description:
    "Georgii Stavisskii — fullstack developer (C# / .NET, TypeScript / Svelte)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Cursor />
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
