"use client";

import Link from "next/link";
import { List, Moon, Sun, ArrowRight } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open navigation menu"
          className="size-10 rounded-xl border-border/70 bg-background/80 shadow-sm backdrop-blur transition-all duration-200 hover:bg-muted"
        >
          <List size={21} weight="bold" />
        </Button>
      </SheetTrigger>

      {/* Mobile Drawer */}
      <SheetContent
        side="right"
        className="w-[88%] max-w-sm border-l border-border/70 bg-background/95 px-6 backdrop-blur-xl"
      >
        <SheetHeader className="border-b border-border/60 pb-6">
          <SheetTitle className="text-left text-lg font-semibold tracking-tight">
            Navigation
          </SheetTitle>
        </SheetHeader>

        {/* Navigation */}
        <nav
          className="mt-7"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="group flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={17}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme */}
        <div className="mt-8 border-t border-border/60 pt-6">
          <Button
            variant="outline"
            className="h-11 w-full justify-start gap-3 rounded-xl border-border/70 bg-background"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun
                size={18}
                weight="duotone"
              />
            ) : (
              <Moon
                size={18}
                weight="duotone"
              />
            )}

            <span>
              {isDark
                ? "Switch to light mode"
                : "Switch to dark mode"}
            </span>
          </Button>
        </div>

        {/* Footer text */}
        <div className="mt-auto pt-10">
          <p className="text-xs leading-5 text-muted-foreground">
            Piyush · Software Engineer
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}