import type { Metadata } from "next";
import { RedirectClient } from "@/components/redirect-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Redirecionando…",
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteConfig.url}/projetos` },
};

export default function PortfolioRedirectPage() {
  return <RedirectClient to="/projetos" label="Projetos" />;
}
