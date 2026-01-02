"use client";

type Locale = "fr" | "en";

export default function Features({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "Une expérience premium, pensée pour durer",
          sub: "Design moderne, performance, SEO, et une base solide pour ajouter des fonctionnalités au fil du temps.",
          cards: [
            {
              title: "Découverte intelligente",
              desc: "Des suggestions basées sur ton mood : afrobeat, rap, gospel, amapiano, coupé-décalé…",
              chip: "Discovery",
            },
            {
              title: "UI ultra fluide",
              desc: "Transitions propres, micro-interactions, responsive mobile-first. Zéro sensation cheap.",
              chip: "Motion",
            },
            {
              title: "Performance & SEO",
              desc: "Chargement rapide, structure saine, bonnes pratiques. Prêt pour Google et les réseaux.",
              chip: "Speed",
            },
          ],
        }
      : {
          title: "A premium experience, built to scale",
          sub: "Modern design, performance, SEO, and a strong base to add features over time.",
          cards: [
            {
              title: "Smart discovery",
              desc: "Recommendations based on your mood: afrobeat, rap, gospel, amapiano, coupé-décalé…",
              chip: "Discovery",
            },
            {
              title: "Ultra smooth UI",
              desc: "Clean transitions, micro-interactions, mobile-first responsive. No cheap feel.",
              chip: "Motion",
            },
            {
              title: "Performance & SEO",
              desc: "Fast loading, healthy structure, best practices. Ready for Google and social.",
              chip: "Speed",
            },
          ],
        };

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-4 pb-2 md:pt-2 md:pb-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-extrabold text-white md:text-3xl">{t.title}</h2>
        <p className="mt-3 text-white/70">{t.sub}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {t.cards.map((c) => (
          <div
            key={c.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#3AAA35]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-[#3AAA35]/25 transition group-hover:bg-[#3AAA35]/35" />
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/70">
                {c.chip}
              </span>
            </div>

            <div className="mt-4 text-lg font-bold text-white">{c.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-white/70">{c.desc}</div>

            <div className="mt-5 h-[1px] w-full bg-white/10" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-white/45">
                {locale === "fr" ? "Optimisé mobile" : "Mobile-optimized"}
              </div>
              <div className="text-xs text-white/55">→</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
