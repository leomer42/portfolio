import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/utils";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Log contact submissions — wire to Resend, SendGrid, or similar in production
    console.log("[Contact]", { name, email, subject, message, to: siteConfig.email });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
