import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Piyush | Software Engineer",
  description: "Production-grade developer portfolio built Next.js, Hano, Bun and Cloudflare "
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}