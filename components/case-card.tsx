import { ExternalLink } from "lucide-react";
import type { Case } from "@/data/cases";

export function CaseCard({ item }: { item: Case }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-7 transition-all before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-2xl before:bg-[linear-gradient(90deg,#22c55e,#16a34a)] hover:-translate-y-1 hover:border-whatsapp hover:shadow-lg">
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
        <span className="font-display inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-green-800 uppercase dark:bg-green-500/15 dark:text-green-400">
          Projeto real
        </span>
        <span className="font-display text-xs font-semibold text-faint">{item.segment}</span>
      </div>
      <h3 className="font-display mb-2.5 text-xl font-extrabold text-text">{item.name}</h3>
      <p className="font-display mb-2 text-sm font-semibold text-brand-500">{item.objective}</p>
      <p className="mb-3.5 text-sm leading-relaxed text-muted">{item.description}</p>
      <div className="mb-3.5 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-border bg-bg-alt px-2.5 py-1 text-xs text-faint">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display inline-flex items-center gap-1.5 text-sm font-bold text-brand-500 hover:text-brand-600 hover:underline"
      >
        Ver site
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    </div>
  );
}
