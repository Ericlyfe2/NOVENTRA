"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const reference = searchParams.get("reference") || searchParams.get("trxref");
    if (!reference) {
      setStatus("error");
      setMessage("No payment reference was provided.");
      return;
    }

    fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.paid) {
          setReceipt(data);
          setStatus("success");
        } else {
          setStatus("error");
          setMessage(
            data.error || `Payment could not be confirmed yet. Keep your reference: ${reference}`
          );
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage(`We could not confirm the payment automatically. Keep your reference: ${reference}`);
      });
  }, [searchParams]);

  if (status === "verifying") {
    return (
      <div className="glass-panel p-3xl rounded-lg text-center" role="status">
        <span className="material-symbols-outlined text-primary text-4xl mb-md animate-spin">progress_activity</span>
        <h2 className="font-headline-lg text-headline-lg mb-sm">Confirming your payment…</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Please wait while we verify your transaction with Paystack.
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
        <Link
          href="/payment"
          className="inline-block border border-outline-variant text-on-surface font-label-md text-label-md px-xl py-sm rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          Make another payment
        </Link>
      </div>
    );
  }

  return (
    <div className="glass-panel p-3xl rounded-lg text-center" role="alert">
      <span className="material-symbols-outlined text-error text-4xl mb-md">error</span>
      <h2 className="font-headline-lg text-headline-lg mb-sm">Payment not confirmed</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">{message}</p>
      <Link
        href="/payment"
        className="inline-block bg-primary text-on-primary font-label-md text-label-md px-xl py-sm rounded glow-button transition-all"
      >
        Back to payments
      </Link>
    </div>
  );
}
