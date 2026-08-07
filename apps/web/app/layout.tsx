import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush | Software Engineer",
  description:
    "Production-grade portfolio built with Next.js, Hono, Bun, Cloudflare and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}