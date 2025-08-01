import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jeremy Kemp - Web Developer & Tech Consultant",
  description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver with expertise in Next.js, React, and modern web technologies.",
  keywords: ["web developer", "tech consultant", "next.js", "react", "typescript", "jeremy kemp"],
  authors: [{ name: "Jeremy Kemp" }],
  creator: "Jeremy Kemp",
  openGraph: {
    title: "Jeremy Kemp - Web Developer & Tech Consultant",
    description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
    type: "website",
    locale: "en_US",
    siteName: "Jeremy Kemp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Kemp - Web Developer & Tech Consultant",
    description: "Personal website of Jeremy Kemp - Web Developer, Tech Consultant, and Creative Problem Solver",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col antialiased" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
