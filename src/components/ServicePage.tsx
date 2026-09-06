import Image from "next/image";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { Container } from "@/components/Container";
import { cities } from "@/lib/cities";
import type { Service } from "@/lib/site";

export function ServicePage({ service }: { service: Service }) {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-steel-light">
            Serviços
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">{service.shortDescription}</p>
          <div className="mt-8">
            <CtaButtons whatsappMessage={`Olá, gostaria de solicitar um orçamento para ${service.name.toLowerCase()} com a CJM.`} />
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-brand-navy">O problema</h2>
          <p className="mt-3 text-neutral-700">{service.problem}</p>

          <h2 className="mt-10 text-xl font-bold text-brand-navy">Como fazemos</h2>
          <div className="mt-3 space-y-3 text-neutral-700">
            {service.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {service.faq.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold text-brand-navy">Perguntas frequentes</h2>
              <div className="mt-3 space-y-6">
                {service.faq.map((item) => (
                  <div key={item.question}>
                    <p className="font-semibold text-brand-navy">{item.question}</p>
                    <p className="mt-1 text-neutral-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-8">
          {service.photo && (
            <div className="overflow-hidden rounded-sm border border-brand-steel-light">
              <Image
                src={service.photo}
                alt={`Serviço de ${service.name.toLowerCase()} executado pela CJM`}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

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

          <div className="rounded-sm border border-brand-steel-light p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Benefícios
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-green">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {service.slug === "limpeza-de-coifas" && (
        <Container className="pb-16">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
            Atendimento por cidade
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/limpeza-de-coifas-${city.slug}`}
                className="rounded-sm border border-brand-steel-light px-4 py-2 text-sm text-brand-navy transition hover:border-brand-green"
              >
                Limpeza de coifas em {city.name}
              </Link>
            ))}
          </div>
        </Container>
      )}

      <section className="bg-brand-steel-light">
        <Container className="flex flex-col items-center gap-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-brand-navy">
            Seu sistema de exaustão está em condições adequadas?
          </h2>
          <p className="max-w-xl text-neutral-700">
            Solicite uma avaliação técnica e receba um orçamento para {service.name.toLowerCase()}.
          </p>
          <CtaButtons align="center" whatsappMessage={`Olá, gostaria de solicitar um orçamento para ${service.name.toLowerCase()} com a CJM.`} />
        </Container>
      </section>
    </main>
  );
}
