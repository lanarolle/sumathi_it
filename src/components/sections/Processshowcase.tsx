"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Understand Your Needs",
    description:
      "We begin every project by carefully understanding your unique business goals, challenges, and audience. This deep discovery process ensures we create a solution that's not only relevant but also built around your specific needs and expectations.",
  },
  {
    title: "Design Tailored Solutions",
    description:
      "Our team transforms insights into strategic, creative, and scalable solutions. Every element is customized to align with your vision, ensuring the final product is both impactful and functional \u2014 designed to solve real problems and deliver measurable results.",
  },
  {
    title: "Deliver And Support",
    description:
      "We focus on delivering high-quality, on-time results with a seamless process. Post-launch, we remain committed through ongoing support, improvements, and optimization \u2014 ensuring your investment continues to perform and adapt to evolving business needs.",
  },
];

function TimelineRow({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const fill = useTransform(progress, [index / total, (index + 1) / total], [0, 1]);
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 96 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex gap-5 sm:gap-6"
    >
      {/* Rail: track + scroll-linked fill, aligned to each marker */}
      <div className="relative flex w-10 shrink-0 flex-col items-center">
        <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand-purple bg-white text-sm font-bold text-brand-purple transition-colors duration-300 group-hover:bg-brand-purple group-hover:text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <div className="relative mt-1 w-[2px] flex-1 overflow-hidden rounded-full bg-slate-200">
            <motion.span
              style={{ scaleY: fill }}
              className="absolute inset-0 origin-top bg-brand-purple"
            />
          </div>
        )}
      </div>

      {/* Card with scale on hover */}
      <motion.div 
        className="relative mb-6 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-brand-lavender/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-brand-purple/40 hover:bg-brand-lavender sm:p-7"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span className="pointer-events-none absolute -right-3 -top-6 select-none text-[110px] font-black leading-none text-brand-purple/[0.07]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative">
          <h3 className="text-lg font-semibold text-navy-950 sm:text-xl">{step.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">{step.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProcessShowcase() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 120%", "end 0%"],
  });

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-padded grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        {/* Left: sticky image panel - removed lg:top-28 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-4"
        >
          <div className="relative h-[500px] overflow-hidden rounded-card shadow-soft sm:h-[560px] lg:h-[640px]">
            <Image
              src="/images/home/sumathiIT-home-image5.jpg"
              alt="How We Work"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

            <span className="absolute left-6 top-6 inline-flex items-center rounded-full bg-brand-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-card">
              How We Work
            </span>

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                A 3-Step Process
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-[1.15] text-white sm:text-3xl">
                How We Deliver Innovation And Excellence
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Right: scroll-linked timeline */}
        <div ref={railRef} className="lg:col-span-8">
          {steps.map((step, index) => (
            <TimelineRow
              key={step.title}
              step={step}
              index={index}
              total={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}