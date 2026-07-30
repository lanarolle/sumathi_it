"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const stats = [
  { value: 30, suffix: "+", label: "Years of proven experience" },
  { value: 95, suffix: "%", label: "Customer satisfaction focus" },
  { value: 250, suffix: "+", label: "Projects completed" },
  { value: 25, suffix: "+", label: "Technology partnerships" }
];

const banners = [
  { src: "/images/home/sumathiIT-home-image6.jpg", alt: "Engineering team on a UAV field survey" },
  { src: "/images/home/Sumathiit-home-image3.jpg", alt: "Sumathi IT engineers at the workshop" },
  { src: "/images/home/sumathiIT-home-image2.jpg", alt: "Equipment handover with a partner client" }
];

function CounterCircle({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-32 w-32 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-md sm:h-36 sm:w-36"
      >
        <span className="text-3xl font-bold text-white sm:text-4xl">
          {count}
          {suffix}
        </span>
      </motion.div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">{label}</p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-purple">
      <div className="absolute inset-0">
        <Image src="/images/home/sumathiIT-home-image6.jpg" alt="" fill className="object-cover opacity-40" priority={false} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/85 via-brand-purple/75 to-brand-purple" />
      </div>

      <div className="container-padded relative py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">By the numbers</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Results our clients can count on</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <CounterCircle key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 0.1} />
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {banners.map((banner, index) => (
            <AnimatedSection key={banner.src} variant="pop" delay={index * 0.08}>
              <div className="relative h-64 overflow-hidden rounded-card">
                <Image src={banner.src} alt={banner.alt} fill className="object-cover transition duration-700 hover:scale-110" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}