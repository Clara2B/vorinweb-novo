import { Bot, Globe, Rocket, Settings, ShoppingCart } from "lucide-react";
import type { CaseCategory } from "@/data/cases";

const themes: Record<CaseCategory, { gradient: string; icon: typeof Globe }> = {
  sites: { gradient: "linear-gradient(135deg,#1d4ed8,#1e3a8a)", icon: Globe },
  "lojas-virtuais": { gradient: "linear-gradient(135deg,#16a34a,#065f46)", icon: ShoppingCart },
  "landing-pages": { gradient: "linear-gradient(135deg,#7c3aed,#4c1d95)", icon: Rocket },
  bots: { gradient: "linear-gradient(135deg,#0891b2,#164e63)", icon: Bot },
  sistemas: { gradient: "linear-gradient(135deg,#4f46e5,#1e1b4b)", icon: Settings },
};

export function ProjectMockup({
  category,
  urlLabel,
  size = "card",
}: {
  category: CaseCategory;
  urlLabel: string;
  size?: "card" | "hero";
}) {
  const theme = themes[category];
  const Icon = theme.icon;
  const isHero = size === "hero";

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-bg-alt px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex-1 truncate rounded-md border border-border bg-bg px-3 py-1 font-display text-xs text-faint">
          {urlLabel}
        </span>
      </div>
      <div
        className={`relative flex flex-1 flex-col items-center justify-center gap-3 ${isHero ? "p-10" : "p-6"}`}
        style={{ background: theme.gradient }}
      >
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <Icon className={`relative text-white/90 ${isHero ? "h-16 w-16" : "h-10 w-10"}`} strokeWidth={1.5} aria-hidden />
        {isHero && (
          <div className="relative flex w-full max-w-sm flex-col gap-2">
            <div className="h-2.5 w-3/4 self-center rounded-full bg-white/25" />
            <div className="h-2.5 w-1/2 self-center rounded-full bg-white/15" />
          </div>
        )}
      </div>
    </div>
  );
}
