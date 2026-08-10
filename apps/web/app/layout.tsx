import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";
import {Header} from '@/components/layout/header';
import {CursorGlow} from '@/components/effects/curosr-glow';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Piyush | Software Engineer",
    template: "%s | Piyush",
  },

  description:
    "Software engineer focused on building reliable, performant and user-friendly digital products.",

  keywords: [
    "Piyush",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Piyush",
    },
  ],

  creator: "Piyush",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Piyush | Software Engineer",
    description:
      "Software engineer focused on building reliable, performant and user-friendly digital products.",
    siteName: "Piyush Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Piyush | Software Engineer",
    description:
      "Software engineer focused on building reliable, performant and user-friendly digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        geistSans.variable,
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <CursorGlow />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}