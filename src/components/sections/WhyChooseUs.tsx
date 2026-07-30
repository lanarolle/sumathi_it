"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeader } from "@/components/common/SectionHeader";

type WhyCard = {
  tag: string;
  title: string;
  text: string;
};

const cards: WhyCard[] = [
  {
    tag: "Legacy",
    title: "30 Years of Trust",
    text: "Part of the Sumathi Group's three-decade legacy in Sri Lankan enterprise \u2014 a track record you can check.",
  },
  {
    tag: "Team",
    title: "Certified, Hands-On Experts",
    text: "Solution architects and engineers who pair vendor certifications with real deployment experience.",
  },
  {
    tag: "Reach",
    title: "Global-Grade Partnerships",
    text: "Certified alliances with Cisco, Lenovo, Fortinet, VMware and more \u2014 deployed to local realities.",
  },
  {
    tag: "Delivery",
    title: "One Roof, Full Lifecycle",
    text: "Consultation, deployment, and support under a single accountable team, built to scale with you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        <SectionHeader
          eyebrow="Why Sumathi IT"
          title="Trust, engineered the same way we build networks"
          description="Four reasons enterprises stay with us long after the first deployment."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <AnimatedSection variant="slide-right" className="relative lg:col-span-4">
            <div className="relative h-64 overflow-hidden rounded-card shadow-soft lg:h-full lg:min-h-[380px]">
              <Image
                src="/images/home/sumathiIT-home-image6.jpg"
                alt="Sumathi IT team reviewing an enterprise deployment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/0 to-transparent" />
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {cards.map((card, index) => (
              <AnimatedSection key={card.title} variant="pop" delay={index * 0.08}>
                <div className="premium-card h-full p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                    {card.tag}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-navy-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
