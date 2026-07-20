"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/data/services";
import { ThemeToggle } from "./theme-toggle";
import { ServiceIcon } from "./ui/service-icon";

const navLinks = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] flex h-[68px] items-center justify-between border-b border-border bg-[var(--nav-bg)] px-[5%] backdrop-blur-xl transition-colors">
      <div className="flex items-center gap-10">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-text">
          Vorin<span className="text-brand-500">Web</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="font-display flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-brand-500"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Serviços
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="grid w-[340px] grid-cols-1 gap-1 rounded-2xl border border-border bg-card p-2 shadow-lg">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-bg-alt"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                        <ServiceIcon icon={service.icon} className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <span>
                        <span className="font-display block text-sm font-bold text-text">{service.name}</span>
                        <span className="block text-xs text-faint">{service.shortDescription}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-muted transition-colors hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="/orcamento"
          className="font-display hidden rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-700 sm:inline-flex"
        >
          Vamos conversar
        </Link>
        <button
          type="button"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-border bg-bg-alt text-text md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-[68px] right-0 left-0 flex flex-col border-b border-border bg-[var(--nav-bg)] px-[5%] py-2 backdrop-blur-xl md:hidden">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="font-display border-b border-border py-3.5 text-sm font-semibold text-muted"
              onClick={() => setMobileOpen(false)}
            >
              {service.name}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display border-b border-border py-3.5 text-sm font-semibold text-muted last:border-none"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/orcamento"
            className="font-display my-4 rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Vamos conversar
          </Link>
        </div>
      )}
    </header>
  );
}
