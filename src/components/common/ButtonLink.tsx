import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "gold";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand-blue text-white shadow-card hover:bg-brand-purple",
    secondary: "border border-slate-300 bg-white text-navy-950 hover:border-brand-purple hover:text-brand-purple hover:bg-brand-lavender/60",
    light: "bg-white text-navy-950 hover:bg-brand-lavender",
    gold: "bg-gold-500 text-white shadow-gold hover:bg-navy-950"
  };

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/15",
        styles[variant],
        className
      )}
    >
      <span className="button-flip-text">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/18 transition duration-500 group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
