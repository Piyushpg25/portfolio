"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { navigation } from "@/constants/navigation";

type NavigationHref = (typeof navigation)[number]["href"];

export function DesktopNav() {
  const [activeSection, setActiveSection] =
    useState<NavigationHref>(
      navigation[0]?.href ?? "#about",
    );

  useEffect(() => {
    const sections = navigation
      .map((item) =>
        document.getElementById(
          item.href.replace("#", ""),
        ),
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        if (visible[0]) {
          const id =
            `#${visible[0].target.id}` as NavigationHref;

          setActiveSection(id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:block"
    >
      <ul className="flex items-center gap-1 rounded-2xl border border-border/60 bg-background/80 p-1 shadow-sm backdrop-blur-xl">
        {navigation.map((item) => {
          const isActive =
            activeSection === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  isActive ? "location" : undefined
                }
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  rounded-xl
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  text-muted-foreground
                  outline-none
                  transition-all
                  duration-200
                  hover:-translate-y-px
                  hover:bg-muted/70
                  hover:text-foreground
                  focus-visible:ring-2
                  focus-visible:ring-ring
                "
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navigation"
                    className="
                      absolute
                      inset-0
                      -z-10
                      rounded-xl
                      bg-muted
                      shadow-sm
                    "
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className="
                    relative
                    transition-transform
                    duration-200
                    group-hover:scale-[1.02]
                  "
                >
                  {item.label}
                </span>

                <span
                  className={`
                    absolute
                    bottom-1
                    left-3
                    right-3
                    h-px
                    origin-center
                    bg-foreground/40
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}