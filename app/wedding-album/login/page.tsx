"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setPending(true);
    try {
      const res = await fetch("/api/wedding-album/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setError(data.error ?? "Login failed");
        return;
      }
      const raw = searchParams.get("from") ?? "/wedding-album";
      const target =
        raw.startsWith("/wedding-album") &&
        !raw.startsWith("/wedding-album/login")
          ? raw
          : "/wedding-album";
      router.push(target);
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-sm flex-col gap-5 rounded-lg border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm"
    >
      <div>
        <h1 className="text-lg font-medium text-white">Wedding Album</h1>
        <p className="mt-1 text-sm text-white/50">Enter password to view images.</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="album-password" className="text-sm text-white/70">
          Password
        </label>
        <input
          id="album-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-white/15 bg-black/40 px-3 py-2.5 text-white outline-none ring-white/20 placeholder:text-white/30 focus:border-white/30 focus:ring-2"
          placeholder="•••••••"
          required
        />
      </div>
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-white/90 py-2.5 text-sm font-medium text-[#0f0f0f] transition hover:bg-white disabled:opacity-50"
      >
        {pending ? "Checking…" : "View album"}
      </button>
    </form>
  );
}

export default function WeddingAlbumLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f0f0f] px-4 py-16">
      <Suspense
        fallback={
          <div className="h-40 w-full max-w-sm animate-pulse rounded-lg bg-white/5" />
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
