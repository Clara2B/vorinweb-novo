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
    "A VorinWeb existe para que negócios excelentes parem de ser invisíveis. Conheça o propósito por trás de cada projeto que construímos.",
  path: "/sobre",
});

const values = [
  { icon: Target, title: "O crescimento do cliente vem primeiro", description: "Cada decisão de design e código passa por uma pergunta: isso ajuda essa empresa a vender mais?" },
  { icon: Handshake, title: "Compromisso com o combinado", description: "Prazo e escopo definidos antes de começar — porque confiança se constrói cumprindo o que se promete." },
  { icon: MessageCircle, title: "Comunicação direta", description: "Você fala com quem constrói o seu projeto, sem intermediário e sem burocracia." },
  { icon: ShieldCheck, title: "Uma parceria que continua", description: "O relacionamento não termina na entrega. Continuamos por perto para o seu crescimento não parar." },
];

export default function SobrePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Sobre", path: "/sobre" }]} />

      <Section>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="font-display mb-3 text-xs font-bold tracking-[0.12em] text-brand-500 uppercase">Por que existimos</div>
          <h1 className="font-display mb-6 text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] font-extrabold tracking-tight text-text">
            Acreditamos que toda empresa merece ser encontrada, lembrada e escolhida
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-muted">
            A VorinWeb nasceu de uma constatação simples: a maioria dos negócios não perde cliente por falta de qualidade — perde por falta de uma presença digital que transmita essa qualidade. Empresas sérias e capazes continuam invisíveis para quem mais precisava encontrá-las.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            Existimos para mudar isso. Cada projeto que construímos tem um único objetivo por trás do design e do código: fazer sua empresa crescer — em credibilidade, em visibilidade, em clientes.
          </p>
          <p className="font-display text-xl font-bold text-text">
            Tecnologia é só a ferramenta. O resultado é o motivo.
          </p>
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Como pensamos" title="O compromisso por trás de cada projeto" center />
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

      <CtaSection
        title="Vamos fazer sua empresa ser encontrada?"
        description="Conta pra gente o que você precisa. A gente mostra como a tecnologia pode trabalhar a favor do seu crescimento."
      />
    </>
  );
}
