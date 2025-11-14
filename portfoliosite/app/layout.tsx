import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import the Header component
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio Montalvo | Full-Stack Developer Portfolio",
  description:
    "Mid-Level Full-Stack Developer leveraging Java/C++ background for modern React/Node applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {/* The main content of the page goes here */}
        <main className="grow">

          {children}
        </main>
        {/* Optional: Add Footer here later if desired */}
      </body>
    </html>
  );
}
