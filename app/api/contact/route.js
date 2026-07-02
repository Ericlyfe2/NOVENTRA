import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const service = (body.service || body.subject || "").toString().trim();
  const message = (body.message || "").toString().trim();

  const errors = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!service) errors.service = "Please select a service.";
  if (message.length < 10)
    errors.message = "Please describe your enquiry (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Delivery: if a Formspree endpoint is configured, forward the message there.
  // Otherwise log it server-side so submissions are never silently lost.
  const formspreeEndpoint = process.env.CONTACT_FORMSPREE_ENDPOINT;
  if (formspreeEndpoint) {
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
    } catch (err) {
      console.error("Contact form forwarding failed:", err);
      return NextResponse.json(
        { ok: false, error: "Could not send your message. Please email info@noventra.tech directly." },
        { status: 502 }
      );
    }
  } else {
    console.log("Contact form submission:", { name, email, service, message });
  }

  return NextResponse.json({ ok: true });
}
