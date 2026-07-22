import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { cases } from "@/data/cases";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/projetos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/orcamento", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/manutencao-ar-condicionado", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/politica-de-privacidade", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/mapa-do-site", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/${service.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const projectRoutes = cases.map((c) => ({
    path: `/projetos/${c.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
