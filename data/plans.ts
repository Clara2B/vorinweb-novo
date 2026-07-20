export type Plan = {
  tier: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    tier: "Plano 1",
    name: "Essencial",
    price: "R$99",
    period: ",90/mês",
    description:
      "Para quem quer estabilidade e um suporte de confiança sem se preocupar com nada técnico.",
    features: [
      "Hospedagem e domínio monitorados",
      "1 atualização de conteúdo por mês",
      "Suporte via WhatsApp (horário comercial)",
      "Backup mensal do site",
      "Relatório básico de acessos",
    ],
  },
  {
    tier: "Plano 2",
    name: "Profissional",
    price: "R$149",
    period: ",90/mês",
    description:
      "Para quem quer crescer todo mês — mais conteúdo, novas funcionalidades, mais visibilidade no Google.",
    features: [
      "Tudo do plano Essencial",
      "3 atualizações de conteúdo por mês",
      "1 nova funcionalidade ou seção por mês",
      "Suporte prioritário 7 dias por semana",
      "Otimização de SEO mensal",
      "Relatório completo de performance",
    ],
    featured: true,
  },
  {
    tier: "Plano 3",
    name: "Premium",
    price: "R$300",
    period: ",00/mês",
    description:
      "Para negócios em ritmo acelerado. Evolução constante, automações e um time dedicado ao seu site.",
    features: [
      "Tudo do plano Profissional",
      "Atualizações ilimitadas de conteúdo",
      "2 novas funcionalidades por mês",
      "Integração com bots e automações",
      "Consultoria estratégica mensal",
      "Gerente de projeto dedicado",
    ],
  },
];
