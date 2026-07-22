import { MessageCircle } from "lucide-react";

export function AgrWhatsAppFloatButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a AGR Ar Condicionado"
      className="fixed right-5 bottom-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_24px_rgba(22,163,74,0.45)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
