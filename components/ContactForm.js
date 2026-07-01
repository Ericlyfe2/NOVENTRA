"use client";
import { useState } from "react";

const INITIAL = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
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
    `w-full bg-surface-container rounded-lg border px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors ${
      errors[field] ? "border-error" : "border-outline-variant"
    }`;

  if (status === "success") {
    return (
      <div className="glass-panel p-3xl rounded-3xl text-center" role="status">
        <span className="material-symbols-outlined text-primary text-4xl mb-md">
          mark_email_read
        </span>
        <h2 className="font-headline-lg text-headline-lg mb-sm">Message sent</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          Thank you for reaching out. We typically respond within 1–2 business
          days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border border-outline-variant text-on-surface font-label-md text-label-md px-xl py-sm rounded-lg hover:bg-white/5 transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-3xl rounded-3xl" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-lg">
        <div>
          <label htmlFor="name" className="font-label-md text-label-md text-on-surface block mb-xs">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={inputClass("name")}
            required
          />
          {errors.name && (
            <p className="text-error text-label-md mt-xs">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-label-md text-label-md text-on-surface block mb-xs">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClass("email")}
            required
          />
          {errors.email && (
            <p className="text-error text-label-md mt-xs">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mb-lg">
        <label htmlFor="subject" className="font-label-md text-label-md text-on-surface block mb-xs">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={update("subject")}
          placeholder="What is this about?"
          className={inputClass("subject")}
          required
        />
        {errors.subject && (
          <p className="text-error text-label-md mt-xs">{errors.subject}</p>
        )}
      </div>
      <div className="mb-xl">
        <label htmlFor="message" className="font-label-md text-label-md text-on-surface block mb-xs">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project or enquiry…"
          className={inputClass("message")}
          required
        />
        {errors.message && (
          <p className="text-error text-label-md mt-xs">{errors.message}</p>
        )}
      </div>
      {status === "error" && errorMessage && (
        <p className="text-error font-body-md text-body-md mb-lg" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
