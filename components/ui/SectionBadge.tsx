import { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
  dark?: boolean;
}

export default function SectionBadge({ children, dark = false }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full ${
        dark
          ? "bg-white/10 text-accent border border-white/20"
          : "bg-primary/8 text-primary border border-primary/15"
      }`}
      style={!dark ? { backgroundColor: "rgba(28,62,48,0.07)" } : undefined}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-accent" : "bg-primary"}`}
      />
      {children}
    </span>
  );
}
