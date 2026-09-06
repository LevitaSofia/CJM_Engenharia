import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";

const positioning = ["Engenharia", "Limpeza técnica", "Manutenção", "Segurança"];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendimento da operação, dos equipamentos e das condições encontradas no sistema.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Definição do escopo e programação do atendimento para reduzir impacto na rotina.",
  },
  {
    number: "03",
    title: "Execução",
    description: "Limpeza técnica ou manutenção adequada aos componentes atendidos.",
  },
  {
    number: "04",
    title: "Documentação",
    description: "Registro fotográfico e descrição dos serviços para o histórico de manutenção.",
  },
];

const faq = [
  {
    question: "Quais tipos de estabelecimento a CJM atende?",
    answer:
      "Restaurantes, cozinhas industriais, supermercados, hotéis, hospitais e outras operações com sistemas profissionais de exaustão.",
  },
  {
    question: "É possível atender fora do horário de operação da cozinha?",
    answer:
      "Sim. O atendimento pode ser programado conforme a rotina do estabelecimento para reduzir o impacto na operação.",
  },
  {
    question: "O serviço inclui registro fotográfico?",
    answer:
      "Os serviços executados podem ser documentados com registros do estado encontrado e dos procedimentos realizados.",
  },
];

const focusClassName =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-foreground">
      <HomeHero />

      <section
        aria-label="Posicionamento da CJM"
        className="border-b border-brand-navy/15 bg-[#f3f6f7]"
      >
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 px-6 md:px-10 lg:grid-cols-4">
          {positioning.map((item, index) => (
            <p
              key={item}
              className={`flex min-h-24 items-center text-sm font-semibold uppercase tracking-[0.12em] text-brand-navy sm:text-base lg:min-h-28 lg:px-8 ${
                index % 2 === 1 ? "border-l border-brand-navy/15" : ""
              } ${index > 1 ? "border-t border-brand-navy/15 lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28 md:px-10 lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          <div className="relative min-h-[28rem] overflow-hidden bg-brand-steel-light lg:col-span-7 lg:min-h-[42rem]">
            <Image
              src="/fotos/limpeza-coifa-equipe.jpg"
              alt="Equipe técnica realizando a limpeza de uma coifa industrial"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center saturate-[0.82]"
            />
          </div>

          <div className="lg:col-span-5 lg:pr-8">
            <h2 className="max-w-xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-brand-navy">
              Soluções completas em sistemas de exaustão
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              A CJM reúne limpeza técnica, manutenção e serviços de engenharia compatíveis com
              sua habilitação para cuidar dos principais componentes de sistemas profissionais.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
              O atendimento considera a operação do estabelecimento, as condições encontradas e
              a necessidade de manter um histórico claro dos serviços executados.
            </p>
            <Link
              href="/sobre"
              className={`mt-9 inline-flex items-center gap-3 border-b border-brand-green pb-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-navy transition-colors hover:text-brand-green ${focusClassName}`}
            >
              Conheça a CJM <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <HomeServices />

      <section className="home-technical-grid bg-brand-navy px-6 py-24 text-white sm:py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="max-w-4xl text-[clamp(2.6rem,5.2vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
            Engenharia aplicada à eficiência e segurança
          </h2>

          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="max-w-lg text-lg leading-8 text-brand-steel-light">
                Cada sistema exige leitura técnica do conjunto. Coifa, dutos, exaustores,
                dampers, lavadores de gases e ventilação precisam funcionar como uma instalação
                integrada.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                <Link
                  href="/engenharia"
                  className={`border-b border-brand-green pb-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:text-brand-green ${focusClassName}`}
                >
                  Ver engenharia
                </Link>
                <Link
                  href="/laudos-e-relatorios"
                  className={`border-b border-white/40 pb-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors hover:border-brand-green hover:text-brand-green ${focusClassName}`}
                >
                  Laudos e relatórios
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              {[
                [
                  "Avaliação do conjunto",
                  "Leitura das condições do sistema e identificação dos pontos que exigem atenção.",
                ],
                [
                  "Execução coordenada",
                  "Procedimentos organizados de acordo com os equipamentos e a rotina do local.",
                ],
                [
                  "Histórico técnico",
                  "Registros fotográficos e descrição do atendimento para apoiar o acompanhamento periódico.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="grid gap-3 border-t border-white/20 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10"
                >
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="leading-7 text-brand-steel-light">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f7] px-6 py-24 sm:py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-brand-navy">
            Antes e depois com registro do mesmo serviço
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
            A estrutura está pronta para receber comparações reais, sempre vinculadas ao mesmo
            equipamento e atendimento.
          </p>

          <figure className="mt-14 border-y border-brand-navy/20">
            <div className="grid md:grid-cols-2">
              <div className="flex min-h-72 flex-col justify-between bg-[#dfe5e7] p-8 sm:min-h-96 sm:p-12 md:border-r md:border-brand-navy/20">
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-brand-steel">
                  Antes
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-navy">Estado encontrado</h3>
                  <p className="mt-3 max-w-md leading-7 text-neutral-600">
                    Espaço reservado para o registro anterior à execução do serviço.
                  </p>
                </div>
              </div>
              <div className="flex min-h-72 flex-col justify-between bg-white p-8 sm:min-h-96 sm:p-12">
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-brand-green">
                  Depois
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-navy">Serviço concluído</h3>
                  <p className="mt-3 max-w-md leading-7 text-neutral-600">
                    Espaço reservado para o registro do mesmo equipamento após a execução.
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="border-t border-brand-navy/20 py-5 text-sm leading-6 text-neutral-600">
              Nenhum resultado foi simulado. Os pares serão publicados quando o arquivo real de
              antes e depois estiver disponível.
            </figcaption>
          </figure>

          <Link
            href="/portfolio"
            className={`mt-8 inline-flex items-center gap-3 border-b border-brand-green pb-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-navy transition-colors hover:text-brand-green ${focusClassName}`}
          >
            Acompanhar portfólio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-brand-navy">
            Um processo claro do diagnóstico ao registro
          </h2>

          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className={`border-t border-brand-navy/25 pt-6 lg:min-h-72 lg:px-7 ${
                  index > 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <span className="font-mono text-sm text-brand-green">{step.number}</span>
                <h3 className="mt-8 text-2xl font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-neutral-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-brand-navy/15 bg-white px-6 py-24 sm:py-28 md:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-12 lg:gap-20">
          <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-semibold leading-none tracking-[-0.045em] text-brand-navy lg:col-span-5">
            Perguntas frequentes
          </h2>
          <div className="lg:col-span-7">
            {faq.map((item) => (
              <details key={item.question} className="group border-b border-brand-navy/20 py-6">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-brand-navy marker:content-none ${focusClassName}`}
                >
                  {item.question}
                  <span
                    className="text-2xl font-light text-brand-green transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-5 leading-7 text-neutral-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-dark px-6 py-24 text-white sm:py-28 md:px-10 lg:py-32">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-4xl text-[clamp(2.7rem,5.5vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Seu sistema de exaustão precisa de atenção?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-steel-light">
              Fale com a CJM e descreva o estabelecimento, os equipamentos e o serviço necessário.
            </p>
          </div>
          <Link
            href="/solicitar-orcamento"
            className={`inline-flex min-h-14 shrink-0 items-center justify-center bg-brand-green px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-brand-green-dark active:translate-y-px ${focusClassName}`}
          >
            Solicitar avaliação
          </Link>
        </div>
      </section>
    </main>
  );
}
