"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { ImageLightbox } from "@/components/common/ImageLightbox";

const total = galleryItems.length;

// Shortest signed distance from `index` to `center` on a circular deck,
// e.g. with 8 items, index 7 and center 0 are 1 apart, not 7 apart.
function relativePosition(index: number, center: number) {
  let diff = index - center;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

// Visual recipe per distance-from-center. Anything further than this is hidden.
function cardStyle(diff: number) {
  const abs = Math.abs(diff);
  const sign = Math.sign(diff);
  const steps = [
    { scale: 1, x: 0, rotate: 0, z: 50, opacity: 1 },
    { scale: 0.84, x: 12, rotate: 8, z: 40, opacity: 0.92 },
    { scale: 0.7, x: 22, rotate: 14, z: 30, opacity: 0.65 },
    { scale: 0.58, x: 30, rotate: 18, z: 20, opacity: 0.32 }
  ];
  const step = steps[Math.min(abs, steps.length - 1)];
  const hidden = abs >= steps.length;
  return {
    scale: step.scale,
    xVw: step.x * sign,
    rotate: step.rotate * sign,
    zIndex: step.z,
    opacity: hidden ? 0 : step.opacity,
    pointerEvents: hidden ? ("none" as const) : ("auto" as const)
  };
}

export function GalleryGrid() {
  const [center, setCenter] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const images = galleryItems.map((item) => item.image);

  const goTo = (index: number) => setCenter(((index % total) + total) % total);
  const next = () => goTo(center + 1);
  const prev = () => goTo(center - 1);

  const handleCardClick = (index: number) => {
    if (index === center) {
      setLightboxOpen(true);
    } else {
      goTo(index);
    }
  };

  // Basic touch swipe support for the deck
  let touchStartX = 0;
  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX = event.touches[0].clientX;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  return (
    <>
      <div className="container-padded">
        <div
          className="relative mx-auto h-[420px] w-full max-w-4xl sm:h-[520px] md:h-[600px]"
          style={{ perspective: "1400px" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {galleryItems.map((item, index) => {
            const diff = relativePosition(index, center);
            const style = cardStyle(diff);
            const isCenter = diff === 0;

            return (
              <motion.div
                key={item.title}
                className="absolute left-1/2 top-1/2 w-[260px] sm:w-[300px] md:w-[340px]"
                style={{ zIndex: style.zIndex, pointerEvents: style.pointerEvents }}
                animate={{
                  x: `calc(-50% + ${style.xVw}vw)`,
                  y: "-50%",
                  scale: style.scale,
                  rotate: style.rotate,
                  opacity: style.opacity
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[26px] border border-white/40 bg-brand-lavender shadow-[0_25px_45px_-15px_rgba(6,18,52,0.45)] transition-shadow duration-500 ${
                    isCenter ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="340px"
                    className="object-cover"
                    priority={isCenter}
                  />

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deck navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-950 shadow-card transition hover:-translate-x-0.5 hover:border-brand-purple hover:text-brand-purple"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-950 shadow-card transition hover:translate-x-0.5 hover:border-brand-purple hover:text-brand-purple"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={center}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}