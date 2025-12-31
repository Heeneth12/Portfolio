"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSent(true);
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="mt-12 mb-18 sm:mt-24 sm:mb-32">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-100 px-3 py-1 text-xs sm:text-sm font-medium text-zinc-50 dark:text-zinc-900 shadow-sm">
          Contact
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-2">
          Get in Touch
        </h2>

        <p className="mb-8 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Send me a message below.
        </p>

        {/* Contact Form */}
        <div className="w-full bg-white dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 shadow-sm">
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Message Sent!
              </h3>
              <p className="text-zinc-500 text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-left">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry..."
                  className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Details
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project..."
                  className="w-full resize-none rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-50 dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Disclaimer */}
        {/* <p className="mt-6 text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500">
          (Please note: I will ignore all soliciting)
        </p> */}
      </div>
    </section>
  );
}
