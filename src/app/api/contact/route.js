import { Resend } from 'resend';

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const required = ["name", "email", "message"];
  const missing = required.filter((k) => !data?.[k] || !String(data[k]).trim());
  if (missing.length > 0) {
    return Response.json({ ok: false, error: `Missing: ${missing.join(", ")}` }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact email delivery is unavailable: RESEND_API_KEY is not configured.");
    return Response.json(
      { ok: false, error: "Email service is temporarily unavailable. Please email me directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ajsoft3310@gmail.com",
      subject: "New portfolio contact message",
      text: `Name: ${String(data.name).trim()}\nEmail: ${String(data.email).trim()}\n\n${String(data.message).trim()}`,
    });

    if (error) {
      console.error("Contact email delivery failed:", error);
      return Response.json(
        { ok: false, error: "Your message could not be sent. Please email me directly." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return Response.json(
      { ok: false, error: "Your message could not be sent. Please email me directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
