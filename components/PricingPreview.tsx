"use client";

import Link from "next/link";

type Locale = "fr" | "en";

export default function PricingPreview({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
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
        }
      : {
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
        };

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-4 pb-2 md:pt-2 md:pb-6">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">{t.title}</h2>
          <p className="mt-3 text-white/70">{t.sub}</p>
        </div>

        <Link
          href={`/${locale}/pricing`}
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          {t.more}
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {t.plans.map((p) => (
          <div
            key={p.name}
            className={[
              "relative overflow-hidden rounded-3xl border border-white/10 p-6",
              p.highlight ? "bg-white/10" : "bg-white/5",
            ].join(" ")}
          >
            {p.highlight && (
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#3AAA35]/12 blur-3xl" />
            )}

            <div className="flex items-center justify-between">
              <div className="text-lg font-extrabold text-white">{p.name}</div>
              <span
                className={[
                  "rounded-full px-3 py-1 text-[11px] border",
                  p.highlight
                    ? "border-[#3AAA35]/40 bg-[#3AAA35]/15 text-white"
                    : "border-white/10 bg-black/20 text-white/70",
                ].join(" ")}
              >
                {p.badge}
              </span>
            </div>

            <div className="mt-4 flex items-end gap-2">
              <div className="text-4xl font-extrabold text-white">{p.price}</div>
              <div className="pb-1 text-sm text-white/60">{p.per}</div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#3AAA35]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                className={[
                  "btn-micro w-full rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  p.highlight ? "bg-[#3AAA35] text-black hover:brightness-110" : "bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                {p.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-white/45">
        {locale === "fr"
          ? "Note : Les prix finaux seront définis plus tard (mobile money, abonnements, etc.)."
          : "Note: Final pricing will be set later (mobile money, subscriptions, etc.)."}
      </div>
    </section>
  );
}
