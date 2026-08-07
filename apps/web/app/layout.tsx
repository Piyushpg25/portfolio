import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

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
  title: "Piyush | Software Engineer",
  description:
    "Production-grade portfolio built with Next.js, Hono, Bun and Cloudflare.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}