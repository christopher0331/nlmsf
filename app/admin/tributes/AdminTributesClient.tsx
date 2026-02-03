"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Tribute = {
  id: string;
  name: string;
  slug: string;
  biography: string;
  image_url: string | null;
  is_published: boolean;
  created_at: string;
};

type Donor = {
  id: string;
  donor_name: string;
  donation_amount: number | null;
  donation_date: string | null;
  is_anonymous: boolean;
  message: string | null;
  display_order: number;
};

function stripHtml(html: string): string {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "").trim();
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent ?? div.innerText ?? "").trim();
}

function truncate(text: string, len: number): string {
  const s = stripHtml(text);
  return s.length <= len ? s : s.slice(0, len) + "...";
}

export default function AdminTributesClient() {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    biography: "",
    image_url: "",
    is_published: true,
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Tribute> | null>(null);
  const [donorsTributeId, setDonorsTributeId] = useState<string | null>(null);
  const [donors, setDonors] = useState<Donor[]>([]);
  const [donorForm, setDonorForm] = useState({
    donor_name: "",
    donation_amount: "",
    donation_date: new Date().toISOString().slice(0, 10),
    is_anonymous: false,
    message: "",
  });
  const [bulkNames, setBulkNames] = useState("");
  const [bulkSubmitting, setBulkSubmitting] = useState(false);

  async function fetchTributes() {
    try {
      const res = await fetch("/api/admin/tributes");
      if (res.status === 401) {
        window.location.href = "/admin?next=/admin/tributes";
        return;
      }
      const data = await res.json();
      setTributes(Array.isArray(data) ? data : []);
    } catch {
      setTributes([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTributes();
  }, []);

  useEffect(() => {
    if (!donorsTributeId) {
      setDonors([]);
      return;
    }
    fetch(`/api/admin/tributes/${donorsTributeId}/donors`)
      .then((r) => r.json())
      .then((d) => setDonors(Array.isArray(d) ? d : []))
      .catch(() => setDonors([]));
  }, [donorsTributeId]);

  function slugFromName(name: string) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.biography.trim()) {
      alert("Name and biography are required.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/tributes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          slug: form.slug.trim() || slugFromName(form.name),
          biography: form.biography.trim(),
          image_url: form.image_url.trim() || undefined,
          is_published: form.is_published,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed");
      }
      const created = await res.json();
      setTributes((prev) => [created, ...prev]);
      setForm({ name: "", slug: "", biography: "", image_url: "", is_published: true });
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to create tribute.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editId || !editForm) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/tributes/${editId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editForm.name?.trim(),
          slug: editForm.slug?.trim(),
          biography: editForm.biography?.trim(),
          image_url: editForm.image_url?.trim() ?? undefined,
          is_published: editForm.is_published,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed");
      }
      const updated = await res.json();
      setTributes((prev) => prev.map((t) => (t.id === editId ? { ...t, ...updated } : t)));
      setEditId(null);
      setEditForm(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this tribute page? This will also delete all associated donors.")) return;
    try {
      await fetch(`/api/admin/tributes/${id}`, { method: "DELETE" });
      setTributes((prev) => prev.filter((t) => t.id !== id));
      if (donorsTributeId === id) setDonorsTributeId(null);
    } catch {
      alert("Failed to delete.");
    }
  }

  async function togglePublished(id: string, isPublished: boolean) {
    try {
      await fetch(`/api/admin/tributes/${id}/toggle-published`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_published: isPublished }),
      });
      setTributes((prev) => prev.map((t) => (t.id === id ? { ...t, is_published: isPublished } : t)));
    } catch {
      alert("Failed to update publication status.");
    }
  }

  async function handleAddDonor(e: React.FormEvent) {
    e.preventDefault();
    if (!donorsTributeId || !donorForm.donor_name.trim()) return;
    try {
      const res = await fetch(`/api/admin/tributes/${donorsTributeId}/donors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor_name: donorForm.donor_name.trim(),
          donation_amount: donorForm.donation_amount ? Number(donorForm.donation_amount) : undefined,
          donation_date: donorForm.donation_date || undefined,
          is_anonymous: donorForm.is_anonymous,
          message: donorForm.message.trim() || undefined,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setDonors((prev) => [...prev, created]);
      setDonorForm({
        donor_name: "",
        donation_amount: "",
        donation_date: new Date().toISOString().slice(0, 10),
        is_anonymous: false,
        message: "",
      });
    } catch {
      alert("Failed to add donor.");
    }
  }

  async function handleBulkAddDonors(e: React.FormEvent) {
    e.preventDefault();
    if (!donorsTributeId || !bulkNames.trim()) return;
    const names = bulkNames
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean);
    if (names.length === 0) {
      alert("Enter at least one donor name per line.");
      return;
    }
    setBulkSubmitting(true);
    let success = 0;
    for (const name of names) {
      try {
        const res = await fetch(`/api/admin/tributes/${donorsTributeId}/donors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            donor_name: name,
            donation_date: donorForm.donation_date || new Date().toISOString().slice(0, 10),
            is_anonymous: donorForm.is_anonymous,
          }),
        });
        if (res.ok) {
          const created = await res.json();
          setDonors((prev) => [...prev, created]);
          success++;
        }
      } catch {
        /* skip */
      }
    }
    setBulkSubmitting(false);
    setBulkNames("");
    alert(`Added ${success} donor(s).`);
  }

  async function deleteDonor(id: string) {
    if (!confirm("Remove this donor?")) return;
    try {
      await fetch(`/api/admin/donors/${id}`, { method: "DELETE" });
      setDonors((prev) => prev.filter((d) => d.id !== id));
    } catch {
      alert("Failed to remove donor.");
    }
  }

  async function moveDonor(donorId: string, direction: "up" | "down") {
    try {
      await fetch(`/api/admin/donors/${donorId}/move`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ direction, tribute_id: donorsTributeId }),
      });
      const res = await fetch(`/api/admin/tributes/${donorsTributeId}/donors`);
      const data = await res.json();
      setDonors(Array.isArray(data) ? data : []);
    } catch {
      alert("Failed to move donor.");
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  const formLabel = "block font-semibold text-gray-700 mb-1.5 text-sm";
  const formInput =
    "w-full py-2.5 px-3 border border-gray-200 rounded-md text-base mb-4 box-border focus:border-[#7e22ce] focus:ring-2 focus:ring-[#7e22ce]/20";

  if (loading) {
    return (
      <div className="mx-auto max-w-[1000px] px-6 py-8 text-center text-gray-500">
        Loading…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-8">
      <header className="mb-6 flex flex-wrap items-center gap-4">
        <Link href="/" className="font-medium text-[#7e22ce] no-underline hover:underline">
          ← Home
        </Link>
        <h1 className="m-0 flex-1 text-2xl font-bold text-gray-800">Tribute Pages</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="cursor-pointer rounded-md border border-gray-200 py-2 px-4 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Sign out
        </button>
      </header>

      <div className="mb-6 flex gap-0 border-b-2 border-gray-200">
        <Link
          href="/admin/events"
          className="-mb-0.5 border-b-2 border-transparent py-3 px-5 text-sm font-semibold text-gray-500 no-underline hover:text-gray-700"
        >
          Events
        </Link>
        <Link
          href="/admin/education-videos"
          className="-mb-0.5 border-b-2 border-transparent py-3 px-5 text-sm font-semibold text-gray-500 no-underline hover:text-gray-700"
        >
          Education Videos
        </Link>
        <div className="-mb-0.5 border-b-2 border-[#7e22ce] py-3 px-5 text-sm font-semibold text-[#7e22ce]">
          Tributes
        </div>
      </div>

      <section className="mb-8 rounded-xl border border-[#7e22ce]/10 bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="m-0 mb-4 flex items-center gap-2 text-xl font-bold text-[#7e22ce]">
          <i className="fas fa-plus-circle" aria-hidden /> Add new tribute page
        </h2>
        <form onSubmit={handleAdd} className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={formLabel}>Name *</label>
            <input
              className={formInput}
              value={form.name}
              onChange={(e) => {
                setForm((f) => ({ ...f, name: e.target.value }));
                if (!form.slug || form.slug === slugFromName(form.name)) {
                  setForm((f) => ({ ...f, slug: slugFromName(e.target.value) }));
                }
              }}
              placeholder="Person's name"
              required
            />
          </div>
          <div>
            <label className={formLabel}>URL slug *</label>
            <input
              className={formInput}
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              placeholder="e.g. john-smith"
            />
            <p className="mt-0 text-xs text-gray-500">Used in URL: /[slug] (e.g. /andria-barnes-ruth-tribute-page)</p>
          </div>
          <div className="sm:col-span-2">
            <label className={formLabel}>Biography *</label>
            <textarea
              className={`${formInput} min-h-[150px] resize-y`}
              value={form.biography}
              onChange={(e) => setForm((f) => ({ ...f, biography: e.target.value }))}
              placeholder="Biography and remembrance..."
              required
              rows={6}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={formLabel}>Image URL</label>
            <input
              type="url"
              className={formInput}
              value={form.image_url}
              onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))}
              placeholder="https://..."
            />
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <input
              type="checkbox"
              id="add-published"
              checked={form.is_published}
              onChange={(e) => setForm((f) => ({ ...f, is_published: e.target.checked }))}
              className="h-[18px] w-[18px] accent-[#7e22ce]"
            />
            <label htmlFor="add-published" className="cursor-pointer text-sm font-medium text-gray-700">
              Publish immediately
            </label>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full cursor-pointer rounded-lg border-0 bg-gradient-to-br from-[#7e22ce] to-[#4338ca] py-3 px-6 text-base font-semibold text-white shadow-[0_8px_25px_rgba(126,34,206,0.3)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Creating…" : "Create tribute page"}
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
          <i className="fas fa-list text-[#7e22ce]" aria-hidden /> Manage tribute pages
        </h2>
        {tributes.length === 0 ? (
          <p className="m-0 rounded-xl border border-[#7e22ce]/10 bg-gradient-to-br from-[#7e22ce]/5 to-[#4338ca]/5 p-8 text-center text-gray-500">
            No tribute pages yet. Add one above. They will appear on the{" "}
            <Link href="/tributes-directory" className="text-[#7e22ce] underline">
              Tribute Pages
            </Link>{" "}
            directory.
          </p>
        ) : (
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {tributes.map((t) => (
              <li
                key={t.id}
                className="flex flex-wrap items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition hover:border-[#7e22ce] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <div className="flex min-w-0 flex-1 gap-4">
                  {t.image_url ? (
                    <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
                      <img src={t.image_url} alt={t.name} className="h-full w-full object-cover" />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="m-0 mb-1 text-lg font-semibold text-gray-900">{t.name}</h3>
                    <p className="m-0 mb-2 font-mono text-xs text-gray-500">Slug: {t.slug}</p>
                    <p className="m-0 line-clamp-2 text-sm text-gray-600">
                      {truncate(t.biography, 200)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Published</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={t.is_published}
                      onClick={() => togglePublished(t.id, !t.is_published)}
                      className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-0 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7e22ce] focus:ring-offset-2 ${
                        t.is_published ? "bg-[#7e22ce]" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          t.is_published ? "translate-x-6" : "translate-x-0.5"
                        }`}
                        style={{ marginTop: 2 }}
                      />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setDonorsTributeId(t.id)}
                      className="inline-flex items-center gap-1 rounded-md border border-[#8b5cf6] bg-[#8b5cf6] py-2 px-3 text-xs font-medium text-white hover:bg-[#7c3aed]"
                    >
                      <i className="fas fa-users" aria-hidden /> Donors
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditId(t.id);
                        setEditForm({
                          name: t.name,
                          slug: t.slug,
                          biography: t.biography,
                          image_url: t.image_url ?? "",
                          is_published: t.is_published,
                        });
                      }}
                      className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-cyan-500 py-2 px-3 text-xs font-medium text-white hover:bg-cyan-600"
                    >
                      <i className="fas fa-edit" aria-hidden /> Edit
                    </button>
                    <a
                      href={`/${t.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white py-2 px-3 text-xs font-medium text-gray-700 hover:bg-gray-50"
                    >
                      View
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDelete(t.id)}
                      className="inline-flex items-center gap-1 rounded-md border border-red-600 bg-red-600 py-2 px-3 text-xs font-medium text-white hover:bg-red-700"
                    >
                      <i className="fas fa-trash" aria-hidden /> Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Edit modal */}
      {editId && editForm && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-modal-title"
        >
          <div className="max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 id="edit-modal-title" className="m-0 text-xl font-semibold text-gray-900">
                Edit tribute page
              </h3>
              <button
                type="button"
                onClick={() => { setEditId(null); setEditForm(null); }}
                className="rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                <i className="fas fa-times" aria-hidden />
              </button>
            </div>
            <form onSubmit={handleUpdate}>
              <label className={formLabel}>Name *</label>
              <input
                className={formInput}
                value={editForm.name ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
              <label className={formLabel}>Slug *</label>
              <input
                className={formInput}
                value={editForm.slug ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, slug: e.target.value }))}
                required
              />
              <label className={formLabel}>Biography *</label>
              <textarea
                className={`${formInput} min-h-[120px] resize-y`}
                value={editForm.biography ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, biography: e.target.value }))}
                required
                rows={5}
              />
              <label className={formLabel}>Image URL</label>
              <input
                type="url"
                className={formInput}
                value={editForm.image_url ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, image_url: e.target.value }))}
              />
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-published"
                  checked={editForm.is_published ?? true}
                  onChange={(e) => setEditForm((f) => ({ ...f, is_published: e.target.checked }))}
                  className="h-[18px] w-[18px] accent-[#7e22ce]"
                />
                <label htmlFor="edit-published" className="cursor-pointer text-sm font-medium text-gray-700">
                  Published
                </label>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setEditId(null); setEditForm(null); }}
                  className="cursor-pointer rounded-lg border border-gray-300 bg-white py-2.5 px-4 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="cursor-pointer rounded-lg border-0 bg-gradient-to-br from-[#7e22ce] to-[#4338ca] py-2.5 px-4 font-semibold text-white disabled:opacity-70"
                >
                  {submitting ? "Saving…" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Donors modal */}
      {donorsTributeId && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donors-modal-title"
        >
          <div className="my-8 max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 id="donors-modal-title" className="m-0 text-xl font-semibold text-gray-900">
                Manage donors
              </h3>
              <button
                type="button"
                onClick={() => setDonorsTributeId(null)}
                className="rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                <i className="fas fa-times" aria-hidden />
              </button>
            </div>

            <div className="mb-6 rounded-lg border border-[#7e22ce]/10 bg-[#7e22ce]/5 p-4">
              <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900">
                <i className="fas fa-plus text-[#7e22ce]" aria-hidden /> Add donor
              </h4>
              <form onSubmit={handleAddDonor} className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className={formLabel}>Donor name *</label>
                  <input
                    className={formInput}
                    value={donorForm.donor_name}
                    onChange={(e) => setDonorForm((f) => ({ ...f, donor_name: e.target.value }))}
                    placeholder="Donor name"
                    required
                  />
                </div>
                <div>
                  <label className={formLabel}>Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    className={formInput}
                    value={donorForm.donation_amount}
                    onChange={(e) => setDonorForm((f) => ({ ...f, donation_amount: e.target.value }))}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className={formLabel}>Date</label>
                  <input
                    type="date"
                    className={formInput}
                    value={donorForm.donation_date}
                    onChange={(e) => setDonorForm((f) => ({ ...f, donation_date: e.target.value }))}
                  />
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <input
                    type="checkbox"
                    id="donor-anonymous"
                    checked={donorForm.is_anonymous}
                    onChange={(e) => setDonorForm((f) => ({ ...f, is_anonymous: e.target.checked }))}
                    className="h-[18px] w-[18px] accent-[#7e22ce]"
                  />
                  <label htmlFor="donor-anonymous" className="cursor-pointer text-sm text-gray-700">
                    Anonymous
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className={formLabel}>Message (optional)</label>
                  <textarea
                    className={`${formInput} min-h-[80px] resize-y`}
                    value={donorForm.message}
                    onChange={(e) => setDonorForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Personal message"
                    rows={2}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg border-0 bg-[#7e22ce] py-2.5 px-4 font-semibold text-white hover:bg-[#6b21a8]"
                  >
                    <i className="fas fa-plus" aria-hidden /> Add donor
                  </button>
                </div>
              </form>
            </div>

            <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-2 flex items-center gap-2 text-base font-semibold text-gray-900">
                <i className="fas fa-list text-[#7e22ce]" aria-hidden /> Bulk add (one name per line)
              </h4>
              <form onSubmit={handleBulkAddDonors} className="space-y-3">
                <textarea
                  className={`${formInput} min-h-[120px] font-mono text-sm`}
                  value={bulkNames}
                  onChange={(e) => setBulkNames(e.target.value)}
                  placeholder="John Smith&#10;Jane Doe&#10;..."
                  rows={5}
                />
                <button
                  type="submit"
                  disabled={bulkSubmitting || !bulkNames.trim()}
                  className="cursor-pointer rounded-lg border-0 bg-[#7e22ce] py-2.5 px-4 font-semibold text-white disabled:opacity-70"
                >
                  {bulkSubmitting ? "Adding…" : "Bulk add donors"}
                </button>
              </form>
            </div>

            <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900">
              <i className="fas fa-users text-[#7e22ce]" aria-hidden /> Current donors
            </h4>
            {donors.length === 0 ? (
              <p className="rounded-lg bg-white py-8 text-center text-gray-500">No donors yet.</p>
            ) : (
              <ul className="space-y-3">
                {donors.map((d, i) => (
                  <li
                    key={d.id}
                    className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5">
                        <button
                          type="button"
                          onClick={() => moveDonor(d.id, "up")}
                          disabled={i === 0}
                          className="rounded p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-40"
                          aria-label="Move up"
                        >
                          <i className="fas fa-arrow-up" aria-hidden />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveDonor(d.id, "down")}
                          disabled={i === donors.length - 1}
                          className="rounded p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-40"
                          aria-label="Move down"
                        >
                          <i className="fas fa-arrow-down" aria-hidden />
                        </button>
                      </div>
                      <div>
                        <h5 className="m-0 font-semibold text-gray-900">
                          {d.is_anonymous ? "Anonymous" : d.donor_name}
                        </h5>
                        {d.donation_amount != null && d.donation_amount > 0 && (
                          <p className="m-0 text-sm font-semibold text-[#7e22ce]">
                            ${Number(d.donation_amount).toFixed(2)}
                          </p>
                        )}
                        {d.message && (
                          <p className="m-0 mt-1 text-sm italic text-gray-600">&quot;{d.message}&quot;</p>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteDonor(d.id)}
                      className="rounded-md border border-red-600 bg-red-600 py-1.5 px-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      <i className="fas fa-trash" aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
