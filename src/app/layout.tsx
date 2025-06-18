import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Kemp",
  description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
  openGraph: {
    title: "Jeremy Kemp",
    description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isHome = pathname === '/';
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary min-h-screen flex flex-col${isHome ? ' home' : ''}`}>
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
