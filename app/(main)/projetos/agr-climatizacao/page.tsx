import type { Metadata } from "next";
import { RedirectClient } from "@/components/redirect-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Redirecionando…",
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteConfig.url}/projetos/agr-ar-condicionado` },
};

export default function AgrClimatizacaoRedirectPage() {
  return <RedirectClient to="/projetos/agr-ar-condicionado" label="AGR Ar Condicionado" />;
}
