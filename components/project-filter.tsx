"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Case, CaseCategory } from "@/data/cases";

const filters: { label: string; value: CaseCategory | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Sites", value: "sites" },
  { label: "Landing Pages", value: "landing-pages" },
  { label: "Lojas Virtuais", value: "lojas-virtuais" },
  { label: "Bots", value: "bots" },
  { label: "Sistemas", value: "sistemas" },
];

export function ProjectFilter({ items }: { items: Case[] }) {
  const [active, setActive] = useState<CaseCategory | "todos">("todos");
  const filtered = active === "todos" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Filtrar projetos por categoria">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            onClick={() => setActive(filter.value)}
            className={`font-display rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === filter.value
                ? "bg-brand-600 text-white"
                : "border border-border bg-card text-muted hover:border-border-blue hover:text-text"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border-blue p-12 text-center">
          <p className="font-display text-sm font-semibold text-muted">Em breve, novos projetos nesta categoria.</p>
          <p className="mt-1 text-sm text-faint">Enquanto isso, fale com a gente sobre o seu projeto.</p>
        </div>
      )}
    </div>
  );
}
