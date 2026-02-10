import type { Metadata } from "next";
import "./globals.css";
import { alexandria, epilogue } from "./fonts";

export const metadata: Metadata = {
  title: "Yiroplay",
  description: "African music streaming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${alexandria.variable} ${epilogue.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
