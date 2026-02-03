"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/admin/events";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Invalid password");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 max-w-[400px] w-full">
        <h1 className="text-2xl font-bold text-violet-700 m-0 mb-2">Admin Login</h1>
        <p className="text-gray-500 mb-6 text-[0.95rem]">Enter password to manage events.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-password" className="block font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3 px-4 border border-gray-200 rounded-lg text-base mb-4 box-border"
            placeholder="Password"
            autoFocus
            required
          />
          {error && <p className="text-red-600 text-sm -mt-2 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-br from-violet-700 to-violet-600 text-white border-0 rounded-lg font-semibold text-base cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-8"><div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 max-w-[400px] w-full">Loading…</div></div>}>
      <AdminLoginForm />
    </Suspense>
  );
}
