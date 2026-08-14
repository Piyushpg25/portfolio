"use client";

import Link from "next/link";
import { FileText } from "@phosphor-icons/react";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View resume"
        className="
          hidden
          sm:inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-border/70
          bg-background
          px-3.5
          py-2
          text-sm
          font-medium
          text-foreground
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-px
          hover:bg-muted
          hover:shadow-md
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
        "
      >
        <FileText
          size={17}
          weight="duotone"
        />

        <span>Resume</span>
      </Link>

      <ThemeToggle />
    </div>
  );
}