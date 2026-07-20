import { workSteps } from "@/data/work-process";

export function WorkProcess() {
  return (
    <div className="mx-auto mt-14 max-w-2xl">
      {workSteps.map((step, index) => (
        <div key={step.num} className="group relative flex gap-6 pb-10 last:pb-0">
          {index < workSteps.length - 1 && (
            <span className="absolute top-12 left-6 h-[calc(100%-2.5rem)] w-px bg-border" aria-hidden />
          )}
          <span className="font-display relative z-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-extrabold text-brand-500 transition-all group-hover:border-brand-500 group-hover:bg-brand-50">
            {step.num}
          </span>
          <div className="pt-2.5">
            <h3 className="font-display mb-1.5 text-base font-bold text-text">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
