import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProcessSteps } from "@/components/process-steps";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { ServiceIcon } from "@/components/ui/service-icon";
import { JsonLd, faqSchema } from "@/lib/schema";
import type { Service } from "@/data/services";

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <JsonLd data={faqSchema(service.faq)} />
      <Breadcrumb items={[{ name: service.name, path: `/${service.slug}` }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--hero-grad)] px-[5%] py-16 md:py-20">
        <div className="hero-grid-lines absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[820px] text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
            <ServiceIcon icon={service.icon} className="h-7 w-7" aria-hidden />
          </div>
          <div className="font-display mb-3 text-xs font-bold tracking-[0.12em] text-brand-500 uppercase">{service.hero.eyebrow}</div>
          <h1 className="font-display mb-5 text-[clamp(2rem,4vw,3.1rem)] leading-[1.15] font-extrabold tracking-tight text-text">
            {service.hero.title}
          </h1>
          <p className="mx-auto mb-9 max-w-[620px] text-lg leading-relaxed text-muted">{service.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/orcamento"
              className="font-display inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {service.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <Section>
        <SectionHeader eyebrow="O problema" title={service.problem.title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.problem.points.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden />
              <p className="text-sm leading-relaxed text-muted">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* SOLUÇÃO */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Nossa solução" title={service.solution.title} subtitle={service.solution.description} />
      </Section>

      {/* BENEFÍCIOS */}
      <Section>
        <SectionHeader eyebrow="Benefícios" title={`O que você ganha com ${service.name.toLowerCase()}`} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-border bg-card p-6">
              <CheckCircle2 className="mb-3 h-5 w-5 text-brand-500" aria-hidden />
              <h3 className="font-display mb-1.5 text-base font-bold text-text">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* COMO FUNCIONA */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Como funciona" title="Do primeiro contato até o projeto no ar" />
        <ProcessSteps />
      </Section>

      {/* TECNOLOGIAS */}
      <Section>
        <SectionHeader eyebrow="Tecnologias" title="O que usamos para construir" />
        <div className="mt-8 flex flex-wrap gap-3">
          {service.technologies.map((tech) => (
            <span key={tech} className="font-display rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* FAQ */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Dúvidas" title={`Perguntas frequentes sobre ${service.name.toLowerCase()}`} center />
        <FaqAccordion items={service.faq} />
      </Section>

      <CtaSection title={`Vamos conversar sobre ${service.name.toLowerCase()}?`} />
    </>
  );
}
