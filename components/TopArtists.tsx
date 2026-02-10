"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

const artists = [
  { name: "Himra", country: "Côte d’Ivoire", tag: "Rap / Drill", img: "/brand/logo.png" },
  { name: "Toofan", country: "Togo", tag: "Afropop", img: "/brand/logo.png" },
  { name: "Gaz Mawete", country: "RDC", tag: "Afropop", img: "/brand/logo.png" },
  { name: "Fally Ipupa", country: "RDC", tag: "Rumba", img: "/brand/logo.png" },
  { name: "Stanley Enow", country: "Cameroun", tag: "Rap", img: "/brand/logo.png" },
  { name: "Koffi Olomidé", country: "RDC", tag: "Rumba", img: "/brand/logo.png" },
];

function FlagBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-white/70">
      {text}
    </span>
  );
}

export default function TopArtists({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          badge: "Talents",
          title: "Top artistes",
          sub: "Une vitrine premium pour les talents d’Afrique. Les vrais visuels arrivent — mais le rendu reste déjà pro.",
          btn: "Découvrir",
        }
      : {
          badge: "Talents",
          title: "Top artists",
          sub: "A premium showcase for African talent. Real visuals are coming — but the vibe is already pro.",
          btn: "Discover",
        };

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
          <p className="mt-3 max-w-2xl text-white/65">{t.sub}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a, idx) => (
          <motion.article
            key={a.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.16),transparent_55%)]" />
            {/* Hairline top */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            {/* Cover (premium placeholder) */}
            <div className="relative h-36 w-full overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_30%_20%,rgba(var(--yiro-green-rgb),0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]" />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <FlagBadge text={a.country} />
                <FlagBadge text={a.tag} />
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10">
                  <Image
                    src={a.img}
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
                  <div className="text-sm text-white/60">
                    {a.country} • {a.tag}
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                  Trending
                </span>

                <button className="rounded-full bg-[color:var(--yiro-green)] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_32px_rgba(var(--yiro-green-rgb),0.18)] transition hover:brightness-110 active:brightness-95">
                  {t.btn}
                </button>
              </div>
            </div>

            {/* micro ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
