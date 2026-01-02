"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Locale = "fr" | "en";

export default function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // lock scroll
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const t =
    locale === "fr"
      ? {
          open: "Ouvrir le menu",
          close: "Fermer",
          listen: "Écouter",
          links: [
            { label: "Accueil", href: `/${locale}` },
            { label: "Artistes", href: `/${locale}/artists` },
            { label: "Offres", href: `/${locale}/pricing` },
            { label: "À propos", href: `/${locale}/about` },
            { label: "Contact", href: `/${locale}/contact` },
          ],
        }
      : {
          open: "Open menu",
          close: "Close",
          listen: "Listen",
          links: [
            { label: "Home", href: `/${locale}` },
            { label: "Artists", href: `/${locale}/artists` },
            { label: "Pricing", href: `/${locale}/pricing` },
            { label: "About", href: `/${locale}/about` },
            { label: "Contact", href: `/${locale}/contact` },
          ],
        };

  return (
    <>
      {/* Burger button (mobile only) */}
      <button
        aria-label={t.open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 backdrop-blur transition hover:bg-white/10 md:hidden"
      >
        <span className="sr-only">{t.open}</span>
        <div className="space-y-1.5">
          <span className="block h-[2px] w-5 rounded-full bg-white/80" />
          <span className="block h-[2px] w-5 rounded-full bg-white/65" />
          <span className="block h-[2px] w-5 rounded-full bg-white/50" />
        </div>
      </button>

      {/* Overlay + panel */}
      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          {/* overlay */}
          <button
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-[#20201E]/75 backdrop-blur-xl">
            <div className="flex items-center justify-between p-4">
              <div className="text-sm font-semibold text-white/90">Yiroplay</div>
              <button
                aria-label={t.close}
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="px-4 pb-4">
              {/* CTA listen */}
              <Link
                href={`/${locale}/listen`}
                onClick={() => setOpen(false)}
                className="btn-micro mb-4 inline-flex w-full items-center justify-center rounded-full bg-[#3AAA35] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {t.listen}
              </Link>

              {/* links */}
              <div className="space-y-1">
                {t.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-white/10 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* language */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-xs font-semibold text-white/60">
                  {locale === "fr" ? "Langue" : "Language"}
                </div>

                <div className="mt-2 flex gap-2">
                  <Link
                    href="/fr"
                    onClick={() => setOpen(false)}
                    className={`flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold transition ${
                      locale === "fr"
                        ? "bg-white text-black"
                        : "border border-white/10 bg-black/20 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    FR
                  </Link>
                  <Link
                    href="/en"
                    onClick={() => setOpen(false)}
                    className={`flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold transition ${
                      locale === "en"
                        ? "bg-white text-black"
                        : "border border-white/10 bg-black/20 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    EN
                  </Link>
                </div>
              </div>

              <div className="mt-5 text-xs text-white/45">
                {locale === "fr"
                  ? "UI premium • rapide • sobre"
                  : "Premium UI • fast • clean"}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
