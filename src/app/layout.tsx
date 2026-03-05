import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStore — Equipamiento de computación",
  description: "Laptops, monitores, teclados, mouse y más. Las mejores marcas al mejor precio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geist.className} min-h-screen flex flex-col bg-white`}>
        {children}
      </body>
    </html>
  );
}
