"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

export default function FinalCTA({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          badge: "Prêt ?",
          title: "Prêt à kiffer Yiroplay ?",
          sub: "Découvre des sons, soutiens les artistes, et profite d’une expérience premium.",
          cta1: "Écouter maintenant",
          cta2: "Contact",
          micro: "Yiroplay — Le son d’Afrique, proprement.",
          trust: ["Sans pub (Premium)", "Mobile & Desktop", "Rapide & moderne"],
        }
      : {
          badge: "Ready?",
          title: "Ready to enjoy Yiroplay?",
          sub: "Discover sounds, support artists, and enjoy a premium experience.",
          cta1: "Listen now",
          cta2: "Contact",
          micro: "Yiroplay — Africa’s sound, clean.",
          trust: ["Ad-free (Premium)", "Mobile & Desktop", "Fast & modern"],
        };

  return (
    <section className="mx-auto max-w-6xl px-4 py-0">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl md:p-14">
        {/* luxury hairlines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--yiro-green)]/35 to-transparent" />

        {/* spotlight / blobs */}
        <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[color:var(--yiro-green)]/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(var(--yiro-green-rgb),0.18),transparent_60%)]" />

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--yiro-green)]" />
          {t.badge}
        </div>

        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
          {t.title}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/65">{t.sub}</p>

        {/* trust chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {t.trust.map((x) => (
            <span
              key={x}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {x}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="https://yiroplay.com"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[color:var(--yiro-green)] px-8 py-3 text-sm font-semibold text-black shadow-[0_18px_55px_rgba(var(--yiro-green-rgb),0.22)] transition hover:translate-y-[-1px] hover:brightness-110 active:translate-y-[0px]"
          >
            {/* shine */}
            <span className="pointer-events-none absolute -left-24 top-0 h-full w-16 rotate-12 bg-white/45 blur-md opacity-0 transition-all duration-500 group-hover:translate-x-[280px] group-hover:opacity-100" />
            {t.cta1}
            <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            {t.cta2}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-7 text-xs text-white/50"
        >
          {t.micro}
        </motion.div>
      </div>
    </section>
  );
}
