import Link from "next/link";
import { waLink } from "@/lib/site";

const whatsappMessage =
  "Olá, gostaria de solicitar informações sobre os serviços da CJM.";

const focusClassName =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green";

export function HomeActions() {
  return (
    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
      <Link
        href="/solicitar-orcamento"
        className={`inline-flex min-h-14 items-center justify-center bg-brand-green px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-brand-green-dark active:translate-y-px ${focusClassName}`}
      >
        Solicitar avaliação
      </Link>
      <a
        href={waLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-14 items-center justify-center border border-white/50 px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white hover:bg-white hover:text-brand-navy active:translate-y-px ${focusClassName}`}
      >
        Falar com a CJM
      </a>
    </div>
  );
}
