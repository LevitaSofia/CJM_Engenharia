import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento",
  description:
    "Solicite um orçamento para limpeza de coifas, dutos, exaustores, damper corta-fogo ou lavadores de gases.",
};

export default function SolicitarOrcamentoPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Solicitar orçamento</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Preencha o formulário e enviaremos suas informações diretamente para o nosso
            WhatsApp.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="max-w-2xl">
          <QuoteForm />
        </div>
      </Container>
    </main>
  );
}
