import { ReactNode } from "react";

import { Header } from "@/components/layout/header";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({
  children,
}: SiteLayoutProps) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}