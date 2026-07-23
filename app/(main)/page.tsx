import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Bot,
  Briefcase,
  CheckCircle2,
  Clock,
  Heart,
  MessageCircle,
  Scissors,
  ShoppingBag,
  Soup,
  Sparkles,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { PlanCard } from "@/components/plan-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { WorkProcess } from "@/components/work-process";
import { InlineCta } from "@/components/inline-cta";
import { TestimonialCard } from "@/components/testimonial-card";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { plans } from "@/data/plans";
import { homeFaq } from "@/data/faq";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Presença digital que transforma visitantes em clientes",
  description: siteConfig.description,
  path: "/",
});

const segments = [
  { label: "Restaurantes e bares", icon: Soup },
  { label: "Clínicas e consultórios", icon: Heart },
  { label: "Lojas online", icon: ShoppingBag },
  { label: "Salões e estéticas", icon: Scissors },
  { label: "Escritórios e autônomos", icon: Briefcase },
  { label: "Portfólios pessoais", icon: Users },
];

const gains = [
  { title: "Mais autoridade", description: "Uma presença digital bem construída posiciona sua empresa como referência no que ela faz — antes mesmo da primeira conversa." },
  { title: "Mais confiança", description: "Design profissional e informação clara fazem o visitante confiar na sua empresa desde o primeiro clique." },
  { title: "Mais oportunidades", description: "Cada visita vira uma chance real de negócio, com caminhos claros até o contato ou a compra." },
  { title: "Mais presença digital", description: "Sua empresa aparece onde o cliente já está procurando — no Google, nas redes, no WhatsApp." },
  { title: "Mais profissionalismo", description: "Uma apresentação à altura do que sua empresa realmente entrega, sem parecer amadora." },
  { title: "Maior conversão", description: "Estrutura pensada para transformar visita em contato, contato em orçamento, orçamento em cliente." },
];

const differentiators = [
  { title: "Design moderno", description: "Seu cliente cria uma boa impressão da sua empresa antes mesmo do primeiro contato." },
  { title: "Site rápido", description: "Reduz abandonos e melhora a experiência de quem está decidindo se confia em você." },
  { title: "Responsivo por padrão", description: "Seu negócio funciona perfeitamente em qualquer dispositivo, porque é lá que seu cliente está." },
  { title: "SEO técnico incluso", description: "Mais chances de aparecer exatamente quando alguém procura pelo que sua empresa oferece." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--hero-grad)] px-[5%] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="hero-grid-lines absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 font-display text-xs font-bold tracking-wide text-brand-400 uppercase">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-green-500" />
              Aberto para novos projetos
            </div>
            <h1 className="font-display mb-5 text-[clamp(2.4rem,4.5vw,3.9rem)] leading-[1.1] font-extrabold tracking-tight text-text">
              Presença digital que
              <br />
              <em className="text-brand-500 not-italic">vende por você,</em>
              <br />
              todos os dias
            </h1>
            <p className="mb-4 max-w-[520px] text-lg leading-[1.8] text-muted">
              Criamos soluções digitais que ajudam sua empresa a{" "}
              <strong className="font-semibold text-text">ser encontrada, conquistar confiança e transformar visitantes em clientes</strong> — enquanto sua concorrência ainda só existe na internet.
            </p>
            <p className="mb-9 max-w-[500px] text-sm font-medium text-faint italic">
              Primeiras impressões não têm segunda chance. A sua já pode estar acontecendo agora.
            </p>
            <div className="mb-12 flex flex-wrap gap-4">
              <Link
                href="/orcamento"
                className="font-display inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_8px_28px_rgba(37,99,235,0.45)]"
              >
                Quero vender mais
              </Link>
              <Link
                href="/projetos"
                className="font-display inline-flex items-center gap-2 rounded-xl border-[1.5px] border-border px-7 py-4 text-sm font-semibold text-muted transition-all hover:border-brand-500 hover:text-brand-500"
              >
                Ver empresas que já cresceram com a gente
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 border-t border-border pt-8">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold tracking-tight text-text">{siteConfig.stats.projectsDelivered}</span>
                <span className="mt-1 text-[0.78rem] text-faint">projetos entregues</span>
              </div>
              <div className="w-px self-stretch bg-border" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold tracking-tight text-text">{siteConfig.stats.standardDelivery}</span>
                <span className="mt-1 text-[0.78rem] text-faint">prazo padrão de entrega</span>
              </div>
              <div className="w-px self-stretch bg-border" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold tracking-tight text-text">{siteConfig.stats.responseCommitment}</span>
                <span className="mt-1 text-[0.78rem] text-faint">compromisso de resposta</span>
              </div>
            </div>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow)_0%,transparent_70%)]" aria-hidden />
            <div className="animate-float relative w-full max-w-[440px] overflow-hidden rounded-[20px] bg-card shadow-[0_0_0_1px_var(--border),0_24px_64px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-2 border-b border-border bg-bg-alt px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 flex-1 rounded-md border border-border bg-bg px-3 py-1 font-display text-xs text-faint">seunegocio.com.br</span>
              </div>
              <div className="flex flex-col gap-2.5 p-5">
                <div className="relative flex h-[110px] flex-col justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#1d4ed8,#1e3a8a)] px-4">
                  <div className="h-2.5 w-[55%] rounded bg-white/90" />
                  <div className="h-[7px] w-[75%] rounded bg-white/40" />
                  <div className="h-[7px] w-[40%] rounded bg-white/25" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-bg-alt p-2.5">
                      <div className="mb-1 h-6 w-6 rounded-md bg-brand-100" />
                      <div className="h-1.5 rounded bg-border" />
                      <div className="h-[5px] w-[70%] rounded bg-border opacity-60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="animate-float absolute -bottom-4 -left-6 rounded-xl border border-border bg-card p-3.5 shadow-lg [animation-delay:-3s]">
              <div className="font-display mb-0.5 text-[0.62rem] font-semibold tracking-wide text-faint uppercase">Atendimento</div>
              <div className="flex items-center gap-1 font-display text-[0.85rem] font-bold text-green-500">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> 100% personalizado
              </div>
              <div className="mt-0.5 text-[0.62rem] text-faint">nada de template genérico</div>
            </div>
            <div className="animate-float absolute -right-6 top-4 rounded-xl border border-border bg-card p-3.5 shadow-lg [animation-delay:-1.5s]">
              <div className="font-display flex items-center gap-1 text-[0.62rem] font-semibold tracking-wide text-faint uppercase">
                <span className="h-2 w-2 animate-blink rounded-full bg-green-500" /> Suporte ativo
              </div>
              <div className="font-display text-sm font-bold text-text">Online</div>
              <div className="mt-0.5 text-[0.62rem] text-faint">resposta em &lt; 1h</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <div className="bg-bg-alt px-[5%] py-11">
        <div className="mx-auto max-w-[1200px]">
          <div className="font-display mb-6 text-center text-xs font-semibold tracking-wide text-faint uppercase">Atendemos negócios como</div>
          <div className="flex flex-wrap justify-center gap-3.5">
            {segments.map((seg) => (
              <div
                key={seg.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4.5 py-2.5 font-display text-sm font-semibold text-muted transition-all hover:-translate-y-0.5 hover:border-border-blue hover:text-text"
              >
                <seg.icon className="h-4 w-4" aria-hidden />
                {seg.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-line mx-[5%]" />

      {/* O QUE SUA EMPRESA GANHA */}
      <Section>
        <SectionHeader
          eyebrow="O que você ganha"
          title="O que sua empresa ganha ao investir em presença digital de verdade"
          subtitle="O problema nunca foi não ter um site. É ter um site que não gera resultado. Veja o que muda quando ele funciona."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gains.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display mb-2 text-base font-bold text-text">{g.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{g.description}</p>
            </div>
          ))}
        </div>
        <InlineCta text="Pronto para colher esses resultados?" />
      </Section>

      <div className="section-line mx-[5%]" />

      {/* COMO TRABALHAMOS */}
      <Section className="bg-bg">
        <SectionHeader eyebrow="Como trabalhamos" title="Um método claro, do primeiro contato à entrega" subtitle="Sem reuniões intermináveis, sem surpresas no caminho. Cada etapa existe para garantir um resultado que representa a sua empresa." center />
        <WorkProcess />
      </Section>

      <div className="section-line mx-[5%]" />

      {/* DIFERENCIAIS */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Diferenciais" title="Cada detalhe existe para gerar mais confiança e mais conversão" subtitle="Não são características técnicas soltas. Cada uma delas resolve um motivo real de um visitante ir embora sem virar cliente." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display mb-1.5 text-base font-bold text-text">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
        <InlineCta text="Já sabe o que sua empresa precisa?" />
      </Section>

      <div className="section-line mx-[5%]" />

      {/* LINHA EMOCIONAL */}
      <div className="bg-bg px-[5%] py-10 text-center">
        <p className="font-display mx-auto max-w-2xl text-lg font-semibold text-text">
          Seu concorrente pode estar investindo na presença digital dele neste exato momento.
        </p>
      </div>

      <div className="section-line mx-[5%]" />

      {/* SERVIÇOS */}
      <Section>
        <SectionHeader eyebrow="Serviços" title="O que a VorinWeb constrói para o seu negócio" subtitle="Do site institucional ao bot de atendimento — cada solução pensada para o seu objetivo específico." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* CASES DE SUCESSO */}
      <Section className="bg-bg-alt">
        <div className="mb-1 inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-wide text-brand-500 uppercase">
          <Award className="h-3.5 w-3.5" aria-hidden /> Cases de sucesso
        </div>
        <SectionHeader eyebrow="Resultados reais" title="Empresas que já transformaram sua presença digital com a gente" subtitle="Sem mockup, sem peça conceitual. Cada projeto abaixo resolveu um problema real de negócio — e você pode conferir o resultado agora." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projetos" className="font-display inline-flex items-center gap-2 text-sm font-bold text-brand-500 hover:underline">
            Ver todos os projetos →
          </Link>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      {cases.some((c) => c.testimonial) && (
        <>
          <Section className="bg-bg-alt">
            <SectionHeader
              eyebrow="Depoimentos"
              title="A opinião de quem já trabalhou com a gente"
              subtitle="Vale mais que qualquer tecnologia que usamos."
              center
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
              {cases
                .filter((c) => c.testimonial)
                .map((c) => (
                  <TestimonialCard key={c.slug} testimonial={c.testimonial!} projectSlug={c.slug} />
                ))}
            </div>
          </Section>

          <div className="section-line mx-[5%]" />
        </>
      )}

      {/* CONFIANÇA (substitui depoimentos fictícios por prova real) */}
      <Section>
        <SectionHeader eyebrow="Por que confiar" title="Compromissos que a gente cumpre, não só promete" center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Projetos entregues", value: siteConfig.stats.projectsDelivered },
            { label: "Entrega rápida", value: siteConfig.stats.standardDelivery },
            { label: "Suporte dedicado", value: siteConfig.stats.responseCommitment },
            { label: "Sites responsivos", value: "100%" },
            { label: "Projetos personalizados", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="font-display text-2xl font-extrabold text-brand-500">{stat.value}</div>
              <div className="mt-1.5 text-xs text-faint">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* PLANOS */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Planos mensais" title="Seu site nunca para de evoluir" subtitle="Entregamos o site. Se quiser continuar melhorando — conteúdo, SEO, novas funcionalidades — é só escolher o plano. Sem fidelidade, cancela quando quiser." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* FAQ */}
      <Section id="faq" className="bg-bg">
        <SectionHeader eyebrow="Dúvidas" title="Perguntas que a gente recebe muito" center />
        <FaqAccordion items={homeFaq} />
      </Section>

      <CtaSection />

      {/* CONTATO */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Contato" title="Fale com a gente" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="font-display mb-1.5 flex items-center gap-1.5 text-sm font-bold text-brand-500">
                <Clock className="h-4 w-4" aria-hidden /> Resposta garantida em até 1 hora
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Durante o horário comercial ({siteConfig.businessHours.toLowerCase()}), qualquer mensagem recebe retorno rápido. Fora do horário, respondemos na primeira hora do próximo dia útil.
              </p>
            </div>
            <a
              href={whatsappLink("Olá! Vim pelo site da VorinWeb.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4.5 transition-all hover:-translate-x-1 hover:border-border-blue"
            >
              <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-whatsapp text-white">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <div className="font-display text-xs font-medium tracking-wide text-faint uppercase">WhatsApp — canal preferido</div>
                <div className="font-display text-sm font-semibold text-text">{siteConfig.phoneDisplay}</div>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4.5 transition-all hover:-translate-x-1 hover:border-border-blue"
            >
              <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-brand-600 text-white">
                <Bot className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <div className="font-display text-xs font-medium tracking-wide text-faint uppercase">E-mail</div>
                <div className="font-display text-sm font-semibold text-text">{siteConfig.email}</div>
              </div>
            </a>
          </div>
          <div className="rounded-[20px] border border-border bg-card p-9">
            <div className="font-display mb-1.5 text-lg font-bold text-text">Prefere contar direto o seu projeto?</div>
            <p className="mb-6 text-sm text-faint">Nossa página de orçamento tem tudo o que você precisa saber antes de conversar com a gente — prazos, garantias e um formulário rápido.</p>
            <Link
              href="/orcamento"
              className="font-display block rounded-xl bg-brand-600 py-3.5 text-center text-sm font-bold text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)] transition-all hover:bg-brand-700"
            >
              Ir para a página de orçamento
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
