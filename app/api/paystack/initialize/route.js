import { NextResponse } from "next/server";

export async function POST(request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { ok: false, error: "Payment processing is not configured." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, amount } = body || {};
  const amountNumber = Number.parseFloat(amount);

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof service !== "string" || !service.trim() ||
    !Number.isFinite(amountNumber) || amountNumber < 1
  ) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, email, purpose, and amount." },
      { status: 400 }
    );
  }

  const origin = request.nextUrl.origin;

  try {
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        amount: Math.round(amountNumber * 100), // pesewas
        currency: "GHS",
        callback_url: `${origin}/payment/callback`,
        metadata: {
          custom_fields: [
            { display_name: "Name", variable_name: "name", value: name.trim() },
            { display_name: "Purpose", variable_name: "purpose", value: service },
          ],
        },
      }),
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok || !data.status) {
      return NextResponse.json(
        { ok: false, error: data.message || "Could not start the payment." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (err) {
    console.error("Paystack initialization failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the payment gateway. Please try again." },
      { status: 502 }
    );
  }
}
