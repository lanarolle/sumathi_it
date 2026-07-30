"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function AnimatedList({ items, iconColor = "text-brand-blue" }: { items: string[]; iconColor?: string }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: index * 0.08 }}
          className="flex items-start gap-3 text-sm leading-7 text-slate-700"
        >
          <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${iconColor}`} />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
