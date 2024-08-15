import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/FooterSection";
import NavSection from "@/components/NavSection";

const inter = Inter({ subsets: ["greek", "cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"] });

export const metadata: Metadata = {
  title: "COTE",
  description: "Skills are the currency of success, and the youth are the future millionaires",
  keywords: [
    "COTE", "COTE Uganda", "Center Of Evolution Technology", "Practical IT skills", "IT training in Uganda", "Advanced IT skills", "Elevate IT skills"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavSection />
      <body className={`${inter.className} bg-orange-50`}>{children}</body>
      <FooterSection />
    </html>
  );
}
