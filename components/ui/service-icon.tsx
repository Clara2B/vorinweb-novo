import { Bot, Globe, Rocket, ShoppingCart, type LucideProps } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], typeof Globe> = {
  Globe,
  Rocket,
  ShoppingCart,
  Bot,
};

export function ServiceIcon({ icon, ...props }: { icon: Service["icon"] } & LucideProps) {
  const Icon = iconMap[icon];
  return <Icon {...props} />;
}
