import { NextResponse } from "next/server";

export async function GET(request) {
  const reference = request.nextUrl.searchParams.get("reference");
  if (!reference) {
    return NextResponse.json(
      { ok: false, error: "Missing transaction reference." },
      { status: 400 }
    );
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { ok: false, error: "Payment verification is not configured." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secretKey}` }, cache: "no-store" }
    );
    const data = await res.json();

    if (!res.ok || !data.status) {
      return NextResponse.json(
        { ok: false, error: data.message || "Could not verify transaction." },
        { status: 502 }
      );
    }

    const t = data.data;
    const paid = t.status === "success";
    return NextResponse.json({
      ok: true,
      paid,
      reference: t.reference,
      amount: t.amount / 100,
      currency: t.currency,
      paidAt: t.paid_at,
      channel: t.channel,
    });
  } catch (err) {
    console.error("Paystack verification failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the payment gateway. Please try again." },
      { status: 502 }
    );
  }
}
