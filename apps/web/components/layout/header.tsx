import Link from "next/link";

import { HeaderActions } from "@/components/layout/header-actions";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { HeaderMotion } from "@/components/layout/header-motion";

export function Header() {
  return (
    <HeaderMotion>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-border/50
          bg-background/75
          backdrop-blur-xl
        "
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="
              text-lg
              font-bold
              tracking-tight
              transition-opacity
              duration-200
              hover:opacity-70
            "
            aria-label="Piyush Home"
          >
            PX
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <HeaderActions />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </HeaderMotion>
  );
}