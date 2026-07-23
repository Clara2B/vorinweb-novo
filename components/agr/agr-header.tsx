import Image from "next/image";
import { Phone } from "lucide-react";

export function AgrHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-border bg-[var(--nav-bg)] px-[5%] backdrop-blur-xl">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
          <Image src="/images/agr/logo.webp" alt="AGR Ar Condicionado" width={40} height={40} className="h-full w-full object-contain" priority />
        </div>
        <span className="font-display text-base font-extrabold tracking-tight text-text">AGR Ar Condicionado</span>
      </div>
      <a
        href="tel:+5511940011535"
        className="font-display hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-text transition-colors hover:border-brand-500 sm:inline-flex"
      >
        <Phone className="h-4 w-4" aria-hidden />
        (11) 94001-1535
      </a>
    </header>
  );
}
