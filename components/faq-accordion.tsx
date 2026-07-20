import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/schema";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto mt-10 flex max-w-[720px] flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-border bg-card open:border-border-blue"
        >
          <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold text-text marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-alt transition-transform group-open:rotate-45 group-open:bg-brand-50">
              <Plus className="h-4 w-4 text-muted" aria-hidden />
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
