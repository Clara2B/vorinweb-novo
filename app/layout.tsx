import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { ThemeInitScript } from "@/components/theme-init-script";
import { basePath, siteConfig } from "@/lib/site-config";

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
    default: `${siteConfig.name} — Presença digital que transforma visitantes em clientes`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: `${basePath}/favicon.svg`,
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
      </head>
      <body className="flex min-h-full flex-col">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob b1" />
          <div className="mesh-blob b2" />
        </div>
        {children}
      </body>
    </html>
  );
}
