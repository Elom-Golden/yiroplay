"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  ChevronDown,
  Copy,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

type Locale = "fr" | "en";

type TopicKey = "general" | "support" | "info" | "partner";

const INBOX: Record<TopicKey, string> = {
  general: "contact@yiroplay.com",
  support: "support@yiroplay.com",
  info: "info@yiroplay.com",
  partner: "partenariat@yiroplay.com",
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = useMemo(() => {
    const fr = {
      badge: "Contact",
      titleA: "Parlons de",
      titleB: "Yiroplay",
      titleC: "ensemble.",
      lead:
        "Choisis un sujet, écris ton message, et on te répond rapidement. La bonne adresse mail est sélectionnée automatiquement.",
      formTitle: "Envoyer un message",
      formSub: "Réponse sous 24–72h selon le sujet.",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      optional: "(optionnel)",
      company: "Organisation",
      send: "Envoyer",
      note:
        "En cliquant sur Envoyer, ton application mail s’ouvrira avec le bon destinataire.",
      inboxLabel: "Destinataire sélectionné",
      quickTitle: "Contacts directs",
      quickSub:
        "Tu peux aussi contacter directement l’équipe selon le besoin.",
      topics: {
        general: "Messages généraux",
        support: "Service client / Support",
        info: "Demande d’informations",
        partner: "Partenariats & collaborations",
      },
      socialsTitle: "Réseaux",
      socialsSub: "Rejoins la communauté Yiroplay.",
      ctaPricing: "Voir les offres",
      ctaHome: "Retour à l’accueil",
      copied: "Copié",
      copy: "Copier",
    };

    const en = {
      badge: "Contact",
      titleA: "Let’s talk",
      titleB: "Yiroplay",
      titleC: "together.",
      lead:
        "Pick a topic, write your message, and we’ll reply. The right inbox is selected automatically.",
      formTitle: "Send a message",
      formSub: "Reply within 24–72h depending on topic.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      optional: "(optional)",
      company: "Organization",
      send: "Send",
      note:
        "Clicking Send will open your mail app with the correct recipient filled in.",
      inboxLabel: "Selected recipient",
      quickTitle: "Direct contacts",
      quickSub: "Reach the right team depending on your need.",
      topics: {
        general: "General messages",
        support: "Customer support",
        info: "Information requests",
        partner: "Partnerships & collaborations",
      },
      socialsTitle: "Social",
      socialsSub: "Join the Yiroplay community.",
      ctaPricing: "View pricing",
      ctaHome: "Back home",
      copied: "Copied",
      copy: "Copy",
    };

    return locale === "fr" ? fr : en;
  }, [locale]);

  const [topic, setTopic] = useState<TopicKey>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<TopicKey | null>(null);

  const recipient = INBOX[topic];

  const topicLabel = useMemo(() => {
    const map = t.topics as Record<TopicKey, string>;
    return map[topic];
  }, [topic, t.topics]);

  function buildMailto() {
    const subject = `Yiroplay — ${topicLabel}${company ? ` — ${company}` : ""}`;
    const body = [
      `Nom/Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Organisation: ${company || "-"}`,
      `Sujet/Topic: ${topicLabel}`,
      "",
      "Message:",
      message || "-",
      "",
      "---",
      "Envoyé depuis la page Contact Yiroplay",
    ].join("\n");

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${recipient}?${params.toString()}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // mini validation (premium mais simple)
    if (!name.trim() || !email.trim() || !message.trim()) return;

    window.location.href = buildMailto();
  }

  async function copyEmail(key: TopicKey) {
    try {
      await navigator.clipboard.writeText(INBOX[key]);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1200);
    } catch {
      // fallback : rien (clipboard peut être bloqué)
    }
  }

  const SOCIALS = [
    { label: "Facebook", href: "https://facebook.com/", icon: Facebook },
    { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
    { label: "X", href: "https://x.com/", icon: Mail /* placeholder */ },
    { label: "YouTube", href: "https://youtube.com/", icon: Youtube },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-24">
      {/* HERO */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#3AAA35]" />
          {t.badge}
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
          {t.titleA}{" "}
          <span className="text-[#3AAA35]">{t.titleB}</span> {t.titleC}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
          {t.lead}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/pricing`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            {t.ctaPricing}
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center rounded-full bg-black/25 px-7 py-3 text-sm font-semibold text-white/80 transition hover:bg-black/35 border border-white/10"
          >
            {t.ctaHome}
          </Link>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-5">
        {/* FORM */}
        <div className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-white md:text-2xl">
                {t.formTitle}
              </h2>
              <p className="mt-2 text-white/65">{t.formSub}</p>
            </div>

            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
              <Mail className="h-4 w-4" />
              <span className="text-white/60">{t.inboxLabel}:</span>
              <span className="font-semibold text-white">{recipient}</span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-white/80">{t.name}</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20"
                  placeholder={locale === "fr" ? "Ton nom" : "Your name"}
                />
              </div>
              <div>
                <label className="text-sm text-white/80">{t.email}</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20"
                  placeholder="ex: nom@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-white/80">
                  {t.company} <span className="text-white/45">{t.optional}</span>
                </label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20"
                  placeholder={locale === "fr" ? "Entreprise / Label" : "Company / Label"}
                />
              </div>

              <div>
                <label className="text-sm text-white/80">{t.subject}</label>
                <div className="relative mt-2">
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value as TopicKey)}
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 pr-10 text-white outline-none focus:border-white/20"
                  >
                    <option value="general">{(t.topics as any).general}</option>
                    <option value="support">{(t.topics as any).support}</option>
                    <option value="info">{(t.topics as any).info}</option>
                    <option value="partner">{(t.topics as any).partner}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                </div>

                <div className="mt-2 text-xs text-white/55">
                  <span className="text-white/50">{t.inboxLabel}:</span>{" "}
                  <span className="font-semibold text-white/85">{recipient}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-white/80">{t.message}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20"
                placeholder={
                  locale === "fr"
                    ? "Explique ta demande clairement…"
                    : "Write your message clearly…"
                }
              />
            </div>

            <button
              type="submit"
              className="btn-micro inline-flex items-center justify-center rounded-2xl bg-[#3AAA35] px-5 py-3 text-sm font-bold text-white transition hover:brightness-150 active:brightness-95 disabled:opacity-90"
              disabled={!name.trim() || !email.trim() || !message.trim()}
            >
              <Send className="mr-2 h-4 w-4" />
              {t.send}
            </button>

            <div className="text-xs text-white/45">{t.note}</div>
          </form>
        </div>

        {/* SIDE */}
        <div className="md:col-span-2 grid gap-6">
          {/* DIRECT CONTACTS */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-extrabold text-white">{t.quickTitle}</h3>
            <p className="mt-2 text-white/65">{t.quickSub}</p>

            <div className="mt-5 grid gap-3">
              {(
                [
                  { key: "general", label: (t.topics as any).general },
                  { key: "support", label: (t.topics as any).support },
                  { key: "info", label: (t.topics as any).info },
                  { key: "partner", label: (t.topics as any).partner },
                ] as { key: TopicKey; label: string }[]
              ).map((it) => (
                <div
                  key={it.key}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-sm font-semibold text-white">
                    {it.label}
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <a
                      className="text-sm text-white/75 hover:text-white underline decoration-white/20 hover:decoration-white/40"
                      href={`mailto:${INBOX[it.key]}`}
                    >
                      {INBOX[it.key]}
                    </a>

                    <button
                      type="button"
                      onClick={() => copyEmail(it.key)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
                      aria-label={t.copy}
                    >
                      {copiedKey === it.key ? (
                        <>
                          <Check className="h-4 w-4" />
                          {t.copied}
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          {t.copy}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-extrabold text-white">{t.socialsTitle}</h3>
            <p className="mt-2 text-white/65">{t.socialsSub}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-micro inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                    aria-label={s.label}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{s.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
              <span className="font-semibold text-white">Tip :</span>{" "}
              tu peux remplacer les URLs des réseaux par tes vrais liens dès que tu veux.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
