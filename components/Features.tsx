"use client";

type Locale = "fr" | "en";

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 2l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.5 2.3.5-2.3 1-.7 2.5-.7-2.5-2.3-1 2.3-.5.7-2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

function IconMotion() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M4 15c4-8 7 8 11 0s5 2 5 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 9c4-8 7 8 11 0s5 2 5 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 4a9 9 0 1 0 9 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 13l5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20 13h-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export default function Features({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          badge: "Expérience",
          title: "Une expérience premium, pensée pour durer",
          sub: "Design moderne, performance, SEO, et une base solide pour ajouter des fonctionnalités au fil du temps.",
          cards: [
            {
              title: "Découverte intelligente",
              desc: "Des suggestions basées sur ton mood : afrobeat, rap, gospel, amapiano, coupé-décalé…",
              chip: "Discovery",
              icon: <IconSpark />,
            },
            {
              title: "UI ultra fluide",
              desc: "Transitions propres, micro-interactions, responsive mobile-first. Zéro sensation cheap.",
              chip: "Motion",
              icon: <IconMotion />,
            },
            {
              title: "Performance & SEO",
              desc: "Chargement rapide, structure saine, bonnes pratiques. Prêt pour Google et les réseaux.",
              chip: "Speed",
              icon: <IconSpeed />,
            },
          ],
          foot: "Optimisé mobile",
        }
      : {
          badge: "Experience",
          title: "A premium experience, built to scale",
          sub: "Modern design, performance, SEO, and a strong base to add features over time.",
          cards: [
            {
              title: "Smart discovery",
              desc: "Recommendations based on your mood: afrobeat, rap, gospel, amapiano, coupé-décalé…",
              chip: "Discovery",
              icon: <IconSpark />,
            },
            {
              title: "Ultra smooth UI",
              desc: "Clean transitions, micro-interactions, mobile-first responsive. No cheap feel.",
              chip: "Motion",
              icon: <IconMotion />,
            },
            {
              title: "Performance & SEO",
              desc: "Fast loading, healthy structure, best practices. Ready for Google and social.",
              chip: "Speed",
              icon: <IconSpeed />,
            },
          ],
          foot: "Mobile-optimized",
        };

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.cards.map((c) => (
          <div
            key={c.title}
            className={[
              "group relative overflow-hidden rounded-3xl border border-white/10",
              "bg-white/[0.04] p-6 backdrop-blur-xl",
              "transition will-change-transform hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]",
            ].join(" ")}
          >
            {/* spotlight */}
            <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_80%_at_90%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_55%)]" />

            {/* top hairline */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--yiro-green)]/18 text-white/85 ring-1 ring-white/10 transition group-hover:bg-[color:var(--yiro-green)]/24">
                {c.icon}
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/70">
                {c.chip}
              </span>
            </div>

            <div className="mt-4 text-lg font-bold text-white">{c.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-white/65">
              {c.desc}
            </div>

            <div className="mt-6 h-px w-full bg-white/10" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-white/45">{t.foot}</div>
              <div className="text-xs text-white/55 transition group-hover:translate-x-0.5">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
