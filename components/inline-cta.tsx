import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InlineCta({
  text = "Pronto para dar esse passo?",
  buttonLabel = "Vamos conversar",
}: {
  text?: string;
  buttonLabel?: string;
}) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="font-display text-sm font-bold text-text">{text}</p>
      <Link
        href="/orcamento"
        className="font-display inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-700"
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
