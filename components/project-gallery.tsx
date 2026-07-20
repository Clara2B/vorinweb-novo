import { Laptop, Smartphone, Tablet } from "lucide-react";
import type { CaseCategory } from "@/data/cases";
import { ProjectMockup } from "./project-mockup";

const devices = [
  { label: "Desktop", icon: Laptop, className: "md:col-span-2 h-64" },
  { label: "Tablet", icon: Tablet, className: "h-56" },
  { label: "Celular", icon: Smartphone, className: "h-56" },
];

export function ProjectGallery({ category, urlLabel }: { category: CaseCategory; urlLabel: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {devices.map((device) => (
        <div key={device.label} className={`overflow-hidden rounded-2xl border border-border ${device.className}`}>
          <div className="flex items-center gap-1.5 border-b border-border bg-bg-alt px-3 py-2">
            <device.icon className="h-3.5 w-3.5 text-faint" aria-hidden />
            <span className="font-display text-xs font-semibold text-faint">{device.label}</span>
          </div>
          <div className="h-[calc(100%-33px)]">
            <ProjectMockup category={category} urlLabel={urlLabel} />
          </div>
        </div>
      ))}
    </div>
  );
}
