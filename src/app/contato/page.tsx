import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a CJM por telefone, WhatsApp, e-mail ou visite nosso endereço.",
};

export default function ContatoPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Contato</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Fale com a CJM para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.
          </p>
        </Container>
      </section>

      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">Telefone</h2>
            <p className="mt-1 text-neutral-700">{company.phones[0]}</p>
            <p className="text-neutral-700">{company.phones[1]}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">WhatsApp</h2>
            <p className="mt-1 text-neutral-700">{company.whatsappDisplay}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">E-mail</h2>
            <p className="mt-1 text-neutral-700">{company.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">Endereço</h2>
            <address className="mt-1 not-italic text-neutral-700">
              {company.address.street}
              <br />
              {company.address.city} – {company.address.state}, CEP {company.address.zip}
            </address>
          </div>
        </div>

        <div className="rounded-sm border border-brand-steel-light p-8">
          <h2 className="text-lg font-bold text-brand-navy">Prefere falar direto?</h2>
          <p className="mt-3 text-neutral-700">
            O jeito mais rápido de solicitar um orçamento é pelo WhatsApp ou preenchendo o
            formulário de orçamento.
          </p>
          <div className="mt-6">
            <CtaButtons />
          </div>
        </div>
      </Container>
    </main>
  );
}
