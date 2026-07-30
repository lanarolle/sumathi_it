import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="container-padded pt-6">
      <ol className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple px-3 py-1.5 text-xs text-white">
        <li>
          <Link href="/" className="transition hover:text-white/80">
            Home
          </Link>
        </li>

        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-white/60" />

            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-white/80"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}