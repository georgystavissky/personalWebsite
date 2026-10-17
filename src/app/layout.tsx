import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";

const font = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
