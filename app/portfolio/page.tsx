import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { CtaSection } from "@/components/cta-section";
import { cases } from "@/data/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfólio",
  description:
    "Conheça projetos reais desenvolvidos pela VorinWeb: sites institucionais, lojas virtuais, landing pages e bots no ar, atendendo clientes de verdade.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Portfólio", path: "/portfolio" }]} />

      <Section>
        <SectionHeader
          eyebrow="Portfólio"
          title="Projetos reais, no ar, resolvendo problemas reais"
          subtitle="Cada projeto abaixo está publicado e em uso — não são peças conceituais. Filtre por categoria para ver o que já construímos."
        />
        <div className="mt-10">
          <PortfolioFilter items={cases} />
        </div>
      </Section>

      <CtaSection
        title="Seu projeto pode ser o próximo daqui"
        description="Conta pra gente o que você precisa e vamos construir algo com o mesmo cuidado que você viu acima."
      />
    </>
  );
}
