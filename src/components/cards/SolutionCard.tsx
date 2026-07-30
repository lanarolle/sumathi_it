"use client";

import Image from "next/image";
import Link from "next/link";

export function SolutionCard({
  title,
  summary,
  image,
  href,
  tag
}: {
  title: string;
  summary: string;
  image: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[400px] flex-col justify-end overflow-hidden rounded-[28px] border border-slate-200 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
      </div>

      <div className="relative z-10 flex items-center justify-between p-6">
        <div>
          {tag && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
              {tag}
            </span>
          )}
          <h3 className="mt-2 text-2xl font-semibold tracking-[0.02em] leading-[1.2] text-white">{title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-blue-100/90 line-clamp-2">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}