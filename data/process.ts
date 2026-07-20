export type ProcessStep = {
  num: string;
  title: string;
  description: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Você conta o projeto",
    description:
      "Uma conversa rápida pelo WhatsApp ou pelo formulário de orçamento. Entendemos o seu negócio, o que precisa e o prazo que faz sentido para você.",
    detail: "15 min de conversa",
  },
  {
    num: "02",
    title: "A gente desenvolve",
    description:
      "Prazo combinado e cumprido. Você acompanha o andamento e vê o rascunho antes de finalizar. Nada vai ao ar sem a sua aprovação.",
    detail: "Até 10 dias úteis",
  },
  {
    num: "03",
    title: "No ar e gerando cliente",
    description:
      "Site publicado, domínio configurado, pronto para receber visitas. Se quiser continuar evoluindo, temos planos mensais sem fidelidade.",
    detail: "Suporte pós-entrega",
  },
];
