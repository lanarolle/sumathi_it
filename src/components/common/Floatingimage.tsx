"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloatingImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function FloatingImage({ src, alt, className = "" }: FloatingImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-card shadow-card ${className}`}
      animate={{ y: [0, 0, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 rounded-card ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}