import Image from "next/image";
import Link from "next/link";
import HeroMotion from "@/components/HeroMotion";
import Reveal from "@/components/Reveal";
import TopPlaylists from "@/components/TopPlaylists";
import TopArtists from "@/components/TopArtists";
import Features from "@/components/Features";
import PricingPreview from "@/components/PricingPreview";
import FinalCTA from "@/components/FinalCTA";


type Locale = "fr" | "en";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";

  const t =
    locale === "fr"
      ? {
          badge: "Streaming musical Afrique",
          h1a: "La musique",
          h1b: "d’Afrique",
          h1c: "dans ta poche.",
          sub: "Yiroplay connecte les fans aux artistes d’Afrique de l’Ouest et Centrale. Découvre, écoute, soutiens — avec une expérience premium, rapide et moderne.",
          cta1: "Écouter maintenant",
          cta2: "Voir les offres",
          trust: "Déjà pensé pour une expérience fluide sur mobile & desktop.",
          chips: ["Rapide", "Sans pub (Premium)", "Playlists", "Découvertes"],
          stats: [
            { k: "100K+", v: "écoutes / mois (objectif)" },
            { k: "1K+", v: "artistes (vision)" },
            { k: "20+", v: "pays ciblés" },
          ],
          section1Title: "Une expérience pensée comme Spotify… mais pour nos sons.",
          section1Sub:
            "UI moderne, transitions fluides, performance et SEO. Et surtout : une identité musicale africaine forte.",
          cards: [
            {
              title: "Découverte intelligente",
              desc: "Suggestions basées sur tes goûts : afrobeat, rap, gospel, amapiano, coupé-décalé, togbe vibes…",
            },
            {
              title: "Artistes mis en avant",
              desc: "Des pages artistes propres, des visuels nets, et une vitrine pour leur croissance.",
            },
            {
              title: "Qualité & performance",
              desc: "Chargement rapide, design responsive, et une base solide pour ajouter des fonctionnalités au fil du temps.",
            },
          ],
          section2Title: "Pourquoi Yiroplay ?",
          section2Points: [
            {
              title: "Une plateforme locale, une ambition globale",
              desc: "On met la lumière sur les talents d’ici avec une expérience digne des standards internationaux.",
            },
            {
              title: "Brand premium",
              desc: "Couleurs sobres, accent vert, typographie moderne : un rendu propre et captivant.",
            },
            {
              title: "Évolutif",
              desc: "Site vitrine aujourd’hui, fonctionnalités demain (blog, stats, pages artistes avancées, etc.)",
            },
          ],
          section3Title: "Prêt à écouter ?",
          section3Sub:
            "Laisse Yiroplay devenir ta nouvelle habitude musicale. Découvre des sons, soutiens les artistes, kiffe.",
          footerNote: "© 2025 Yiroplay — Tous droits réservés.",
        }
      : {
          badge: "African music streaming",
          h1a: "Africa’s",
          h1b: "music",
          h1c: "in your pocket.",
          sub: "Yiroplay connects fans to West & Central African artists. Discover, listen, support — with a premium, fast, modern experience.",
          cta1: "Listen now",
          cta2: "View pricing",
          trust: "Built for a smooth experience on mobile & desktop.",
          chips: ["Fast", "Ad-free (Premium)", "Playlists", "Discovery"],
          stats: [
            { k: "100K+", v: "plays / month (goal)" },
            { k: "1K+", v: "artists (vision)" },
            { k: "20+", v: "target countries" },
          ],
          section1Title: "A Spotify-level experience… made for our sound.",
          section1Sub:
            "Modern UI, smooth transitions, performance and SEO. And most importantly: a strong African music identity.",
          cards: [
            {
              title: "Smart discovery",
              desc: "Recommendations based on your taste: afrobeat, rap, gospel, amapiano, coupé-décalé…",
            },
            {
              title: "Artists first",
              desc: "Clean artist pages, crisp visuals, and a growth-friendly showcase.",
            },
            {
              title: "Quality & performance",
              desc: "Fast loading, responsive design, and a solid base to add features over time.",
            },
          ],
          section2Title: "Why Yiroplay?",
          section2Points: [
            {
              title: "Local platform, global ambition",
              desc: "We spotlight local talent with world-class experience standards.",
            },
            {
              title: "Premium brand",
              desc: "Dark elegance, green accent, modern typography — clean and captivating.",
            },
            {
              title: "Scalable",
              desc: "Landing today, features tomorrow (blog, stats, advanced artist pages, etc.)",
            },
          ],
          section3Title: "Ready to listen?",
          section3Sub:
            "Make Yiroplay your new music habit. Discover sounds, support artists, enjoy.",
          footerNote: "© 2025 Yiroplay — All rights reserved.",
        };

  return (    
    <main className="relative overflow-hidden">
      <HeroMotion locale={locale} />
  
        <Reveal delay={0.05}>
          <TopPlaylists locale={locale} />
        </Reveal>

        <Reveal delay={0.08}>
          <TopArtists locale={locale} />
        </Reveal>

        <Reveal delay={0.1}>
          <Features locale={locale} />
        </Reveal>

        <Reveal delay={0.12}>
          <PricingPreview locale={locale} />
        </Reveal>

        <Reveal delay={0.14}>
          <FinalCTA locale={locale} />
        </Reveal>


      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3AAA35]/18 blur-[90px]" />
        <div className="absolute top-[25%] -left-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-[90px]" />
        <div className="absolute bottom-[-200px] right-[-140px] h-[560px] w-[560px] rounded-full bg-[#3AAA35]/10 blur-[110px]" />
      </div>
    </main>
  );
}
