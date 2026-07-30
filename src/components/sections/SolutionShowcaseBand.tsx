"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function SolutionShowcaseBand({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="mt-24 bg-white py-4 sm:py-6">
      <div className="container-padded">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.45, // Wait until 45% of the section is visible
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[280px] w-full overflow-hidden rounded-card shadow-soft sm:h-[340px] lg:h-[420px]"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={false}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              {eyebrow}
            </p>

            <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}