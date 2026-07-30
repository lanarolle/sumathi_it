"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Handshake, Network, ShieldCheck, SmilePlus } from "lucide-react";

const icons = {
  shield: ShieldCheck,
  smile: SmilePlus,
  network: Network,
  handshake: Handshake
};

function parseValue(value: string) {
  const match = value.match(/(\d+)/);
  return {
    number: match ? Number(match[1]) : 0,
    prefix: value.split(match?.[1] ?? "")[0] ?? "",
    suffix: match ? value.slice(value.indexOf(match[1]) + match[1].length) : ""
  };
}

export function CountUpStat({ value, label, icon }: { value: string; label: string; icon: keyof typeof icons }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const parsed = useMemo(() => parseValue(value), [value]);
  const Icon = icons[icon];

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 54;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(parsed.number * progress));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [parsed.number, started]);

  return (
    <div ref={ref} className="premium-card relative overflow-hidden p-6 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-brand-purple">
        {parsed.prefix}
        {count}
        {parsed.suffix}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  );
}
