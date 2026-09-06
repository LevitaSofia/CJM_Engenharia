import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a CJM, empresa especializada em engenharia, limpeza técnica e manutenção de sistemas de exaustão profissional.",
};

export default function SobrePage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Sobre a CJM</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Engenharia, limpeza técnica e manutenção para sistemas de exaustão profissional.
          </p>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-brand-navy">O que fazemos</h2>
          <p className="mt-3 text-neutral-700">
            A {company.legalName} atua em limpeza técnica, manutenção e engenharia aplicada a
            sistemas de exaustão de cozinhas profissionais: coifas, dutos, filtros, exaustores,
            exaustores centrífugos, dampers corta-fogo, lavadores de gases e sistemas de
            ventilação.
          </p>
          <p className="mt-4 text-neutral-700">
            O trabalho é orientado por três frentes: segurança (redução do risco de incêndio por
            acúmulo de gordura), eficiência (restauração da capacidade de exaustão projetada) e
            documentação (registro fotográfico e descrição dos serviços executados).
          </p>

          <h2 className="mt-10 text-xl font-bold text-brand-navy">Quem atendemos</h2>
          <p className="mt-3 text-neutral-700">
            Restaurantes, cozinhas industriais, supermercados, hotéis, hospitais e demais
            operações com sistemas profissionais de exaustão.
          </p>

          <h2 className="mt-10 text-xl font-bold text-brand-navy">Compromisso técnico</h2>
          <p className="mt-3 text-neutral-700">
            Os serviços de engenharia oferecidos são compatíveis com a habilitação técnica da
            empresa. Laudos normativos, ARTs e certificações formais só são atribuídos ao serviço
            quando previamente confirmados e documentados para o cliente.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-sm border border-brand-steel-light p-6">
            <Image
              src="/brand/cjm-logo.png"
              alt="CJM Engenharia e Limpeza de Coifas — serviços de engenharia, limpeza de coifas, manutenção de exaustores, segurança e qualidade"
              width={1536}
              height={1024}
              className="w-full"
            />
          </div>

          <div className="rounded-sm border border-brand-steel-light p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Dados da empresa
            </h2>
            <dl className="mt-4 space-y-2 text-sm text-neutral-700">
              <div>
                <dt className="font-semibold text-brand-navy">Razão social</dt>
                <dd>{company.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">CNPJ</dt>
                <dd>{company.cnpj}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Endereço</dt>
                <dd>
                  {company.address.street} — {company.address.city}/{company.address.state},
                  CEP {company.address.zip}
                </dd>
              </div>
            </dl>
          </div>

          <CtaButtons />
        </div>
      </Container>
    </main>
  );
}
