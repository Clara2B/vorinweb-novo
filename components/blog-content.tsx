import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { BlogBlock } from "@/data/blog-posts";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="font-display mt-4 text-xl font-bold text-text">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <div key={index} className="my-2 flex gap-4 rounded-2xl border border-border bg-card p-6">
              {block.photo ? (
                <Image
                  src={block.photo}
                  alt={`Foto de ${block.author}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-500">
                  {block.author
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </div>
              )}
              <div>
                <p className="mb-3 text-base leading-relaxed font-medium text-text italic">&ldquo;{block.text}&rdquo;</p>
                <div className="font-display text-sm font-bold text-text">{block.author}</div>
                <div className="text-xs text-faint">{block.role}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-faint">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Depoimento real de cliente
                </div>
              </div>
            </div>
          );
        }
        if (block.type === "link") {
          return (
            <Link
              key={index}
              href={block.href}
              className="group my-2 flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-alt p-4.5 transition-all hover:border-border-blue"
            >
              <div>
                <div className="font-display text-sm font-bold text-text">{block.label}</div>
                <div className="text-xs text-faint">{block.description}</div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          );
        }
        return (
          <p key={index} className="text-base leading-relaxed text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
