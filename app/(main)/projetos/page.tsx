import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectFilter } from "@/components/project-filter";
import { CtaSection } from "@/components/cta-section";
import { cases } from "@/data/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projetos Desenvolvidos",
  description:
    "Conheça projetos reais desenvolvidos pela VorinWeb: sites institucionais, lojas virtuais, landing pages, bots e sistemas no ar, resolvendo problemas reais de negócios de verdade.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Projetos", path: "/projetos" }]} />

      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Projetos Desenvolvidos"
          title="Cada projeto aqui resolveu um problema real de negócio"
          subtitle="Nada de peça conceitual ou exercício de estilo. O que você vê abaixo está publicado, em uso, gerando resultado para quem contratou. Filtre por categoria para explorar."
        />
        <div className="mt-10">
          <ProjectFilter items={cases} />
        </div>
      </Section>

      <CtaSection
        title="A próxima empresa a crescer com a gente pode ser a sua"
        description="Conta pra gente o que sua empresa precisa e vamos construir uma solução com o mesmo cuidado que você viu acima."
      />
    </>
  );
}
