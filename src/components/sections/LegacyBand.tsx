"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ButtonLink } from "@/components/common/ButtonLink";

const checklist = [
  "Certified engineers across every major vendor stack",
  "Solutions scoped around your business, not our shelf",
  "Support that stays engaged long after go-live",
];

export function LegacyBand() {
  return (
    <section className="section-padding py-16 overflow-hidden bg-white">
      <div className="container-padded">
        {/* Header row */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <AnimatedSection variant="slide-right" className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
              Three Decades of Delivery
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl lg:text-5xl">
              Done right, with <span className="text-brand-purple">precision and care.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-8 text-slate-600">
              For over 25 years, Sumathi IT has been the technology partner Sri Lankan
              enterprises turn to when systems absolutely have to work. We don&apos;t just
              install infrastructure &mdash; we stay accountable for it.
            </p>
          </AnimatedSection>
        </div>

        {/* Image + supporting copy / checklist / CTA, side by side */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <AnimatedSection variant="pop" className="relative lg:col-span-7">
            <div className="relative h-[320px] overflow-hidden rounded-card shadow-soft sm:h-[420px] lg:h-full lg:min-h-[440px]">
              <Image
                src="/images/home/sumathiit-home-image4.jpg"
                alt="Sumathi IT engineers collaborating on a client deployment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent" />
            </div>

          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1} className="lg:col-span-5">
            <p className="text-sm leading-7 text-slate-600">
              With over three decades of proven excellence, Sumathi System Integration
              Solutions has earned its place as one of Sri Lanka&apos;s most trusted
              technology partners. Every engagement is handled by engineers who&apos;ve
              seen the edge cases before &mdash; so your systems stay online when it
              matters most.
            </p>
            <div className="mt-6">
              <AnimatedList items={checklist} />
            </div>
            <div className="mt-8">
              <ButtonLink href="/about-us">Read More About Us</ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}