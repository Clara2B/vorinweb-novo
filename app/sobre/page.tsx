import type { Metadata } from "next";
import { Handshake, MessageCircle, ShieldCheck, Target } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a VorinWeb",
  description:
    "A VorinWeb nasceu para resolver um problema comum: projetos digitais que somem depois da entrega. Conheça como trabalhamos.",
  path: "/sobre",
});

const values = [
  { icon: Target, title: "Foco em resultado", description: "Cada decisão de design e código é avaliada pelo impacto que gera no seu negócio, não só pela estética." },
  { icon: Handshake, title: "Compromisso com o combinado", description: "Prazo e escopo definidos antes de começar — e cumpridos como acordado." },
  { icon: MessageCircle, title: "Comunicação direta", description: "Sem intermediários, sem burocracia. Você fala com quem constrói o seu projeto." },
  { icon: ShieldCheck, title: "Suporte que continua", description: "O relacionamento não termina na entrega. Ajustes gratuitos e planos de evolução contínua." },
];

export default function SobrePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Sobre", path: "/sobre" }]} />

      <Section>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="font-display mb-3 text-xs font-bold tracking-[0.12em] text-brand-500 uppercase">Sobre a VorinWeb</div>
          <h1 className="font-display mb-6 text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] font-extrabold tracking-tight text-text">
            Um time que constrói o projeto — e continua por perto depois
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-muted">
            A VorinWeb existe para resolver um problema comum no mercado de desenvolvimento web: projetos entregues às pressas, com pouca comunicação, que somem assim que o pagamento cai.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Trabalhamos com sites institucionais, landing pages, lojas virtuais e bots de automação para negócios de pequeno e médio porte que precisam de presença digital profissional, sem depender de agências grandes e caras — ou de freelancers que desaparecem no meio do caminho.
          </p>
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Como pensamos" title="Os princípios por trás de cada projeto" center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <value.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display mb-1.5 text-base font-bold text-text">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-[900px] gap-6 sm:grid-cols-4">
          {[
            { label: "Projetos entregues", value: siteConfig.stats.projectsDelivered },
            { label: "Prazo padrão", value: siteConfig.stats.standardDelivery },
            { label: "Resposta no WhatsApp", value: siteConfig.stats.responseCommitment },
            { label: "Ajustes grátis", value: siteConfig.stats.freeAdjustmentDays },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="font-display text-2xl font-extrabold text-brand-500">{stat.value}</div>
              <div className="mt-1.5 text-xs text-faint">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection title="Quer conversar sobre o seu projeto?" secondaryLabel="Solicitar orçamento" />
    </>
  );
}
