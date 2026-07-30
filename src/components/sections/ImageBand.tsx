"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ImageBand() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-padded">
        <motion.div
          initial={{ opacity: 0, y: -90, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
          mass: 2,
        }}
          className="relative h-[280px] w-full overflow-hidden rounded-card shadow-soft sm:h-[340px] lg:h-[400px]"
        >
          <Image
            src="/images/home/sumathiIT-home-image2.jpg"
            alt="Sumathi IT infrastructure deployed across Sri Lanka"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Nationwide Infrastructure
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              Built for Sri Lanka&apos;s mission-critical systems.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/90 sm:text-base">
              From Colombo data centers to island-wide field deployments, our
              infrastructure keeps enterprises running without interruption.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}