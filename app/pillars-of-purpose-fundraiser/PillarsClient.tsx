"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  PACKAGES,
  formatCents,
  type PackageKey,
} from "@/lib/fundraiser-packages";

// Uncomment with Test Tickets section below
// const TEST_KEYS: PackageKey[] = ["test_1", "test_50c"];
const SPONSOR_KEYS: PackageKey[] = ["legacy", "title", "gold", "silver"];
const REGISTRATION_KEY: PackageKey = "registration";
const RAFFLE_KEYS: PackageKey[] = ["raffle_1", "raffle_10", "raffle_25"];

const TIER_STYLE: Record<PackageKey, { badge: string; border: string; bg: string; btn: string }> = {
  test_1:       { badge: "bg-red-600",       border: "border-red-200",     bg: "bg-white",        btn: "bg-red-600 hover:bg-red-700" },
  test_50c:     { badge: "bg-red-600",       border: "border-red-200",     bg: "bg-white",        btn: "bg-red-600 hover:bg-red-700" },
  legacy:       { badge: "bg-violet-700",    border: "border-violet-300",  bg: "bg-violet-50",    btn: "bg-violet-700 hover:bg-violet-800" },
  title:        { badge: "bg-rose-700",      border: "border-rose-300",    bg: "bg-rose-50",      btn: "bg-rose-700 hover:bg-rose-800" },
  gold:         { badge: "bg-yellow-600",    border: "border-yellow-400",  bg: "bg-yellow-50",    btn: "bg-yellow-600 hover:bg-yellow-700" },
  silver:       { badge: "bg-gray-500",      border: "border-gray-300",    bg: "bg-gray-50",      btn: "bg-gray-500 hover:bg-gray-600" },
  registration: { badge: "bg-indigo-700",    border: "border-indigo-200",  bg: "bg-indigo-50",    btn: "bg-indigo-700 hover:bg-indigo-800" },
  raffle_1:     { badge: "bg-amber-600",     border: "border-amber-200",   bg: "bg-amber-50",     btn: "bg-amber-600 hover:bg-amber-700" },
  raffle_10:    { badge: "bg-rose-600",      border: "border-rose-200",    bg: "bg-rose-50",      btn: "bg-rose-600 hover:bg-rose-700" },
  raffle_25:    { badge: "bg-purple-600",    border: "border-purple-200",  bg: "bg-purple-50",    btn: "bg-purple-600 hover:bg-purple-700" },
  day_of_donation: { badge: "bg-sky-600", border: "border-sky-200", bg: "bg-sky-50", btn: "bg-sky-600 hover:bg-sky-700" },
  misc:         { badge: "bg-teal-600",     border: "border-teal-200",    bg: "bg-teal-50",       btn: "bg-teal-600 hover:bg-teal-700" },
};

export default function PillarsClient() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "1";
  const isCancelled = searchParams.get("cancelled") === "1";
  const returnedOrderId = searchParams.get("order");

  const [verified, setVerified] = useState(false);

  // Modal state
  const [modalPkg, setModalPkg] = useState<PackageKey | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNote, setFormNote] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!isSuccess || !returnedOrderId || verified) return;
    setVerified(true);
    fetch("/api/pillars-fundraiser/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: returnedOrderId }),
    }).catch(() => {});
  }, [isSuccess, returnedOrderId, verified]);

  const openModal = (key: PackageKey) => {
    setModalPkg(key);
    setFormName("");
    setFormEmail("");
    setFormNote("");
    setFormAmount("");
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

    const isMisc = modalPkg === "misc";
    let amountCents: number | undefined;
    if (isMisc) {
      amountCents = Math.round(Number(formAmount) * 100);
      if (!Number.isFinite(amountCents) || amountCents < 100) {
        setFormError("Please enter a valid amount (minimum $1.00).");
        return;
      }
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
          ...(isMisc && { amountCents, miscNote: formNote.trim() || undefined }),
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

  const renderRegistrationBanner = (key: PackageKey) => {
    const pkg = PACKAGES[key];
    const style = TIER_STYLE[key];
    return (
      <div
        className={`w-full rounded-2xl border-2 ${style.border} ${style.bg} p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 transition-shadow hover:shadow-lg`}
      >
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 shrink-0">
          <span className={`inline-block px-3 py-0.5 text-xs font-bold text-white rounded-full ${style.badge}`}>
            {pkg.label}
          </span>
          <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tabular-nums">
            {fmtDollars(pkg.price)}
          </span>
        </div>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-1 min-w-0">
          {pkg.description}
        </p>
        <button
          type="button"
          onClick={() => openModal(key)}
          className={`shrink-0 w-full lg:w-auto lg:min-w-[220px] py-3 px-6 rounded-xl font-semibold text-white ${style.btn} transition-colors cursor-pointer`}
        >
          Purchase — {fmtDollars(pkg.price)}
        </button>
      </div>
    );
  };

  const modalPkgDef = modalPkg ? PACKAGES[modalPkg] : null;

  const derbyIntroCopy = (
    <>
      <p>
        <strong className="text-white">National Leiomyosarcoma Foundation (NLMSF)</strong> is thrilled to be partnering with Truman Charities
        for their annual Derby Party. All the proceeds from ticket sales go to NLMSF, and
        community members have donated some fantastic prizes for raffle items.
      </p>
      <p>
        Let&apos;s have fun giving back to NLMSF. Contests for the best dressed. Great Music! Dancing!
        And of course, the bar, to keep the spirits high! A Party that Produces Great Results.
      </p>
      <p className="font-semibold">
        To participate (register, sponsor, donate) for the Derby Party use links below…
      </p>
    </>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="relative w-[80%] mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="leading-tight text-white mb-6">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold">Truman Charities — Annual Derby Party</span>
            <span className="block text-2xl md:text-3xl font-semibold text-indigo-200 mt-3">In Memory of Monica Fabi</span>
          </h1>
          <div className="space-y-5 text-xl md:text-2xl text-indigo-100 leading-relaxed text-left sm:text-center">
            {derbyIntroCopy}
          </div>
        </div>
      </section>

      {/* Date, time & location — directly under hero */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-700 flex items-center justify-center">
                <i className="fas fa-calendar-alt text-white" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-0.5">Date</p>
                <p className="text-base font-bold text-slate-800">May 2, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-purple-50 border border-purple-100 rounded-2xl px-6 py-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-700 flex items-center justify-center">
                <i className="fas fa-clock text-white" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-0.5">Time</p>
                <p className="text-base font-bold text-slate-800">5:30 PM – 9:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-rose-50 border border-rose-100 rounded-2xl px-6 py-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-rose-600 flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-white" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-0.5">Location</p>
                <p className="text-base font-bold text-slate-800">Tommy Joe&apos;s — Bethesda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {isSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
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
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 font-semibold">
              Checkout was cancelled. You can try again anytime.
            </p>
          </div>
        )}

        {/* Event Registration & Raffle — registration banner + 3 raffle columns */}
        <section className="mb-10 md:mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Event Registration &amp; Raffle Tickets</h2>
          <p className="text-slate-600 mb-6">Get your entrance and raffle tickets.</p>
          {renderRegistrationBanner(REGISTRATION_KEY)}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-6">
            {RAFFLE_KEYS.map((key) => renderPackageCard(key, "small"))}
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/*
        Test Tickets — uncomment this block and TEST_KEYS above to restore local Stripe test purchases
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
        */}

        {/* Sponsorship Packages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Sponsorship Packages</h2>
          <p className="text-slate-600 mb-8">Make a lasting impact with a sponsorship package.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {SPONSOR_KEYS.map((key) => renderPackageCard(key, "large"))}
          </div>
        </section>

        {/* Pay by Check */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <i className="fas fa-envelope-open-text text-indigo-700 text-lg" aria-hidden />
              </div>
              <div className="w-full">
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Prefer to Pay by Check?
                </h2>
                <p className="text-sm font-semibold text-indigo-700 mb-3">Annual Derby Party</p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you prefer to donate through your bank, bill pay, or by personal check,
                  please make the check payable to <strong>NLMSF</strong> and mail it to:
                </p>
                <address className="not-italic bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-slate-700 leading-relaxed inline-block mb-5">
                  <strong>National LeioMyoSarcoma Foundation</strong><br />
                  1685 S. Colorado Blvd.<br />
                  Unit S, Suite 447<br />
                  Denver, Colorado 80222
                </address>
                <p className="text-sm text-slate-600 mb-3">
                  Please include the following information with your check so we can properly track your tickets and perks:
                </p>
                <ul className="text-sm text-slate-700 space-y-1.5 mb-4">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-calendar-alt text-indigo-400 w-4" aria-hidden />
                    <span><strong>Event</strong> — Annual Derby Party</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user text-indigo-400 w-4" aria-hidden />
                    <span><strong>Name</strong> — your full name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-envelope text-indigo-400 w-4" aria-hidden />
                    <span><strong>Email</strong> — your email address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-ticket-alt text-indigo-400 w-4" aria-hidden />
                    <span><strong>Package</strong> — the ticket or sponsorship package you are purchasing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Purpose Content */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            {/* Organization Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              <Image
                src="/images/nlmsf-logo.png"
                alt="National Leiomyosarcoma Foundation"
                width={160}
                height={160}
                className="h-28 w-auto object-contain"
              />
              <Image
                src="/images/circle-of-hope.png"
                alt="LMS/Sarcoma Community Roundtable — The Circle of Hope — Patients and Caregivers"
                width={160}
                height={160}
                className="h-28 w-auto object-contain"
              />
              <Image
                src="/images/nlmsf-spagn.png"
                alt="NLMSF-SPAGN International Leiomyosarcoma Research Roundtable"
                width={160}
                height={160}
                className="h-28 w-auto object-contain"
              />
              <Image
                src="/images/clincal-trials-logo.png"
                alt="Clinical Trials"
                width={160}
                height={160}
                className="h-28 w-auto object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-center uppercase tracking-wide text-indigo-900 mb-1">
              The National Leiomyosarcoma Foundation:
            </h2>
            <h3 className="text-xl font-bold text-center text-indigo-700 mb-8">
              Impact in Action: The Pillars of Purpose
            </h3>

            <ul className="space-y-5">
              {[
                { icon: "fa-book-open", title: "Awareness & Education", text: "Leiomyosarcoma / Sarcoma Awareness monthly Information / Education Forums." },
                { icon: "fa-hands-helping", title: "Community Empowerment", text: "Community Empowerment through Resource Support Guidance / Patient-driven Research involvement. 24/7 LMS LifeLine direct support access to the Foundation." },
                { icon: "fa-users", title: "Patient-Caregiver/Family Community Roundtable", text: "Think Tank Network to identify and address the common challenges faced by patients/families." },
                { icon: "fa-comments-alt", title: "Clinical Trials Patient Perspectives", text: "Addressing common challenges / tips, and positive experiences — a discussion forum." },
                { icon: "fa-heartbeat", title: "Survivorship Care Planning", text: "Survivorship Care Planning Guidance for patients and caregivers/families to advance quality of life care and support for strength and resilience in meeting the disease challenges." },
                { icon: "fa-globe", title: "International Leiomyosarcoma Research Roundtable", text: "Annual meetings of global research leaders — physician-scientists addressing the unmet needs in research and clinical trial development, including the testing and repurposing of drugs for LMS." },
                { icon: "fa-flask", title: "Annual Research Funding Support", text: "Accelerating and advancing research for precision clinical trial development to increase treatment options." },
              ].map((pillar) => (
                <li key={pillar.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mt-0.5">
                    <i className={`fas ${pillar.icon} text-indigo-700`} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{pillar.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust Logos */}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10 pt-8 border-t border-slate-200">
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
                alt="GuideStar Gold Participant"
                width={240}
                height={240}
                className="h-20 w-auto object-contain"
              />
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2025/07/charity-nav-scaled.png"
                alt="Charity Navigator"
                width={800}
                height={400}
                className="h-14 w-auto object-contain"
              />
              <Image
                src="/images/great-non-profits.png"
                alt="Great Nonprofits — Top-Rated Nonprofit"
                width={240}
                height={240}
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Miscellaneous Donation */}
        <section className="mb-16 flex justify-start">
          <button
            type="button"
            onClick={() => openModal("misc")}
            className="py-3 px-8 rounded-xl font-semibold text-white bg-gray-500 hover:bg-gray-600 transition-colors cursor-pointer"
          >
            Miscellaneous Donation
          </button>
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
              {modalPkg === "misc" && (
                <div>
                  <label htmlFor="pf-amount" className="block text-sm font-medium text-slate-700 mb-1">
                    Amount (USD) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input
                      id="pf-amount"
                      type="number"
                      inputMode="decimal"
                      min="1"
                      step="0.01"
                      required
                      value={formAmount}
                      onChange={(e) => setFormAmount(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="25.00"
                    />
                  </div>
                </div>
              )}
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
              {modalPkg === "misc" && (
                <div>
                  <label htmlFor="pf-note" className="block text-sm font-medium text-slate-700 mb-1">
                    Description / Note <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea
                    id="pf-note"
                    rows={3}
                    value={formNote}
                    onChange={(e) => setFormNote(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                    placeholder="e.g. In honor of Jane Doe, general support, etc."
                  />
                </div>
              )}

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
