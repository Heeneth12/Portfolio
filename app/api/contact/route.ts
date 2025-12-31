import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/emailService";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await sendEmail({ from: email, subject, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
