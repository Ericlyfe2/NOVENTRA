"use client";
import { useState } from "react";

const SERVICES = [
  "Project Deposit",
  "Invoice Payment",
  "Technical Consultation",
  "Maintenance & Support",
  "Custom Software Development",
  "Other",
];

const PRESETS = [
  { label: "Consultation", amount: 500 },
  { label: "Starter Deposit", amount: 2000 },
  { label: "Standard Deposit", amount: 5000 },
];

const INITIAL = { name: "", email: "", service: "", amount: "" };

export default function PaymentContent() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | starting | error
  const [message, setMessage] = useState("");

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setMessage("");
  };

  const amountNumber = Number.parseFloat(form.amount);
  const amountValid = Number.isFinite(amountNumber) && amountNumber >= 1;

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "starting") return;

    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.service || !amountValid) {
      setStatus("error");
      setMessage("Please fill in your name, a valid email, a payment purpose, and an amount of at least GHS 1.00.");
      return;
    }

    setStatus("starting");
    setMessage("");

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service,
          amount: form.amount,
        }),
      });
      const data = await res.json();

      if (data.ok && data.authorizationUrl) {
        window.location.href = data.authorizationUrl;
        return;
      }

      setStatus("error");
      setMessage(data.error || "The payment could not be started. Please try again.");
    } catch {
      setStatus("error");
      setMessage("The payment could not be started. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-surface-container-lowest/50 border border-outline-variant/30 rounded px-md py-3 text-on-surface focus:outline-none input-glow transition-all duration-300 placeholder:text-on-surface-variant/30";

  return (
    <div className="glass-panel p-xl md:p-3xl rounded-lg relative overflow-hidden">
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Secure Payment</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Pay with card, mobile money (MTN, Vodafone, AirtelTigo), or bank transfer via Paystack.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-lg relative z-10" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
          <div className="space-y-sm">
            <label htmlFor="pay-name" className="font-label-md text-label-md text-on-surface-variant ml-1">Full Name</label>
            <input id="pay-name" type="text" value={form.name} onChange={update("name")} placeholder="John Doe" className={inputClass} required />
          </div>
          <div className="space-y-sm">
            <label htmlFor="pay-email" className="font-label-md text-label-md text-on-surface-variant ml-1">Email</label>
            <input id="pay-email" type="email" value={form.email} onChange={update("email")} placeholder="john@company.com" className={inputClass} required />
          </div>
        </div>

        <div className="space-y-sm">
          <label htmlFor="pay-service" className="font-label-md text-label-md text-on-surface-variant ml-1">Payment Purpose</label>
          <select id="pay-service" value={form.service} onChange={update("service")} className={`${inputClass} appearance-none`} required>
            <option value="" disabled>Select what you are paying for</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="space-y-sm">
          <label htmlFor="pay-amount" className="font-label-md text-label-md text-on-surface-variant ml-1">Amount (GHS)</label>
          <div className="flex flex-wrap gap-sm mb-sm">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setForm((f) => ({ ...f, amount: String(p.amount) }))}
                className={`font-label-md text-label-md px-md py-sm rounded-full border transition-all active:scale-95 ${
                  Number(form.amount) === p.amount
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {p.label} · GHS {p.amount.toLocaleString()}
              </button>
            ))}
          </div>
          <input
            id="pay-amount"
            type="number"
            min="1"
            step="0.01"
            inputMode="decimal"
            value={form.amount}
            onChange={update("amount")}
            placeholder="e.g. 1500.00"
            className={inputClass}
            required
          />
        </div>

        <div className="flex items-center gap-md p-md bg-primary/5 rounded border border-primary/10">
          <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <p className="font-code-sm text-code-sm text-on-surface-variant/80">
            Payments are processed securely by Paystack. Noventra never sees or stores your card details.
          </p>
        </div>

        {message && (
          <p className={`font-body-md text-body-md ${status === "error" ? "text-error" : "text-on-surface-variant"}`} role="alert">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "starting"}
          className="w-full bg-primary text-on-primary font-title-lg text-title-lg py-lg rounded glow-button spring-click transition-all flex items-center justify-center gap-md group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "starting"
            ? "Opening secure checkout…"
            : `Pay ${amountValid ? `GHS ${amountNumber.toFixed(2)}` : "Securely"}`}
          {status !== "starting" && (
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">credit_card</span>
          )}
        </button>
      </form>
    </div>
  );
}
