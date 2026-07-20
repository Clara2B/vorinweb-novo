import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function buildMetadata(params: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${params.path}`;
  const image = params.image ?? `${siteConfig.url}/og-image.png`;

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [image],
    },
  };
}
