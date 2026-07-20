import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappLink } from "@/lib/site-config";

export function CtaSection({
  title = "Pronto para ter um site que trabalha por você?",
  description = "Manda uma mensagem agora. A gente responde em menos de 1 hora e já começa a conversa sobre o seu projeto — sem compromisso nenhum.",
  primaryLabel = "Falar no WhatsApp agora",
  primaryHref,
  secondaryLabel = "Solicitar orçamento",
  secondaryHref = "/orcamento",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative z-[1] bg-[linear-gradient(135deg,#1d4ed8_0%,#1e3a8a_100%)] px-[5%] py-20 text-center">
      <div className="mx-auto max-w-[600px]">
        <h2 className="font-display mb-4 text-[clamp(1.8rem,3vw,2.4rem)] leading-tight font-extrabold text-white">
          {title}
        </h2>
        <p className="mb-8 text-base leading-relaxed text-white/75">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={primaryHref ?? whatsappLink("Olá! Vim pelo site da VorinWeb e quero começar meu projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-whatsapp-dark shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            {primaryLabel}
          </a>
          <Button href={secondaryHref} variant="outline-white" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
