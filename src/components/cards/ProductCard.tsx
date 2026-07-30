"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { titleCase } from "@/lib/utils";

export function ProductCard({
  title,
  summary,
  image,
  href,
  category
}: {
  title: string;
  summary: string;
  image: string;
  href: string;
  category: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow"
    >
      {/* Image bleed */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category chip */}
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {titleCase(category)}
        </span>

        {/* Title over image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-semibold tracking-[0.02em] leading-[1.3] text-white drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-6 text-slate-600 line-clamp-3">{summary}</p>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <span className="button-flip-text">
            <span>View product</span>
            <span>View product</span>
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}