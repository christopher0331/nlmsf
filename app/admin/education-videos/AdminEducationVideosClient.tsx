"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Video = {
  id: string;
  title: string;
  category: string;
  youtubeUrl: string;
  duration: string;
  description: string;
  featured: boolean;
  createdAt: string;
};

const CATEGORIES = [
  { value: "patient-education", label: "Patient Education" },
  { value: "medical-research", label: "Medical Research" },
  { value: "caregiver-support", label: "Caregiver Support" },
  { value: "webinars", label: "Webinars" },
];

export default function AdminEducationVideosClient() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    category: "patient-education",
    youtubeUrl: "",
    duration: "0:00",
    description: "",
    featured: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Video> | null>(null);

  async function fetchVideos() {
    try {
      const res = await fetch("/api/admin/education-videos");
      if (res.status === 401) {
        window.location.href = "/admin?next=/admin/education-videos";
        return;
      }
      const data = await res.json();
      setVideos(data);
    } catch {
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.youtubeUrl.trim()) {
      alert("Title and YouTube URL are required.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/education-videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title.trim(),
          category: form.category,
          youtubeUrl: form.youtubeUrl.trim(),
          duration: form.duration.trim() || "0:00",
          description: form.description.trim(),
          featured: form.featured,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setVideos((prev) => [created, ...prev]);
      setForm({
        title: "",
        category: "patient-education",
        youtubeUrl: "",
        duration: "0:00",
        description: "",
        featured: false,
      });
    } catch {
      alert("Failed to add video.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editingId || !editForm) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/education-videos/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error("Failed");
      const updated = await res.json();
      setVideos((prev) => prev.map((v) => (v.id === editingId ? updated : v)));
      setEditingId(null);
      setEditForm(null);
    } catch {
      alert("Failed to update video.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this video?")) return;
    try {
      await fetch(`/api/education-videos/${id}`, { method: "DELETE" });
      setVideos((prev) => prev.filter((v) => v.id !== id));
    } catch {
      alert("Failed to delete.");
    }
  }

  function getCategoryLabel(value: string) {
    return CATEGORIES.find((c) => c.value === value)?.label ?? value;
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  const formInput = "w-full py-2.5 px-3 border border-gray-200 rounded-md text-base mb-4 box-border";
  const formLabel = "block font-semibold text-gray-700 mb-1.5 text-sm";

  if (loading) return <div className="text-center py-8 text-gray-500">Loading…</div>;

  return (
    <div className="max-w-[900px] mx-auto py-8 px-6">
      <header className="flex items-center gap-4 mb-6 flex-wrap">
        <Link href="/" className="text-violet-700 no-underline font-medium hover:underline">
          ← Home
        </Link>
        <h1 className="flex-1 text-2xl font-bold text-gray-800 m-0">Education Videos</h1>
        <button
          type="button"
          className="py-2 px-4 bg-transparent border border-gray-200 rounded-md text-gray-500 text-sm cursor-pointer hover:bg-gray-100 hover:text-gray-700"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </header>

      <div className="flex gap-0 mb-6 border-b-2 border-gray-200">
        <Link
          href="/admin/events"
          className="py-3 px-5 font-semibold text-sm text-gray-500 border-b-2 border-transparent -mb-0.5 no-underline hover:text-gray-700"
        >
          Events
        </Link>
        <div className="py-3 px-5 font-semibold text-sm text-violet-700 border-b-2 border-b-violet-700 -mb-0.5">
          Education Videos
        </div>
        <Link
          href="/admin/tributes"
          className="py-3 px-5 font-semibold text-sm text-gray-500 border-b-2 border-transparent -mb-0.5 no-underline hover:text-gray-700"
        >
          Tributes
        </Link>
      </div>

      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] mb-8">
        <h2 className="text-xl font-bold text-violet-700 m-0 mb-4 flex items-center gap-2">Add New Video</h2>
        <form onSubmit={handleAdd}>
          <label className={formLabel}>Title *</label>
          <input
            className={formInput}
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Video title"
            required
          />
          <label className={formLabel}>Category *</label>
          <select
            className={formInput}
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <label className={formLabel}>YouTube URL *</label>
          <input
            type="url"
            className={formInput}
            value={form.youtubeUrl}
            onChange={(e) => setForm((f) => ({ ...f, youtubeUrl: e.target.value }))}
            placeholder="https://youtube.com/watch?v=… or https://youtu.be/…"
            required
          />
          <label className={formLabel}>Duration (e.g. 19:32)</label>
          <input
            className={formInput}
            value={form.duration}
            onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            placeholder="0:00"
          />
          <label className={formLabel}>Description</label>
          <textarea
            className={`${formInput} min-h-[100px] resize-y`}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            placeholder="Short description"
            rows={3}
          />
          <label className="inline-flex items-center gap-2 font-medium text-gray-700 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
            />
            Featured
          </label>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-semibold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? "Adding…" : "Add Video"}
          </button>
        </form>
      </section>

      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 m-0 mb-2">Videos</h2>
        {videos.length === 0 ? (
          <p className="text-gray-500 p-4 m-0">
            No videos yet. Add one above. They will appear on the{" "}
            <Link href="/education-videos" className="text-violet-700 underline">Education Videos</Link> page.
          </p>
        ) : (
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            {videos.map((video) => (
              <li
                key={video.id}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] flex justify-between items-start gap-4 flex-wrap"
              >
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">
                    {getCategoryLabel(video.category)}
                  </span>
                  <h3 className="text-[1.1rem] font-bold text-gray-800 m-0 mb-2 uppercase tracking-wide">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 m-0">
                    {video.duration}
                    {video.featured && " · Featured"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-md text-sm font-medium no-underline border border-blue-500 text-blue-600 bg-white hover:bg-blue-50"
                  >
                    View
                  </a>
                  <button
                    type="button"
                    className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-blue-500 text-blue-600 bg-white hover:bg-blue-50"
                    onClick={() => {
                      setEditingId(video.id);
                      setEditForm({
                        title: video.title,
                        category: video.category,
                        youtubeUrl: video.youtubeUrl,
                        duration: video.duration,
                        description: video.description,
                        featured: video.featured,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-red-600 text-red-600 bg-white hover:bg-red-50"
                    onClick={() => handleDelete(video.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {editingId && editForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-6 max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
            <h3 className="m-0 mb-4 text-xl text-gray-800">Edit Video</h3>
            <form onSubmit={handleUpdate} className="mt-4">
              <label className={formLabel}>Title *</label>
              <input
                className={formInput}
                value={editForm.title ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                required
              />
              <label className={formLabel}>Category *</label>
              <select
                className={formInput}
                value={editForm.category ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, category: e.target.value }))}
              >
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              <label className={formLabel}>YouTube URL *</label>
              <input
                type="url"
                className={formInput}
                value={editForm.youtubeUrl ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, youtubeUrl: e.target.value }))}
                required
              />
              <label className={formLabel}>Duration</label>
              <input
                className={formInput}
                value={editForm.duration ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, duration: e.target.value }))}
              />
              <label className={formLabel}>Description</label>
              <textarea
                className={formInput}
                value={editForm.description ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                rows={3}
              />
              <label className="inline-flex items-center gap-2 font-medium text-gray-700 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editForm.featured ?? false}
                  onChange={(e) => setEditForm((f) => ({ ...f, featured: e.target.checked }))}
                />
                Featured
              </label>
              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-semibold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={submitting}
                >
                  {submitting ? "Saving…" : "Save"}
                </button>
                <button
                  type="button"
                  className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setEditingId(null);
                    setEditForm(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
