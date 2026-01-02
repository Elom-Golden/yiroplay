export default function Footer({ locale }: { locale: "fr" | "en" }) {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 text-sm text-white/50">
        © {new Date().getFullYear()} Yiroplay —{" "}
        {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
      </div>
    </footer>
  );
}
