"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { PACKAGES, computeDayOfDonationPerks, formatCents } from "@/lib/fundraiser-packages";

type Order = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  packageType: string;
  amount: number;
  eventTickets: number;
  raffleTickets: number;
  sponsorRaffleTickets: number;
  bestDressedVotes: number;
  podcast: boolean;
  logoOnHomepage: boolean;
  recognition: string | null;
  miscNote: string | null;
  status: string;
  stripeSessionId: string | null;
  stripePaymentIntent: string | null;
  createdAt: string;
};

type Totals = {
  raised: number;
  eventTickets: number;
  raffleTickets: number;
  sponsorRaffleTickets: number;
  bestDressedVotes: number;
  orderCount: number;
};

export default function AdminPillarsFundraiserClient() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [totals, setTotals] = useState<Totals | null>(null);
  const [loading, setLoading] = useState(true);

  const dayOfMin = PACKAGES.day_of_donation.minAmountCents ?? 500;
  const dayOfMax = PACKAGES.day_of_donation.maxAmountCents ?? 10_000_000;
  const [dayOfAmount, setDayOfAmount] = useState("");
  const [dayOfName, setDayOfName] = useState("");
  const [dayOfEmail, setDayOfEmail] = useState("");
  const [dayOfBusy, setDayOfBusy] = useState(false);
  const [dayOfErr, setDayOfErr] = useState("");
  const dayOfCents =
    dayOfAmount.trim() === "" || !Number.isFinite(Number(dayOfAmount))
      ? NaN
      : Math.round(Number(dayOfAmount) * 100);
  const dayOfPreview =
    Number.isInteger(dayOfCents) &&
    dayOfCents >= dayOfMin &&
    dayOfCents <= dayOfMax
      ? computeDayOfDonationPerks(dayOfCents)
      : null;

  async function submitDayOfCheckout(e: FormEvent) {
    e.preventDefault();
    setDayOfErr("");
    const name = dayOfName.trim();
    const email = dayOfEmail.trim();
    if (!name || !email) {
      setDayOfErr("Name and email required.");
      return;
    }
    if (!Number.isInteger(dayOfCents) || dayOfCents < dayOfMin || dayOfCents > dayOfMax) {
      setDayOfErr(`Amount must be $${formatCents(dayOfMin)} – $${formatCents(dayOfMax)}.`);
      return;
    }
    setDayOfBusy(true);
    try {
      const res = await fetch("/api/pillars-fundraiser/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageType: "day_of_donation",
          amountCents: dayOfCents,
          name,
          email,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank", "noopener,noreferrer");
      } else {
        setDayOfErr(data.error || "Checkout failed.");
      }
    } catch {
      setDayOfErr("Network error.");
    } finally {
      setDayOfBusy(false);
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/pillars-fundraiser/orders");
        if (res.status === 401) {
          window.location.href = "/admin?next=/admin/pillars-fundraiser";
          return;
        }
        const data = await res.json();
        setOrders(data.orders ?? []);
        setTotals(data.totals ?? null);
      } catch {
        /* silent */
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const fmtDollars = (cents: number) =>
    "$" + (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0 });

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Package",
      "Amount",
      "Event Tickets",
      "Raffle Tickets",
      "Sponsor Raffle",
      "Best Dressed Votes",
      "Podcast",
      "Logo on Homepage",
      "Recognition",
      "Misc Note",
      "Stripe Session",
      "Date",
    ];
    const rows = orders.map((o) => [
      o.name,
      o.email,
      PACKAGES[o.packageType as keyof typeof PACKAGES]?.label ?? o.packageType,
      (o.amount / 100).toString(),
      o.eventTickets.toString(),
      o.raffleTickets.toString(),
      o.sponsorRaffleTickets.toString(),
      o.bestDressedVotes.toString(),
      o.podcast ? "Yes" : "No",
      o.logoOnHomepage ? "Yes" : "No",
      o.recognition ?? "",
      o.miscNote ?? "",
      o.stripeSessionId,
      o.createdAt,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pillars-fundraiser-orders.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-slate-500">Loading…</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin"
            className="text-sm text-indigo-600 hover:underline mb-2 inline-block"
          >
            &larr; Admin
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">
            Pillars of Purpose — Orders
          </h1>
        </div>
        <button
          type="button"
          onClick={exportCSV}
          className="px-4 py-2 text-sm font-medium bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors"
        >
          <i className="fas fa-download mr-1.5" aria-hidden />
          Export CSV
        </button>
      </div>

      <form
        onSubmit={submitDayOfCheckout}
        className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
      >
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="adm-dof-amt">
            Amount (USD)
          </label>
          <input
            id="adm-dof-amt"
            type="number"
            inputMode="decimal"
            min={dayOfMin / 100}
            step="0.01"
            value={dayOfAmount}
            onChange={(e) => setDayOfAmount(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="adm-dof-name">
            Name
          </label>
          <input
            id="adm-dof-name"
            type="text"
            value={dayOfName}
            onChange={(e) => setDayOfName(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="adm-dof-email">
            Email
          </label>
          <input
            id="adm-dof-email"
            type="email"
            value={dayOfEmail}
            onChange={(e) => setDayOfEmail(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-4 flex flex-col sm:flex-row sm:items-center gap-3">
          {dayOfPreview ? (
            <p className="text-xs text-slate-600 flex-1">
              {dayOfPreview.eventTickets} event · {dayOfPreview.raffleTickets} raffle
            </p>
          ) : (
            <span className="flex-1" />
          )}
          <button
            type="submit"
            disabled={dayOfBusy}
            className="px-4 py-2 text-sm font-medium bg-sky-700 text-white rounded-lg hover:bg-sky-800 disabled:opacity-50 whitespace-nowrap"
          >
            {dayOfBusy ? "…" : "Stripe checkout"}
          </button>
        </div>
        {dayOfErr ? (
          <p className="md:col-span-2 lg:col-span-4 text-sm text-red-600">{dayOfErr}</p>
        ) : null}
      </form>

      {/* Summary Cards */}
      {totals && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Raised", value: fmtDollars(totals.raised) },
            { label: "Orders", value: totals.orderCount },
            { label: "Event Tickets", value: totals.eventTickets },
            { label: "Raffle Tickets", value: totals.raffleTickets },
            { label: "Sponsor Raffle", value: totals.sponsorRaffleTickets },
            { label: "Best Dressed", value: totals.bestDressedVotes },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-slate-200 p-4 text-center"
            >
              <p className="text-xl font-bold text-indigo-900">{s.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Orders Table */}
      {orders.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
          No orders yet.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">
                  Name
                </th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">
                  Email
                </th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">
                  Package
                </th>
                <th className="text-right px-4 py-3 font-semibold text-slate-700">
                  Amount
                </th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">
                  Event
                </th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">
                  Raffle
                </th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">
                  Sponsor
                </th>
                <th className="text-center px-4 py-3 font-semibold text-slate-700">
                  Best Dressed
                </th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">
                  Note
                </th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {o.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{o.email}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-semibold">
                      {PACKAGES[o.packageType as keyof typeof PACKAGES]?.label ??
                        o.packageType}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">
                    {fmtDollars(o.amount)}
                  </td>
                  <td className="px-4 py-3 text-center">{o.eventTickets}</td>
                  <td className="px-4 py-3 text-center">{o.raffleTickets}</td>
                  <td className="px-4 py-3 text-center">
                    {o.sponsorRaffleTickets}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {o.bestDressedVotes}
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-xs max-w-[180px] truncate" title={o.miscNote ?? ""}>
                    {o.miscNote || <span className="text-slate-300">—</span>}
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-xs">
                    {fmtDate(o.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
