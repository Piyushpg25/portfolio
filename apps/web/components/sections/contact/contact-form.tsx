"use client";

import { useState } from "react";
import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";

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

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Please enter a message.";
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

    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground"
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
          aria-invalid={Boolean(errors.name)}
          aria-describedby={
            errors.name ? "name-error" : undefined
          }
          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:ring-red-500/20"
              : "border-border focus:border-foreground/40 focus:ring-foreground/10"
          }`}
        />

        {errors.name && (
          <p
            id="name-error"
            className="text-xs text-red-500"
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground"
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
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email ? "email-error" : undefined
          }
          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-red-500/20"
              : "border-border focus:border-foreground/40 focus:ring-foreground/10"
          }`}
        />

        {errors.email && (
          <p
            id="email-error"
            className="text-xs text-red-500"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me a little about your project..."
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "message-error" : undefined
          }
          className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-2 ${
            errors.message
              ? "border-red-500 focus:ring-red-500/20"
              : "border-border focus:border-foreground/40 focus:ring-foreground/10"
          }`}
        />

        {errors.message && (
          <p
            id="message-error"
            className="text-xs text-red-500"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        {submitted ? (
          <>
            <CheckCircle
              size={18}
              weight="fill"
            />

            Message ready
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
      </button>

      {submitted && (
        <p
          role="status"
          className="text-center text-sm text-emerald-600 dark:text-emerald-400"
        >
          Your message has been validated successfully.
        </p>
      )}
    </form>
  );
}