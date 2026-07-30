"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <div className="relative h-[320px] overflow-hidden rounded-card bg-brand-lavender shadow-soft sm:h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image src={active} alt={title} fill className="object-cover" priority />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/50" />
      </div>
      {images.length > 1 ? (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-clean">
          {images.map((image, index) => (
            <button key={image} onClick={() => setActive(image)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border bg-white transition ${active === image ? "border-brand-purple ring-4 ring-brand-purple/10" : "border-slate-200 hover:border-brand-purple"}`}>
              <Image src={image} alt={`${title} image ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
