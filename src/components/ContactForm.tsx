"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { budgets, profile, projectTypes } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

const fieldClass =
  "w-full rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-accent/50";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    // Demo submission — wire this up to an API route, Formspree, Resend, etc.
    // For now we open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Project enquiry from ${payload.name}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nProject type: ${payload.projectType}\nBudget: ${payload.budget}\n\n${payload.message}`
    );

    await new Promise((r) => setTimeout(r, 700));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-center rounded-3xl p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Thanks for reaching out!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Your mail client should have opened with the message ready to send. I
          typically reply within a couple of business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="bg-background-soft">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-background-soft">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, timeline and goals…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-3 via-accent to-accent-2 px-6 py-3.5 text-sm font-semibold text-[#04060c] shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
