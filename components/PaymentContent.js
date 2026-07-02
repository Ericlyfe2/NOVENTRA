"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

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
  const [status, setStatus] = useState("idle"); // idle | paying | verifying | success | error
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [scriptReady, setScriptReady] = useState(false);
  const busy = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.PaystackPop) setScriptReady(true);
  }, []);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setMessage("");
  };

  const amountNumber = Number.parseFloat(form.amount);
  const amountValid = Number.isFinite(amountNumber) && amountNumber >= 1;

  async function verify(reference) {
    setStatus("verifying");
    try {
      const res = await fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`);
      const data = await res.json();
      if (data.ok && data.paid) {
        setReceipt(data);
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
        setMessage(
          data.error ||
            `Payment could not be confirmed yet. Keep your reference: ${reference}`
        );
      }
    } catch {
      setStatus("error");
      setMessage(`We could not confirm the payment automatically. Keep your reference: ${reference}`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (busy.current) return;

    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.service || !amountValid) {
      setStatus("error");
      setMessage("Please fill in your name, a valid email, a payment purpose, and an amount of at least GHS 1.00.");
      return;
    }
    if (!window.PaystackPop) {
      setStatus("error");
      setMessage("The payment gateway is still loading. Please try again in a moment.");
      return;
    }

    busy.current = true;
    setStatus("paying");
    setMessage("");

    try {
      const popup = new window.PaystackPop();
      popup.newTransaction({
        key: PUBLIC_KEY,
        email: form.email.trim(),
        amount: Math.round(amountNumber * 100), // pesewas
        currency: "GHS",
        metadata: {
          custom_fields: [
            { display_name: "Name", variable_name: "name", value: form.name.trim() },
            { display_name: "Purpose", variable_name: "purpose", value: form.service },
          ],
        },
        onSuccess: (transaction) => {
          busy.current = false;
          verify(transaction.reference);
        },
        onCancel: () => {
          busy.current = false;
          setStatus("idle");
          setMessage("Payment window closed — no charge was made.");
        },
        onError: (error) => {
          busy.current = false;
          setStatus("error");
          setMessage(error?.message || "The payment could not be started. Please try again.");
        },
      });
    } catch (err) {
      busy.current = false;
      setStatus("error");
      setMessage(err?.message || "The payment could not be started. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-surface-container-lowest/50 border border-outline-variant/30 rounded px-md py-3 text-on-surface focus:outline-none input-glow transition-all duration-300 placeholder:text-on-surface-variant/30";

  if (!PUBLIC_KEY) {
    return (
      <div className="glass-panel p-xl md:p-3xl rounded-lg text-center" role="status">
        <span className="material-symbols-outlined text-primary text-4xl mb-md">construction</span>
        <h2 className="font-headline-lg text-headline-lg mb-sm">Online payments coming soon</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Our secure Paystack checkout is being configured. In the meantime, please
          email <a className="text-primary hover:underline" href="mailto:info@noventra.tech">info@noventra.tech</a> for
          invoice and payment instructions.
        </p>
      </div>
    );
  }

  if (status === "success" && receipt) {
    return (
      <div className="glass-panel p-3xl rounded-lg text-center animate-scale-in" role="status">
        <span className="material-symbols-outlined text-primary text-4xl mb-md">task_alt</span>
        <h2 className="font-headline-lg text-headline-lg mb-sm">Payment successful</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
          Thank you. Your payment has been received and a receipt has been sent to your email.
        </p>
        <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-lg p-lg text-left font-code-sm text-code-sm text-on-surface-variant space-y-1 max-w-[24rem] mx-auto mb-xl">
          <p>Reference: <span className="text-primary">{receipt.reference}</span></p>
          <p>Amount: {receipt.currency} {receipt.amount.toFixed(2)}</p>
          {receipt.channel && <p>Channel: {receipt.channel}</p>}
        </div>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setReceipt(null); }}
          className="border border-outline-variant text-on-surface font-label-md text-label-md px-xl py-sm rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          Make another payment
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-xl md:p-3xl rounded-lg relative overflow-hidden">
      <Script
        src="https://js.paystack.co/v2/inline.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
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
          disabled={status === "paying" || status === "verifying" || !scriptReady}
          className="w-full bg-primary text-on-primary font-title-lg text-title-lg py-lg rounded glow-button spring-click transition-all flex items-center justify-center gap-md group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "verifying"
            ? "Confirming payment…"
            : status === "paying"
              ? "Opening secure checkout…"
              : !scriptReady
                ? "Loading gateway…"
                : `Pay ${amountValid ? `GHS ${amountNumber.toFixed(2)}` : "Securely"}`}
          {status === "idle" && scriptReady && (
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">credit_card</span>
          )}
        </button>
      </form>
    </div>
  );
}
