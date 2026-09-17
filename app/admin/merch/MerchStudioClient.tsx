"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminTabs } from "@/components/AdminTabs";
import MerchMockup from "@/components/merch/MerchMockup";
import {
  formatUsd,
  type MerchColor,
  type MerchMedium,
  type MerchMediumId,
} from "@/lib/merch/catalog";
import type { MerchTheme } from "@/lib/merch/prompts";

type Design = {
  id: string;
  title: string;
  prompt: string;
  themeId: string;
  source: string;
  status: string;
  reviewNote: string | null;
  imageUrl: string;
  createdAt: string;
};

type Listing = {
  id: string;
  designId: string;
  mediumId: string;
  mediumName: string;
  slug: string;
  title: string;
  priceCents: number;
  priceLabel: string;
  colors: string[];
  published: boolean;
  imageUrl: string;
  mockupUrl?: string | null;
  hasPrintifyMockup?: boolean;
  printifyProductId?: string | null;
};

type Order = {
  id: string;
  email: string;
  name: string;
  status: string;
  totalLabel: string;
  printifyOrderId: string | null;
  printifyStatus: string | null;
  fulfillError: string | null;
  createdAt: string;
};

type StudioData = {
  designs: Design[];
  listings: Listing[];
  orders: Order[];
  catalog: { mediums: MerchMedium[]; colors: MerchColor[]; themes: MerchTheme[] };
  printifyConfigured: boolean;
  geminiConfigured: boolean;
  stripeConfigured: boolean;
};

const STATUS_LABEL: Record<string, string> = {
  pending: "Needs review",
  approved: "Approved",
  rejected: "Rejected",
  paid: "Paid — sending to print",
  submitted_to_print: "Sent to Printify",
  print_failed: "Printify failed",
  canceled: "Canceled",
};

export default function MerchStudioClient() {
  const [data, setData] = useState<StudioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [themeId, setThemeId] = useState("champion-hope");
  const [prompt, setPrompt] = useState("");
  const [count, setCount] = useState(3);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mediums, setMediums] = useState<MerchMediumId[]>(["short_tee", "long_tee", "hoodie", "hat"]);
  const [colorIds, setColorIds] = useState<string[]>(["purple", "black", "white"]);
  const [applying, setApplying] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [syncNote, setSyncNote] = useState("");
  const [printifyPreview, setPrintifyPreview] = useState<{
    shopId: string | null;
    products: Array<{
      id: string;
      title: string;
      enabledVariantCount: number;
      mediumId: string | null;
      importedListingId: string | null;
      importedSlug: string | null;
      published: boolean;
    }>;
  } | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/merch/");
      if (res.status === 401) {
        window.location.href = "/admin?next=/admin/merch";
        return;
      }
      const text = await res.text();
      let json: StudioData & { error?: string };
      try {
        json = JSON.parse(text) as StudioData & { error?: string };
      } catch {
        throw new Error("Merch studio could not load (the database is missing merch tables).");
      }
      if (!res.ok) {
        throw new Error(json.error || "Failed to load merch studio");
      }
      setData(json);
      const previewRes = await fetch("/api/admin/merch/printify-sync/");
      if (previewRes.ok) {
        const preview = await previewRes.json() as {
          shopId?: string | null;
          products?: Array<{
            id: string;
            title: string;
            enabledVariantCount: number;
            mediumId: string | null;
            importedListingId: string | null;
            importedSlug: string | null;
            published: boolean;
          }>;
        };
        setPrintifyPreview({
          shopId: preview.shopId ?? null,
          products: preview.products ?? [],
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load merch studio");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const selected = useMemo(
    () => data?.designs.find((d) => d.id === selectedId) ?? data?.designs.find((d) => d.status === "approved") ?? null,
    [data, selectedId],
  );

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  async function generate() {
    setGenerating(true);
    setError("");
    try {
      const res = await fetch("/api/admin/merch/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ themeId, prompt, count }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Generate failed");
      await load();
      if (json.designs?.[0]?.id) setSelectedId(json.designs[0].id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generate failed");
    } finally {
      setGenerating(false);
    }
  }

  async function setStatus(id: string, status: "approved" | "rejected" | "pending") {
    const res = await fetch(`/api/admin/merch/designs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setSelectedId(id);
      await load();
    }
  }

  async function apply() {
    if (!selected) return;
    setApplying(true);
    setError("");
    setSyncNote("");
    try {
      const res = await fetch("/api/admin/merch/apply/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          designId: selected.id,
          mediumIds: mediums,
          colorIds,
          publish: true,
        }),
      });
      const json = await res.json() as {
        error?: string;
        listings?: Listing[];
        printifyWarnings?: string[];
      };
      if (!res.ok) throw new Error(json.error || "Could not apply to merch");
      const created = json.listings ?? [];
      const missingPhoto = created.filter((listing) => !listing.hasPrintifyMockup);
      if (missingPhoto.length && data?.printifyConfigured) {
        await createPrintifyPhotos(missingPhoto.map((listing) => listing.id));
      } else if (created.length) {
        const withPhotos = created.filter((listing) => listing.hasPrintifyMockup).length;
        setSyncNote(
          `Published ${created.length} listing${created.length === 1 ? "" : "s"}. ${withPhotos} already have Printify photos.`,
        );
      }
      if (json.printifyWarnings?.length) {
        setError(json.printifyWarnings.join(" "));
      }
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not apply to merch");
    } finally {
      setApplying(false);
    }
  }

  async function createPrintifyPhotos(listingIds?: string[]) {
    setSyncing(true);
    setError("");
    setSyncNote("");
    try {
      const ids = listingIds?.length
        ? listingIds
        : (data?.listings.filter((listing) => !listing.hasPrintifyMockup).map((listing) => listing.id) ?? []);
      if (!ids.length) {
        setSyncNote("Every published listing already has a Printify product photo.");
        return;
      }
      let created = 0;
      let linked = 0;
      let refreshed = 0;
      let skipped = 0;
      let hidden = 0;
      const skipReasons: string[] = [];
      for (const listingId of ids) {
        const res = await fetch("/api/admin/merch/printify-publish/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ listingIds: [listingId], waitForMockups: true }),
        });
        const json = await res.json() as {
          error?: string;
          created?: unknown[];
          linked?: unknown[];
          refreshed?: unknown[];
          skipped?: Array<{ title?: string; reason?: string }>;
          hiddenTestListings?: number;
        };
        if (!res.ok) throw new Error(json.error || "Could not create Printify products");
        created += json.created?.length ?? 0;
        linked += json.linked?.length ?? 0;
        refreshed += json.refreshed?.length ?? 0;
        skipped += json.skipped?.length ?? 0;
        hidden += json.hiddenTestListings ?? 0;
        for (const row of json.skipped ?? []) {
          skipReasons.push(`${row.title}: ${row.reason}`);
        }
      }
      setSyncNote(
        `Printify photos: created ${created}, linked ${linked}, refreshed ${refreshed}, skipped ${skipped}.` +
          (hidden ? ` Hid ${hidden} test tee listing${hidden === 1 ? "" : "s"}.` : ""),
      );
      if (skipReasons.length) setError(skipReasons.slice(0, 4).join(" "));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create Printify products");
    } finally {
      setSyncing(false);
    }
  }

  async function togglePublished(listing: Listing) {
    await fetch(`/api/admin/merch/listings/${listing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !listing.published }),
    });
    await load();
  }

  async function syncPrintify() {
    setSyncing(true);
    setError("");
    setSyncNote("");
    try {
      const res = await fetch("/api/admin/merch/printify-sync/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });
      const json = await res.json() as {
        error?: string;
        created?: unknown[];
        updated?: unknown[];
        skipped?: Array<{ title?: string; reason?: string }>;
      };
      if (!res.ok) throw new Error(json.error || "Printify sync failed");
      const created = json.created?.length ?? 0;
      const updated = json.updated?.length ?? 0;
      const skipped = json.skipped?.length ?? 0;
      setSyncNote(
        `Imported ${created} new gift-shop listing${created === 1 ? "" : "s"} from Printify, updated ${updated}, skipped ${skipped}.`,
      );
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Printify sync failed");
    } finally {
      setSyncing(false);
    }
  }

  async function retryFulfill(orderId: string) {
    await fetch(`/api/admin/merch/orders/${orderId}/fulfill`, { method: "POST" });
    await load();
  }

  async function onUpload(file: File) {
    setError("");
    const form = new FormData();
    form.set("file", file);
    const uploaded = await fetch("/api/admin/upload-image", { method: "POST", body: form });
    const payload = await uploaded.json();
    if (!uploaded.ok) {
      setError(payload.error || "Upload failed");
      return;
    }
    const res = await fetch("/api/admin/merch/designs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: uploadTitle || file.name.replace(/\.[^.]+$/, ""),
        prompt: "Staff-uploaded branded artwork",
        imageDataUrl: payload.url,
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error || "Could not save upload");
      return;
    }
    setUploadTitle("");
    await load();
    setSelectedId(json.id);
  }

  if (loading) {
    return <div className="py-16 text-center text-gray-500">Loading merch studio…</div>;
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-[720px] px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Merch Studio</h1>
        <p className="mt-4 text-red-700">{error || "Merch studio could not load."}</p>
        <button
          type="button"
          className="mt-4 rounded-lg bg-violet-700 px-4 py-2 font-semibold text-white"
          onClick={() => {
            setLoading(true);
            setError("");
            void load();
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  const pending = data.designs.filter((d) => d.status === "pending");
  const approved = data.designs.filter((d) => d.status === "approved");

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-8">
      <header className="mb-6 flex flex-wrap items-center gap-4">
        <Link href="/" className="font-medium text-violet-700 no-underline hover:underline">
          ← Home
        </Link>
        <h1 className="m-0 flex-1 text-2xl font-bold text-gray-800">Merch Studio</h1>
        <Link href="/gift-shop#custom-merch" className="text-sm font-medium text-violet-700 no-underline hover:underline">
          View gift shop
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </header>
      <AdminTabs active="merch" />

      <p className="mb-6 max-w-3xl text-gray-600">
        Generate branded NLMSF artwork, approve what should go to print, then publish it. Publishing creates the Printify
        product and pulls real product photos onto the gift shop. After checkout, Printify prints and ships. Existing
        Printify shop products can still be imported below. Test tees stay hidden from the public shop.
      </p>

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <StatusChip ok={data.geminiConfigured} okLabel="Gemini image gen ready" offLabel="Studio brand art fallback" />
        <StatusChip ok={data.printifyConfigured} okLabel="Printify connected" offLabel="Printify not connected (mock fulfill)" />
        <StatusChip ok={data.stripeConfigured} okLabel="Stripe checkout ready" offLabel="Add STRIPE_SECRET_KEY to take payments" />
      </div>

      {error ? <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      {syncNote ? <p className="mb-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{syncNote}</p> : null}

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-1 text-xl font-bold text-violet-700">Import Printify shop products</h2>
        <p className="mb-4 mt-0 text-sm text-gray-500">
          Creating a product in Printify does not put it on the gift shop by itself. Import copies title, Printify’s
          shirt photos, colors, and sizes from shop {printifyPreview?.shopId || "26344889"} into Custom Collection
          listings. NLMSF Test Tee products stay hidden. Re-run this anytime you add products. Hidden listings stay
          hidden on later syncs.
        </p>
        <button
          type="button"
          onClick={() => void syncPrintify()}
          disabled={syncing || !data.printifyConfigured}
          className="cursor-pointer rounded-lg border-0 bg-violet-700 px-5 py-2.5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {syncing ? "Importing…" : "Import Printify products"}
        </button>
        <button
          type="button"
          onClick={() => void createPrintifyPhotos()}
          disabled={syncing || !data.printifyConfigured}
          className="ml-3 mt-3 cursor-pointer rounded-lg border border-violet-700 bg-white px-5 py-2.5 font-semibold text-violet-700 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-0"
        >
          {syncing ? "Creating photos…" : "Create Printify products & mockups"}
        </button>
        {!data.printifyConfigured ? (
          <p className="mt-3 text-sm text-amber-800">Set PRINTIFY_API_TOKEN on the host to import the shop catalog.</p>
        ) : null}
        {printifyPreview?.products?.length ? (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-3 font-semibold">Printify product</th>
                  <th className="py-2 pr-3 font-semibold">Variants</th>
                  <th className="py-2 font-semibold">Gift shop</th>
                </tr>
              </thead>
              <tbody>
                {printifyPreview.products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100">
                    <td className="py-2 pr-3">{product.title}</td>
                    <td className="py-2 pr-3">{product.enabledVariantCount}</td>
                    <td className="py-2">
                      {product.importedSlug ? (
                        <Link href={`/gift-shop/${product.importedSlug}`} className="text-violet-700">
                          {product.published ? "Published" : "Imported, hidden"} — /gift-shop/{product.importedSlug}
                        </Link>
                      ) : (
                        "Not imported yet"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : data.printifyConfigured ? (
          <p className="mt-3 text-sm text-gray-500">No Printify products were returned for this shop yet.</p>
        ) : null}
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-1 text-xl font-bold text-violet-700">1. Generate branded designs</h2>
        <p className="mb-4 mt-0 text-sm text-gray-500">
          Every prompt is locked to NLMSF purple, the awareness ribbon, and readable NLMSF text. If Gemini is not
          configured, the studio still creates unique on-brand print graphics you can approve.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-semibold text-gray-700">
            Theme
            <select
              className="mt-1.5 w-full rounded-md border border-gray-200 px-3 py-2.5 text-base font-normal"
              value={themeId}
              onChange={(e) => setThemeId(e.target.value)}
            >
              {data.catalog.themes.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            How many
            <select
              className="mt-1.5 w-full rounded-md border border-gray-200 px-3 py-2.5 text-base font-normal"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} design{n === 1 ? "" : "s"}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-4 block text-sm font-semibold text-gray-700">
          Extra art direction (optional)
          <textarea
            className="mt-1.5 min-h-[90px] w-full resize-y rounded-md border border-gray-200 px-3 py-2.5 text-base font-normal"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Include a small July 15 date, keep the ribbon large, no extra slogans."
          />
        </label>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={generate}
            disabled={generating}
            className="cursor-pointer rounded-lg border-0 bg-gradient-to-br from-violet-700 to-violet-600 px-5 py-2.5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {generating ? "Generating…" : "Generate designs"}
          </button>
          <label className="text-sm text-gray-600">
            Or upload artwork{" "}
            <input
              className="ml-2 align-middle text-sm"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void onUpload(file);
                e.target.value = "";
              }}
            />
          </label>
          <input
            className="rounded-md border border-gray-200 px-3 py-2 text-sm"
            placeholder="Upload title"
            value={uploadTitle}
            onChange={(e) => setUploadTitle(e.target.value)}
          />
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-4 text-xl font-bold text-violet-700">2. Approve artwork</h2>
        <p className="mb-4 mt-0 text-sm text-gray-500">
          {pending.length} waiting for review · {approved.length} approved
        </p>
        {data.designs.length === 0 ? (
          <p className="text-gray-500">No designs yet. Generate a batch to start the review queue.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.designs.map((design) => (
              <article
                key={design.id}
                className={`overflow-hidden rounded-xl border ${selected?.id === design.id ? "border-violet-700 ring-2 ring-violet-200" : "border-gray-200"}`}
              >
                <button
                  type="button"
                  className="block w-full cursor-pointer border-0 bg-violet-50 p-0"
                  onClick={() => setSelectedId(design.id)}
                >
                  <img src={design.imageUrl} alt={design.title} className="aspect-square w-full object-cover" />
                </button>
                <div className="p-3">
                  <h3 className="m-0 text-base font-bold text-gray-800">{design.title}</h3>
                  <p className="mb-2 mt-1 text-xs uppercase tracking-wide text-gray-500">
                    {STATUS_LABEL[design.status]} · {design.source}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white" onClick={() => setStatus(design.id, "approved")}>
                      Approve
                    </button>
                    <button type="button" className="rounded-md bg-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700" onClick={() => setStatus(design.id, "rejected")}>
                      Reject
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-1 text-xl font-bold text-violet-700">3. Apply to merch and publish</h2>
        <p className="mb-4 mt-0 text-sm text-gray-500">
          Approved art is placed on hats, hoodies, short sleeve, and long sleeve. Publishing creates the matching
          Printify product and saves the real shirt/hat photo so the gift shop does not show the CSS placeholder.
        </p>
        {!selected || selected.status !== "approved" ? (
          <p className="text-gray-500">Approve a design, then select it to apply it across merch types.</p>
        ) : (
          <>
            <p className="mb-3 text-sm font-semibold text-gray-700">Selected: {selected.title}</p>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.catalog.mediums.map((medium) => {
                const previewColor = data.catalog.colors.find((c) => colorIds.includes(c.id)) ?? data.catalog.colors[0];
                const checked = mediums.includes(medium.id);
                return (
                  <label key={medium.id} className={`cursor-pointer rounded-xl border p-3 ${checked ? "border-violet-700" : "border-gray-200"}`}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={checked}
                      onChange={() =>
                        setMediums((current) =>
                          current.includes(medium.id)
                            ? current.filter((id) => id !== medium.id)
                            : [...current, medium.id],
                        )
                      }
                    />
                    <span className="font-semibold">{medium.shortName}</span>
                    <span className="mt-1 block text-xs text-gray-500">{formatUsd(medium.priceCents)}</span>
                    <MerchMockup
                      imageUrl={selected.imageUrl}
                      colorHex={previewColor.hex}
                      mediumId={medium.id}
                      title={medium.shortName}
                      className="mt-3"
                    />
                  </label>
                );
              })}
            </div>
            <p className="mb-2 text-sm font-semibold text-gray-700">Colors</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {data.catalog.colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  title={color.name}
                  onClick={() =>
                    setColorIds((current) =>
                      current.includes(color.id) ? current.filter((id) => id !== color.id) : [...current, color.id],
                    )
                  }
                  className={`h-9 w-9 rounded-full border-2 ${colorIds.includes(color.id) ? "border-violet-800" : "border-white ring-1 ring-gray-300"}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={apply}
              disabled={applying || !mediums.length || !colorIds.length}
              className="cursor-pointer rounded-lg border-0 bg-violet-700 px-5 py-2.5 font-semibold text-white disabled:opacity-70"
            >
              {applying ? "Publishing…" : "Publish to gift shop"}
            </button>
          </>
        )}

        {data.listings.some((listing) => !listing.hasPrintifyMockup) ? (
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <p className="m-0 mb-2">
              {data.listings.filter((listing) => !listing.hasPrintifyMockup).length} listing
              {data.listings.filter((listing) => !listing.hasPrintifyMockup).length === 1 ? " is" : "s are"} still using
              the placeholder diagram. Create Printify products so the gift shop shows real mockups (Hope Courage
              Strength 2 Hoodie and Champion of Hope items).
            </p>
            <button
              type="button"
              onClick={() => void createPrintifyPhotos()}
              disabled={syncing || !data.printifyConfigured}
              className="cursor-pointer rounded-lg border-0 bg-violet-700 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {syncing ? "Creating Printify photos…" : "Create Printify products & mockups"}
            </button>
          </div>
        ) : null}

        {data.listings.length ? (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-3 font-semibold">Listing</th>
                  <th className="py-2 pr-3 font-semibold">Medium</th>
                  <th className="py-2 pr-3 font-semibold">Price</th>
                  <th className="py-2 pr-3 font-semibold">Photo</th>
                  <th className="py-2 pr-3 font-semibold">Shop</th>
                  <th className="py-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.listings.map((listing) => (
                  <tr key={listing.id} className="border-b border-gray-100">
                    <td className="py-2 pr-3">{listing.title}</td>
                    <td className="py-2 pr-3">
                      {listing.mediumName}
                      {listing.printifyProductId ? " · Printify" : ""}
                    </td>
                    <td className="py-2 pr-3">{listing.priceLabel}</td>
                    <td className="py-2 pr-3">
                      {listing.hasPrintifyMockup ? "Printify shirt photo" : "Placeholder diagram"}
                    </td>
                    <td className="py-2 pr-3">
                      <Link href={`/gift-shop/${listing.slug}`} className="text-violet-700">
                        /gift-shop/{listing.slug}
                      </Link>
                    </td>
                    <td className="py-2">
                      <button type="button" className="text-violet-700 underline" onClick={() => togglePublished(listing)}>
                        {listing.published ? "Published — hide" : "Hidden — publish"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-4 text-xl font-bold text-violet-700">4. Orders</h2>
        {data.orders.length === 0 ? (
          <p className="text-gray-500">No merch orders yet. Paid orders are sent to Printify automatically.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-3 font-semibold">Customer</th>
                  <th className="py-2 pr-3 font-semibold">Total</th>
                  <th className="py-2 pr-3 font-semibold">Status</th>
                  <th className="py-2 font-semibold">Printify</th>
                </tr>
              </thead>
              <tbody>
                {data.orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 align-top">
                    <td className="py-2 pr-3">
                      {order.name}
                      <div className="text-gray-500">{order.email}</div>
                    </td>
                    <td className="py-2 pr-3">{order.totalLabel}</td>
                    <td className="py-2 pr-3">{STATUS_LABEL[order.status] ?? order.status}</td>
                    <td className="py-2">
                      <div>{order.printifyStatus || "—"}</div>
                      {order.fulfillError ? <div className="text-red-600">{order.fulfillError}</div> : null}
                      {order.status === "print_failed" || order.status === "paid" ? (
                        <button type="button" className="mt-1 text-violet-700 underline" onClick={() => retryFulfill(order.id)}>
                          Retry Printify
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function StatusChip({ ok, okLabel, offLabel }: { ok: boolean; okLabel: string; offLabel: string }) {
  return (
    <div className={`rounded-lg px-3 py-2 text-sm ${ok ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
      {ok ? okLabel : offLabel}
    </div>
  );
}
