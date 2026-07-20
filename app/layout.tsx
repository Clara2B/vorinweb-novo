import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { ThemeInitScript } from "@/components/theme-init-script";
import { JsonLd, organizationSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Sites, sistemas e bots que vendem de verdade`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <ThemeInitScript />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="flex min-h-full flex-col">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob b1" />
          <div className="mesh-blob b2" />
        </div>
        <Header />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}
