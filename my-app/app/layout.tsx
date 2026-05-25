'use client';

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

/* Primary Sans Font */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* Mono Font */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Modern UI Font */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* Premium Heading Font */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Check if the current route starts with /dashboard
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <html
      lang="en"
      className={`
        dark
        scroll-smooth
        antialiased
        ${geistSans.variable}
        ${geistMono.variable}
        ${poppins.variable}
        ${spaceGrotesk.variable}
      `}
      style={{ colorScheme: 'dark' }}
    >
      <body className="bg-[#09090b] font-[family-name:var(--font-poppins)] text-zinc-50 antialiased selection:bg-indigo-500/30">
        {children}
        
        {/* Only render the homepage Navbar if we are NOT on a dashboard route */}
        {!isDashboard && <Navbar />}
      </body>
    </html>
  );
}