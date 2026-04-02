"use client";

import { useState } from "react";

const PRESET_AMOUNTS_CENTS = [2500, 5000, 10000, 25000];

type Props = {
  tributeSlug: string;
  tributeName: string;
  tributeId: string;
};

export default function DonateInMemoriam({ tributeSlug, tributeName, tributeId }: Props) {
  const [selectedCents, setSelectedCents] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const customCents = customAmount ? Math.round(parseFloat(customAmount) * 100) : null;
  const effectiveCents = selectedCents ?? customCents;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!effectiveCents || effectiveCents < 100) {
      setError("Please enter a minimum donation of $1.00");
      return;
    }
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/tributes/donate/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tributeSlug,
          tributeName,
          tributeId,
          donorName: name.trim(),
          email: email.trim(),
          amountCents: effectiveCents,
          message: message.trim(),
          isAnonymous,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section
      className="rounded-xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/80 to-purple-50/60 p-6 shadow-md md:p-8"
      aria-label={`Donate in memory of ${tributeName}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow">
          <i className="fas fa-heart text-sm" aria-hidden />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Donate in Memory of {tributeName}</h3>
          <p className="text-sm text-gray-500">100% of donations go to NLMSF LMS research</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Amount selector */}
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-700">Select an amount</p>
          <div className="grid grid-cols-4 gap-2">
            {PRESET_AMOUNTS_CENTS.map((cents) => (
              <button
                key={cents}
                type="button"
                onClick={() => { setSelectedCents(cents); setCustomAmount(""); }}
                className={`rounded-lg border-2 py-2.5 text-sm font-bold transition-all ${
                  selectedCents === cents
                    ? "border-violet-600 bg-violet-600 text-white shadow"
                    : "border-gray-200 bg-white text-gray-700 hover:border-violet-400"
                }`}
              >
                ${cents / 100}
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="Other amount"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedCents(null); }}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-7 pr-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* Name & email */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Your name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Leave a message <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`A message in memory of ${tributeName}...`}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
          />
        </div>

        {/* Anonymous */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="tribute-anon"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-4 w-4 accent-violet-600"
          />
          <label htmlFor="tribute-anon" className="text-sm text-gray-600">
            Donate anonymously
          </label>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !effectiveCents || effectiveCents < 100}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all hover:from-violet-700 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2" aria-hidden />
              Redirecting to payment...
            </>
          ) : (
            <>
              <i className="fas fa-heart mr-2" aria-hidden />
              Donate{effectiveCents && effectiveCents >= 100 ? ` $${(effectiveCents / 100).toFixed(0)}` : ""} in Memory of {tributeName}
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          <i className="fas fa-lock mr-1" aria-hidden />
          Secured by Stripe · Tax-deductible donation to NLMSF
        </p>
      </form>
    </section>
  );
}
