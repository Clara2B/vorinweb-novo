import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd, breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const full: BreadcrumbItem[] = [{ name: "Início", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-bg-alt px-[5%] py-3">
      <JsonLd data={breadcrumbSchema(full)} />
      <ol className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-1.5 text-xs text-faint">
        {full.map((item, index) => {
          const isLast = index === full.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
              {isLast ? (
                <span className="font-medium text-muted" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-brand-500">{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
