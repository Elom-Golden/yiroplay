import ContactForm from "@/components/ContactForm";

type Locale = "fr" | "en";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";

  return (
    <main className="relative overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#3AAA35]/12 blur-[100px]" />
        <div className="absolute -bottom-56 right-[-180px] h-[520px] w-[520px] rounded-full bg-[#3AAA35]/10 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <ContactForm locale={locale} />
    </main>
  );
}
