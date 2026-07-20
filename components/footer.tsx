import Link from "next/link";
import { Camera, Mail, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] bg-foot px-[5%] py-16 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5">
        <div className="col-span-2">
          <Link href="/" className="font-display text-xl font-extrabold tracking-tight text-white">
            Vorin<span className="text-brand-400">Web</span>
          </Link>
          <p className="mt-3 max-w-[280px] text-sm text-foot-text">
            Sites, lojas virtuais, landing pages e bots que ajudam negócios reais a vender mais.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da VorinWeb"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foot-text transition-colors hover:border-white/30 hover:text-white"
            >
              <Camera className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site da VorinWeb.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da VorinWeb"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foot-text transition-colors hover:border-white/30 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="E-mail da VorinWeb"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foot-text transition-colors hover:border-white/30 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <div className="font-display mb-4 text-xs font-bold tracking-wide text-white uppercase">Serviços</div>
          <ul className="flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="text-sm text-foot-text transition-colors hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display mb-4 text-xs font-bold tracking-wide text-white uppercase">Empresa</div>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/sobre" className="text-sm text-foot-text transition-colors hover:text-white">Sobre a VorinWeb</Link></li>
            <li><Link href="/portfolio" className="text-sm text-foot-text transition-colors hover:text-white">Portfólio</Link></li>
            <li><Link href="/blog" className="text-sm text-foot-text transition-colors hover:text-white">Blog</Link></li>
            <li><Link href="/orcamento" className="text-sm text-foot-text transition-colors hover:text-white">Solicitar orçamento</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display mb-4 text-xs font-bold tracking-wide text-white uppercase">Contato</div>
          <ul className="flex flex-col gap-2.5">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-foot-text transition-colors hover:text-white">{siteConfig.phoneDisplay}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="text-sm text-foot-text transition-colors hover:text-white">{siteConfig.email}</a></li>
            <li className="text-sm text-foot-text">{siteConfig.city}, {siteConfig.region} — atendimento remoto</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-foot-text">© {year} VorinWeb. Feito com cuidado para negócios reais.</p>
        <ul className="flex gap-5">
          <li><Link href="/politica-de-privacidade" className="text-xs text-foot-text transition-colors hover:text-white">Política de Privacidade</Link></li>
          <li><Link href="/mapa-do-site" className="text-xs text-foot-text transition-colors hover:text-white">Mapa do Site</Link></li>
        </ul>
      </div>
    </footer>
  );
}
