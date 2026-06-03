"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn, siteConfig } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      setMessage("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please email me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Remote full stack opportunity"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Tell me about the role and your team..."
        />
      </div>

      {message ? (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className={cn(
            "flex items-center gap-2 text-sm",
            status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          )}
        >
          {status === "success" ? (
            <CheckCircle className="h-4 w-4" aria-hidden />
          ) : (
            <AlertCircle className="h-4 w-4" aria-hidden />
          )}
          {message}
          {status === "error" ? (
            <>
              {" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                Email directly
              </a>
            </>
          ) : null}
        </motion.p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
