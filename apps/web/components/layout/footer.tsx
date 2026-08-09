"use client";

import Link from "next/link";
import {
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#hero"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              {siteConfig.name}
            </Link>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
            >
              <GithubLogo
                size={18}
                weight="fill"
              />
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
            >
              <LinkedinLogo
                size={18}
                weight="fill"
              />
            </a>

            <Link
              href="#hero"
              aria-label="Back to top"
              className="ml-2 flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
            >
              <ArrowUp
                size={18}
                weight="bold"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript &amp; modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}