import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da VorinWeb e quero saber mais.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a VorinWeb"
      className="fixed right-5 bottom-20 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_24px_rgba(22,163,74,0.45)] transition-transform hover:scale-105 sm:bottom-5"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
