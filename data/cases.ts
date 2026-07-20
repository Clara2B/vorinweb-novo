export type CaseCategory = "sites" | "lojas-virtuais" | "landing-pages" | "bots" | "sistemas";

export type CaseTestimonial = { quote: string; author: string; role: string };

export type Case = {
  slug: string;
  name: string;
  segment: string;
  categoryLabel: string;
  objective: string;
  description: string;
  technologies: string[];
  url: string | null;
  category: CaseCategory;
  // Detailed case-page content. `null` means the write-up isn't ready yet —
  // the page renders an honest "em produção" placeholder for that block
  // instead of fabricated text. Never fill these with invented content.
  challenge: string[] | null;
  solution: string[] | null;
  results: string[] | null;
  testimonial: CaseTestimonial | null;
};

// Casos reais, entregues e no ar. Não adicionar depoimentos ou cases fictícios aqui.
export const cases: Case[] = [
  {
    slug: "agr-climatizacao",
    name: "AGR Climatização",
    segment: "Serviços técnicos · São Paulo, SP",
    categoryLabel: "Site Institucional",
    objective: "Site institucional que passa profissionalismo e capta orçamento direto",
    description:
      "Precisava de um site institucional que passasse profissionalismo e captasse orçamento direto pelo WhatsApp, sem depender só de indicação. Construímos o site completo — serviços, diferenciais, depoimentos de clientes e formulário de contato integrado ao atendimento.",
    technologies: ["Site institucional", "Captação de orçamento", "Contato integrado"],
    url: "https://agrarcondicionado.com.br",
    category: "sites",
    challenge: [
      "A AGR Climatização, empresa de serviços técnicos em São Paulo, dependia quase exclusivamente de indicação para conseguir novos clientes.",
      "Sem um site profissional, era difícil transmitir credibilidade para quem pesquisava a empresa antes de fechar negócio — e cada pedido de orçamento exigia trocar várias mensagens manualmente até entender o que o cliente realmente precisava.",
    ],
    solution: [
      "Desenvolvemos um site institucional completo, com identidade visual própria, apresentação clara dos serviços e diferenciais da empresa, e depoimentos de clientes reais para reforçar a credibilidade.",
      "Um formulário de contato foi integrado diretamente ao atendimento da equipe, permitindo que o cliente já chegue até a AGR com o pedido de orçamento praticamente pronto para ser fechado.",
    ],
    results: [
      "Presença digital profissional, alinhada ao padrão de empresas consolidadas do setor",
      "Captação de orçamento direto pelo site, sem depender só de indicação",
      "Formulário de contato integrado ao atendimento da equipe",
      "Site rápido e responsivo, com boa experiência em qualquer dispositivo",
      "Estrutura pronta para SEO técnico e futuras campanhas de Google Ads",
    ],
    testimonial: {
      quote:
        "A VorinWeb conseguiu transformar exatamente a ideia que eu tinha em um site moderno, rápido e profissional. O atendimento foi excelente durante todo o processo e o resultado ficou acima das minhas expectativas. Recomendo para qualquer empresa que queira fortalecer sua presença digital.",
      author: "Rodrigo Alves",
      role: "AGR Climatização",
    },
  },
  {
    slug: "nu3tion",
    name: "Nu3tion — OraProtein®",
    segment: "E-commerce · Suplementos",
    categoryLabel: "Loja Virtual",
    objective: "Página de produto que vende sozinha, sem depender só de anúncio",
    description:
      "Precisava de uma página de produto capaz de converter visita em compra no primeiro clique, sem depender só de tráfego pago. Construímos a página completa — avaliações, estoque em tempo real, parcelamento e frete grátis configurados — pensada para transformar visita em compra.",
    technologies: ["Página de produto", "Avaliações", "Parcelamento", "Frete grátis"],
    url: "https://nu3tion.com.br",
    category: "lojas-virtuais",
    // TODO(conteúdo pendente): substituir por texto real assim que aprovado
    // pela Nu3tion. Não preencher com conteúdo genérico ou inventado.
    challenge: null,
    solution: null,
    results: null,
    testimonial: null,
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}
