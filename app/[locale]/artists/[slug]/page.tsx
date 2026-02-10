import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists, getArtist } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

type Locale = "fr" | "en";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "fr";

  const artist = getArtist(slug);
  if (!artist) return notFound();

  const t =
    locale === "fr"
      ? {
          about: "À propos",
          top: "Titres populaires",
          albums: "Albums & projets",
          similar: "Artistes similaires",
          play: "Lecture",
          follow: "Suivre",
          back: "Retour aux artistes",
        }
      : {
          about: "About",
          top: "Top tracks",
          albums: "Albums & projects",
          similar: "Similar artists",
          play: "Play",
          follow: "Follow",
          back: "Back to artists",
        };

  const similar = artist.similarSlugs
    .map((s) => artists.find((a) => a.slug === s))
    .filter(Boolean) as typeof artists;

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={artist.cover}
            alt={artist.name}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[color:var(--yiro-bg)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_10%,rgba(var(--yiro-green-rgb),0.18),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-10">
          <Link
            href={`/${locale}/artists`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur transition hover:bg-white/[0.06]"
          >
            ← {t.back}
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end">
            {/* Avatar */}
            <div className="relative h-28 w-28 sm:h-40 sm:w-40 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {artist.verified && (
                  <span className="rounded-full border border-[color:var(--yiro-green)]/35 bg-[color:var(--yiro-green)]/12 px-3 py-1 text-[11px] text-white/85">
                    Verified
                  </span>
                )}
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-white/70">
                  {artist.country}
                </span>
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-white/70">
                  {artist.genre}
                </span>
              </div>

              <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {artist.name}
              </h1>

              <div className="mt-3 text-sm text-white/70">
                {locale === "fr" ? "Auditeurs / mois" : "Monthly listeners"}{" "}
                <span className="text-white/90 font-semibold">
                  {artist.monthlyListeners}
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button className="btn-micro rounded-full bg-[color:var(--yiro-green)] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 active:brightness-95 shadow-[0_18px_55px_rgba(var(--yiro-green-rgb),0.18)]">
                  ▶ {t.play}
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/10">
                  {t.follow}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHINE DIVIDER */}
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative h-px w-full overflow-hidden rounded-full bg-white/10">
              {/* glow layer */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(var(--yiro-green-rgb),0.18),rgba(255,255,255,0.18),rgba(var(--yiro-green-rgb),0.18),transparent)] opacity-70" />
              {/* moving shine */}
              <div className="absolute top-0 left-[-35%] h-full w-[35%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),rgba(var(--yiro-green-rgb),0.55),transparent)] blur-[0.2px] opacity-95 animate-yiro-shine" />
            </div>
          </div>


      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-white">
          {t.about}
        </h2>
        <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
          {artist.bio}
        </p>
      </section>

      {/* TOP TRACKS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-extrabold text-white">
            {t.top}
          </h2>
          <span className="text-xs text-white/45">
            {locale === "fr" ? "Les plus écoutés" : "Most played"}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {artist.topTracks.map((tr, i) => (
            <div
              key={tr.id}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-4">
                <span className="w-6 text-white/45">{i + 1}</span>

                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-black/25 ring-1 ring-white/10">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-contain p-3 opacity-90"
                  />
                </div>

                <div>
                  <div className="text-white font-medium">{tr.title}</div>
                  <div className="text-xs text-white/50">
                    {artist.name} • {tr.plays} plays
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-white/50">{tr.duration}</span>
                <button className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--yiro-green)] text-black shadow-[0_0_26px_rgba(var(--yiro-green-rgb),0.28)] transition hover:brightness-110">
                  ▶
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALBUMS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-display text-2xl font-extrabold text-white">
          {t.albums}
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artist.albums.map((al) => (
            <div
              key={al.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-black/25 ring-1 ring-white/10">
                <Image
                  src={al.cover}
                  alt={al.title}
                  fill
                  className="object-contain p-10 opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(var(--yiro-green-rgb),0.22),transparent_65%)] opacity-60" />
              </div>

              <div className="mt-5">
                <div className="text-lg font-extrabold text-white/95">
                  {al.title}
                </div>
                <div className="mt-1 text-sm text-white/60">
                  {al.type} • {al.year}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/45">{artist.name}</span>
                <span className="text-sm text-[color:var(--yiro-green)] transition group-hover:translate-x-0.5">
                  Open →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIMILAR */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-display text-2xl font-extrabold text-white">
          {t.similar}
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/artists/${s.slug}`}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[color:var(--yiro-green)]/10" />
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black/25 ring-1 ring-white/10">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-contain p-3 opacity-90"
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-base font-extrabold text-white">
                    {s.name}
                  </div>
                  <div className="truncate text-sm text-white/60">
                    {s.country} • {s.genre}
                  </div>
                </div>
              </div>
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-4 text-sm text-[color:var(--yiro-green)]">
                Open →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
