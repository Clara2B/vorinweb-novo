import { Check } from "lucide-react";
import type { Plan } from "@/data/plans";
import { whatsappLink } from "@/lib/site-config";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
        plan.featured
          ? "border-brand-500 bg-card shadow-[0_16px_48px_rgba(37,99,235,0.2)] md:scale-[1.04]"
          : "border-border bg-card hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {plan.featured && (
        <span className="font-display absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase shadow-[0_4px_12px_rgba(59,130,246,0.45)]">
          Mais escolhido
        </span>
      )}
      <div className="font-display mb-2 text-xs font-bold tracking-widest text-brand-500 uppercase">{plan.tier}</div>
      <div className="font-display mb-2 text-xl font-extrabold text-text">{plan.name}</div>
      <div className="my-5 flex items-baseline gap-1">
        <span className="font-display mt-1 text-base font-semibold text-muted">R$</span>
        <span className="font-display text-4xl font-extrabold tracking-tight text-text">{plan.price.replace("R$", "")}</span>
        <span className="mb-0.5 self-end text-sm text-faint">{plan.period}</span>
      </div>
      <p className="mb-5 border-b border-border pb-5 text-sm text-muted">{plan.description}</p>
      <ul className="mb-7 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
            <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-50">
              <Check className="h-2.5 w-2.5 text-brand-500" strokeWidth={3} aria-hidden />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink(`Olá! Tenho interesse no plano ${plan.name} da VorinWeb.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-display block rounded-xl border-2 border-brand-600 py-3.5 text-center text-sm font-bold transition-all ${
          plan.featured
            ? "bg-brand-600 text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:bg-brand-700"
            : "bg-transparent text-brand-500 hover:bg-brand-600 hover:text-white"
        }`}
      >
        Quero esse plano
      </a>
    </div>
  );
}
