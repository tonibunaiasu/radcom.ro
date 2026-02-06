import { NextResponse } from "next/server";

const API_BASE = "https://connect.mailerlite.com/api";

const isTruthy = (value: FormDataEntryValue | null) =>
  typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const message = String(form.get("message") || "").trim();
  const locale = String(form.get("locale") || "ro");
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  const siteUrl = process.env.SITE_URL;

  const wantsHtml = (request.headers.get("accept") || "").includes("text/html");
  const redirectTo = siteUrl
    ? new URL(`/${locale}/contact`, siteUrl)
    : new URL(request.url);
  redirectTo.pathname = `/${locale}/contact`;

  if (!apiKey || !groupId) {
    if (wantsHtml) {
      redirectTo.searchParams.set("error", "1");
      return NextResponse.redirect(redirectTo, 303);
    }
    return NextResponse.json({ error: "MailerLite not configured." }, { status: 500 });
  }

  if (!isTruthy(name) || !isTruthy(email) || !isTruthy(message)) {
    if (wantsHtml) {
      redirectTo.searchParams.set("error", "1");
      return NextResponse.redirect(redirectTo, 303);
    }
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    email,
    fields: {
      name,
      phone,
      message
    },
    groups: [groupId],
    status: "active"
  };

  const response = await fetch(`${API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    if (wantsHtml) {
      redirectTo.searchParams.set("error", "1");
      return NextResponse.redirect(redirectTo, 303);
    }
    return NextResponse.json({ error: "MailerLite request failed." }, { status: 502 });
  }

  if (wantsHtml) {
    redirectTo.searchParams.set("sent", "1");
    return NextResponse.redirect(redirectTo, 303);
  }
  return NextResponse.json({ ok: true });
}
