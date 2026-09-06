import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "Laudos e Relatórios",
  description:
    "Documentação técnica dos serviços de limpeza e manutenção executados pela CJM: registro fotográfico, procedimentos e equipamentos atendidos.",
};

const items = [
  "Registro fotográfico do antes e depois do serviço",
  "Identificação do estabelecimento atendido",
  "Data de execução do serviço",
  "Equipamentos atendidos (coifa, dutos, exaustor, damper, lavador de gases)",
  "Descrição dos procedimentos realizados",
];

export default function LaudosPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Laudos e Relatórios</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Documentação dos serviços executados, para apoiar o histórico técnico do sistema de
            exaustão do seu estabelecimento.
          </p>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-brand-navy">O que é documentado</h2>
          <ul className="mt-4 space-y-3 text-neutral-700">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-brand-green">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-neutral-500">
            Não fazemos afirmações legais ou normativas (como emissão de ART ou laudos com valor
            normativo) sem confirmação prévia e formalização junto ao cliente.
          </p>
        </div>

        <div className="rounded-sm border border-brand-steel-light p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
            Precisa de um relatório para um serviço já executado?
          </h2>
          <p className="mt-3 text-sm text-neutral-700">
            Fale com a gente pelo WhatsApp informando o estabelecimento e a data aproximada do
            atendimento.
          </p>
          <div className="mt-4">
            <CtaButtons whatsappMessage="Olá, preciso do relatório de um serviço já executado pela CJM." />
          </div>
        </div>
      </Container>
    </main>
  );
}
