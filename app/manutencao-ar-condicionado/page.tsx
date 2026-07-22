import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Droplets,
  Gauge,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Star,
  ThermometerSnowflake,
  Timer,
  Volume2,
  Wind,
} from "lucide-react";
import { AgrHeader } from "@/components/agr/agr-header";
import { AgrFooter } from "@/components/agr/agr-footer";
import { AgrWhatsAppFloatButton } from "@/components/agr/agr-whatsapp-float-button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

const AGR_URL = `${siteConfig.url}/manutencao-ar-condicionado`;
const WHATSAPP_HREF =
  "https://wa.me/5511940011535?text=" +
  encodeURIComponent("Olá, encontrei a página de manutenção de ar-condicionado da AGR e gostaria de solicitar uma avaliação.");

export const metadata: Metadata = {
  title: { absolute: "Manutenção de Ar-Condicionado em São Paulo | AGR Ar Condicionado" },
  description:
    "Manutenção preventiva e corretiva de ar-condicionado em São Paulo, com técnicos certificados e orçamento sem compromisso. Mais de 25 anos cuidando da climatização de residências e empresas.",
  alternates: { canonical: AGR_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Manutenção de Ar-Condicionado em São Paulo | AGR Ar Condicionado",
    description:
      "Técnicos certificados, atendimento rápido e orçamento sem compromisso. Mais de 25 anos cuidando da climatização de São Paulo.",
    url: AGR_URL,
    siteName: "AGR Ar Condicionado",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${siteConfig.url}/images/agr/tecnico-manutencao.webp`, width: 1600, height: 500 }],
  },
};

const signs = [
  { icon: ThermometerSnowflake, label: "Não está gelando como antes" },
  { icon: Volume2, label: "Fazendo barulho incomum" },
  { icon: Wind, label: "Cheiro desagradável ao ligar" },
  { icon: Gauge, label: "Consumo de energia mais alto" },
  { icon: Droplets, label: "Vazamento de água" },
  { icon: AlertTriangle, label: "Falhas frequentes" },
  { icon: Timer, label: "Faz tempo que não recebe manutenção" },
];

const benefits = [
  "Melhor desempenho do aparelho",
  "Redução de falhas inesperadas",
  "Melhora na qualidade do ar",
  "Maior vida útil do equipamento",
  "Mais eficiência energética",
  "Prevenção de problemas maiores",
];

const steps = [
  { num: "01", title: "Você entra em contato", description: "Pelo WhatsApp ou pelo formulário do site." },
  { num: "02", title: "A AGR entende sua necessidade", description: "Conversamos sobre o que está acontecendo com o seu equipamento." },
  { num: "03", title: "Orçamento sem compromisso", description: "Você decide com total clareza e liberdade." },
  { num: "04", title: "Execução do serviço", description: "Feito por técnicos certificados, com garantia." },
];

const differentiators = [
  { icon: Timer, title: "Atendimento Rápido", description: "Respostas ágeis para instalação e suporte técnico." },
  { icon: BadgeCheck, title: "Técnicos Certificados", description: "Profissionais qualificados para qualquer tipo de serviço." },
  { icon: ShieldCheck, title: "Garantia de Serviço", description: "Qualidade garantida em tudo que entregamos." },
  { icon: HeartHandshake, title: "Suporte Personalizado", description: "Atendimento humano, claro e consultivo." },
  { icon: Leaf, title: "Sustentabilidade", description: "Soluções econômicas e amigas do meio ambiente." },
  { icon: Banknote, title: "Orçamento Sem Compromisso", description: "Você decide com total clareza e liberdade." },
];

const reviews = [
  { author: "João Silva", text: "O atendimento foi excelente! A equipe foi pontual e super profissional na instalação." },
  { author: "Maria Fernanda", text: "Empresa séria e comprometida. Qualidade do serviço incrível e o cuidado com os detalhes." },
  { author: "Lucas Andrade", text: "Tive suporte do início ao fim. Com certeza recomendo!" },
];

const faq = [
  {
    question: "Quando devo fazer manutenção no meu ar-condicionado?",
    answer:
      "A recomendação geral do setor é realizar manutenção preventiva a cada 3 a 6 meses, dependendo do uso do equipamento. Se notar qualquer sinal de mau funcionamento, o ideal é não esperar a próxima revisão programada.",
  },
  {
    question: "A AGR atende residências e empresas?",
    answer: "Sim. Atendemos tanto residências quanto empresas, com soluções inteligentes de climatização para os dois casos.",
  },
  {
    question: "Qual região vocês atendem?",
    answer: "Atendemos toda a região de São Paulo.",
  },
  {
    question: "O orçamento tem algum compromisso?",
    answer: "Não. O orçamento é sem compromisso — você recebe a avaliação e decide com total clareza e liberdade se quer seguir.",
  },
  {
    question: "Vocês só fazem manutenção?",
    answer: "Não. Além da manutenção preventiva e corretiva, a AGR também realiza instalação e venda de equipamentos de ar-condicionado.",
  },
];

const agrLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AGR Ar Condicionado",
  legalName: "AGR Ar Condicionado LTDA",
  url: AGR_URL,
  telephone: "+5511940011535",
  email: "rodrigoagrarcondicionado@gmail.com",
  image: `${siteConfig.url}/images/agr/logo.webp`,
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
  areaServed: "São Paulo, SP",
};

const agrFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ManutencaoArCondicionadoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agrLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agrFaqSchema) }} />

      <AgrHeader />

      {/* HERO */}
      <section className="bg-[var(--hero-grad)] px-[5%] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 font-display text-xs font-bold tracking-wide text-brand-500 uppercase">
              Mais de 25 anos de experiência
            </div>
            <h1 className="font-display mb-5 text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.15] font-extrabold tracking-tight text-text">
              Manutenção de ar-condicionado com quem cuida da climatização de São Paulo há mais de 25 anos
            </h1>
            <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-muted">
              Atendimento rápido, técnicos certificados e orçamento sem compromisso — para residências e empresas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={WHATSAPP_HREF} variant="whatsapp" size="lg" external>
                Falar no WhatsApp agora
              </Button>
              <Button href="tel:+5511940011535" variant="outline" size="lg" external>
                Ligar (11) 94001-1535
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[20px] border border-border shadow-[0_24px_64px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/agr/tecnico-manutencao.webp"
                alt="Técnico da AGR realizando manutenção em ar-condicionado"
                width={1600}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg">
              <Image src="/images/agr/selo-25-anos.webp" alt="Selo 25 anos de experiência" width={44} height={44} className="h-11 w-11 object-contain" />
              <div>
                <div className="font-display text-sm font-bold text-text">25 anos</div>
                <div className="text-xs text-faint">de climatização</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS / PROBLEMAS */}
      <Section>
        <SectionHeader
          eyebrow="Reconhece algum desses sinais?"
          title="Seu ar-condicionado pode estar pedindo manutenção"
          subtitle="Cada caso é diferente. Nossa equipe avalia o seu equipamento e indica a solução mais adequada."
          center
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign) => (
            <div key={sign.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <sign.icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-medium text-text">{sign.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={WHATSAPP_HREF} variant="whatsapp" size="lg" external>
            Quero uma avaliação
          </Button>
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* SERVIÇOS */}
      <Section className="bg-bg-alt">
        <SectionHeader
          eyebrow="Serviços"
          title="Manutenção preventiva e corretiva para o seu ar-condicionado"
          subtitle="Manutenção preventiva evita que problemas apareçam. Manutenção corretiva resolve o que já apareceu. A AGR faz os dois, com técnicos certificados."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display mb-2 text-base font-bold text-text">Instalação</h3>
            <p className="text-sm leading-relaxed text-muted">Instalação profissional de sistemas de ar-condicionado, com segurança e eficiência.</p>
          </div>
          <div className="rounded-2xl border-2 border-brand-500 bg-card p-6">
            <span className="font-display mb-2 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.65rem] font-bold text-brand-500 uppercase">
              Foco desta página
            </span>
            <h3 className="font-display mb-2 text-base font-bold text-text">Manutenção</h3>
            <p className="text-sm leading-relaxed text-muted">Manutenção preventiva e corretiva para prolongar a vida útil dos equipamentos.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display mb-2 text-base font-bold text-text">Venda de Equipamentos</h3>
            <p className="text-sm leading-relaxed text-muted">Trabalhamos com as melhores marcas do mercado, com consultoria especializada.</p>
          </div>
        </div>
      </Section>

      {/* POR QUE FAZER MANUTENÇÃO */}
      <Section>
        <SectionHeader eyebrow="Por que fazer manutenção" title="O que muda quando o seu ar-condicionado recebe o cuidado certo" center />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <p className="text-sm leading-relaxed text-muted">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* COMO FUNCIONA */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Como funciona" title="Do primeiro contato ao serviço concluído" center />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="font-display mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-extrabold text-brand-500">
                {step.num}
              </div>
              <h3 className="font-display mb-1.5 text-sm font-bold text-text">{step.title}</h3>
              <p className="text-xs leading-relaxed text-faint">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section>
        <SectionHeader eyebrow="Por que escolher a AGR" title="Diferenciais que fazem sentido para o seu ar-condicionado" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display mb-1.5 text-base font-bold text-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* PROVA SOCIAL */}
      <Section className="bg-bg-alt">
        <SectionHeader eyebrow="Prova social" title="O que dizem os clientes da AGR" center />

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author} className="rounded-2xl border border-border bg-card p-5">
              <div className="mb-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">&ldquo;{review.text}&rdquo;</p>
              <div className="font-display text-xs font-bold text-text">{review.author}</div>
            </div>
          ))}
        </div>

      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes" center />
        <FaqAccordion items={faq} />
      </Section>

      {/* CTA FINAL */}
      <section className="bg-[linear-gradient(135deg,#1d4ed8_0%,#1e3a8a_100%)] px-[5%] py-20 text-center">
        <div className="mx-auto max-w-[600px]">
          <h2 className="font-display mb-4 text-[clamp(1.8rem,3vw,2.4rem)] leading-tight font-extrabold text-white">
            Pronto para climatizar seu ambiente com quem entende do assunto?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/75">
            Fale agora com a AGR e receba um orçamento sem compromisso.
          </p>
          <Button href={WHATSAPP_HREF} variant="outline-white" size="lg" external>
            Falar no WhatsApp agora
          </Button>
        </div>
      </section>

      <AgrFooter />
      <AgrWhatsAppFloatButton href={WHATSAPP_HREF} />
    </>
  );
}
