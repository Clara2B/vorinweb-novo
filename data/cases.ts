export type Case = {
  name: string;
  segment: string;
  objective: string;
  description: string;
  technologies: string[];
  url: string;
  category: "sites" | "lojas-virtuais" | "landing-pages" | "bots";
};

// Casos reais, entregues e no ar. Não adicionar depoimentos ou cases fictícios aqui.
export const cases: Case[] = [
  {
    name: "Nu3tion — OraProtein®",
    segment: "E-commerce · Suplementos",
    objective: "Página de produto que vende sozinha, sem depender só de anúncio",
    description:
      "Precisava de uma página de produto capaz de converter visita em compra no primeiro clique, sem depender só de tráfego pago. Construímos a página completa — avaliações, estoque em tempo real, parcelamento e frete grátis configurados — pensada para transformar visita em compra.",
    technologies: ["Página de produto", "Avaliações", "Parcelamento", "Frete grátis"],
    url: "https://nu3tion.com.br",
    category: "lojas-virtuais",
  },
  {
    name: "AGR Ar Condicionado",
    segment: "Serviços técnicos · São Paulo, SP",
    objective: "Site institucional que passa profissionalismo e capta orçamento direto",
    description:
      "Precisava de um site institucional que passasse profissionalismo e captasse orçamento direto pelo WhatsApp, sem depender só de indicação. Construímos o site completo — serviços, diferenciais, depoimentos de clientes e formulário de contato integrado ao atendimento.",
    technologies: ["Site institucional", "Captação de orçamento", "Contato integrado"],
    url: "https://agrarcondicionado.com.br",
    category: "sites",
  },
];
