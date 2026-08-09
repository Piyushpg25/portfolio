"use client";

import {
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
      className="border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Get in touch
            </p>

            <h2
              id="contact-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Have a project, opportunity or interesting idea?
              Send me a message and let&apos;s start a conversation.
            </p>

            {/* Contact Links */}
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Envelope size={19} />

                <span>Piyushx17@gmail.com</span>
              </a>

              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubLogo
                  size={19}
                  weight="fill"
                />

                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinLogo
                  size={19}
                  weight="fill"
                />

                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}