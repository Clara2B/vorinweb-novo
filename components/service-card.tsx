import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./ui/service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-border-blue hover:shadow-lg"
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
        <ServiceIcon icon={service.icon} className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="font-display mb-2 text-lg font-bold text-text">{service.name}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="font-display inline-flex items-center gap-1.5 text-sm font-bold text-brand-500">
        Saiba mais
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
