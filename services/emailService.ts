import nodemailer from "nodemailer";

interface EmailData {
  from: string;
  subject: string;
  message: string;
}

export async function sendEmail({ from, subject, message }: EmailData) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials not set in env");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: `<p><b>From:</b> ${from}</p><p><b>Message:</b></p><p>${message}</p>`,
  });
}
