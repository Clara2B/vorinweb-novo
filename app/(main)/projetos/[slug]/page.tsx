import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BadgeCheck, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { ProjectMockup } from "@/components/project-mockup";
import { ProjectGallery } from "@/components/project-gallery";
import { cases, getCaseBySlug } from "@/data/cases";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.name} — Case de Sucesso`,
    description: item.objective,
    path: `/projetos/${item.slug}`,
  });
}

function PendingBlock({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border-blue bg-card p-8 text-center">
      <Clock className="mx-auto mb-3 h-6 w-6 text-faint" aria-hidden />
      <p className="font-display text-sm font-semibold text-muted">{label} em produção</p>
      <p className="mt-1 text-sm text-faint">Este conteúdo será publicado assim que aprovado pelo cliente.</p>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const urlLabel = item.url ? item.url.replace(/^https?:\/\//, "") : "em produção";

  return (
    <>
      <Breadcrumb items={[{ name: "Projetos", path: "/projetos" }, { name: item.name, path: `/projetos/${item.slug}` }]} />

      {/* HERO */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-display mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-500">
              {item.categoryLabel}
            </span>
            <p className="mb-2 text-sm font-medium text-faint">{item.segment}</p>
            <h1 className="font-display mb-5 text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] font-extrabold tracking-tight text-text">
              {item.name}
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-muted">{item.description}</p>
            <p className="font-display mb-8 border-l-2 border-brand-500 pl-3 text-sm font-semibold text-text">
              Objetivo do projeto: {item.objective.charAt(0).toLowerCase() + item.objective.slice(1)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/orcamento" variant="primary" size="lg">
                Solicitar um projeto semelhante
              </Button>
              {item.url && (
                <Button href={item.url} variant="outline" size="lg" external>
                  Ver site no ar
                </Button>
              )}
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-[20px] border border-border shadow-lg">
            <ProjectMockup category={item.category} urlLabel={urlLabel} size="hero" />
          </div>
        </div>
      </Section>

      <div className="section-line mx-[5%]" />

      {/* DESAFIO / SOLUÇÃO */}
      <Section className="bg-bg-alt">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="O desafio" title="O que precisava ser resolvido" />
            <div className="mt-6 flex flex-col gap-4">
              {item.challenge ? (
                item.challenge.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted">{p}</p>
                ))
              ) : (
                <PendingBlock label="Texto do desafio" />
              )}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Nossa solução" title="O que a VorinWeb construiu" />
            <div className="mt-6 flex flex-col gap-4">
              {item.solution ? (
                item.solution.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted">{p}</p>
                ))
              ) : (
                <PendingBlock label="Texto da solução" />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTADO */}
      <Section>
        <SectionHeader eyebrow="O resultado" title="O que mudou para o negócio" center />
        {item.results ? (
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {item.results.map((result) => (
              <div key={result} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <p className="text-sm leading-relaxed text-muted">{result}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl">
            <PendingBlock label="Resultados" />
          </div>
        )}
      </Section>

      {/* DEPOIMENTO */}
      {item.testimonial ? (
        <Section className="bg-[linear-gradient(135deg,#1d4ed8_0%,#1e3a8a_100%)]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-display mb-6 text-5xl leading-none text-white/30">&ldquo;</div>
            <div className="mb-8 flex flex-col gap-4 text-xl leading-relaxed font-medium text-white">
              {item.testimonial.quote.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3.5">
              {item.testimonial.photo ? (
                <Image
                  src={item.testimonial.photo}
                  alt={`Foto de ${item.testimonial.author}`}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full object-cover ring-2 ring-white/20"
                />
              ) : (
                <div className="font-display flex h-13 w-13 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white ring-2 ring-white/20">
                  {item.testimonial.author
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </div>
              )}
              <div className="text-left">
                <div className="font-display font-bold text-white">{item.testimonial.author}</div>
                <div className="text-sm text-white/70">{item.testimonial.role}</div>
              </div>
              {item.testimonial.companyLogo && (
                <Image
                  src={item.testimonial.companyLogo}
                  alt={`Logo da ${item.testimonial.role}`}
                  width={44}
                  height={44}
                  className="ml-2 h-11 w-11 object-contain"
                />
              )}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/60">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              Depoimento real de cliente
            </div>
          </div>
        </Section>
      ) : (
        <Section className="bg-bg-alt">
          <SectionHeader eyebrow="Depoimento" title="O que o cliente diz" center />
          <div className="mx-auto mt-8 max-w-xl">
            <PendingBlock label="Depoimento" />
          </div>
        </Section>
      )}

      <div className="section-line mx-[5%]" />

      {/* GALERIA */}
      <Section>
        <SectionHeader eyebrow="Galeria" title="A experiência em qualquer tela" />
        <div className="mt-8">
          <ProjectGallery category={item.category} urlLabel={urlLabel} />
        </div>
      </Section>

      {/* TECNOLOGIAS */}
      <Section className="bg-bg-alt">
        <div className="font-display mb-4 text-xs font-bold tracking-wide text-faint uppercase">Tecnologias utilizadas</div>
        <div className="flex flex-wrap gap-2.5">
          {item.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-faint">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Gostou deste projeto?"
        description="Vamos criar algo exclusivo para a sua empresa, com o mesmo cuidado que você viu aqui."
      />
    </>
  );
}
