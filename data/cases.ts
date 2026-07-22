export type CaseCategory = "sites" | "lojas-virtuais" | "landing-pages" | "bots" | "sistemas";

export type CaseTestimonial = {
  quote: string;
  author: string;
  role: string;
  // Optional — omit while the asset hasn't been provided yet. Never fake these.
  photo?: string;
  companyLogo?: string;
};

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
    slug: "agr-ar-condicionado",
    name: "AGR Ar Condicionado",
    segment: "Serviços técnicos · São Paulo, SP",
    categoryLabel: "Site Institucional",
    objective: "Site institucional que passa profissionalismo e capta orçamento direto",
    description:
      "Precisava de um site institucional que passasse profissionalismo e captasse orçamento direto pelo WhatsApp, sem depender só de indicação. Construímos o site completo — serviços, diferenciais, depoimentos de clientes e formulário de contato integrado ao atendimento.",
    technologies: ["Site institucional", "Captação de orçamento", "Contato integrado"],
    url: "https://agrarcondicionado.com.br",
    category: "sites",
    challenge: [
      "A AGR Ar Condicionado, empresa de serviços técnicos em São Paulo, dependia quase exclusivamente de indicação para conseguir novos clientes.",
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
      role: "AGR Ar Condicionado",
      // photo: pending — Rodrigo's photo hasn't been provided yet.
      companyLogo: "/images/agr/logo.webp",
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
    challenge: [
      "A Nu3tion precisava lançar a página de produto do OraProtein® com uma apresentação moderna e intuitiva, alinhada à qualidade do produto — sem depender só de tráfego pago para converter quem chegasse até ela.",
      "O desafio não era só técnico: a página precisava traduzir exatamente a ideia que o cliente já tinha em mente, dentro de um prazo organizado e com espaço para ajustes ao longo do caminho.",
    ],
    solution: [
      "Construímos a página de produto do zero, com navegação intuitiva, avaliações, estoque em tempo real, parcelamento e frete grátis configurados — mantendo comunicação constante com a Nu3tion em cada etapa para incorporar sugestões e ajustar decisões de design.",
      "Cada dúvida foi respondida rapidamente e cada desafio do projeto teve uma solução encontrada em conjunto, sem travar o andamento da entrega.",
    ],
    results: [
      "Site moderno e intuitivo, exatamente como a Nu3tion imaginava",
      "Processo organizado, com atenção aos detalhes do início ao fim",
      "Disponibilidade constante para dúvidas, sugestões e ajustes",
      "Agilidade na resolução de cada desafio ao longo do projeto",
      "Entrega de alta qualidade, acima das expectativas do cliente",
    ],
    testimonial: {
      quote:
        "Contratar a VorinWeb foi uma ótima escolha e uma excelente experiência. Desde o início, demonstraram muito profissionalismo, organização e atenção aos detalhes. O novo site da Nu3tion ficou moderno, intuitivo e exatamente como imaginávamos.\n\nAlém da qualidade técnica, a equipe esteve sempre disponível para esclarecer dúvidas, sugerir melhorias e encontrar soluções rápidas para cada desafio do projeto. A dedicação, o comprometimento e a criatividade fizeram toda a diferença no resultado final, resultando em uma entrega de alta qualidade.\n\nRecomendo a VorinWeb. Estamos muito satisfeitos com o resultado e com toda a experiência.",
      author: "Lucas Rizzi",
      role: "Nu3tion",
      photo: "/images/nu3tion/lucas-rizzi.webp",
      companyLogo: "/images/nu3tion/logo.webp",
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}
