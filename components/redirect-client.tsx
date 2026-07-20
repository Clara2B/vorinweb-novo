"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function RedirectClient({ to, label }: { to: string; label: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-[5%] py-24 text-center">
      <p className="text-sm text-muted">
        Esta página mudou de endereço. Redirecionando para {label}…
      </p>
      <Link href={to} className="font-display text-sm font-bold text-brand-500 hover:underline">
        Clique aqui se não for redirecionado automaticamente
      </Link>
    </div>
  );
}
