import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo técnico sobre limpeza de coifas, dutos, exaustores e manutenção de sistemas de exaustão profissional.",
};

const upcomingTopics = [
  "Com que frequência limpar a coifa de uma cozinha industrial",
  "Riscos do acúmulo de gordura em dutos de exaustão",
  "Damper corta-fogo: o que verificar na manutenção preventiva",
  "Como funciona um lavador de gases em cozinhas profissionais",
];

export default function BlogPage() {
  return (
    <main>
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-brand-steel-light">
            Conteúdo técnico sobre limpeza, manutenção e engenharia de sistemas de exaustão.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="rounded-sm border border-dashed border-brand-steel-light p-10">
          <h2 className="text-lg font-bold text-brand-navy">Em breve</h2>
          <p className="mt-3 max-w-xl text-neutral-700">
            Estamos preparando os primeiros artigos técnicos. Temas planejados:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700">
            {upcomingTopics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span aria-hidden="true" className="text-brand-green">
                  •
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}
