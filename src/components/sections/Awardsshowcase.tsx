"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
  {
    src: "/images/home/sumathiit-home-image4.jpg",
    alt: "Sumathi IT team achievement",
    caption: "25 Years of Excellence"
  },
  {
    src: "/images/uav/banner-drones.jpg",
    alt: "UAV Solutions expertise",
    caption: "UAV Solutions Leader"
  },
  {
    src: "/images/home/sumathiit-home-image7.jpg",
    alt: "Engineering excellence",
    caption: "ExTell partner recognition"
  },
  {
    src: "/images/home/sumathiIT-home-image2.jpg",
    alt: "M.TECH partnership award",
    caption: "M.TECH excellence award"
  }
];

const AUTOPLAY_MS = 4000;

export function AwardsShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + awards.length) % awards.length);
  }, [index]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % awards.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const active = awards[index];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">25th anniversary</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy-950 sm:text-4xl">Recognised for the work we do</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Two and a half decades of partnerships and certifications, gathered from clients and technology
            partners who trusted us to get it right.
          </p>
        </div>

        <div
          className="group relative mt-12 h-[320px] overflow-hidden rounded-card sm:h-[420px] lg:h-[480px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={active.src}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 1.03 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={active.src} alt={active.alt} fill priority className="object-cover" />

              {/* Base gradient, always faintly present so the slide reads as clickable */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />

              {/* Caption — hidden by default, revealed on hover */}
              <div className="absolute inset-0 flex items-end bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/40">
                <div className="translate-y-4 p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">Recognition</p>
                  <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">{active.caption}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / next arrows */}
          <button
            type="button"
            aria-label="Previous award"
            onClick={() => goTo(index - 1)}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 hover:bg-white/20 group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next award"
            onClick={() => goTo(index + 1)}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 hover:bg-white/20 group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-6">
            {awards.map((award, i) => (
              <button
                key={award.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold-500" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}