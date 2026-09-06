export type City = {
  slug: string;
  name: string;
  region: string;
  profile: string;
  focus: string;
};

export const cities: City[] = [
  {
    slug: "vila-velha",
    name: "Vila Velha",
    region: "Grande Vitória, ES",
    profile:
      "Vila Velha tem forte vocação turística e gastronômica, com grande concentração de restaurantes, quiosques e hotéis na orla, especialmente nas regiões da Praia da Costa e de Itaparica.",
    focus:
      "Nessas operações, o fluxo alto nos finais de semana e temporada eleva o acúmulo de gordura em coifas e dutos, exigindo manutenção mais frequente.",
  },
  {
    slug: "vitoria",
    name: "Vitória",
    region: "capital do Espírito Santo",
    profile:
      "Vitória concentra hospitais, shoppings, prédios comerciais e um grande número de restaurantes corporativos no Centro e na Praia do Canto.",
    focus:
      "Cozinhas industriais de hospitais e centros comerciais costumam operar em regime contínuo, o que exige um programa de manutenção preventiva bem definido.",
  },
  {
    slug: "serra",
    name: "Serra",
    region: "Grande Vitória, ES",
    profile:
      "Serra é um dos maiores polos industriais do Espírito Santo, com grande presença de indústrias e refeitórios de grande porte.",
    focus:
      "Refeitórios industriais de alto volume exigem sistemas de exaustão dimensionados para operação intensa, com atenção especial a exaustores e dampers corta-fogo.",
  },
  {
    slug: "cariacica",
    name: "Cariacica",
    region: "Grande Vitória, ES",
    profile:
      "Cariacica é um importante polo logístico e industrial da Grande Vitória, com operações de armazenagem, indústrias e estabelecimentos comerciais.",
    focus:
      "Nessas operações, a manutenção programada do sistema de exaustão ajuda a evitar paradas não planejadas que afetam a produção ou o atendimento.",
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
