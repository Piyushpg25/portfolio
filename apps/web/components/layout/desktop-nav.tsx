"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { navigation } from "@/constants/navigation";

export function DesktopNav() {
  const [activeSection, setActiveSection] = useState<string>(
    navigation[0]?.href ?? "",
  );

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        const active = visibleSections[0];

        if (active) {
          setActiveSection(`#${active.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {navigation.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  isActive ? "location" : undefined
                }
                className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-0 -z-10 rounded-md bg-muted"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}