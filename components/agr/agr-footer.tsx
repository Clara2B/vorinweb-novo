import Link from "next/link";
import Image from "next/image";

export function AgrFooter() {
  return (
    <footer className="border-t border-border bg-bg-alt px-[5%] py-12 text-center">
      <Image src="/images/agr/logo.webp" alt="AGR Ar Condicionado" width={48} height={48} className="mx-auto mb-3 h-12 w-12 object-contain" />
      <p className="font-display text-sm font-bold text-text">AGR Ar Condicionado LTDA</p>
      <p className="mt-1 text-sm text-faint">São Paulo – SP · (11) 94001-1535 · rodrigoagrarcondicionado@gmail.com</p>
      <p className="mt-6 text-xs text-faint">
        Site desenvolvido por{" "}
        <Link href="/" className="font-semibold text-brand-500 hover:underline">
          VorinWeb
        </Link>
      </p>
    </footer>
  );
}
