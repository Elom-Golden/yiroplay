"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = { locale: "fr" | "en" };

const DATA = {
  fr: {
    badge: "Sélection",
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
    badge: "Selection",
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

function MiniEQ() {
  return (
    <div className="flex h-5 items-end gap-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-white/70"
          initial={{ height: 5 }}
          animate={{ height: [5, 14, 7, 16, 6, 12] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.06,
            ease: "easeInOut",
          }}
          style={{ opacity: 0.25 + i * 0.07 }}
        />
      ))}
    </div>
  );
}

export default function TopPlaylists({ locale }: Props) {
  const t = DATA[locale];

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-0">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--yiro-green)]" />
            {t.badge}
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-white/65">{t.subtitle}</p>
        </div>

        <Link
          href={`/${locale}/playlists`}
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
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
          >
            {/* hover glow */}
            <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)]" />

            {/* micro border top */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="flex items-start justify-between">
              {/* cover */}
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(var(--yiro-green-rgb),0.35),transparent_65%)]" />
                <div className="absolute inset-0 bg-white/5" />
              </div>

              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                {p.tag}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold text-white/90">{p.name}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="space-y-1">
                <span className="block text-xs text-white/45">{t.updated}</span>
                <MiniEQ />
              </div>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--yiro-green)] text-black shadow-[0_0_26px_rgba(var(--yiro-green-rgb),0.30)] transition group-hover:shadow-[0_0_40px_rgba(var(--yiro-green-rgb),0.40)]"
                aria-label="Play"
              >
                ▶
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
