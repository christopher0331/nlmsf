"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Entry = {
  id: string;
  type: string;
  title: string;
  summary: string;
  url: string;
  manualDate: string;
  featured: boolean;
};

function today(): string {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function AdminCommunityNewsClient() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState<"snapshot_added" | "newsletter_added" | "missing_fields" | "error" | null>(null);
  const [snapshotForm, setSnapshotForm] = useState({
    title: "",
    summary: "",
    url: "",
    manualDate: today(),
  });
  const [newsletterForm, setNewsletterForm] = useState({
    title: "",
    summary: "",
    url: "",
    manualDate: today(),
  });
  const [submitting, setSubmitting] = useState<"snapshot" | "newsletter" | null>(null);
  const [editingUrlId, setEditingUrlId] = useState<string | null>(null);
  const [editingUrlValue, setEditingUrlValue] = useState("");

  async function fetchEntries() {
    try {
      const res = await fetch("/api/admin/community-news");
      if (res.status === 401) {
        window.location.href = "/admin?next=/admin/community-news";
        return;
      }
      const data = await res.json();
      setEntries(data);
    } catch {
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  async function handleAddSnapshot(e: React.FormEvent) {
    e.preventDefault();
    const { title, summary, url, manualDate } = snapshotForm;
    if (!title.trim() || !summary.trim() || !url.trim() || !manualDate.trim()) {
      setNotice("missing_fields");
      return;
    }
    setSubmitting("snapshot");
    setNotice(null);
    try {
      const res = await fetch("/api/admin/community-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "snapshot",
          title: title.trim(),
          summary: summary.trim(),
          url: url.trim(),
          manualDate: manualDate.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setEntries((prev) => [created, ...prev]);
      setNotice("snapshot_added");
      setSnapshotForm({ title: "", summary: "", url: "", manualDate: today() });
    } catch {
      setNotice("error");
    } finally {
      setSubmitting(null);
    }
  }

  async function handleAddNewsletter(e: React.FormEvent) {
    e.preventDefault();
    const { title, summary, url, manualDate } = newsletterForm;
    if (!title.trim() || !summary.trim() || !url.trim() || !manualDate.trim()) {
      setNotice("missing_fields");
      return;
    }
    setSubmitting("newsletter");
    setNotice(null);
    try {
      const res = await fetch("/api/admin/community-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "news_tracker",
          title: title.trim(),
          summary: summary.trim(),
          url: url.trim(),
          manualDate: manualDate.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setEntries((prev) => [created, ...prev]);
      setNotice("newsletter_added");
      setNewsletterForm({ title: "", summary: "", url: "", manualDate: today() });
    } catch {
      setNotice("error");
    } finally {
      setSubmitting(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this entry?")) return;
    try {
      await fetch(`/api/community-news/${id}`, { method: "DELETE" });
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } catch {
      alert("Failed to delete");
    }
  }

  function startEditUrl(entry: Entry) {
    setEditingUrlId(entry.id);
    setEditingUrlValue(entry.url);
  }

  function cancelEditUrl() {
    setEditingUrlId(null);
    setEditingUrlValue("");
  }

  async function saveEditUrl() {
    if (!editingUrlId || !editingUrlValue.trim()) return;
    try {
      const res = await fetch(`/api/community-news/${editingUrlId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: editingUrlValue.trim() }),
      });
      if (!res.ok) throw new Error("Failed");
      const updated = await res.json();
      setEntries((prev) => prev.map((e) => (e.id === editingUrlId ? { ...e, url: updated.url } : e)));
      cancelEditUrl();
    } catch {
      alert("Failed to update URL");
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  const noticeMessages: Record<string, string> = {
    snapshot_added: "Snapshot published successfully.",
    newsletter_added: "News Tracker issue published successfully.",
    missing_fields: "Please complete all required fields.",
    error: "Something went wrong. Please try again.",
  };

  const formInput = "w-full max-w-[400px] py-2 px-3 border border-gray-200 rounded-md text-base box-border";
  const formRow = "border-collapse table w-full mb-4";

  if (loading) return <div className="text-center py-8 text-gray-500">Loading…</div>;

  return (
    <div className="max-w-[900px] mx-auto py-8 px-6">
      <header className="flex items-center gap-4 mb-6 flex-wrap">
        <Link href="/" className="text-violet-700 no-underline font-medium hover:underline">
          ← Home
        </Link>
        <h1 className="flex-1 text-2xl font-bold text-gray-800 m-0">Community News</h1>
        <button
          type="button"
          className="py-2 px-4 bg-transparent border border-gray-200 rounded-md text-gray-500 text-sm cursor-pointer hover:bg-gray-100 hover:text-gray-700"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </header>

      {notice && (
        <div className="py-3 px-4 rounded-lg my-4 bg-green-100 border border-green-300 text-green-800">
          <p className="m-0 text-[0.95rem]">{noticeMessages[notice] ?? notice}</p>
        </div>
      )}

      <div className="grid gap-6 my-6 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
          <h2 className="m-0 mb-4 text-xl text-gray-800">Quick Add Snapshot</h2>
          <form onSubmit={handleAddSnapshot} className="w-full mb-4 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:py-2 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-gray-700 [&_th]:align-top [&_td]:py-2 [&_td]:p-0">
            <table className={formRow}>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="snapshot_title">Title</label></th>
                  <td>
                    <input
                      type="text"
                      id="snapshot_title"
                      name="snapshot_title"
                      className={formInput}
                      value={snapshotForm.title}
                      onChange={(e) => setSnapshotForm((f) => ({ ...f, title: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="snapshot_summary">Overview</label></th>
                  <td>
                    <textarea
                      id="snapshot_summary"
                      name="snapshot_summary"
                      className="w-full max-w-[500px] py-2 px-3 border border-gray-200 rounded-md text-base min-h-[100px] resize-y box-border"
                      rows={4}
                      value={snapshotForm.summary}
                      onChange={(e) => setSnapshotForm((f) => ({ ...f, summary: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="snapshot_url">Link URL</label></th>
                  <td>
                    <input
                      type="url"
                      id="snapshot_url"
                      name="snapshot_url"
                      className={formInput}
                      placeholder="https://"
                      value={snapshotForm.url}
                      onChange={(e) => setSnapshotForm((f) => ({ ...f, url: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="snapshot_date">Date</label></th>
                  <td>
                    <input
                      type="date"
                      id="snapshot_date"
                      name="snapshot_date"
                      className={formInput}
                      value={snapshotForm.manualDate}
                      onChange={(e) => setSnapshotForm((f) => ({ ...f, manualDate: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-semibold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={submitting === "snapshot"}
            >
              {submitting === "snapshot" ? "Publishing…" : "Publish Snapshot"}
            </button>
          </form>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
          <h2 className="m-0 mb-4 text-xl text-gray-800">Quick Add News Tracker Issue</h2>
          <form onSubmit={handleAddNewsletter} className="w-full mb-4 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:py-2 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-gray-700 [&_th]:align-top [&_td]:py-2 [&_td]:p-0">
            <table className={formRow}>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="newsletter_title">Title</label></th>
                  <td>
                    <input
                      type="text"
                      id="newsletter_title"
                      name="newsletter_title"
                      className={formInput}
                      value={newsletterForm.title}
                      onChange={(e) => setNewsletterForm((f) => ({ ...f, title: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="newsletter_summary">Overview</label></th>
                  <td>
                    <textarea
                      id="newsletter_summary"
                      name="newsletter_summary"
                      className="w-full max-w-[500px] py-2 px-3 border border-gray-200 rounded-md text-base min-h-[100px] resize-y box-border"
                      rows={4}
                      value={newsletterForm.summary}
                      onChange={(e) => setNewsletterForm((f) => ({ ...f, summary: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="newsletter_url">Link URL</label></th>
                  <td>
                    <input
                      type="url"
                      id="newsletter_url"
                      name="newsletter_url"
                      className={formInput}
                      placeholder="https://"
                      value={newsletterForm.url}
                      onChange={(e) => setNewsletterForm((f) => ({ ...f, url: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="newsletter_date">Date</label></th>
                  <td>
                    <input
                      type="date"
                      id="newsletter_date"
                      name="newsletter_date"
                      className={formInput}
                      value={newsletterForm.manualDate}
                      onChange={(e) => setNewsletterForm((f) => ({ ...f, manualDate: e.target.value }))}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-semibold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={submitting === "newsletter"}
            >
              {submitting === "newsletter" ? "Publishing…" : "Publish News Tracker Issue"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 bg-indigo-50 rounded-2xl p-6">
        <h2 className="m-0 mb-2 text-lg text-gray-800">Embedding</h2>
        <p className="m-0 text-gray-700">
          The <strong>Recent Update</strong> block on the homepage shows the latest Snapshot and the latest News Tracker issue automatically. No shortcodes needed.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 m-0 mb-2">Recent entries</h2>
        {entries.length === 0 ? (
          <p className="text-gray-500 p-4 m-0">
            No Community News entries yet. Use the forms above to add Snapshots or News Tracker issues.
          </p>
        ) : (
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] flex justify-between items-start gap-4 flex-wrap"
              >
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">
                    {entry.type === "snapshot" ? "Snapshot" : "Newsletter"}
                  </span>
                  <h3 className="text-[1.1rem] font-bold text-gray-800 m-0 mb-2 uppercase tracking-wide">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 m-0">{entry.manualDate}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  {editingUrlId === entry.id ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="url"
                        className="min-w-[200px] flex-1 py-2 px-3 border border-gray-300 rounded-md text-sm"
                        value={editingUrlValue}
                        onChange={(e) => setEditingUrlValue(e.target.value)}
                        placeholder="https://"
                      />
                      <button
                        type="button"
                        className="py-2 px-3 rounded-md text-sm font-medium cursor-pointer border border-green-600 text-green-700 bg-white hover:bg-green-50"
                        onClick={saveEditUrl}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 rounded-md text-sm font-medium cursor-pointer border border-gray-400 text-gray-600 bg-white hover:bg-gray-50"
                        onClick={cancelEditUrl}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 rounded-md text-sm font-medium no-underline border border-blue-500 text-blue-600 bg-white hover:bg-blue-50"
                      >
                        View
                      </a>
                      <button
                        type="button"
                        className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-amber-600 text-amber-700 bg-white hover:bg-amber-50"
                        onClick={() => startEditUrl(entry)}
                      >
                        Edit URL
                      </button>
                      <button
                        type="button"
                        className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-red-600 text-red-600 bg-white hover:bg-red-50"
                        onClick={() => handleDelete(entry.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
