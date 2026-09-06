import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cjm-limpezadecoifas.com.br"),
  title: {
    default: "CJM Engenharia e Limpeza de Coifas | Sistemas de Exaustão Profissional",
    template: "%s | CJM Engenharia e Limpeza de Coifas",
  },
  description:
    "Engenharia, limpeza técnica e manutenção para sistemas de exaustão profissional: coifas, dutos, exaustores, dampers corta-fogo e lavadores de gases.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CJM Engenharia e Limpeza de Coifas",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
