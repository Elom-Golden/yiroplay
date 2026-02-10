"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LangSwitch from "./LangSwitch";
import MobileMenu from "@/components/MobileMenu";

type Locale = "fr" | "en";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // 🔒 BasePath GitHub Pages (/yiroplay)
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // 🔒 Nettoyage du pathname (/yiroplay/fr -> /fr)
  const cleanPath = pathname?.startsWith(BASE)
    ? pathname.slice(BASE.length)
    : pathname ?? "";

  // 🌍 Détection fiable de la langue
  const currentLocale: Locale = cleanPath.startsWith("/en") ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);

      const doc = document.documentElement;
      const max = (doc.scrollHeight || 1) - window.innerHeight;
      const p = max > 0 ? y / max : 0;
      setProgress(clamp(p, 0, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🌍 Traductions
  const t = useMemo(() => {
    const fr = {
      home: "Accueil",
      artists: "Artistes",
      pricing: "Offres",
      about: "À propos",
      contact: "Contact",
      listen: "Écouter",
    };
    const en = {
      home: "Home",
      artists: "Artists",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      listen: "Listen",
    };
    return currentLocale === "fr" ? fr : en;
  }, [currentLocale]);

  // 🔗 Liens
  const links = useMemo(
    () => [
      { href: `/${currentLocale}`, label: t.home },
      { href: `/${currentLocale}/artists`, label: t.artists },
      { href: `/${currentLocale}/pricing`, label: t.pricing },
      { href: `/${currentLocale}/about`, label: t.about },
      { href: `/${currentLocale}/contact`, label: t.contact },
    ],
    [currentLocale, t]
  );

  // ✅ Lien actif (avec basePath)
  const isActive = (href: string) => {
    const clean = (s: string) => s.replace(/\/+$/, "");
    return clean(pathname ?? "") === clean(`${BASE}${href}`);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Scroll progress (premium feel) */}
      <div className="h-[2px] w-full bg-white/5">
        <div
          className="h-full origin-left bg-gradient-to-r from-[#3AAA35] via-white/60 to-[#3AAA35] opacity-90"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav
        className={[
          "relative transition-all",
          "backdrop-blur-2xl",
          scrolled
            ? "bg-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
            : "bg-black/25",
        ].join(" ")}
      >
        {/* Fine luxury border gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3AAA35]/35 to-transparent" />

        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT — Logo */}
            <Link
              href={`${BASE}/${currentLocale}`}
              className="group flex items-center gap-3"
              aria-label="Yiroplay"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:ring-white/20">
                <Image
                  src={`${BASE}/brand/logo.png`}
                  alt="Yiroplay"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>

              <div className="leading-none">
                <span className="block text-[15px] font-semibold tracking-wide text-white">
                  Yiroplay
                </span>
                <span className="block text-[11px] tracking-wide text-white/55">
                  Music • Africa • Premium
                </span>
              </div>
            </Link>

            {/* CENTER — Desktop nav */}
            <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
              {links.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={`${BASE}${l.href}`}
                    className={[
                      "relative rounded-full px-4 py-2 text-sm transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3AAA35]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      active
                        ? "text-black"
                        : "text-white/80 hover:text-white hover:bg-white/10",
                      active ? "bg-white" : "",
                    ].join(" ")}
                  >
                    {/* Active glow underline (flagship touch) */}
                    {active && (
                      <span className="pointer-events-none absolute inset-x-3 -bottom-[6px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#3AAA35] to-transparent blur-[0.2px]" />
                    )}
                    {l.label}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT — Actions */}
            <div className="flex items-center gap-2">
              <LangSwitch locale={currentLocale} />

              <Link
                href="https://yiroplay.com"
                className={[
                  "hidden md:inline-flex items-center justify-center rounded-full",
                  "px-4 py-2 text-sm font-semibold text-black",
                  "bg-[#3AAA35] shadow-[0_12px_30px_rgba(58,170,53,0.25)]",
                  "transition hover:brightness-110 active:brightness-95",
                  "relative overflow-hidden",
                ].join(" ")}
              >
                {/* subtle shine */}
                <span className="pointer-events-none absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/35 blur-md opacity-0 transition-all duration-500 group-hover:opacity-100" />
                {t.listen}
              </Link>

              <MobileMenu locale={currentLocale} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
