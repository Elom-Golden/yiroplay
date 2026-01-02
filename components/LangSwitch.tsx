"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "fr" | "en";

export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname(); // ex: /en/pricing
  const nextLocale: Locale = locale === "fr" ? "en" : "fr";

  // Remplace uniquement le 1er segment /fr ou /en (évite /en/fr)
  const nextPath = pathname.replace(/^\/(fr|en)(\/|$)/, `/${nextLocale}$2`);

  return (
    <Link
      href={nextPath}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
