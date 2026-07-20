"use client";

import { useState } from "react";
import { CaseCard } from "@/components/case-card";
import type { Case } from "@/data/cases";

const filters: { label: string; value: Case["category"] | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Sites", value: "sites" },
  { label: "Lojas Virtuais", value: "lojas-virtuais" },
  { label: "Landing Pages", value: "landing-pages" },
  { label: "Bots", value: "bots" },
];

export function PortfolioFilter({ items }: { items: Case[] }) {
  const [active, setActive] = useState<Case["category"] | "todos">("todos");
  const filtered = active === "todos" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Filtrar portfólio por categoria">
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
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <CaseCard key={item.name} item={item} />
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
