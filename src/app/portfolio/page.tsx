import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Trabalhos executados pela CJM em sistemas de exaustão profissional.",
};

const photos = [
  {
    src: "/fotos/limpeza-coifa-equipe.jpg",
    caption: "Limpeza técnica de coifa e filtros",
  },
  {
    src: "/fotos/limpeza-dutos-equipe.jpg",
    caption: "Limpeza de dutos de exaustão",
  },
  {
    src: "/fotos/manutencao-exaustor-motor.jpg",
    caption: "Manutenção de motor de exaustor",
  },
  {
    src: "/fotos/manutencao-exaustor-grelha.jpg",
    caption: "Manutenção de grelha de exaustão",
  },
  {
    src: "/fotos/limpeza-coifa-manual.jpg",
    caption: "Limpeza de superfície de coifa",
  },
  {
    src: "/fotos/coifa-industrial-instalada.jpg",
    caption: "Sistema de exaustão industrial",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Portfólio</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Trabalhos executados em coifas, dutos, exaustores, dampers e lavadores de gases.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-sm border border-brand-steel-light"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                width={800}
                height={600}
                className="h-56 w-full object-cover"
              />
              <figcaption className="border-t border-brand-steel-light p-3 text-sm text-neutral-700">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          Casos completos (cliente, estabelecimento, cidade e data) serão adicionados aqui
          conforme forem organizados.
        </p>

        <div className="mt-8">
          <CtaButtons />
        </div>
      </Container>
    </main>
  );
}
