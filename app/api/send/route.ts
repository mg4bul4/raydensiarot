import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_TO = "raydensdesign@gmail.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width"/>
<title>New contact message</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:Georgia,'Times New Roman',serif;-webkit-font-smoothing:antialiased;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f4;padding:32px 16px;">
<tr>
<td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e7e5e4;">
<tr>
<td style="padding:32px 36px 8px 36px;border-bottom:3px solid #af101a;">
<p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#78716c;font-family:system-ui,sans-serif;">Portfolio: contact form</p>
<h1 style="margin:12px 0 0 0;font-size:22px;font-weight:700;color:#1c1917;font-family:system-ui,sans-serif;letter-spacing:-0.02em;">New message</h1>
</td>
</tr>
<tr>
<td style="padding:28px 36px 8px 36px;">
<p style="margin:0 0 6px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#78716c;font-family:system-ui,sans-serif;">Name</p>
<p style="margin:0 0 24px 0;font-size:16px;line-height:1.5;color:#1c1917;font-family:system-ui,sans-serif;">${safeName}</p>
<p style="margin:0 0 6px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#78716c;font-family:system-ui,sans-serif;">Email</p>
<p style="margin:0 0 24px 0;font-size:16px;line-height:1.5;color:#1c1917;font-family:system-ui,sans-serif;"><a href="mailto:${safeEmail}" style="color:#af101a;text-decoration:none;">${safeEmail}</a></p>
<p style="margin:0 0 10px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#78716c;font-family:system-ui,sans-serif;">Message</p>
</td>
</tr>
<tr>
<td style="padding:0 36px 32px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafaf9;border-left:3px solid #af101a;">
<tr>
<td style="padding:20px 22px;">
<p style="margin:0;font-size:15px;line-height:1.65;color:#292524;white-space:pre-wrap;font-family:system-ui,sans-serif;">${safeMessage.replace(/\r\n/g, "\n").replace(/\n/g, "<br/>")}</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 36px 32px 36px;border-top:1px solid #e7e5e4;">
<p style="margin:0;font-size:12px;line-height:1.5;color:#a8a29e;font-family:system-ui,sans-serif;">Reply directly to this email to respond to <strong style="color:#57534e;">${safeName}</strong>; their address is set as the reply-to.</p>
</td>
</tr>
</table>
<p style="margin:24px 0 0 0;font-size:11px;color:#a8a29e;font-family:system-ui,sans-serif;text-align:center;">Rayden Siarot · portfolio</p>
</td>
</tr>
</table>
</body>
</html>`;
}

type Body = {
  Name?: string;
  Email?: string;
  Message?: string;
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.Name ?? body.name ?? "").trim();
  const email = String(body.Email ?? body.email ?? "").trim();
  const message = String(body.Message ?? body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing Name, Email, or Message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[send] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 503 }
    );
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.RESEND_TO_EMAIL?.trim() ||
    DEFAULT_TO;

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ??
    "Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio · message from ${name}`,
    html: buildEmailHtml(name, email, message),
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[send] Resend error", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
