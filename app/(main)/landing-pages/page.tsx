import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("landing-pages")!;

export const metadata: Metadata = buildMetadata({
  title: service.hero.title,
  description: service.hero.subtitle,
  path: `/${service.slug}`,
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
