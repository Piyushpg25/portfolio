"use client";

import { useRef, useState } from "react";
import {
  CheckCircle,
  PaperPlaneTilt,
  WarningCircle,
} from "@phosphor-icons/react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [serverError, setServerError] =
    useState("");

  const honeypotRef =
    useRef<HTMLInputElement>(null);

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name =
        "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email =
        "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message =
        "Please enter a message.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
    setServerError("");

    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitted(false);
    setServerError("");

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ??
        "http://localhost:3001";

      const honeypot =
        honeypotRef.current?.value ?? "";

      const response = await fetch(
        `${apiUrl}/api/contacts`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            website: "",
          }),
        },
      );

      const data: ApiResponse =
        await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors({
            name: data.errors.name?.[0],
            email: data.errors.email?.[0],
            message: data.errors.message?.[0],
          });
        }

        setServerError(
          data.message ||
            "Unable to send your message.",
        );

        return;
      }

      setSubmitted(true);
      setFormData(initialFormData);

      if (honeypotRef.current) {
        honeypotRef.current.value = "";
      }
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error,
      );

      setServerError(
        "Unable to connect to the server. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      {/* Form heading */}
      <div className="mb-8">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-muted-foreground
          "
        >
          Send a message
        </p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* NAME */}
      <div className="space-y-2.5">
        <label
          htmlFor="name"
          className="
            block
            text-sm
            font-medium
            text-foreground
          "
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={
            errors.name
              ? "name-error"
              : undefined
          }
          className={`
            w-full
            rounded-xl
            border
            bg-background
            px-4
            py-3.5
            text-sm
            text-foreground
            outline-none
            transition-all
            duration-200
            placeholder:text-muted-foreground/45
            disabled:cursor-not-allowed
            disabled:opacity-60
            ${
              errors.name
                ? `
                  border-red-500/70
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-500/10
                `
                : `
                  border-border/70
                  hover:border-border
                  focus:border-blue-500/60
                  focus:ring-4
                  focus:ring-blue-500/10
                  dark:focus:border-blue-400/60
                `
            }
          `}
        />

        {errors.name && (
          <p
            id="name-error"
            className="text-xs text-red-500 dark:text-red-400"
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div className="space-y-2.5">
        <label
          htmlFor="email"
          className="
            block
            text-sm
            font-medium
            text-foreground
          "
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email
              ? "email-error"
              : undefined
          }
          className={`
            w-full
            rounded-xl
            border
            bg-background
            px-4
            py-3.5
            text-sm
            text-foreground
            outline-none
            transition-all
            duration-200
            placeholder:text-muted-foreground/45
            disabled:cursor-not-allowed
            disabled:opacity-60
            ${
              errors.email
                ? `
                  border-red-500/70
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-500/10
                `
                : `
                  border-border/70
                  hover:border-border
                  focus:border-blue-500/60
                  focus:ring-4
                  focus:ring-blue-500/10
                  dark:focus:border-blue-400/60
                `
            }
          `}
        />

        {errors.email && (
          <p
            id="email-error"
            className="text-xs text-red-500 dark:text-red-400"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="
              text-sm
              font-medium
              text-foreground
            "
          >
            Message
          </label>

          <span
            className="
              text-[11px]
              text-muted-foreground/50
            "
          >
            Min. 10 characters
          </span>
        </div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me a little about your project..."
          rows={6}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message
              ? "message-error"
              : undefined
          }
          className={`
            min-h-[150px]
            w-full
            resize-none
            rounded-xl
            border
            bg-background
            px-4
            py-3.5
            text-sm
            leading-6
            text-foreground
            outline-none
            transition-all
            duration-200
            placeholder:text-muted-foreground/45
            disabled:cursor-not-allowed
            disabled:opacity-60
            ${
              errors.message
                ? `
                  border-red-500/70
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-500/10
                `
                : `
                  border-border/70
                  hover:border-border
                  focus:border-blue-500/60
                  focus:ring-4
                  focus:ring-blue-500/10
                  dark:focus:border-blue-400/60
                `
            }
          `}
        />

        {errors.message && (
          <p
            id="message-error"
            className="text-xs text-red-500 dark:text-red-400"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* SERVER ERROR */}
      {serverError && (
        <div
          role="alert"
          className="
            flex
            items-start
            gap-2.5
            rounded-xl
            border
            border-red-500/20
            bg-red-500/[0.06]
            px-4
            py-3
            text-sm
            text-red-600
            dark:text-red-400
          "
        >
          <WarningCircle
            size={18}
            weight="fill"
            className="mt-0.5 shrink-0"
          />

          <span>{serverError}</span>
        </div>
      )}

      {/* SUCCESS */}
      {submitted && (
        <div
          role="status"
          className="
            flex
            items-start
            gap-2.5
            rounded-xl
            border
            border-emerald-500/20
            bg-emerald-500/[0.06]
            px-4
            py-3
            text-sm
            text-emerald-600
            dark:text-emerald-400
          "
        >
          <CheckCircle
            size={18}
            weight="fill"
            className="mt-0.5 shrink-0"
          />

          <span>
            Your message has been sent successfully.
          </span>
        </div>
      )}

      {/* HONEYPOT */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="
          absolute
          -left-[9999px]
          h-px
          w-px
          overflow-hidden
        "
      />

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group
          relative
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-xl
          bg-gradient-to-r
          from-zinc-950
          via-zinc-900
          to-zinc-800
          px-5
          py-3.5
          text-sm
          font-medium
          text-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-lg
          hover:shadow-black/10
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
          dark:from-white
          dark:via-zinc-100
          dark:to-zinc-200
          dark:text-zinc-950
          dark:hover:shadow-white/10
        "
      >
        {/* Button shine */}
        <span
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            -left-full
            w-1/2
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
            transition-all
            duration-700
            group-hover:left-[120%]
            dark:via-black/5
          "
        />

        <span className="relative flex items-center gap-2">
          {isSubmitting ? (
            <>
              <span
                className="
                  size-4
                  animate-spin
                  rounded-full
                  border-2
                  border-current
                  border-t-transparent
                "
              />

              Sending...
            </>
          ) : submitted ? (
            <>
              <CheckCircle
                size={18}
                weight="fill"
              />

              Message Sent
            </>
          ) : (
            <>
              <PaperPlaneTilt
                size={18}
                weight="fill"
              />

              Send Message
            </>
          )}
        </span>
      </button>

      <p
        className="
          text-center
          text-[11px]
          leading-5
          text-muted-foreground/50
        "
      >
        Your information is only used to respond to your message.
      </p>
    </form>
  );
}