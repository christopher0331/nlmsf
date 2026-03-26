"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  PACKAGES,
  formatCents,
  type PackageKey,
} from "@/lib/fundraiser-packages";

type Totals = {
  raised: number;
  eventTickets: number;
  raffleTickets: number;
  orderCount: number;
};

const TEST_KEYS: PackageKey[] = ["test_1", "test_50c"];
const SPONSOR_KEYS: PackageKey[] = ["legacy", "title", "gold", "silver"];
const TICKET_KEYS: PackageKey[] = ["registration", "raffle_1", "raffle_10", "raffle_25"];

const TIER_STYLE: Record<PackageKey, { badge: string; border: string; bg: string; btn: string }> = {
  test_1:       { badge: "bg-red-600",       border: "border-red-200",     bg: "bg-white",        btn: "bg-red-600 hover:bg-red-700" },
  test_50c:     { badge: "bg-red-600",       border: "border-red-200",     bg: "bg-white",        btn: "bg-red-600 hover:bg-red-700" },
  legacy:       { badge: "bg-violet-700",    border: "border-violet-300",  bg: "bg-violet-50",    btn: "bg-violet-700 hover:bg-violet-800" },
  title:        { badge: "bg-rose-700",      border: "border-rose-300",    bg: "bg-rose-50",      btn: "bg-rose-700 hover:bg-rose-800" },
  gold:         { badge: "bg-yellow-600",    border: "border-yellow-400",  bg: "bg-yellow-50",    btn: "bg-yellow-600 hover:bg-yellow-700" },
  silver:       { badge: "bg-gray-500",      border: "border-gray-300",    bg: "bg-gray-50",      btn: "bg-gray-500 hover:bg-gray-600" },
  registration: { badge: "bg-indigo-700",    border: "border-indigo-200",  bg: "bg-indigo-50",    btn: "bg-indigo-700 hover:bg-indigo-800" },
  raffle_1:     { badge: "bg-teal-600",      border: "border-teal-200",    bg: "bg-teal-50",      btn: "bg-teal-600 hover:bg-teal-700" },
  raffle_10:    { badge: "bg-teal-600",      border: "border-teal-200",    bg: "bg-teal-50",      btn: "bg-teal-600 hover:bg-teal-700" },
  raffle_25:    { badge: "bg-teal-600",      border: "border-teal-200",    bg: "bg-teal-50",      btn: "bg-teal-600 hover:bg-teal-700" },
};

export default function PillarsClient() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "1";
  const isCancelled = searchParams.get("cancelled") === "1";
  const returnedOrderId = searchParams.get("order");

  const [totals, setTotals] = useState<Totals>({
    raised: 0, eventTickets: 0, raffleTickets: 0, orderCount: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const [verified, setVerified] = useState(false);

  // Modal state
  const [modalPkg, setModalPkg] = useState<PackageKey | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const fetchTotals = useCallback(async () => {
    try {
      const res = await fetch("/api/pillars-fundraiser/orders", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setTotals(data.totals);
    } catch { /* silent */ }
    finally { setLoaded(true); }
  }, []);

  useEffect(() => { fetchTotals(); }, [fetchTotals]);

  useEffect(() => {
    if (!isSuccess || !returnedOrderId || verified) return;
    setVerified(true);
    fetch("/api/pillars-fundraiser/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: returnedOrderId }),
    })
      .then(() => fetchTotals())
      .catch(() => {});
  }, [isSuccess, returnedOrderId, verified, fetchTotals]);

  const openModal = (key: PackageKey) => {
    setModalPkg(key);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormError("");
    setSubmitting(false);
  };

  const closeModal = () => {
    if (!submitting) setModalPkg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalPkg) return;

    const trimmedName = formName.trim();
    const trimmedEmail = formEmail.trim();
    if (!trimmedName || !trimmedEmail) {
      setFormError("Name and email are required.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      const res = await fetch("/api/pillars-fundraiser/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageType: modalPkg,
          name: trimmedName,
          email: trimmedEmail,
          phone: formPhone.trim(),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setFormError(data.error || "Something went wrong.");
        setSubmitting(false);
      }
    } catch {
      setFormError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  const fmtDollars = (cents: number) => "$" + formatCents(cents);

  const renderPackageCard = (key: PackageKey, size: "large" | "small") => {
    const pkg = PACKAGES[key];
    const style = TIER_STYLE[key];
    const isLarge = size === "large";

    return (
      <div
        key={key}
        className={`rounded-2xl border-2 ${style.border} ${style.bg} ${isLarge ? "p-6" : "p-5"} flex flex-col transition-shadow hover:shadow-lg`}
      >
        <div className={isLarge ? "flex items-start justify-between mb-3" : "mb-2"}>
          <span className={`inline-block px-3 py-0.5 text-xs font-bold text-white rounded-full ${style.badge} ${isLarge ? "" : "mb-3"}`}>
            {pkg.label}
          </span>
          {isLarge && (
            <span className="text-2xl font-extrabold text-slate-900">{fmtDollars(pkg.price)}</span>
          )}
        </div>

        {!isLarge && (
          <span className="text-2xl font-extrabold text-slate-900 mb-2">{fmtDollars(pkg.price)}</span>
        )}

        <p className={`text-sm ${isLarge ? "text-slate-600" : "text-slate-500"} leading-relaxed mb-4 flex-1`}>
          {pkg.description}
        </p>

        {isLarge && (
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-5">
            <div className="flex items-center gap-1.5">
              <i className="fas fa-ticket-alt text-indigo-400" aria-hidden />
              {pkg.eventTickets} event ticket{pkg.eventTickets !== 1 ? "s" : ""}
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fas fa-gift text-indigo-400" aria-hidden />
              {pkg.raffleTickets} raffle ticket{pkg.raffleTickets !== 1 ? "s" : ""}
            </div>
            {pkg.sponsorRaffleTickets > 0 && (
              <div className="flex items-center gap-1.5">
                <i className="fas fa-star text-indigo-400" aria-hidden />
                {pkg.sponsorRaffleTickets} sponsor raffle
              </div>
            )}
            {pkg.bestDressedVotes > 0 && (
              <div className="flex items-center gap-1.5">
                <i className="fas fa-crown text-indigo-400" aria-hidden />
                {pkg.bestDressedVotes} best dressed vote{pkg.bestDressedVotes !== 1 ? "s" : ""}
              </div>
            )}
            {pkg.podcast && (
              <div className="flex items-center gap-1.5">
                <i className="fas fa-podcast text-indigo-400" aria-hidden />
                Charity podcast
              </div>
            )}
            {pkg.logoOnHomepage && (
              <div className="flex items-center gap-1.5">
                <i className="fas fa-globe text-indigo-400" aria-hidden />
                Logo on homepage (1 yr)
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => openModal(key)}
          className={`w-full ${isLarge ? "py-3" : "py-2.5"} px-4 rounded-xl font-semibold text-white ${style.btn} transition-colors cursor-pointer ${isLarge ? "" : "text-sm"}`}
        >
          {isLarge ? `Select ${pkg.label} — ${fmtDollars(pkg.price)}` : `Purchase — ${fmtDollars(pkg.price)}`}
        </button>
      </div>
    );
  };

  const modalPkgDef = modalPkg ? PACKAGES[modalPkg] : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-lg md:text-xl font-semibold text-indigo-200 mb-2">
            National Leiomyosarcoma Foundation
          </p>
          <p className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/15 rounded-full backdrop-blur-sm">
            NLMSF Fundraiser
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Impact in Action: Pillars of Purpose
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Supporting the National Leiomyosarcoma Foundation through
            awareness, research, and community empowerment.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Total Raised", value: loaded ? fmtDollars(totals.raised) : "—" },
            { label: "Supporters", value: loaded ? totals.orderCount.toString() : "—" },
            { label: "Event Tickets", value: loaded ? totals.eventTickets.toString() : "—" },
            { label: "Raffle Tickets", value: loaded ? totals.raffleTickets.toString() : "—" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-indigo-900">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Success banner */}
        {isSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
            <p className="text-emerald-800 font-semibold text-lg">
              <i className="fas fa-check-circle mr-2" aria-hidden />
              Thank you for your purchase!
            </p>
            <p className="text-emerald-700 text-sm mt-1">
              Your order has been confirmed. You will receive a receipt via email.
            </p>
          </div>
        )}
        {isCancelled && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 font-semibold">
              Checkout was cancelled. You can try again anytime.
            </p>
          </div>
        )}

        {/* Test Tickets */}
        <section className="mb-10 p-4 bg-red-50 border-2 border-dashed border-red-300 rounded-2xl">
          <h2 className="text-lg font-bold text-red-700 mb-1">Test Tickets (remove before launch)</h2>
          <p className="text-red-600 text-sm mb-4">These process real charges on your Stripe account.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {TEST_KEYS.map((key) => {
              const pkg = PACKAGES[key];
              return (
                <div key={key} className="bg-white rounded-xl border border-red-200 p-4 flex flex-col">
                  <span className={`inline-block self-start px-3 py-0.5 text-xs font-bold text-white rounded-full mb-2 ${TIER_STYLE[key].badge}`}>
                    {pkg.label}
                  </span>
                  <span className="text-xl font-extrabold text-slate-900 mb-1">{fmtDollars(pkg.price)}</span>
                  <p className="text-sm text-slate-500 mb-3">{pkg.description}</p>
                  <button
                    type="button"
                    onClick={() => openModal(key)}
                    className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer text-sm"
                  >
                    Buy Test — {fmtDollars(pkg.price)}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Sponsorship Packages</h2>
          <p className="text-slate-600 mb-8">Make a lasting impact with a sponsorship package.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {SPONSOR_KEYS.map((key) => renderPackageCard(key, "large"))}
          </div>
        </section>

        {/* Tickets & Raffle */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Event Registration &amp; Raffle Tickets</h2>
          <p className="text-slate-600 mb-8">Get your entrance and raffle tickets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TICKET_KEYS.map((key) => renderPackageCard(key, "small"))}
          </div>
        </section>

        {/* Pillars of Purpose Content */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Impact in Action: The Pillars of Purpose for the National Leiomyosarcoma Foundation
            </h2>
            <ul className="space-y-4">
              {[
                { icon: "fa-book-open", title: "Awareness & Education", text: "Leiomyosarcoma / Sarcoma Awareness monthly Information and Education Forums." },
                { icon: "fa-hands-helping", title: "Community Empowerment", text: "Resource Support and patient-driven Research involvement. 24/7 LMS LifeLine direct support access to the Foundation." },
                { icon: "fa-users", title: "Patient-Caregiver Roundtable", text: "Patient-Caregiver/Family Community Roundtable — a Think Tank Network to identify and address the common challenges faced by patients and families." },
                { icon: "fa-heartbeat", title: "Survivorship Care Planning", text: "For patients and caregivers/families to advance quality of life care and support for strength and resilience in meeting the disease challenges." },
                { icon: "fa-globe", title: "International Research Roundtable", text: "Annual meetings of global research leaders — physician-scientists addressing unmet needs in research and clinical trial development, including repurposing of drugs for LMS." },
                { icon: "fa-flask", title: "Annual Research Funding", text: "Support to accelerate and advance research for precision clinical trial development to increase treatment options." },
              ].map((pillar) => (
                <li key={pillar.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <i className={`fas ${pillar.icon} text-indigo-700`} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* ── Registration Modal ── */}
      {modalPkg && modalPkgDef && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-indigo-700 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">
                  {modalPkgDef.label}
                </p>
                <p className="text-white text-2xl font-extrabold">
                  {fmtDollars(modalPkgDef.price)}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/70 hover:text-white text-2xl leading-none cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Package summary */}
            <div className="px-6 pt-4 pb-2 text-sm text-slate-600 border-b border-slate-100">
              {modalPkgDef.description}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              <div>
                <label htmlFor="pf-name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="pf-name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="pf-email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="pf-email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="pf-phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="pf-phone"
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              {formError && (
                <p className="text-red-600 text-sm">{formError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-indigo-700 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                {submitting
                  ? "Redirecting to payment…"
                  : `Continue to Payment — ${fmtDollars(modalPkgDef.price)}`}
              </button>

              <p className="text-xs text-slate-400 text-center">
                You will be redirected to Stripe to complete your payment securely.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
