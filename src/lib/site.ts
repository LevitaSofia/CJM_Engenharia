export const company = {
  name: "CJM",
  legalName: "CJM – Limpeza de Coifas e Manutenção de Exaustores Ltda.",
  tagline: "Engenharia, limpeza e manutenção para sistemas de exaustão profissional",
  cnpj: "42.536.340/0001-81",
  phones: ["(27) 99900-9576", "(27) 99630-2371"],
  whatsapp: "5527999009576",
  whatsappDisplay: "+55 27 99900-9576",
  email: "cristianecjm123@gmail.com",
  address: {
    street: "Av. Rui Braga Ribeiro, 1230",
    city: "Vila Velha",
    state: "ES",
    zip: "29109-045",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Olá, gostaria de solicitar um orçamento para serviços de exaustão e limpeza técnica com a CJM.";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  problem: string;
  description: string[];
  steps: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
  photo?: string;
};

export const services: Service[] = [
  {
    slug: "limpeza-de-coifas",
    name: "Limpeza de Coifas",
    shortDescription:
      "Remoção técnica de gordura e resíduos em coifas de cozinhas profissionais.",
    photo: "/fotos/limpeza-coifa-equipe.jpg",
    problem:
      "O acúmulo de gordura em coifas reduz a eficiência da exaustão, aumenta o risco de incêndio e compromete as condições de higiene da cozinha.",
    description: [
      "A limpeza de coifas industriais exige remoção completa da gordura acumulada nas superfícies internas, nos filtros e nas junções da estrutura, sem danificar o acabamento em aço inox.",
      "O serviço é executado com produtos e procedimentos adequados a ambientes de cozinha profissional, respeitando a rotina de funcionamento do estabelecimento.",
    ],
    steps: [
      "Vistoria inicial da coifa e do nível de acúmulo de gordura",
      "Isolamento da área e proteção de equipamentos próximos",
      "Desengorduramento das superfícies internas e externas",
      "Limpeza dos filtros e componentes removíveis",
      "Inspeção final e registro fotográfico do serviço executado",
    ],
    benefits: [
      "Redução do risco de incêndio por acúmulo de gordura",
      "Melhora na eficiência de exaustão",
      "Ambiente de cozinha mais limpo e dentro de condições adequadas de operação",
    ],
    faq: [
      {
        question: "Com que frequência a coifa deve ser limpa?",
        answer:
          "Depende do volume de uso da cozinha. Cozinhas de alto volume costumam exigir limpeza mais frequente que operações de menor porte. Uma avaliação técnica do local indica o intervalo adequado.",
      },
    ],
  },
  {
    slug: "limpeza-de-dutos",
    name: "Limpeza de Dutos",
    shortDescription:
      "Remoção de incrustações de gordura no interior de dutos de exaustão.",
    photo: "/fotos/limpeza-dutos-equipe.jpg",
    problem:
      "Dutos com incrustações internas de gordura perdem eficiência de exaustão e representam ponto crítico de propagação em caso de incêndio.",
    description: [
      "A limpeza interna de dutos remove camadas de gordura que se acumulam ao longo do tempo de operação, restaurando a capacidade de exaustão do sistema.",
      "O acesso é feito pelos pontos de inspeção existentes ou por aberturas técnicas criadas especificamente para o serviço, quando necessário.",
    ],
    steps: [
      "Inspeção do trecho de dutos e identificação dos pontos de acesso",
      "Remoção mecânica e química das incrustações de gordura",
      "Limpeza dos trechos horizontais e verticais acessíveis",
      "Fechamento e vedação dos pontos de acesso",
      "Registro fotográfico do interior antes e depois do serviço",
    ],
    benefits: [
      "Restauração da capacidade de exaustão do sistema",
      "Redução do risco de propagação de incêndio pelos dutos",
      "Conformidade com boas práticas de manutenção de sistemas de exaustão",
    ],
    faq: [],
  },
  {
    slug: "limpeza-de-filtros",
    name: "Limpeza de Filtros",
    shortDescription:
      "Higienização e manutenção de filtros de gordura de coifas e sistemas de exaustão.",
    photo: "/fotos/limpeza-coifa-manual.jpg",
    problem:
      "Filtros saturados de gordura perdem eficiência de retenção e aumentam a carga de incêndio do sistema de exaustão.",
    description: [
      "Os filtros de gordura são desmontados, higienizados e inspecionados individualmente para verificar condições de uso e necessidade de substituição.",
    ],
    steps: [
      "Remoção dos filtros",
      "Higienização em profundidade",
      "Inspeção de integridade e vedação",
      "Reinstalação e verificação de encaixe",
    ],
    benefits: [
      "Manutenção da eficiência de retenção de gordura",
      "Redução da carga de incêndio nos filtros",
    ],
    faq: [],
  },
  {
    slug: "manutencao-de-exaustores",
    name: "Manutenção de Exaustores",
    shortDescription:
      "Inspeção, limpeza e manutenção de exaustores de cozinhas profissionais.",
    photo: "/fotos/manutencao-exaustor-motor.jpg",
    problem:
      "Exaustores sem manutenção periódica perdem desempenho, aumentam o consumo de energia e podem falhar durante a operação.",
    description: [
      "A manutenção inclui limpeza do rotor, verificação de motor e rolamentos, checagem de fixação e avaliação geral do funcionamento do equipamento.",
    ],
    steps: [
      "Inspeção visual e funcional do exaustor",
      "Limpeza do rotor e da carcaça",
      "Verificação de motor, rolamentos e fixações",
      "Testes de funcionamento após o serviço",
    ],
    benefits: [
      "Maior vida útil do equipamento",
      "Redução de falhas durante a operação",
      "Manutenção da eficiência de exaustão",
    ],
    faq: [],
  },
  {
    slug: "exaustores-centrifugos",
    name: "Exaustores Centrífugos",
    shortDescription:
      "Limpeza, inspeção e manutenção de exaustores centrífugos industriais.",
    problem:
      "Exaustores centrífugos expostos a gordura e resíduos de cozinha acumulam sujidade na turbina, reduzindo a vazão de ar do sistema.",
    description: [
      "O serviço contempla a limpeza da turbina, carcaça e componentes de acesso do exaustor centrífugo, além da verificação do estado geral do equipamento.",
    ],
    steps: [
      "Desmontagem dos componentes de acesso",
      "Limpeza da turbina e carcaça",
      "Verificação de balanceamento e fixação",
      "Remontagem e teste de funcionamento",
    ],
    benefits: [
      "Restauração da vazão de ar projetada",
      "Redução de vibração e ruído por desbalanceamento",
    ],
    faq: [],
  },
  {
    slug: "damper-corta-fogo",
    name: "Damper Corta-Fogo",
    shortDescription: "Inspeção, limpeza e manutenção de dampers corta-fogo.",
    problem:
      "Um damper corta-fogo obstruído por gordura ou com falha mecânica pode não fechar corretamente em caso de incêndio.",
    description: [
      "A inspeção verifica o acionamento, a vedação e o estado de limpeza do damper, componente crítico de segurança contra incêndio no sistema de exaustão.",
    ],
    steps: [
      "Inspeção visual e funcional do damper",
      "Limpeza dos componentes internos",
      "Verificação do mecanismo de acionamento",
      "Registro fotográfico do estado encontrado e do serviço executado",
    ],
    benefits: [
      "Maior confiabilidade do sistema de contenção de incêndio",
      "Identificação precoce de falhas mecânicas",
    ],
    faq: [],
  },
  {
    slug: "lavadores-de-gases",
    name: "Lavadores de Gases",
    shortDescription: "Limpeza e manutenção de lavadores de gases (scrubbers).",
    problem:
      "Lavadores de gases sem manutenção perdem eficiência de tratamento do ar exaurido e podem apresentar acúmulo de resíduos e odores.",
    description: [
      "O serviço inclui limpeza do sistema de lavagem, verificação de bicos aspersores, bombas e do estado geral do equipamento.",
    ],
    steps: [
      "Inspeção do sistema de lavagem de gases",
      "Limpeza de bicos aspersores e reservatório",
      "Verificação de bombas e circulação de água",
      "Teste de funcionamento após o serviço",
    ],
    benefits: [
      "Manutenção da eficiência de tratamento do ar",
      "Redução de odores e resíduos acumulados",
    ],
    faq: [],
  },
  {
    slug: "sistemas-de-ventilacao",
    name: "Sistemas de Ventilação",
    shortDescription:
      "Avaliação e manutenção de sistemas de ventilação de cozinhas e ambientes industriais.",
    photo: "/fotos/manutencao-exaustor-grelha.jpg",
    problem:
      "Sistemas de ventilação mal dimensionados ou sem manutenção comprometem a qualidade do ar e o conforto térmico do ambiente.",
    description: [
      "Avaliação técnica do sistema de ventilação como um todo, considerando insuflamento, exaustão e renovação de ar do ambiente.",
    ],
    steps: [
      "Levantamento das condições atuais do sistema",
      "Identificação de pontos críticos",
      "Recomendações técnicas de ajuste ou manutenção",
    ],
    benefits: [
      "Melhora na qualidade do ar do ambiente",
      "Identificação de pontos de ineficiência do sistema",
    ],
    faq: [],
  },
  {
    slug: "manutencao-preventiva",
    name: "Manutenção Preventiva",
    shortDescription:
      "Programa periódico de limpeza e manutenção do sistema de exaustão completo.",
    problem:
      "A ausência de um programa preventivo faz com que problemas só sejam identificados quando já afetam a operação ou a segurança.",
    description: [
      "O programa preventivo organiza a periodicidade de limpeza e inspeção de coifas, dutos, filtros, exaustores e dampers, com registro histórico de cada visita.",
    ],
    steps: [
      "Definição da periodicidade adequada ao volume de operação",
      "Execução das visitas programadas",
      "Registro fotográfico e histórico de cada serviço",
      "Recomendações de ajuste conforme o uso do estabelecimento",
    ],
    benefits: [
      "Previsibilidade de custos de manutenção",
      "Histórico documentado do sistema de exaustão",
      "Redução de paradas não programadas",
    ],
    faq: [],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const nav = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Engenharia", href: "/engenharia" },
  { label: "Laudos", href: "/laudos-e-relatorios" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;
