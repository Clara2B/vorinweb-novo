import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "whatsapp" | "primary" | "outline" | "outline-white" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  whatsapp:
    "bg-whatsapp text-white shadow-[0_4px_20px_rgba(22,163,74,0.35)] hover:bg-whatsapp-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(22,163,74,0.45)]",
  primary:
    "bg-brand-600 text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:bg-brand-700 hover:shadow-[0_6px_20px_rgba(59,130,246,0.45)]",
  outline:
    "border-[1.5px] border-border bg-transparent text-muted hover:border-brand-500 hover:text-brand-500",
  "outline-white":
    "border-[1.5px] border-white/35 bg-transparent text-white/85 hover:border-white hover:text-white",
  ghost: "bg-brand-50 text-brand-500 hover:bg-brand-100",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `font-display inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a href={href} target={external !== false ? "_blank" : undefined} rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
