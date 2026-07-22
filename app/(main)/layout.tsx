import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { JsonLd, organizationSchema, localBusinessSchema } from "@/lib/schema";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <main className="flex-1 pt-[68px]">{children}</main>
      <Footer />
      <WhatsAppFloatButton />
      <MobileStickyBar />
    </>
  );
}
