import crypto from "crypto";
import { NextResponse } from "next/server";

// Paystack expects a fast 200 response and signs the raw body with your
// secret key (HMAC SHA512) in the x-paystack-signature header.
// https://paystack.com/docs/payments/webhooks
export async function POST(request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-paystack-signature");

  const hash = crypto.createHmac("sha512", secretKey).update(rawBody).digest("hex");
  if (!signature || hash !== signature) {
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 401 });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  if (event?.event === "charge.success") {
    const t = event.data;
    console.log("Paystack webhook: charge.success", {
      reference: t.reference,
      amount: t.amount / 100,
      currency: t.currency,
      customer: t.customer?.email,
    });
  }

  return NextResponse.json({ ok: true });
}
