"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "pop" | "slide-left" | "slide-right";

const variants = {
  "fade-up": { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  pop: { initial: { opacity: 0, y: 20, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 } },
  "slide-left": { initial: { opacity: 0, x: 38 }, animate: { opacity: 1, x: 0 } },
  "slide-right": { initial: { opacity: 0, x: -38 }, animate: { opacity: 1, x: 0 } }
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fade-up"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const selected = variants[variant];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.animate}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
