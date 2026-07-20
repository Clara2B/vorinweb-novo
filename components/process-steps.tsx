import { CalendarCheck, Clock, Rocket } from "lucide-react";
import { processSteps } from "@/data/process";

const icons = [Clock, CalendarCheck, Rocket];

export function ProcessSteps() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {processSteps.map((step, index) => {
        const Icon = icons[index];
        return (
          <div key={step.num} className="rounded-[20px] border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-border-blue hover:shadow-lg">
            <div className="font-display mb-5 flex h-13 w-13 items-center justify-center rounded-[14px] bg-brand-600 text-lg font-extrabold text-white">
              {step.num}
            </div>
            <h3 className="font-display mb-2.5 text-base font-bold text-text">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            <div className="font-display mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-500">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {step.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
}
