"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";

export type DroneSlide = {
  image: string;
  /** Accessible description only — no text is rendered over the image. */
  alt: string;
};

// Dummy placeholders — swap `image` for your uploaded vertical photography.
// Each image already carries its own caption/branding, so no text is
// rendered on top of the slides.
const defaultSlides: DroneSlide[] = [
  { image: "/images/drone slider/slider1.jpg", alt: "Drone in operation" },
  { image: "/images/drone slider/slider2.jpg", alt: "Drone aerial view" },
  { image: "/images/drone slider/slider3.jpg", alt: "Drone field work" },
  { image: "/images/drone slider/slider4.jpg", alt: "Drone inspection" },
  { image: "/images/drone slider/slider5.jpg", alt: "Drone mapping" },
  { image: "/images/drone slider/slider6.jpg", alt: "Drone survey" },
  { image: "/images/drone slider/slider7.jpg", alt: "Drone deployment" },
  { image: "/images/drone slider/slider8.jpg", alt: "Drone operation" },
  { image: "/images/drone slider/slider9.jpg", alt: "Drone flight" },
  { image: "/images/drone slider/slider10.jpg", alt: "Drone mission" }
];

// How many vertical cards are visible at once, per breakpoint.
const BREAKPOINTS = [
  { minWidth: 1024, count: 3 },
  { minWidth: 640, count: 2 },
  { minWidth: 0, count: 1 }
] as const;

function getItemsPerView(width: number) {
  return BREAKPOINTS.find((bp) => width >= bp.minWidth)?.count ?? 4;
}

export function DroneImageSlider({
  slides = defaultSlides,
  intervalMs = 3000
}: {
  slides?: DroneSlide[];
  intervalMs?: number;
}) {
  const slideCount = slides.length;
  const [itemsPerView, setItemsPerView] = useState(3);
  // Position inside the "extended" track (real slides + clones on both ends),
  // which is what makes the loop feel seamless instead of snapping back.
  const [trackIndex, setTrackIndex] = useState(itemsPerView);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Recalculate how many cards fit as the viewport changes.
  useEffect(() => {
    const updateItemsPerView = () => {
      const next = getItemsPerView(window.innerWidth);
      setItemsPerView(next);
      setAnimate(false);
      setTrackIndex(next);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // [ trailing clones ] + [ real slides ] + [ leading clones ]
  const extendedSlides = [
    ...slides.slice(slideCount - itemsPerView),
    ...slides,
    ...slides.slice(0, itemsPerView)
  ];

  const step = useCallback((direction: 1 | -1) => {
    setAnimate(true);
    setTrackIndex((current) => current + direction);
  }, []);

  // Auto-slide.
  useEffect(() => {
    if (isPaused || slideCount <= itemsPerView) return;
    const timer = setInterval(() => step(1), intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, intervalMs, step, slideCount, itemsPerView]);

  // Once the track drifts into the cloned region, snap invisibly back
  // into the real range so the loop can continue forever.
  const handleTransitionEnd = () => {
    if (trackIndex >= slideCount + itemsPerView) {
      setAnimate(false);
      setTrackIndex(trackIndex - slideCount);
    } else if (trackIndex < itemsPerView) {
      setAnimate(false);
      setTrackIndex(trackIndex + slideCount);
    }
  };

  // Re-enable the transition on the next tick after a silent snap.
  useEffect(() => {
    if (animate) return;
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setAnimate(true), 30);
    return () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, [animate, trackIndex]);

  const realIndex = ((((trackIndex - itemsPerView) % slideCount) + slideCount) % slideCount);

  const goTo = (targetRealIndex: number) => {
    setAnimate(true);
    setTrackIndex(targetRealIndex + itemsPerView);
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        <AnimatedSection variant="pop">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                Field Gallery
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-navy-950 md:text-3xl">
                Drone Image Gallery
              </h2>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous images"
                onClick={() => step(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-navy-950 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next images"
                onClick={() => step(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-navy-950 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-[24px]">
              <div
                onTransitionEnd={handleTransitionEnd}
                className={cn(
                  "flex",
                  animate && "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                )}
                style={{
                  transform: `translateX(-${trackIndex * (100 / itemsPerView)}%)`
                }}
              >
                {extendedSlides.map((slide, i) => (
                  <div
                    key={`${slide.image}-${i}`}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-navy-950 shadow-card">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact arrows for small screens, overlaid on the images */}
            <button
              type="button"
              aria-label="Previous images"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy-950/70 text-white backdrop-blur transition hover:bg-navy-950 sm:hidden"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next images"
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy-950/70 text-white backdrop-blur transition hover:bg-navy-950 sm:hidden"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                aria-label={`Go to image ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === realIndex ? "w-8 bg-[var(--gold)]" : "w-4 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}