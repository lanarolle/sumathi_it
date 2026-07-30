"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function CategoryVideoHeader({
  videoUrl,
  poster,
  eyebrow,
  title,
  description,
}: {
  videoUrl: string;
  poster?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  const words = title.split(" ");

  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      <div className="relative aspect-[16/7] w-full min-h-[340px] md:min-h-[500px] lg:min-h-[620px]">
        {/* Background Video */}
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.72 }}
          transition={{ duration: 2 }}
        >
          <source src={videoUrl} type="video/mp4" />
        </motion.video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

        {/* Content */}
        <div className="container-padded relative z-10 flex h-full items-center">
          <AnimatedSection variant="slide-right">
            <div className="max-w-3xl hidden sm:block">
              {eyebrow && (
                <motion.span
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md"
                >
                  {eyebrow}
                </motion.span>
              )}

              {/* Animated Title */}
              <h2 className="mt-6 flex flex-wrap gap-x-4 gap-y-2 leading-none">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 80,
                      rotateX: -90,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-6xl font-medium tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)] md:text-7xl lg:text-8xl xl:text-[7rem]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              {description && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                  }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/90 md:text-xl"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}