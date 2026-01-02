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

export default function TopArtists({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "Top artistes",
          sub: "Une vitrine premium pour les talents d’Afrique. (On mettra des vrais visuels ensuite.)",
          btn: "Découvrir",
        }
      : {
          title: "Top artists",
          sub: "A premium showcase for African talent. (We’ll add real visuals next.)",
          btn: "Discover",
        };

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-4 pb-2 md:pt-2 md:pb-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-white/65">{t.sub}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a, idx) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            {/* hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.16),transparent_55%)]" />
            <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />

            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Image src={a.img} alt={a.name} fill className="object-contain p-3" />
              </div>

              <div>
                <div className="text-base font-bold text-white">{a.name}</div>
                <div className="text-sm text-white/60">
                  {a.country} • {a.tag}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                Trending
              </span>

              <button
                className="btn-micro rounded-full bg-[color:var(--yiro-green)] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {t.btn}
              </button>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
