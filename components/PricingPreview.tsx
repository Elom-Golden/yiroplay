"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[2px] h-4 w-4 flex-none" fill="none">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPreview({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          badge: "Offres",
          title: "Des offres simples, premium",
          sub: "Commence gratuitement, puis passe en Premium pour une expérience sans limites.",
          plans: [
            {
              name: "Free",
              price: "0",
              per: "/mois",
              badge: "Découverte",
              features: ["Playlists publiques", "Recherche", "Lecture standard", "Publicités"],
              cta: "Commencer",
            },
            {
              name: "Premium",
              price: "X",
              per: "/mois",
              badge: "Recommandé",
              features: ["Sans pub", "Qualité supérieure", "Téléchargement (plus tard)", "Priorité nouveautés"],
              cta: "Passer Premium",
              highlight: true,
            },
            {
              name: "Family",
              price: "X",
              per: "/mois",
              badge: "Maison",
              features: ["Jusqu’à 5 comptes", "Contrôle parental", "Partage playlists", "Sans pub"],
              cta: "Voir Family",
            },
          ],
          more: "Voir toutes les offres",
          note: "Note : Les prix finaux seront définis plus tard (mobile money, abonnements, etc.).",
        }
      : {
          badge: "Pricing",
          title: "Simple, premium plans",
          sub: "Start free, then go Premium for an unlimited experience.",
          plans: [
            {
              name: "Free",
              price: "0",
              per: "/mo",
              badge: "Discover",
              features: ["Public playlists", "Search", "Standard playback", "Ads"],
              cta: "Start",
            },
            {
              name: "Premium",
              price: "X",
              per: "/mo",
              badge: "Recommended",
              features: ["Ad-free", "Higher quality", "Downloads (later)", "New releases priority"],
              cta: "Go Premium",
              highlight: true,
            },
            {
              name: "Family",
              price: "X",
              per: "/mo",
              badge: "Home",
              features: ["Up to 5 accounts", "Parental control", "Shared playlists", "Ad-free"],
              cta: "See Family",
            },
          ],
          more: "View all pricing",
          note: "Note: Final pricing will be set later (mobile money, subscriptions, etc.).",
        };

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-0">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--yiro-green)]" />
            {t.badge}
          </div>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-white/65">{t.sub}</p>
        </div>

        <Link
          href={`/${locale}/pricing`}
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
        >
          {t.more} <span className="ml-2">→</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.plans.map((p, i) => {
          const highlight = !!p.highlight;

          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={[
                "group relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl",
                highlight
                  ? "border-[color:var(--yiro-green)]/35 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.04]",
                "transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]",
              ].join(" ")}
            >
              {highlight && (
                <>
                  <div className="pointer-events-none absolute -inset-12 opacity-60 blur-2xl bg-[color:var(--yiro-green)]/10" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)] opacity-70" />
                </>
              )}

              {/* Hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              <div className="flex items-center justify-between">
                <div className="text-lg font-extrabold text-white">{p.name}</div>

                <span
                  className={[
                    "rounded-full px-3 py-1 text-[11px] border",
                    highlight
                      ? "border-[color:var(--yiro-green)]/40 bg-[color:var(--yiro-green)]/15 text-white"
                      : "border-white/10 bg-black/20 text-white/70",
                  ].join(" ")}
                >
                  {p.badge}
                </span>
              </div>

              <div className="mt-4 flex items-end gap-2">
                <div className="text-4xl font-extrabold text-white">{p.price}</div>
                <div className="pb-1 text-sm text-white/55">{p.per}</div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={[
                        "grid h-6 w-6 place-items-center rounded-full border",
                        highlight
                          ? "border-[color:var(--yiro-green)]/35 bg-[color:var(--yiro-green)]/12 text-white"
                          : "border-white/10 bg-white/5 text-white/80",
                      ].join(" ")}
                    >
                      <Check />
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button
                  className={[
                    "w-full rounded-2xl px-4 py-3 text-sm font-semibold transition",
                    highlight
                      ? "bg-[color:var(--yiro-green)] text-black hover:brightness-110 active:brightness-95 shadow-[0_18px_50px_rgba(var(--yiro-green-rgb),0.20)]"
                      : "bg-white/5 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {p.cta}
                </button>
              </div>

              {highlight && (
                <div className="mt-4 text-xs text-white/55">
                  {locale === "fr"
                    ? "Le meilleur équilibre pour une expérience sans pub."
                    : "Best balance for an ad-free experience."}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-white/45">{t.note}</div>
    </section>
  );
}
