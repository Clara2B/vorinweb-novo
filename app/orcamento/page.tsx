import type { Metadata } from "next";
import { Clock, MessageCircleQuestion, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/ui/section";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solicitar Orçamento",
  description:
    "Peça um orçamento sem compromisso para o seu site, loja virtual, landing page ou bot de WhatsApp. Resposta em até 1 hora em horário comercial.",
  path: "/orcamento",
});

const guarantees = [
  { icon: Clock, title: siteConfig.stats.responseCommitment, description: "de compromisso de resposta em horário comercial" },
  { icon: ShieldCheck, title: siteConfig.stats.freeAdjustmentDays, description: "de ajustes gratuitos após a entrega" },
  { icon: Sparkles, title: siteConfig.stats.standardDelivery, description: "prazo padrão de entrega do projeto" },
];

export default function OrcamentoPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Orçamento", path: "/orcamento" }]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="font-display mb-3 text-xs font-bold tracking-[0.12em] text-brand-500 uppercase">Orçamento sem compromisso</div>
            <h1 className="font-display mb-5 text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] font-extrabold tracking-tight text-text">
              Conta pra gente o seu projeto e receba um orçamento claro
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              Preencha o formulário ao lado ou chame direto no WhatsApp. A gente responde com um orçamento objetivo — sem letra miúda, sem pressão para fechar.
            </p>

            <div className="mb-8 flex flex-col gap-3">
              {guarantees.map((item) => (
                <div key={item.description} className="flex items-center gap-3.5 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm text-muted">
                    <span className="font-display font-bold text-text">{item.title}</span> {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50 p-4">
              <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden />
              <p className="text-sm leading-relaxed text-muted">
                Não sabe exatamente o que precisa ainda? Sem problema — conte o que você tem em mente e a gente ajuda a definir o melhor caminho na conversa.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
