import { LucideIcon } from "lucide-react";

export type SingleitemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  onClick?: () => void;
}