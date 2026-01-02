import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#20201E] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
