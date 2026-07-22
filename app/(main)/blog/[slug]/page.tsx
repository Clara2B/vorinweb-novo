import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/ui/section";
import { BlogContent } from "@/components/blog-content";
import { CtaSection } from "@/components/cta-section";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
        })}
      />
      <Breadcrumb items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />

      <Section>
        <article className="mx-auto max-w-[720px]">
          <span className="font-display mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-500">
            {post.category}
          </span>
          <h1 className="font-display mb-5 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight font-extrabold text-text">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-border pb-6 text-xs text-faint">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" aria-hidden /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" aria-hidden /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden /> {post.readingTime}</span>
          </div>

          <BlogContent blocks={post.content} />
        </article>
      </Section>

      {related.length > 0 && (
        <Section className="bg-bg-alt">
          <div className="mx-auto max-w-[720px]">
            <h2 className="font-display mb-5 text-lg font-bold text-text">Continue lendo</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-border-blue">
                  <span className="font-display mb-2 inline-block text-xs font-bold text-brand-500">{p.category}</span>
                  <h3 className="font-display text-sm font-bold text-text">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaSection />
    </>
  );
}
