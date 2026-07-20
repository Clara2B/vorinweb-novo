import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export function MobileStickyBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-[90] flex gap-2 border-t border-border bg-[var(--nav-bg)] p-3 backdrop-blur-xl sm:hidden">
      <a
        href={whatsappLink("Olá! Vim pelo site da VorinWeb e quero saber mais.")}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-bold text-white"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>
      <Link
        href="/orcamento"
        className="font-display flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 text-sm font-bold text-white"
      >
        Orçamento
      </Link>
    </div>
  );
}
