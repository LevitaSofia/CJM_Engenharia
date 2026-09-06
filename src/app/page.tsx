import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaButtons } from "@/components/CtaButtons";
import { services } from "@/lib/site";

const processSteps = [
  {
    title: "Contato e avaliação",
    description:
      "Você envia estabelecimento, cidade e o que precisa (coifa, dutos, exaustor, damper, lavador de gases). Avaliamos e retornamos com um plano de atendimento.",
  },
  {
    title: "Execução técnica",
    description:
      "Atendimento programado para minimizar impacto na operação da cozinha, com equipe treinada e procedimentos adequados a cada equipamento.",
  },
  {
    title: "Registro e relatório",
    description:
      "Registro fotográfico e descrição dos serviços executados, para você manter o histórico de manutenção do sistema de exaustão.",
  },
];

const faq = [
  {
    question: "Quais tipos de estabelecimento a CJM atende?",
    answer:
      "Restaurantes, cozinhas industriais, supermercados, hotéis, hospitais e demais operações com sistemas profissionais de exaustão.",
  },
  {
    question: "É possível atender fora do horário de operação da cozinha?",
    answer:
      "Sim, o atendimento pode ser programado conforme a rotina do estabelecimento, para reduzir o impacto na operação.",
  },
  {
    question: "O serviço inclui registro fotográfico?",
    answer:
      "Sim, os serviços executados são documentados com registro fotográfico do antes e depois.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <Image
          src="/fotos/coifa-industrial-instalada.jpg"
          alt="Sistema de exaustão industrial instalado em cozinha profissional"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />
        <Container className="relative flex flex-col gap-8 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              CJM · Engenharia e Limpeza de Coifas
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engenharia, limpeza e manutenção para sistemas de exaustão profissional
            </h1>
            <p className="mt-6 text-lg text-brand-steel-light">
              Soluções técnicas para coifas, dutos, exaustores, lavadores de gases e sistemas de
              ventilação. Segurança, eficiência e conformidade para cozinhas profissionais.
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
          </div>
        </Container>
      </section>

      {/* Credibilidade */}
      <section className="border-b border-brand-steel-light bg-white">
        <Container className="grid gap-6 py-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Engenharia + limpeza técnica",
            "Registro fotográfico dos serviços",
            "Atendimento programado",
            "Foco em segurança contra incêndio",
          ].map((item) => (
            <p key={item} className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
              {item}
            </p>
          ))}
        </Container>
      </section>

      {/* Sobre resumo */}
      <section>
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Sobre a CJM
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Engenharia + limpeza técnica + manutenção + segurança
            </h2>
            <p className="mt-4 text-neutral-700">
              A CJM atua em limpeza técnica, manutenção e engenharia aplicada a sistemas de
              exaustão de cozinhas profissionais — coifas, dutos, filtros, exaustores,
              exaustores centrífugos, dampers corta-fogo, lavadores de gases e sistemas de
              ventilação.
            </p>
            <p className="mt-4 text-neutral-700">
              Cada serviço é documentado com registro fotográfico e descrição dos procedimentos
              executados, para apoiar o histórico de manutenção do estabelecimento.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-block text-sm font-semibold text-brand-green hover:underline"
            >
              Conheça a CJM →
            </Link>
          </div>
          <div className="rounded-sm border border-brand-steel-light bg-brand-steel-light/40 p-8">
            <h3 className="text-lg font-bold text-brand-navy">
              Seu sistema de exaustão está realmente em condições adequadas?
            </h3>
            <p className="mt-3 text-neutral-700">
              Acúmulo de gordura, perda de eficiência e falta de manutenção podem comprometer o
              funcionamento e a segurança da instalação.
            </p>
            <p className="mt-3 text-neutral-700">
              A CJM realiza avaliação, limpeza técnica, manutenção e documentação dos serviços
              executados.
            </p>
            <div className="mt-6">
              <CtaButtons whatsappMessage="Olá, gostaria de solicitar uma avaliação do meu sistema de exaustão." />
            </div>
          </div>
        </Container>
      </section>

      {/* Serviços */}
      <section className="bg-brand-steel-light/30">
        <Container className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Serviços
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Soluções para todo o sistema de exaustão
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group rounded-sm border border-brand-steel-light bg-white p-6 transition hover:border-brand-green"
              >
                <h3 className="font-bold text-brand-navy group-hover:text-brand-green">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Engenharia */}
      <section>
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Engenharia
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Serviços técnicos compatíveis com a habilitação da empresa
            </h2>
            <p className="mt-4 text-neutral-700">
              Além da limpeza técnica, a CJM oferece avaliações e soluções para sistemas de
              exaustão, sempre dentro das atribuições técnicas da empresa.
            </p>
            <Link
              href="/engenharia"
              className="mt-6 inline-block text-sm font-semibold text-brand-green hover:underline"
            >
              Saiba mais sobre engenharia →
            </Link>
          </div>
          <div className="rounded-sm border border-brand-steel-light p-8">
            <h3 className="text-lg font-bold text-brand-navy">Laudos e relatórios</h3>
            <p className="mt-3 text-neutral-700">
              Cada serviço pode ser acompanhado de registro fotográfico, identificação do
              estabelecimento, data de execução e descrição dos procedimentos realizados.
            </p>
            <Link
              href="/laudos-e-relatorios"
              className="mt-6 inline-block text-sm font-semibold text-brand-green hover:underline"
            >
              Ver laudos e relatórios →
            </Link>
          </div>
        </Container>
      </section>

      {/* Processo */}
      <section className="bg-brand-navy text-white">
        <Container className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Como funciona
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Processo de atendimento</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green font-bold">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-steel-light">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfólio teaser */}
      <section>
        <Container className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Portfólio
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Trabalhos executados
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Estamos organizando o registro fotográfico dos trabalhos executados para publicar
            aqui um portfólio com casos reais, por tipo de serviço e estabelecimento atendido.
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-block text-sm font-semibold text-brand-green hover:underline"
          >
            Ver portfólio →
          </Link>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-steel-light/30">
        <Container className="py-16">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Perguntas frequentes
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {faq.map((item) => (
              <div key={item.question} className="rounded-sm border border-brand-steel-light bg-white p-6">
                <p className="font-semibold text-brand-navy">{item.question}</p>
                <p className="mt-2 text-sm text-neutral-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-brand-navy text-white">
        <Container className="flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Solicite uma avaliação do seu sistema de exaustão
          </h2>
          <p className="max-w-xl text-brand-steel-light">
            Informe estabelecimento, cidade, quantidade de coifas e exaustores e receba um
            orçamento.
          </p>
          <CtaButtons align="center" />
        </Container>
      </section>
    </main>
  );
}
