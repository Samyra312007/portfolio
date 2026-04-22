import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ThreeBackground from "@/components/ThreeBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TERMINAL_VOID // Creative OS",
  description: "Digital architect specializing in ethereal terminal interfaces",
  keywords: "portfolio, developer, creative, terminal, cyberpunk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
        <CustomCursor />
        <ThreeBackground />
        <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />
        <div className="scan-line fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 pointer-events-none z-[100]" />
        {children}
      </body>
    </html>
  );
}
