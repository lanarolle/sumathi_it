"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";

export function ImageTextBanner({
  image,
  eyebrow,
  heading,
  text,
  align = "left"
}: {
  image: string;
  eyebrow?: string;
  heading: string;
  text?: string;
  align?: "left" | "right";
}) {
  return (
    <section className="py-8 bg-white">
      <div className="container-padded">
        <AnimatedSection variant="pop">
          <div className="relative isolate overflow-hidden rounded-[32px] shadow-card">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                className={cn(
                  "absolute inset-0",
                  align === "left"
                    ? "bg-gradient-to-r from-navy-950/85 via-navy-950/35 to-transparent"
                    : "bg-gradient-to-l from-navy-950/85 via-navy-950/35 to-transparent"
                )}
              />
            </div>

            <div
              className={cn(
                "absolute inset-0 flex items-center p-8 md:p-14",
                align === "right" && "justify-end text-right"
              )}
            >
              <div className="max-w-lg">
                {eyebrow && (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    {eyebrow}
                  </span>
                )}
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-white md:text-3xl">
                  {heading}
                </h3>
                {text && (
                  <p className="mt-4 text-sm leading-7 text-blue-100/90 md:text-base">
                    {text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}