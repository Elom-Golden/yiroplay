import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { epilogue, alexandria } from "@/app/fonts";


export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "fr";

  return (
    <div className="min-h-dvh bg-[color:var(--yiro-bg)] text-[color:var(--yiro-text)]">
      {/* Global background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_0%,rgba(var(--yiro-green-rgb),0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_25%,rgba(var(--yiro-green-rgb),0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div
      className={`${alexandria.variable} ${epilogue.variable} min-h-dvh`}>

      <Navbar />

      <main className="relative">{children}</main>

      <Footer locale={safeLocale} />
      </div>
    </div>
  );
}
