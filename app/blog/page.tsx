import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section, SectionHeader } from "@/components/ui/section";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Conteúdo sobre sites, landing pages, lojas virtuais e automação para ajudar seu negócio a vender mais.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Blog", path: "/blog" }]} />
      <Section>
        <SectionHeader eyebrow="Blog" title="Conteúdo para ajudar seu negócio a vender mais" subtitle="Artigos práticos sobre sites, landing pages, lojas virtuais e automação de atendimento." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-border-blue hover:shadow-lg"
            >
              <span className="font-display mb-3 inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-500">
                {post.category}
              </span>
              <h2 className="font-display mb-2.5 text-lg font-bold text-text">{post.title}</h2>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="flex items-center gap-4 border-t border-border pt-4 text-xs text-faint">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
