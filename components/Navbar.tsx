"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LangSwitch from "./LangSwitch";
import MobileMenu from "@/components/MobileMenu";

type Locale = "fr" | "en";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // 🔒 BasePath GitHub Pages (/yiroplay)
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // 🔒 Nettoyage du pathname (/yiroplay/fr -> /fr)
  const cleanPath = pathname?.startsWith(BASE)
    ? pathname.slice(BASE.length)
    : pathname ?? "";

  // 🌍 Détection fiable de la langue
  const currentLocale: Locale = cleanPath.startsWith("/en") ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
      <nav
        className={[
          "backdrop-blur-xl border-b border-white/10 transition-all",
          scrolled
            ? "bg-black/55 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "bg-black/25",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT — Logo */}
            <Link
              href={`${BASE}/${currentLocale}`}
              className="flex items-center gap-3"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white/5">
                <Image
                  src={`${BASE}/brand/logo.png`}
                  alt="Yiroplay"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <span className="text-[15px] font-semibold tracking-wide text-white">
                Yiroplay
              </span>
            </Link>

            {/* CENTER — Desktop nav */}
            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 p-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={`${BASE}${l.href}`}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive(l.href)
                      ? "bg-white text-black"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* RIGHT — Actions */}
            <div className="flex items-center gap-2">
              <LangSwitch locale={currentLocale} />

              <Link
                href="https://yiroplay.com"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-[#3AAA35] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 active:brightness-95"
              >
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
