"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PayNowFAB() {
  const pathname = usePathname();
  if (pathname.startsWith("/payment")) return null;

  return (
    <Link
      href="/payment"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-sm bg-primary text-on-primary font-label-md text-label-md pl-lg pr-xl py-md rounded-full shadow-2xl glow-button transition-all hover:scale-105 active:scale-95"
      aria-label="Make a payment via Paystack"
    >
      <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
        credit_card
      </span>
      <span>Pay Now</span>
    </Link>
  );
}
