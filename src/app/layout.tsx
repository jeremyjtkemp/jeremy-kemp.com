import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Kemp | Web Developer & Tech Consultant",
  description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
  openGraph: {
    title: "Jeremy Kemp | Web Developer & Tech Consultant",
    description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
