import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Limpeza de coifas, dutos, filtros, exaustores, damper corta-fogo, lavadores de gases e sistemas de ventilação para cozinhas profissionais.",
};

export default function ServicosPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Serviços</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Soluções técnicas para coifas, dutos, exaustores, dampers corta-fogo, lavadores de
            gases e sistemas de ventilação de cozinhas profissionais.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="group rounded-sm border border-brand-steel-light p-6 transition hover:border-brand-green"
            >
              <h2 className="text-lg font-bold text-brand-navy group-hover:text-brand-green">
                {service.name}
              </h2>
              <p className="mt-2 text-sm text-neutral-700">{service.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-green">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
