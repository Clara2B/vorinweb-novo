import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative z-[1] px-[5%] py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <div className="font-display mb-2 text-[0.68rem] font-bold tracking-[0.12em] text-brand-500 uppercase">
        {eyebrow}
      </div>
      <h2 className="font-display mb-3 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight font-extrabold tracking-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-[1.05rem] leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
