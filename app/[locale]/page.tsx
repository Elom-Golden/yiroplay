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
          trust: "Déjà pensé pour une expérience fluide sur mobile & desktop.",
          chips: ["Rapide", "Sans pub (Premium)", "Playlists", "Découvertes"],
          stats: [
            { k: "100K+", v: "écoutes / mois (objectif)" },
            { k: "1K+", v: "artistes (vision)" },
            { k: "20+", v: "pays ciblés" },
          ],
        }
      : {
          trust: "Built for a smooth experience on mobile & desktop.",
          chips: ["Fast", "Ad-free (Premium)", "Playlists", "Discovery"],
          stats: [
            { k: "100K+", v: "plays / month (goal)" },
            { k: "1K+", v: "artists (vision)" },
            { k: "20+", v: "target countries" },
          ],
        };

 return (
  <main className="relative overflow-hidden">
    <HeroMotion locale={locale} />

    {/* TRUST BAR */}
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70">{t.trust}</p>

            <div className="flex flex-wrap gap-2">
              {t.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
            {t.stats.map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-white/10 bg-black/25 p-3"
              >
                <div className="text-lg font-semibold text-white">{s.k}</div>
                <div className="text-xs text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent px-4" />
    </section>

    {/* ✅ STACK (plus de py-12/md:py-16) */}
    <div className="mt-10 space-y-10 md:space-y-12">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal delay={0.05}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3AAA35]" />
                {locale === "fr" ? "Sélection" : "Selection"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {locale === "fr" ? "Playlists du moment" : "Top playlists right now"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                {locale === "fr"
                  ? "Des ambiances soigneusement choisies — pour bosser, rouler, kiffer, prier ou chill."
                  : "Carefully curated moods — for work, ride, chill, pray, or vibe."}
              </p>
            </div>

            <TopPlaylists locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal delay={0.08}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3AAA35]" />
                {locale === "fr" ? "Talents" : "Talents"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {locale === "fr" ? "Artistes à suivre" : "Artists to watch"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                {locale === "fr"
                  ? "Une vitrine propre, premium, et pensée pour la croissance."
                  : "A clean, premium showcase designed for growth."}
              </p>
            </div>

            <TopArtists locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal delay={0.1}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3AAA35]" />
                {locale === "fr" ? "Expérience" : "Experience"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {locale === "fr" ? "Le confort d’une app premium" : "A premium app feel"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                {locale === "fr"
                  ? "Performance, design, et fluidité — tout est calibré pour le plaisir."
                  : "Performance, design, and smoothness — tuned for enjoyment."}
              </p>
            </div>

            <Features locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal delay={0.12}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3AAA35]" />
                {locale === "fr" ? "Offres" : "Pricing"}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {locale === "fr" ? "Choisis ton rythme" : "Pick your plan"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                {locale === "fr"
                  ? "Gratuit pour découvrir. Premium pour profiter sans limites."
                  : "Free to explore. Premium to enjoy without limits."}
              </p>
            </div>

            <PricingPreview locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal delay={0.14}>
            <FinalCTA locale={locale} />
          </Reveal>
        </div>
      </section>
    </div>

    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3AAA35]/18 blur-[90px]" />
      <div className="absolute top-[25%] -left-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-[90px]" />
      <div className="absolute bottom-[-200px] right-[-140px] h-[560px] w-[560px] rounded-full bg-[#3AAA35]/10 blur-[110px]" />
    </div>
  </main>
);

}
