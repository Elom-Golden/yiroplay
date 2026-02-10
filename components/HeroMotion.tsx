"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = { locale: "fr" | "en" };

const COPY = {
  fr: {
    pill: "Streaming musical Afrique",
    title1: "La musique",
    titleAccent: "d’Afrique",
    title2: "dans ta",
    title3: "poche.",
    desc:
      "Yiroplay connecte les fans aux artistes d’Afrique de l’Ouest et Centrale. Découvre, écoute, soutiens — avec une expérience premium, rapide et moderne.",
    ctaPrimary: "Écouter maintenant",
    ctaSecondary: "Voir les offres",
    chips: ["Rapide", "Sans pub (Premium)", "Playlists", "Découvertes"],
    stats: [
      { value: "100K+", label: "écoutes / mois (objectif)" },
      { value: "1K+", label: "artistes (vision)" },
      { value: "20+", label: "pays ciblés" },
    ],
    mockTitle: "Lecture en cours",
    mockTag: "Hi-Fi",
    tracks: [
      { title: "Top Afrobeat", sub: "Playlist • Sélection" },
      { title: "Rap Francophone", sub: "Mix • Tendances" },
      { title: "Gospel & Louange", sub: "Ambiance • Calme" },
    ],
  },
  en: {
    pill: "Africa music streaming",
    title1: "African",
    titleAccent: "music",
    title2: "in your",
    title3: "pocket.",
    desc:
      "Yiroplay connects fans with artists from West & Central Africa. Discover, listen, support — with a premium, fast, modern experience.",
    ctaPrimary: "Listen now",
    ctaSecondary: "See plans",
    chips: ["Fast", "No ads (Premium)", "Playlists", "Discover"],
    stats: [
      { value: "100K+", label: "listens / month (goal)" },
      { value: "1K+", label: "artists (vision)" },
      { value: "20+", label: "target countries" },
    ],
    mockTitle: "Now playing",
    mockTag: "Hi-Fi",
    tracks: [
      { title: "Top Afrobeat", sub: "Playlist • Curated" },
      { title: "Francophone Rap", sub: "Mix • Trending" },
      { title: "Gospel & Worship", sub: "Mood • Calm" },
    ],
  },
};

function Wave() {
  return (
    <div className="flex h-8 items-end gap-1">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-white/55"
          initial={{ height: 6 }}
          animate={{ height: [6, 18, 10, 22, 8, 16] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.04,
            ease: "easeInOut",
          }}
          style={{
            opacity: 0.35 + (i % 5) * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroMotion({ locale }: Props) {
  const t = COPY[locale];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.22 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.22 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-11, 11]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -9]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="relative isolate overflow-hidden">
      {/* Cinematic background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_30%,rgba(var(--yiro-green-rgb),0.12),transparent_55%)]" />

        {/* mesh blur blobs */}
        <div className="absolute -top-48 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[color:var(--yiro-green)]/10 blur-[110px]" />
        <div className="absolute -bottom-56 right-[-200px] h-[560px] w-[560px] rounded-full bg-[color:var(--yiro-green)]/10 blur-[130px]" />

        {/* premium noise */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('/noise.jpg')] bg-repeat" />

        {/* subtle grid (less aggressive) */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-4 md:pt-12 md:pb-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[color:var(--yiro-green)] shadow-[0_0_18px_rgba(var(--yiro-green-rgb),0.55)]" />
              <span>{t.pill}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl"
            >
              {t.title1}{" "}
              <span className="text-[color:var(--yiro-green)] drop-shadow-[0_0_22px_rgba(var(--yiro-green-rgb),0.30)]">
                {t.titleAccent}
              </span>{" "}
              {t.title2} <br />
              {t.title3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
            >
              {t.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href={`/${locale}`}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[color:var(--yiro-green)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(var(--yiro-green-rgb),0.20)] transition hover:translate-y-[-1px] hover:brightness-110 active:translate-y-[0px]"
              >
                {/* shine */}
                <span className="pointer-events-none absolute -left-24 top-0 h-full w-16 rotate-12 bg-white/45 blur-md opacity-0 transition-all duration-500 group-hover:translate-x-[260px] group-hover:opacity-100" />
                {t.ctaPrimary}
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href={`/${locale}/pricing`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                {t.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {t.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-7 grid grid-cols-3 gap-3"
            >
              {t.stats.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <div className="text-2xl font-extrabold text-white">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div onMouseMove={onMove} onMouseLeave={onLeave} className="relative">
            <motion.div
              style={{
                rotateX,
                rotateY,
                translateX,
                translateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="relative mx-auto max-w-lg"
            >
              {/* halo */}
              <div className="pointer-events-none absolute -inset-8 rounded-[36px] bg-[color:var(--yiro-green)]/10 blur-3xl" />
              <div className="pointer-events-none absolute -inset-2 rounded-[32px] bg-white/5 blur-xl" />

              {/* card */}
              <div className="rounded-[28px] border border-white/10 bg-[#121212]/70 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.60)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                      <Image
                        src="/brand/yiroplay-icon.png"
                        alt="Yiroplay"
                        width={22}
                        height={22}
                        className="opacity-90"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_20%,rgba(var(--yiro-green-rgb),0.22),transparent_60%)] opacity-70" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Yiroplay
                      </div>
                      <div className="text-xs text-white/60">{t.mockTitle}</div>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t.mockTag}
                  </span>
                </div>

                {/* now playing block */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* cover */}
                      <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(var(--yiro-green-rgb),0.35),transparent_65%)]" />
                        <div className="absolute inset-0 bg-white/5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white/90">
                          {t.tracks[0].title}
                        </div>
                        <div className="text-xs text-white/60">
                          {t.tracks[0].sub}
                        </div>
                      </div>
                    </div>

                    {/* play */}
                    <motion.div
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2.6, repeat: Infinity }}
                      className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--yiro-green)]/95 shadow-[0_0_32px_rgba(var(--yiro-green-rgb),0.30)]"
                      aria-hidden
                    >
                      <span className="ml-[1px] text-[12px] font-black text-black">
                        ▶
                      </span>
                    </motion.div>
                  </div>

                  {/* waveform */}
                  <div className="mt-3">
                    <Wave />
                  </div>

                  {/* progress */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] text-white/55">
                      <span>0:42</span>
                      <span>3:12</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-black/40">
                      <motion.div
                        initial={{ width: "38%" }}
                        animate={{ width: ["38%", "62%", "48%"] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="h-2 rounded-full bg-[color:var(--yiro-green)] shadow-[0_0_18px_rgba(var(--yiro-green-rgb),0.30)]"
                      />
                    </div>
                  </div>
                </div>

                {/* queue */}
                <div className="mt-4 space-y-3">
                  {t.tracks.slice(1).map((tr) => (
                    <div
                      key={tr.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(40%_60%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_60%)]" />
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-[color:var(--yiro-green)]/18 ring-1 ring-white/10" />
                        <div>
                          <div className="text-sm font-semibold text-white/90">
                            {tr.title}
                          </div>
                          <div className="text-xs text-white/60">{tr.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-5 grid grid-cols-3 gap-3"
            >
              {[{ k: locale === "fr" ? "Rapide" : "Fast" }, { k: "Premium" }, { k: "Local" }].map(
                (it) => (
                  <div
                    key={it.k}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/85"
                  >
                    {it.k}
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
