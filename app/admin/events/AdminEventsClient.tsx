"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  eventDate: string;
  eventTime: string;
  baseTimezone: string;
  zoomLink: string | null;
  description: string;
  showOnHomepage: boolean;
  showTimezones: string;
  recordingUrl: string | null;
  eventAt: string;
};

const TIMEZONES = ["Eastern (ET)", "Central (CT)", "Mountain (MT)", "Pacific (PT)"];

function formatDisplayDate(dateStr: string, timeStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  const dayNum = date.getDate();
  const year = date.getFullYear();
  let [h, min] = (timeStr || "17:00").split(":").map(Number);
  const am = h < 12;
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  const time = `${h}:${String(min ?? 0).padStart(2, "0")} ${am ? "AM" : "PM"}`;
  return `${day}, ${month} ${dayNum}, ${year} at ${time}`;
}

function timeToInput(timeStr: string): string {
  if (!timeStr) return "17:00";
  const [h, min] = timeStr.split(":").map(Number);
  return `${String(h ?? 17).padStart(2, "0")}:${String(min ?? 0).padStart(2, "0")}`;
}

function dateToInput(dateStr: string): string {
  if (!dateStr) return "";
  return dateStr;
}

export default function AdminEventsClient() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    eventDate: "",
    eventTime: "17:00",
    baseTimezone: "Eastern (ET)",
    zoomLink: "",
    description: "",
    showOnHomepage: true,
    showET: true,
    showCT: false,
    showMT: false,
    showPT: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Event> | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function fetchEvents() {
    try {
      const res = await fetch("/api/admin/events");
      if (res.status === 401) {
        window.location.href = "/admin?next=/admin/events";
        return;
      }
      const data = await res.json();
      setEvents(data);
    } catch {
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          eventDate: form.eventDate,
          eventTime: form.eventTime,
          baseTimezone: form.baseTimezone,
          zoomLink: form.zoomLink || null,
          description: form.description,
          showOnHomepage: form.showOnHomepage,
          showTimezones: JSON.stringify(
            [form.showET && "ET", form.showCT && "CT", form.showMT && "MT", form.showPT && "PT"].filter(Boolean)
          ),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const created = await res.json();
      setEvents((prev) => [created, ...prev]);
      setForm({ ...form, title: "", eventDate: "", eventTime: "17:00", description: "", zoomLink: "" });
    } catch {
      alert("Failed to add event");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleToggleShow(id: string, showOnHomepage: boolean) {
    try {
      await fetch(`/api/events/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ showOnHomepage }),
      });
      setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, showOnHomepage } : e)));
    } catch {
      alert("Failed to update");
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editingId || !editForm) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/events/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...editForm,
          showTimezones: editForm.showTimezones ?? "[\"ET\"]",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const updated = await res.json();
      setEvents((prev) => prev.map((ev) => (ev.id === editingId ? updated : ev)));
      setEditingId(null);
      setEditForm(null);
    } catch {
      alert("Failed to update event");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this event?")) return;
    try {
      await fetch(`/api/events/${id}`, { method: "DELETE" });
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch {
      alert("Failed to delete");
    }
  }

  function startEdit(ev: Event) {
    setEditingId(ev.id);
    setEditForm({
      title: ev.title,
      eventDate: ev.eventDate,
      eventTime: ev.eventTime,
      baseTimezone: ev.baseTimezone,
      zoomLink: ev.zoomLink,
      description: ev.description,
      showOnHomepage: ev.showOnHomepage,
      showTimezones: ev.showTimezones,
      recordingUrl: ev.recordingUrl,
    });
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin";
  }

  const formInput =
    "w-full py-2.5 px-3 border border-gray-200 rounded-md text-base mb-4 box-border";
  const formLabel = "block font-semibold text-gray-700 mb-1.5 text-sm";
  const checkboxLabel = "inline-flex items-center gap-2 font-medium text-gray-700 mb-2 cursor-pointer";

  if (loading) return <div className="text-center py-8 text-gray-500">Loading…</div>;

  return (
    <div className="max-w-[900px] mx-auto py-8 px-6">
      <header className="flex items-center gap-4 mb-6 flex-wrap">
        <Link href="/" className="text-violet-700 no-underline font-medium hover:underline">
          ← Home
        </Link>
        <h1 className="flex-1 text-2xl font-bold text-gray-800 m-0">Manage Events</h1>
        <button
          type="button"
          className="py-2 px-4 bg-transparent border border-gray-200 rounded-md text-gray-500 text-sm cursor-pointer hover:bg-gray-100 hover:text-gray-700"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </header>

      <div className="flex gap-0 mb-6 border-b-2 border-gray-200">
        <div className="py-3 px-5 font-semibold text-sm text-violet-700 border-b-2 border-b-violet-700 -mb-0.5">
          Events
        </div>
        <Link
          href="/admin/education-videos"
          className="py-3 px-5 font-semibold text-sm text-gray-500 border-b-2 border-transparent -mb-0.5 no-underline hover:text-gray-700"
        >
          Education Videos
        </Link>
        <Link
          href="/admin/tributes"
          className="py-3 px-5 font-semibold text-sm text-gray-500 border-b-2 border-transparent -mb-0.5 no-underline hover:text-gray-700"
        >
          Tributes
        </Link>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-[1.1rem] font-bold text-gray-800 m-0 mb-2 uppercase tracking-wide">
              {ev.title}
            </h2>
            <p className="text-sm text-gray-500 m-0 mb-3">{formatDisplayDate(ev.eventDate, ev.eventTime)}</p>
            <p className="text-sm text-gray-600 m-0 mb-4 leading-snug">{ev.description}</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <span>Show on Homepage</span>
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={ev.showOnHomepage}
                  onChange={(e) => handleToggleShow(ev.id, e.target.checked)}
                />
                <span className="w-11 h-6 bg-gray-200 rounded-xl relative transition-colors duration-200 peer-checked:bg-violet-700 after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:shadow-[0_1px_3px_rgba(0,0,0,0.2)] after:transition-transform after:duration-200 peer-checked:after:translate-x-5" />
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-blue-500 text-blue-600 bg-white hover:bg-blue-50"
                  onClick={() => startEdit(ev)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-red-600 text-red-600 bg-white hover:bg-red-50"
                  onClick={() => handleDelete(ev.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <h2 className="text-xl font-bold text-violet-700 m-0 mb-4 flex items-center gap-2">
          Add New Event
        </h2>
        <form onSubmit={handleAdd}>
          <label className={formLabel}>Event Title *</label>
          <input
            className={formInput}
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Enter event title."
            required
          />
          <label className={formLabel}>Event Date *</label>
          <input
            type="date"
            className={formInput}
            value={form.eventDate}
            onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
            required
          />
          <label className={formLabel}>Event Time *</label>
          <input
            type="time"
            className={formInput}
            value={form.eventTime}
            onChange={(e) => setForm((f) => ({ ...f, eventTime: e.target.value }))}
            required
          />
          <label className={formLabel}>Base Timezone *</label>
          <select
            className={formInput}
            value={form.baseTimezone}
            onChange={(e) => setForm((f) => ({ ...f, baseTimezone: e.target.value }))}
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
          <label className={formLabel}>Zoom Registration Link *</label>
          <input
            type="url"
            className={formInput}
            value={form.zoomLink}
            onChange={(e) => setForm((f) => ({ ...f, zoomLink: e.target.value }))}
            placeholder="https://zoom.us/meeting/register/..."
          />
          <label className={formLabel}>Event Description *</label>
          <textarea
            className={`${formInput} min-h-[100px] resize-y`}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            placeholder="Brief description of the event."
            rows={4}
            required
          />
          <label className={checkboxLabel}>
            <input
              type="checkbox"
              checked={form.showOnHomepage}
              onChange={(e) => setForm((f) => ({ ...f, showOnHomepage: e.target.checked }))}
            />
            Display on Homepage
          </label>
          <div className="my-4">
            <span className="block font-semibold text-gray-700 mb-2">Show timezones:</span>
            {[
              { key: "showET", label: "ET (Eastern Time)" },
              { key: "showCT", label: "CT (Central Time)" },
              { key: "showMT", label: "MT (Mountain Time)" },
              { key: "showPT", label: "PT (Pacific Time)" },
            ].map(({ key, label }) => (
              <label key={key} className="inline-flex items-center gap-2 font-medium text-gray-700 mb-1.5 mr-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form[key as keyof typeof form] as boolean}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.checked }))}
                />
                {label}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-bold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            + Add Event
          </button>
        </form>
      </section>

      {editingId && editForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
          onClick={() => { setEditingId(null); setEditForm(null); }}
        >
          <div
            className="bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-6 max-w-[500px] w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="m-0 mb-4 text-xl text-gray-800">Edit Event</h3>
            <form onSubmit={handleUpdate}>
              <label className={formLabel}>Event Title *</label>
              <input
                className={formInput}
                value={editForm.title ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                required
              />
              <label className={formLabel}>Event Date *</label>
              <input
                type="date"
                className={formInput}
                value={dateToInput(editForm.eventDate ?? "")}
                onChange={(e) => setEditForm((f) => ({ ...f, eventDate: e.target.value }))}
                required
              />
              <label className={formLabel}>Event Time *</label>
              <input
                type="time"
                className={formInput}
                value={timeToInput(editForm.eventTime ?? "")}
                onChange={(e) => setEditForm((f) => ({ ...f, eventTime: e.target.value }))}
                required
              />
              <label className={formLabel}>Base Timezone *</label>
              <select
                className={formInput}
                value={editForm.baseTimezone ?? "Eastern (ET)"}
                onChange={(e) => setEditForm((f) => ({ ...f, baseTimezone: e.target.value }))}
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </select>
              <label className={formLabel}>Zoom Registration Link</label>
              <input
                type="url"
                className={formInput}
                value={editForm.zoomLink ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, zoomLink: e.target.value }))}
              />
              <label className={formLabel}>Event Description *</label>
              <textarea
                className={formInput}
                value={editForm.description ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                rows={4}
                required
              />
              <label className={checkboxLabel}>
                <input
                  type="checkbox"
                  checked={editForm.showOnHomepage ?? true}
                  onChange={(e) => setEditForm((f) => ({ ...f, showOnHomepage: e.target.checked }))}
                />
                Display on Homepage
              </label>
              <label className={formLabel}>Recording URL (after event)</label>
              <input
                type="url"
                className={formInput}
                value={editForm.recordingUrl ?? ""}
                onChange={(e) => setEditForm((f) => ({ ...f, recordingUrl: e.target.value || null }))}
                placeholder="Video link when available"
              />
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  onClick={() => { setEditingId(null); setEditForm(null); }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 rounded-md text-sm font-medium cursor-pointer bg-violet-700 border border-violet-700 text-white hover:bg-violet-800 hover:border-violet-800 disabled:opacity-70"
                  disabled={submitting}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
