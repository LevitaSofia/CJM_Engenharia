import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "Engenharia",
  description:
    "Avaliações e soluções técnicas para sistemas de exaustão profissional, compatíveis com a habilitação técnica da CJM.",
};

const items = [
  {
    title: "Avaliação técnica do sistema",
    description:
      "Levantamento das condições atuais de coifas, dutos, exaustores, dampers e lavadores de gases, identificando pontos críticos de segurança e eficiência.",
  },
  {
    title: "Recomendações de manutenção e ajuste",
    description:
      "Indicação de intervenções necessárias para restaurar a capacidade de exaustão projetada e reduzir riscos associados ao acúmulo de gordura e resíduos.",
  },
  {
    title: "Documentação técnica",
    description:
      "Registro fotográfico e descrição dos procedimentos executados, para apoiar o histórico técnico do sistema de exaustão do estabelecimento.",
  },
];

export default function EngenhariaPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Engenharia</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Serviços de engenharia compatíveis com a habilitação técnica da empresa, aplicados a
            sistemas de exaustão profissional.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-sm border border-brand-steel-light p-6">
              <h2 className="font-bold text-brand-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-neutral-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-brand-steel-light bg-brand-steel-light/30 p-8">
          <p className="text-neutral-700">
            Laudos normativos, emissão de ART, certificações e demais atribuições profissionais
            formais são oferecidos apenas quando previamente confirmados e documentados junto ao
            cliente, conforme a habilitação técnica da empresa.
          </p>
        </div>

        <div className="mt-10">
          <CtaButtons whatsappMessage="Olá, gostaria de solicitar uma avaliação técnica de engenharia para o meu sistema de exaustão." />
        </div>
      </Container>
    </main>
  );
}
