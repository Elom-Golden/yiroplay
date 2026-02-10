"use client";

import Link from "next/link";

export default function Footer({ locale }: { locale: "fr" | "en" }) {
  const t =
    locale === "fr"
      ? {
          desc:
            "Yiroplay connecte les fans aux artistes d’Afrique de l’Ouest et Centrale — avec une expérience premium.",
          cols: {
            product: "Produit",
            company: "Entreprise",
            support: "Support",
            legal: "Légal",
          },
          links: {
            product: [
              { label: "Playlists", href: `/${locale}/playlists` },
              { label: "Artistes", href: `/${locale}/artists` },
              { label: "Offres", href: `/${locale}/pricing` },
            ],
            company: [
              { label: "À propos", href: `/${locale}/about` },
              { label: "Contact", href: `/${locale}/contact` },
              { label: "Press kit", href: `/${locale}/press` },
            ],
            support: [
              { label: "Aide", href: `/${locale}/contact` },
              { label: "Signaler un bug", href: `/${locale}/contact` },
              { label: "Partenariats", href: `/${locale}/contact` },
            ],
            legal: [
              { label: "Conditions", href: `/${locale}/legal/terms` },
              { label: "Confidentialité", href: `/${locale}/legal/privacy` },
            ],
          },
          follow: "Suivre",
          rights: "Tous droits réservés.",
        }
      : {
          desc:
            "Yiroplay connects fans with artists from West & Central Africa — with a premium experience.",
          cols: {
            product: "Product",
            company: "Company",
            support: "Support",
            legal: "Legal",
          },
          links: {
            product: [
              { label: "Playlists", href: `/${locale}/playlists` },
              { label: "Artists", href: `/${locale}/artists` },
              { label: "Pricing", href: `/${locale}/pricing` },
            ],
            company: [
              { label: "About", href: `/${locale}/about` },
              { label: "Contact", href: `/${locale}/contact` },
              { label: "Press kit", href: `/${locale}/press` },
            ],
            support: [
              { label: "Help", href: `/${locale}/contact` },
              { label: "Report a bug", href: `/${locale}/contact` },
              { label: "Partnerships", href: `/${locale}/contact` },
            ],
            legal: [
              { label: "Terms", href: `/${locale}/legal/terms` },
              { label: "Privacy", href: `/${locale}/legal/privacy` },
            ],
          },
          follow: "Follow",
          rights: "All rights reserved.",
        };

  const socials = [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-[color:var(--yiro-green)]/20 ring-1 ring-white/10" />
              <div className="text-sm font-extrabold text-white">Yiroplay</div>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/60">{t.desc}</p>

            <div className="mt-5">
              <div className="text-xs text-white/45">{t.follow}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 transition hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columns */}
          <div>
            <div className="text-sm font-semibold text-white">{t.cols.product}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {t.links.product.map((l) => (
                <li key={l.href}>
                  <Link className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">{t.cols.company}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {t.links.company.map((l) => (
                <li key={l.href}>
                  <Link className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">{t.cols.support}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {t.links.support.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <Link className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-xs text-white/45">
              {locale === "fr"
                ? "Email: support@yiroplay.com"
                : "Email: support@yiroplay.com"}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} Yiroplay — {t.rights}
          </div>
          <div className="flex flex-wrap gap-3">
            {t.links.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
