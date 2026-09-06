import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

const primaryServices = [
  {
    slug: "limpeza-de-coifas",
    number: "01",
    image: "/fotos/limpeza-coifa-equipe.jpg",
    alt: "Equipe realizando limpeza técnica em uma coifa industrial",
    layout: "lg:col-span-7",
    media: "aspect-[16/10]",
  },
  {
    slug: "limpeza-de-dutos",
    number: "02",
    image: "/fotos/limpeza-dutos-equipe.jpg",
    alt: "Profissionais realizando limpeza em um sistema de dutos",
    layout: "lg:col-span-5 lg:mt-24",
    media: "aspect-[4/5]",
  },
  {
    slug: "manutencao-de-exaustores",
    number: "03",
    image: "/fotos/manutencao-exaustor-grelha.jpg",
    alt: "Profissional realizando manutenção em equipamento de exaustão",
    layout: "lg:col-span-5",
    media: "aspect-[4/5]",
  },
  {
    slug: "lavadores-de-gases",
    number: "04",
    image: "/fotos/coifa-industrial-instalada.jpg",
    alt: "Instalação profissional em aço inox para cozinha industrial",
    layout: "lg:col-span-7 lg:mt-[-3rem]",
    media: "aspect-[16/10]",
  },
] as const;

const primarySlugs = new Set(primaryServices.map((item) => item.slug));
const remainingServices = services.filter(
  (service) => !primarySlugs.has(service.slug as (typeof primaryServices)[number]["slug"]),
);
const focusClassName =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green";

export function HomeServices() {
  return (
    <section className="bg-white px-6 pb-24 pt-10 sm:pb-28 md:px-10 lg:pb-36 lg:pt-16">
      <div className="mx-auto max-w-[90rem]">
        <h2 className="max-w-3xl text-[clamp(2.6rem,5.3vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-brand-navy">
          Serviços para o sistema completo
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
          Quatro frentes centrais de atendimento, conectadas a uma estrutura técnica mais ampla.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-24">
          {primaryServices.map((item) => {
            const service = services.find((candidate) => candidate.slug === item.slug);
            if (!service) return null;

            return (
              <article key={item.slug} className={`md:col-span-1 ${item.layout}`}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className={`group block ${focusClassName}`}
                  aria-label={`Conhecer o serviço de ${service.name}`}
                >
                  <div className={`relative overflow-hidden bg-brand-steel-light ${item.media}`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                      className="object-cover saturate-[0.78] transition duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                    />
                  </div>
                  <div className="grid grid-cols-[3rem_1fr] gap-4 border-t border-brand-navy/25 pt-5">
                    <span className="font-mono text-sm text-brand-green">{item.number}</span>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
                        {service.name}
                      </h3>
                      <p className="mt-3 max-w-xl leading-7 text-neutral-600">
                        {service.shortDescription}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-brand-navy transition-colors group-hover:text-brand-green">
                        Ver serviço <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-24 border-t border-brand-navy/25 pt-10 lg:mt-32">
          <h3 className="text-2xl font-semibold text-brand-navy">Outras frentes técnicas</h3>
          <div className="mt-8 grid gap-x-14 lg:grid-cols-2">
            {remainingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className={`group flex items-center justify-between gap-6 border-b border-brand-navy/15 py-5 text-lg font-medium text-brand-navy transition-colors hover:text-brand-green ${focusClassName}`}
              >
                {service.name}
                <span
                  className="text-brand-green transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
