import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";
import type { City } from "@/lib/cities";
import { getService } from "@/lib/site";

export function LocalServicePage({ city }: { city: City }) {
  const service = getService("limpeza-de-coifas")!;

  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-steel-light">
            {city.name} · {city.region}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Limpeza de Coifas em {city.name}
          </h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Limpeza técnica de coifas industriais para restaurantes, hotéis, indústrias e demais
            estabelecimentos de {city.name}.
          </p>
          <div className="mt-8">
            <CtaButtons whatsappMessage={`Olá, gostaria de solicitar um orçamento para limpeza de coifas em ${city.name} com a CJM.`} />
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-brand-navy">Atendimento em {city.name}</h2>
          <p className="mt-3 text-neutral-700">{city.profile}</p>
          <p className="mt-4 text-neutral-700">{city.focus}</p>

          <h2 className="mt-10 text-xl font-bold text-brand-navy">Como fazemos</h2>
          <div className="mt-3 space-y-3 text-neutral-700">
            {service.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-sm border border-brand-steel-light p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Etapas do atendimento
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-neutral-700">
              {service.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <Link
            href="/servicos/limpeza-de-coifas"
            className="block text-sm font-semibold text-brand-green hover:underline"
          >
            Ver detalhes do serviço de limpeza de coifas →
          </Link>
        </div>
      </Container>

      <section className="bg-brand-steel-light">
        <Container className="flex flex-col items-center gap-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-brand-navy">
            Solicite uma avaliação em {city.name}
          </h2>
          <CtaButtons align="center" whatsappMessage={`Olá, gostaria de solicitar uma avaliação de limpeza de coifas em ${city.name} com a CJM.`} />
        </Container>
      </section>
    </main>
  );
}
