"use client";

import Link from "next/link";
import { List, Moon, Sun } from "@phosphor-icons/react";
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
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <List size={22} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85%] max-w-sm">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <nav className="mt-8" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center rounded-md px-4 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 border-t pt-6">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}

            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
