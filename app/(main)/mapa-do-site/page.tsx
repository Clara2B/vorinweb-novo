import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/ui/section";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mapa do Site",
  description: "Todas as páginas do site da VorinWeb organizadas em um só lugar.",
  path: "/mapa-do-site",
});

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Principal",
    links: [
      { label: "Início", href: "/" },
      { label: "Projetos", href: "/projetos" },
      { label: "Solicitar orçamento", href: "/orcamento" },
      { label: "Sobre", href: "/sobre" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Cases de Sucesso",
    links: cases.map((c) => ({ label: c.name, href: `/projetos/${c.slug}` })),
  },
  {
    title: "Serviços",
    links: services.map((service) => ({ label: service.name, href: `/${service.slug}` })),
  },
  {
    title: "Institucional",
    links: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Mapa do Site", href: "/mapa-do-site" },
    ],
  },
  {
    title: "Landing pages de clientes",
    links: [{ label: "AGR — Manutenção de Ar-Condicionado", href: "/manutencao-ar-condicionado" }],
  },
];

export default function MapaDoSitePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Mapa do Site", path: "/mapa-do-site" }]} />
      <Section>
        <h1 className="font-display mb-10 text-3xl font-extrabold text-text">Mapa do Site</h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="font-display mb-4 text-xs font-bold tracking-wide text-brand-500 uppercase">{group.title}</div>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-brand-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
