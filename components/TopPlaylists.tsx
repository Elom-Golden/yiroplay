"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = { locale: "fr" | "en" };

const DATA = {
  fr: {
    title: "Top playlists",
    subtitle:
      "Des sélections propres, rapides à explorer — comme Spotify, mais version Yiroplay.",
    cta: "Voir toutes les playlists",
    items: [
      { name: "Afrobeat Heat", tag: "Trending", desc: "Énergie • Hits" },
      { name: "Rap FR Afrique", tag: "Hot", desc: "Flow • Rue" },
      { name: "Gospel & Louange", tag: "Peace", desc: "Calme • Foi" },
      { name: "Amapiano Night", tag: "Vibes", desc: "Groove • Party" },
      { name: "Coupé Décalé", tag: "Classic", desc: "Ambiance • 225" },
      { name: "Rumba RDC", tag: "Legend", desc: "Danse • Love" },
    ],
    updated: "Mis à jour chaque semaine",
  },
  en: {
    title: "Top playlists",
    subtitle:
      "Clean picks, quick to explore — Spotify vibe, but Yiroplay edition.",
    cta: "See all playlists",
    items: [
      { name: "Afrobeat Heat", tag: "Trending", desc: "Energy • Hits" },
      { name: "Francophone Rap", tag: "Hot", desc: "Flow • Street" },
      { name: "Gospel & Worship", tag: "Peace", desc: "Calm • Faith" },
      { name: "Amapiano Night", tag: "Vibes", desc: "Groove • Party" },
      { name: "Coupé-Décalé", tag: "Classic", desc: "Mood • 225" },
      { name: "Rumba DRC", tag: "Legend", desc: "Dance • Love" },
    ],
    updated: "Updated weekly",
  },
};

export default function TopPlaylists({ locale }: Props) {
  const t = DATA[locale];

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-4 pb-2 md:pt-2 md:pb-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-white/65">{t.subtitle}</p>
        </div>

        <Link
          href={`/${locale}/artists`}
          className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
        >
          {t.cta} <span className="ml-2">→</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.items.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            {/* hover glow */}
              <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)]" />

            <div className="flex items-start justify-between">
              
            <div className="h-14 w-14 rounded-2xl bg-[color:var(--yiro-green)]/20 ring-1 ring-white/10" />

              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                {p.tag}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold text-white/90">{p.name}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-white/45">{t.updated}</span>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--yiro-green)] text-black shadow-[0_0_26px_rgba(var(--yiro-green-rgb),0.30)] transition group-hover:shadow-[0_0_40px_rgba(var(--yiro-green-rgb),0.40)]"
                aria-label="Play"
              >
                ▶
              </motion.button>
            </div>

            {/* micro border */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
