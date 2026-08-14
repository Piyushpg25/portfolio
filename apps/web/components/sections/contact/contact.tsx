"use client";

import {
  ArrowUpRight,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import { ContactForm } from "@/components/sections/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-border/50
        py-24
        sm:py-32
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-blue-500/[0.035]
          via-violet-500/[0.045]
          to-cyan-500/[0.025]
          blur-3xl
          dark:from-blue-400/[0.05]
          dark:via-violet-400/[0.06]
          dark:to-cyan-400/[0.035]
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className="
            mb-12
            flex
            flex-col
            gap-6
            border-b
            border-border/60
            pb-10
            sm:mb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  flex
                  size-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-background
                  font-mono
                  text-[10px]
                  font-medium
                  text-muted-foreground
                "
              >
                06
              </span>

              <span className="h-px w-7 bg-border" />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Get in touch
              </p>
            </div>

            <h2
              id="contact-heading"
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let&apos;s build something{" "}
              <span className="text-muted-foreground">
                useful.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[15px]
              leading-7
              text-muted-foreground
              sm:text-base
            "
          >
            Have a project, opportunity or interesting idea?
            Send me a message and let&apos;s start a conversation.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* Contact Information */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border/60
              bg-background/70
              p-6
              backdrop-blur-sm
              sm:p-8
            "
          >
            {/* Accent */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-32
                w-32
                rounded-full
                bg-blue-500/[0.06]
                blur-3xl
                dark:bg-blue-400/[0.07]
              "
            />

            <div className="relative">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-muted-foreground
                "
              >
                Direct contact
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                Prefer reaching out directly? You can find me through
                email or my professional profiles.
              </p>

              {/* Links */}
              <div className="mt-8 space-y-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    text-sm
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:border-border/60
                    hover:bg-muted/40
                    hover:text-foreground
                  "
                >
                  <span className="flex items-center gap-3">
                    <Envelope
                      size={19}
                      weight="duotone"
                    />

                    <span>Piyushx17@gmail.com</span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    text-sm
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:border-border/60
                    hover:bg-muted/40
                    hover:text-foreground
                  "
                >
                  <span className="flex items-center gap-3">
                    <GithubLogo
                      size={19}
                      weight="fill"
                    />

                    <span>GitHub</span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    text-sm
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:border-border/60
                    hover:bg-muted/40
                    hover:text-foreground
                  "
                >
                  <span className="flex items-center gap-3">
                    <LinkedinLogo
                      size={19}
                      weight="fill"
                    />

                    <span>LinkedIn</span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </div>

              {/* Availability */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2.5
                  border-t
                  border-border/50
                  pt-6
                "
              >
                <span className="relative flex size-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      size-full
                      animate-ping
                      rounded-full
                      bg-emerald-500/50
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      size-2
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span className="text-xs font-medium text-muted-foreground">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border/60
              bg-card
              p-6
              shadow-sm
              sm:p-8
              lg:p-9
            "
          >
            {/* Form accent */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-blue-500/50
                to-transparent
              "
            />

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}