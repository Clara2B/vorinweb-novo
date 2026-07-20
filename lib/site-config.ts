// TEMPORARY: see the comment in next.config.ts — mirrors NEXT_BASE_PATH so
// manually-specified asset paths (e.g. the favicon) resolve under the preview
// subpath too. Remove once the custom domain is cut over to this repo.
export const basePath = process.env.NEXT_BASE_PATH || "";

export const siteConfig = {
  name: "VorinWeb",
  url: "https://vorinweb.com.br",
  description:
    "A VorinWeb projeta e constrói sites, lojas virtuais, landing pages e bots de automação para negócios que querem mais clientes e menos trabalho manual.",
  email: "vorinweb@gmail.com",
  phoneDisplay: "(11) 93490-0204",
  phoneE164: "+5511934900204",
  whatsappNumber: "5511934900204",
  city: "São Paulo",
  region: "SP",
  country: "BR",
  instagram: "https://instagram.com/vorinweb",
  instagramHandle: "@vorinweb",
  businessHours: "Segunda a sexta, das 9h às 18h",
  responseTime: "Resposta em até 1 hora em horário comercial",
  stats: {
    projectsDelivered: "15+",
    standardDelivery: "8 a 10 dias úteis",
    responseCommitment: "< 1h",
    freeAdjustmentDays: "7 dias",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject?: string) {
  const base = `mailto:${siteConfig.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
