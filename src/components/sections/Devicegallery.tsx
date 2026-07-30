"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export type GalleryImage = {
  image: string;
  caption: string;
};

const defaultImages: GalleryImage[] = [
  { image: "/images/enterprise/gallery-business-laptop.svg", caption: "Business laptops" },
  { image: "/images/enterprise/gallery-workstation.svg", caption: "Workstations" },
  { image: "/images/enterprise/gallery-gaming-pc.svg", caption: "Gaming & high-performance PCs" },
  { image: "/images/enterprise/gallery-tablet.svg", caption: "Tablets & hybrid devices" }
];

export function DeviceGallery({
  title = "Devices in the field",
  description = "A closer look at the laptops, workstations, and tablets we supply. Swap these placeholders for your own product photography.",
  images = defaultImages
}: {
  title?: string;
  description?: string;
  images?: GalleryImage[];
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <AnimatedSection variant="fade-up">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">Gallery</span>
            <h2 className="mt-3 text-2xl font-semibold text-navy-950 md:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item, index) => (
            <AnimatedSection key={item.image} delay={index * 0.05} variant="pop">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-card">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                  {item.caption}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}