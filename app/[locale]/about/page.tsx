import Link from "next/link";

type Locale = "fr" | "en";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";

  const t =
    locale === "fr"
      ? {
          badge: "À propos",
          titleA: "Une plateforme",
          titleB: "africaine",
          titleC: "avec des standards premium.",
          lead:
            "Yiroplay met en avant nos sons avec une expérience moderne, rapide et élégante. Pas une copie : une identité.",
          cta1: "Nous contacter",
          cta2: "Voir les offres",

          storyTitle: "Pourquoi Yiroplay existe",
          storyP1:
            "On aime nos musiques. Mais on veut aussi une expérience qui respecte l’utilisateur : design propre, navigation fluide, et performance au niveau international.",
          storyP2:
            "Notre mission est simple : connecter les fans aux artistes d’Afrique de l’Ouest et Centrale, tout en donnant aux talents une vitrine sérieuse pour grandir.",

          trioTitle: "Notre base",
          trio: [
            {
              title: "Mission",
              desc:
                "Connecter les fans aux artistes d’Afrique de l’Ouest et Centrale, et rendre la découverte musicale fluide, belle et accessible.",
            },
            {
              title: "Vision",
              desc:
                "Bâtir une marque musicale africaine forte : locale dans l’âme, internationale dans la qualité.",
            },
            {
              title: "Promesse produit",
              desc:
                "Une expérience premium : rapide, intuitive, et évolutive — du site vitrine à la plateforme complète.",
            },
          ],

          valuesTitle: "Ce qui nous guide",
          values: [
            {
              title: "Authenticité",
              desc: "Une identité propre, enracinée, moderne.",
            },
            {
              title: "Qualité",
              desc: "UI, performance, SEO — standards élevés.",
            },
            {
              title: "Impact",
              desc: "Soutenir l’écosystème musical local.",
            },
            {
              title: "Respect",
              desc: "L’artiste et le fan au centre.",
            },
          ],

          roadmapTitle: "Roadmap (progression)",
          steps: [
            {
              tag: "V1",
              title: "Site vitrine premium",
              desc: "Pages essentielles FR/EN, UI moderne, base solide.",
            },
            {
              tag: "V2",
              title: "Contenu dynamique",
              desc: "Artistes & playlists dynamiques, SEO renforcé, pages dédiées.",
            },
            {
              tag: "V3",
              title: "Plateforme complète",
              desc: "Espace utilisateur, stats, recommandations, monétisation.",
            },
          ],

          finalTitle: "Construisons ça ensemble",
          finalSub:
            "Artistes, labels, partenaires : si tu veux faire partie de l’aventure, c’est maintenant.",
          note: "© 2026 Yiroplay — Tous droits réservés.",
        }
      : {
          badge: "About",
          titleA: "An",
          titleB: "African",
          titleC: "premium platform.",
          lead:
            "Yiroplay showcases our sound with a modern, fast, elegant experience. Not a copy: an identity.",
          cta1: "Contact us",
          cta2: "View pricing",

          storyTitle: "Why Yiroplay exists",
          storyP1:
            "We love our music — and we want an experience that respects users: clean design, smooth navigation, and world-class performance.",
          storyP2:
            "Our mission is simple: connect fans to West & Central African artists, and give talents a serious showcase to grow.",

          trioTitle: "Our foundation",
          trio: [
            {
              title: "Mission",
              desc:
                "Connect fans to West & Central African artists and make music discovery smooth, beautiful, and accessible.",
            },
            {
              title: "Vision",
              desc:
                "Build a strong African music brand: local in soul, international in quality.",
            },
            {
              title: "Product promise",
              desc:
                "A premium experience: fast, intuitive, scalable — from landing page to full platform.",
            },
          ],

          valuesTitle: "What guides us",
          values: [
            { title: "Authenticity", desc: "A true identity, rooted, modern." },
            { title: "Quality", desc: "UI, performance, SEO — high standards." },
            { title: "Impact", desc: "Support the local music ecosystem." },
            { title: "Respect", desc: "Artist and fan at the center." },
          ],

          roadmapTitle: "Roadmap",
          steps: [
            { tag: "V1", title: "Premium landing", desc: "Core pages EN/FR, modern UI, solid base." },
            { tag: "V2", title: "Dynamic content", desc: "Artists & playlists dynamic, stronger SEO, dedicated pages." },
            { tag: "V3", title: "Full platform", desc: "User space, stats, recommendations, monetization." },
          ],

          finalTitle: "Let’s build it together",
          finalSub:
            "Artists, labels, partners: if you want to join the journey, now is the time.",
          note: "© 2026 Yiroplay — All rights reserved.",
        };

  return (
    <main className="relative overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#3AAA35]/12 blur-[100px]" />
        <div className="absolute -bottom-56 right-[-180px] h-[520px] w-[520px] rounded-full bg-[#3AAA35]/10 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#3AAA35]" />
          {t.badge}
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
          {t.titleA} <span className="text-[#3AAA35]">{t.titleB}</span> {t.titleC}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          {t.lead}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/contact`}
            className="btn-micro inline-flex items-center justify-center rounded-full bg-[#3AAA35] px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110 active:brightness-95"
          >
            {t.cta1} <span className="ml-2">→</span>
          </Link>

          <Link
            href={`/${locale}/pricing`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            {t.cta2}
          </Link>
        </div>
      </section>

      {/* STORY */}
      <section className="relative mx-auto mt-12 max-w-6xl px-4 md:mt-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            {t.storyTitle}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              {t.storyP1}
            </p>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              {t.storyP2}
            </p>
          </div>
        </div>
      </section>

      {/* TRIO */}
      <section className="relative mx-auto mt-10 max-w-6xl px-4 md:mt-14">
        <h2 className="text-xl font-extrabold text-white md:text-2xl">
          {t.trioTitle}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.trio.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/10 bg-black/20 p-7"
            >
              <div className="text-lg font-bold text-white">{c.title}</div>
              <p className="mt-2 text-base leading-relaxed text-white/70">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mx-auto mt-12 max-w-6xl px-4 md:mt-16">
        <h2 className="text-xl font-extrabold text-white md:text-2xl">
          {t.valuesTitle}
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="text-lg font-bold text-white">{v.title}</div>
              <p className="mt-2 text-base leading-relaxed text-white/70">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative mx-auto mt-12 max-w-6xl px-4 md:mt-16">
        <h2 className="text-xl font-extrabold text-white md:text-2xl">
          {t.roadmapTitle}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.steps.map((s) => (
            <div
              key={s.tag}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#3AAA35]" />
                {s.tag}
              </div>
              <div className="mt-4 text-lg font-bold text-white">{s.title}</div>
              <p className="mt-2 text-base leading-relaxed text-white/70">
                {s.desc}
              </p>

              <div className="mt-5 h-[2px] w-full rounded-full bg-white/10">
                <div className="h-[2px] w-[55%] rounded-full bg-[#3AAA35]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mx-auto mt-12 max-w-6xl px-4 pb-16 md:mt-16 md:pb-24">
        <div className="rounded-3xl border border-white/10 bg-black/25 p-10 text-center md:p-14">
          <h3 className="text-3xl font-extrabold text-white md:text-4xl">
            {t.finalTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {t.finalSub}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="btn-micro inline-flex items-center justify-center rounded-full bg-[#3AAA35] px-8 py-3 text-sm font-semibold text-black transition hover:brightness-110 active:brightness-95"
            >
              {t.cta1} <span className="ml-2">→</span>
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              {t.cta2}
            </Link>
          </div>

          <div className="mt-8 text-sm text-white/45">{t.note}</div>
        </div>
      </section>
    </main>
  );
}
