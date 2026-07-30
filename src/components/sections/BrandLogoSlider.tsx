"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export type BrandLogo = {
  name: string;
  logo: string;
  /** true if `logo` is a real asset path; false = still a placeholder */
  isPlaceholder?: boolean;
};

export function BrandLogoSlider({
  title = "Brands we supply",
  description = "Business laptops, creative workstations, and gaming/high-performance PCs from trusted global brands.",
  logos
}: {
  title?: string;
  description?: string;
  logos: BrandLogo[];
}) {
  const track = [...logos, ...logos];

  return (
    <section className="section-paddin">
      <div className="container-padded">
        <AnimatedSection variant="fade-up">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Ecosystem
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-navy-950 md:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Full-width strip — intentionally outside container-padded so it runs edge-to-edge */}
      <div className="relative w-full overflow-hidden bg-white py-8 mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-14 px-6">
          {track.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="relative grid h-14 w-32 flex-shrink-0 place-items-center grayscale transition duration-300 hover:grayscale-0"
            >
              {brand.isPlaceholder ? (
                <span className="rounded-lg border border-dashed border-slate-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {brand.name}
                </span>
              ) : (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}