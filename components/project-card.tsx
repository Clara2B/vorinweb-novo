import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Case } from "@/data/cases";
import { ProjectMockup } from "./project-mockup";

export function ProjectCard({ item }: { item: Case }) {
  const urlLabel = item.url ? item.url.replace(/^https?:\/\//, "") : "em produção";

  return (
    <Link
      href={`/projetos/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-border-blue hover:shadow-lg"
    >
      <div className="h-56 border-b border-border">
        <ProjectMockup category={item.category} urlLabel={urlLabel} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-display mb-2 w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-500">
          {item.categoryLabel}
        </span>
        <span className="mb-1 text-xs font-medium text-faint">{item.segment}</span>
        <h3 className="font-display mb-2.5 text-lg font-extrabold text-text">{item.name}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{item.objective}</p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {item.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-bg-alt px-2.5 py-1 text-[0.7rem] text-faint">
              {tech}
            </span>
          ))}
        </div>
        <span className="font-display inline-flex items-center gap-1.5 text-sm font-bold text-brand-500">
          Conhecer o projeto
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
