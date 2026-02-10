"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { artists } from "./data";

type Locale = "fr" | "en";

export default function ArtistsPage() {
  const params = useParams(); // Next 16: params côté client
  const locale: Locale = params?.locale === "en" ? "en" : "fr";

  const t =
    locale === "fr"
      ? {
          badge: "Catalogue",
          title: "Artistes",
          sub: "Découvre les talents d’Afrique de l’Ouest et Centrale avec une vitrine premium.",
          search: "Rechercher un artiste…",
          filter: "Filtrer",
          all: "Tous",
          cta: "Ouvrir",
        }
      : {
          badge: "Catalog",
          title: "Artists",
          sub: "Discover West & Central African talent with a premium showcase.",
          search: "Search an artist…",
          filter: "Filter",
          all: "All",
          cta: "Open",
        };

  const [q, setQ] = useState("");
  const [country, setCountry] = useState<string>("ALL");

  const countries = useMemo(() => {
    const set = new Set(artists.map((a) => a.country));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return artists.filter((a) => {
      const matchesQuery =
        !query ||
        a.name.toLowerCase().includes(query) ||
        a.genre.toLowerCase().includes(query) ||
        a.country.toLowerCase().includes(query);

      const matchesCountry = country === "ALL" ? true : a.country === country;

      return matchesQuery && matchesCountry;
    });
  }, [q, country]);

  return (
    <main className="mx-auto max-w-6xl px-6 pt-20 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--yiro-green)]" />
            {t.badge}
          </div>

          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-2xl text-white/65">{t.sub}</p>
        </div>

        {/* Controls */}
        <div className="flex w-full flex-col gap-3 md:w-[420px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.search}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90 placeholder:text-white/35 backdrop-blur outline-none focus-visible:shadow-[0_0_0_6px_rgba(var(--yiro-green-rgb),0.18)]"
          />
          <div className="flex gap-3">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur outline-none"
            >
              {countries.map((c) => (
                <option key={c} value={c} className="bg-[#111]">
                  {c === "ALL" ? t.all : c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/artists/${a.slug}`}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.16),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/70">
                {a.country}
              </span>
              {a.verified && (
                <span className="rounded-full border border-[color:var(--yiro-green)]/30 bg-[color:var(--yiro-green)]/12 px-3 py-1 text-[11px] text-white/85">
                  Verified
                </span>
              )}
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black/25 ring-1 ring-white/10">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-contain p-3 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(var(--yiro-green-rgb),0.22),transparent_65%)] opacity-70" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-extrabold text-white">
                  {a.name}
                </div>
                <div className="truncate text-sm text-white/60">{a.genre}</div>
              </div>
            </div>

            <div className="mt-6 h-px bg-white/10" />

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-white/45">
                {locale === "fr" ? "Auditeurs/mois" : "Monthly listeners"}
                {" · "}
                <span className="text-white/70">{a.monthlyListeners}</span>
              </div>
              <span className="text-sm text-[color:var(--yiro-green)] transition group-hover:translate-x-0.5">
                {t.cta} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
