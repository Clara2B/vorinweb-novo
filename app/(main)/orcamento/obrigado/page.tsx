import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Mensagem enviada",
    description: "Recebemos sua solicitação de orçamento.",
    path: "/orcamento/obrigado",
  }),
  robots: { index: false, follow: true },
};

export default function ObrigadoPage() {
  return (
    <Section className="flex min-h-[60vh] items-center justify-center text-center">
      <div className="mx-auto max-w-[520px]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-whatsapp">
          <CheckCircle2 className="h-9 w-9" aria-hidden />
        </div>
        <h1 className="font-display mb-4 text-3xl font-extrabold text-text">Sua mensagem está a caminho</h1>
        <p className="mb-8 text-base leading-relaxed text-muted">
          Abrimos o WhatsApp com os dados do seu projeto prontos para envio. Confirme o envio por lá e a gente responde em até {siteConfig.stats.responseCommitment} em horário comercial ({siteConfig.businessHours.toLowerCase()}).
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/projetos" variant="outline">Ver projetos enquanto isso</Button>
          <Button href="/" variant="ghost">Voltar para a home</Button>
        </div>
      </div>
    </Section>
  );
}
