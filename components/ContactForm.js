"use client";
import { useState } from "react";

const INITIAL = { name: "", email: "", service: "", message: "" };
const SERVICES = [
  "Cloud Infrastructure",
  "Custom Software Development",
  "Data Analytics & AI",
  "Security Audit",
  "General Inquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
        setErrors(data.errors || {});
        setErrorMessage(data.error || "Please correct the highlighted fields.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please email info@noventra.tech directly."
      );
    }
  }

  const inputClass = (field) =>
    `w-full bg-surface-container-lowest/50 border ${errors[field] ? "border-error" : "border-outline-variant/30"} rounded px-md py-3 text-on-surface focus:outline-none input-glow transition-all duration-300 placeholder:text-on-surface-variant/30`;

  if (status === "success") {
    return (
      <div className="glass-panel p-3xl rounded-lg text-center" role="status">
        <span className="material-symbols-outlined text-primary text-4xl mb-md">
          mark_email_read
        </span>
        <h2 className="font-headline-lg text-headline-lg mb-sm">Message sent</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          Thank you for reaching out. Our team typically responds within 4-6
          business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border border-outline-variant text-on-surface font-label-md text-label-md px-xl py-sm rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-xl md:p-3xl rounded-lg relative overflow-hidden">
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Technical Inquiry</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Fill out the form below to initiate a consultation.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-lg relative z-10" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant ml-1 transition-colors duration-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="John Doe"
              className={inputClass("name")}
              required
              onFocus={(e) => e.target.parentElement.querySelector("label")?.classList.add("text-primary")}
              onBlur={(e) => e.target.parentElement.querySelector("label")?.classList.remove("text-primary")}
            />
            {errors.name && (
              <p className="text-error text-label-md mt-xs">{errors.name}</p>
            )}
          </div>
          <div className="space-y-sm">
            <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant ml-1 transition-colors duration-300">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="john@company.com"
              className={inputClass("email")}
              required
              onFocus={(e) => e.target.parentElement.querySelector("label")?.classList.add("text-primary")}
              onBlur={(e) => e.target.parentElement.querySelector("label")?.classList.remove("text-primary")}
            />
            {errors.email && (
              <p className="text-error text-label-md mt-xs">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="space-y-sm">
          <label htmlFor="service" className="font-label-md text-label-md text-on-surface-variant ml-1 transition-colors duration-300">
            Service of Interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={update("service")}
            className={`${inputClass("service")} appearance-none`}
            required
          >
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p className="text-error text-label-md mt-xs">{errors.service}</p>
          )}
        </div>
        <div className="space-y-sm">
          <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant ml-1 transition-colors duration-300">
            Message Details
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Describe your project goals..."
            className={inputClass("message")}
            required
          />
          {errors.message && (
            <p className="text-error text-label-md mt-xs">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center gap-md p-md bg-primary/5 rounded border border-primary/10">
          <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          <p className="font-code-sm text-code-sm text-on-surface-variant/80">
            End-to-end encrypted submission via Noventra Security Protocol.
          </p>
        </div>
        {status === "error" && errorMessage && (
          <p className="text-error font-body-md text-body-md" role="alert">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-primary text-on-primary font-title-lg text-title-lg py-lg rounded glow-button spring-click transition-all flex items-center justify-center gap-md group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
          {status !== "submitting" && (
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">send</span>
          )}
        </button>
      </form>
    </div>
  );
}
