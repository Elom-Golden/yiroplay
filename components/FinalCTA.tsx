"use client";

import Link from "next/link";

type Locale = "fr" | "en";

export default function FinalCTA({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "Prêt à kiffer Yiroplay ?",
          sub: "Découvre des sons, soutiens les artistes, et profite d’une expérience premium.",
          cta1: "Écouter maintenant",
          cta2: "Contact",
        }
      : {
          title: "Ready to enjoy Yiroplay?",
          sub: "Discover sounds, support artists, and enjoy a premium experience.",
          cta1: "Listen now",
          cta2: "Contact",
        };

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 pb-16 md:mt-24 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-10 text-center md:p-14">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#3AAA35]/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <h3 className="text-2xl font-extrabold text-white md:text-3xl">{t.title}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">{t.sub}</p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="https://yiroplay.com"
            className="btn-micro inline-flex items-center justify-center rounded-full bg-[#3AAA35] px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110 active:brightness-95"
          >
            {t.cta1}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="btn-micro btn-ghost inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {t.cta2}
          </Link>
        </div>

        <div className="mt-6 text-xs text-white/50">
          {locale === "fr" ? "Yiroplay — Le son d’Afrique, proprement." : "Yiroplay — Africa’s sound, clean."}
        </div>
      </div>
    </section>
  );
}
