"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  NEWSLETTER_SOURCE_MERGE_TAG,
  NEWSLETTER_SOURCE_OPTIONS,
} from "@/lib/newsletter-source";
import NewsletterGuardFields from "@/components/NewsletterGuardFields";
import { HONEYPOT_FIELD } from "@/lib/form-guard";

const PATTERN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='10' cy='10' r='5' fill='rgba(255, 255, 255, 0.1)'/%3E%3Ccircle cx='40' cy='40' r='5' fill='rgba(255, 255, 255, 0.1)'/%3E%3Ccircle cx='70' cy='70' r='5' fill='rgba(255, 255, 255, 0.1)'/%3E%3Ccircle cx='90' cy='20' r='5' fill='rgba(255, 255, 255, 0.1)'/%3E%3Ccircle cx='20' cy='80' r='5' fill='rgba(255, 255, 255, 0.1)'/%3E%3C/svg%3E\") repeat";

export default function NewsletterCTA({ formToken }: { formToken: string }) {
  const pathname = usePathname() || "/";
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim()) return;
    setSending(true);
    const extra = formRef.current ? new FormData(formRef.current).get(HONEYPOT_FIELD) : "";
    try {
      const res = await fetch("/api/newsletter-signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source,
          page: pathname,
          formToken,
          [HONEYPOT_FIELD]: typeof extra === "string" ? extra : "",
        }),
      });
      const json = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        setError(json?.error || "Something went wrong. Please try again.");
        return;
      }
      setSuccessOpen(true);
      setEmail("");
      setSource("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  function closeModal() {
    setSuccessOpen(false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && successOpen) closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [successOpen]);

  useEffect(() => {
    if (successOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [successOpen]);

  return (
    <>
      <section
        className="relative w-full py-8 px-6 text-center text-white overflow-hidden bg-gradient-to-r from-[#2b82ea] to-[#5a4da0] shadow-[0_2px_10px_rgba(0,0,0,0.15)] border-b border-white/20 md:flex md:flex-col md:items-center md:justify-center md:py-6 md:px-4"
        aria-label="Subscribe to newsletter"
      >
        <div
          className="absolute inset-0 z-0 opacity-50 pointer-events-none"
          style={{ background: PATTERN_BG }}
          aria-hidden
        />
        <h2 className="relative z-10 text-3xl font-bold mb-2 tracking-wide  md:text-[1.6rem]">
          Subscribe to Our Newsletter/Snapshot News
        </h2>
        <p className="relative z-10 text-[1.1rem] text-[#d9eaff] mb-6 max-w-[850px] mx-auto px-2 md:text-base md:max-w-full">
          Stay updated with the latest LMS news and support resources.
        </p>
        <form
          ref={formRef}
          id="newsletter-form"
          action="/api/newsletter-signup/"
          method="post"
          onSubmit={handleSubmit}
          noValidate
          className="relative z-10 flex justify-center gap-4 flex-wrap md:flex-col md:gap-3 md:w-full md:max-w-[320px] md:mx-auto"
        >
          <NewsletterGuardFields
            formToken={formToken}
            page={pathname}
            honeypotId="newsletter-cta-extra"
          />
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            className="w-[280px] py-3 px-5 text-base border border-white/50 rounded-md bg-white/85 text-[#2b2b2b] outline-none transition-[border-color,box-shadow] duration-200 focus:border-white focus:shadow-[0_0_5px_rgba(43,130,234,0.5)] md:w-full md:max-w-[320px] md:box-border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <label htmlFor="newsletter-source" className="sr-only">
            How did you hear about us?
          </label>
          <select
            id="newsletter-source"
            name={NEWSLETTER_SOURCE_MERGE_TAG}
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-[280px] py-3 px-4 text-base border border-white/50 rounded-md bg-white/85 text-[#2b2b2b] outline-none transition-[border-color,box-shadow] duration-200 focus:border-white focus:shadow-[0_0_5px_rgba(43,130,234,0.5)] md:w-full md:max-w-[320px] md:box-border"
            aria-label="How did you hear about us?"
          >
            {NEWSLETTER_SOURCE_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {error ? (
            <p role="alert" className="basis-full m-0 text-sm text-white bg-black/25 rounded-md py-2 px-3">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={sending}
            className="py-3.5 px-7 text-[1.1rem] font-semibold text-[#2b82ea] bg-white border-0 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#f0f7ff] hover:-translate-y-0.5 hover:shadow-[0_2px_5px_rgba(0,0,0,0.1)] md:w-full md:max-w-[320px] md:box-border disabled:opacity-70 disabled:cursor-wait"
          >
            {sending ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      </section>

      {/* Success Modal */}
      <div
        className={`fixed inset-0 z-[1000] flex justify-center items-center bg-black/50 ${
          successOpen ? "flex" : "hidden"
        }`}
        id="newsletterSuccessModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-success-title"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="bg-white py-8 px-8 rounded-lg text-center max-w-[400px] text-[#2b2b2b] relative">
          <button
            type="button"
            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 bg-transparent border-0 py-1 leading-none hover:text-[#2b2b2b]"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
          <h2
            id="newsletter-success-title"
            className="m-0 mb-4 text-2xl font-bold text-[#2b2b2b]"
          >
            Success!
          </h2>
          <p className="m-0 text-[#2b2b2b] text-base">
            Thank you for subscribing to our newsletter. You&apos;ll receive
            updates soon!
          </p>
        </div>
      </div>
    </>
  );
}
