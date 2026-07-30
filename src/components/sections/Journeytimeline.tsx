"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "1994",
    title: "GPS products to Sri Lanka",
    description: "First to introduce hand-held GPS products to Sri Lanka, in partnership with Magellan USA."
  },
  {
    year: "2011",
    title: "Hi-end GNSS system",
    description: "Introduced the first integrated hi-end GNSS system with Novatel OEM and Pacific Crest."
  },
  {
    year: "2017",
    title: "Industrial & agriculture drones",
    description: "First to introduce industrial and agriculture drones in Sri Lanka, in partnership with DJI."
  },
  {
    year: "2018",
    title: "Our own engineering division",
    description: "Established an in-house engineering division for UAV operation and repair handling."
  },
  {
    year: "2019",
    title: "Pix4D software",
    description: "Introduced the Pix4D photogrammetry software solution to the local industry."
  },
  {
    year: "2023 – 2024",
    title: "Anti-drone systems",
    description: "Partnered with TRD Anti-Drone Systems to enable secure, controlled drone operation."
  },
  {
    year: "2023",
    title: "Terra Solid & LiDAR",
    description: "Introduced Terra Solid LiDAR processing and the Swellpro waterproof drone for industrial use."
  }
];

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-[1fr_auto_1fr] md:gap-0 md:py-14">
      {/* Left column content (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -64 : 64 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`md:pr-12 ${fromLeft ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left"} ${
          fromLeft ? "" : "md:pl-12 md:pr-0"
        }`}
      >
        <div className="inline-block rounded-card border border-white/15 bg-white/[0.06] p-6 text-left backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.1]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">{milestone.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{milestone.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{milestone.description}</p>
        </div>
      </motion.div>

      {/* Center node */}
      <div className="relative hidden h-full w-10 md:col-start-2 md:flex md:items-center md:justify-center">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="z-10 flex h-4 w-4 items-center justify-center rounded-full border-4 border-gold-500 bg-navy-950 shadow-[0_0_0_4px_rgba(255,255,255,1)]"
        />
      </div>

      {/* Mobile node */}
      <span className="absolute left-0 top-0 flex h-4 w-4 -translate-x-[calc(50%-1px)] items-center justify-center rounded-full border-4 border-gold-500 bg-navy-950 md:hidden" />
    </div>
  );
}

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"]
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const spineOpacity = useTransform(spineScale, [0, 0.05], [0, 1]);

  return (
    <section className="section-padding relative overflow-hidden bg-navy-950">
      {/* Animated glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/25 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-brand-purple/25 blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-gold-500/10 blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />
      <div className="container-padded relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">Since 1994</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Three decades of firsts
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Every milestone below is a moment we brought a technology to Sri Lanka before anyone else did.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-12 pl-6 md:pl-0">
          {/* Track (static, faint) */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          {/* Track (animated fill, tied to scroll progress) */}
          <motion.div
            style={{ scaleY: spineScale, opacity: spineOpacity }}
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-500 via-gold-500/80 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          {milestones.map((milestone, index) => (
            <MilestoneCard key={milestone.year + milestone.title} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}