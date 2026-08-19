import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { CursorGlow } from "@/components/effects/cursor-glow";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Piyush | Software Engineer",
    template: "%s | Piyush",
  },

  description:
    "Piyush is a software engineer focused on building reliable, performant and user-friendly digital products.",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Piyush | Software Engineer",
    description:
      "Piyush is a software engineer focused on building reliable, performant and user-friendly digital products.",
    siteName: "Piyush Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Piyush | Software Engineer",
    description:
      "Piyush is a software engineer focused on building reliable, performant and user-friendly digital products.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={cn(geistSans.variable, jetbrainsMono.variable)}
    >
      <body>
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Piyush",
                jobTitle: "Software Engineer",
                url: siteUrl,
                sameAs: [],
              }),
            }}
          />
          <CursorGlow />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
