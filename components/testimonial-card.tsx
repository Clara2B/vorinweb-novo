import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { CaseTestimonial } from "@/data/cases";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const EXCERPT_LENGTH = 220;

export function TestimonialCard({
  testimonial,
  projectSlug,
}: {
  testimonial: CaseTestimonial;
  projectSlug: string;
}) {
  const firstParagraph = testimonial.quote.split("\n\n")[0];
  const isTruncated = testimonial.quote.length > EXCERPT_LENGTH || testimonial.quote.includes("\n\n");
  const excerpt =
    firstParagraph.length > EXCERPT_LENGTH ? `${firstParagraph.slice(0, EXCERPT_LENGTH).trim()}…` : firstParagraph;

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-7">
      <div className="mb-5 flex items-center gap-3.5">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={`Foto de ${testimonial.author}`}
            width={52}
            height={52}
            className="h-13 w-13 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="font-display flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-500">
            {initials(testimonial.author)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="font-display truncate text-sm font-bold text-text">{testimonial.author}</div>
          <div className="truncate text-xs text-faint">{testimonial.role}</div>
        </div>
        {testimonial.companyLogo && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1">
            <Image
              src={testimonial.companyLogo}
              alt={`Logo da ${testimonial.role}`}
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">&ldquo;{excerpt}&rdquo;</p>

      <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-faint">
          <BadgeCheck className="h-3.5 w-3.5 text-brand-500" aria-hidden />
          Depoimento real de cliente
        </span>
        {isTruncated && (
          <Link
            href={`/projetos/${projectSlug}`}
            className="font-display shrink-0 text-xs font-bold text-brand-500 hover:underline"
          >
            Ler na íntegra
          </Link>
        )}
      </div>
    </div>
  );
}
