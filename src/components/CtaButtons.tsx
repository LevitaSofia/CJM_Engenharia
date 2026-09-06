import Link from "next/link";
import { defaultWhatsAppMessage, waLink } from "@/lib/site";

export function CtaButtons({
  align = "start",
  whatsappMessage = defaultWhatsAppMessage,
}: {
  align?: "start" | "center";
  whatsappMessage?: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      <Link
        href="/solicitar-orcamento"
        className="rounded-sm bg-brand-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-green-dark"
      >
        Solicitar orçamento
      </Link>
      <a
        href={waLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-sm border border-brand-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:bg-brand-navy hover:text-white"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
