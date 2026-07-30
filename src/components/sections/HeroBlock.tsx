import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { PageBackgroundVideo } from "@/components/common/PageBackgroundVideo";

export function HeroBlock({
  eyebrow,
  title,
  description,
  image,
  primaryCta = { href: "/contact-us", label: "Talk to an Expert" },
  secondaryCta,
  useVideo = false
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  useVideo?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      {useVideo && (
        <>
          <PageBackgroundVideo />
          <div className="absolute inset-0 bg-white/80" />
        </>
      )}
      <div className="container-padded max-w-[91rem] mx-auto grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center relative z-10">
        <AnimatedSection>
          {eyebrow ? <p className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple">{eyebrow}</p> : null}
          <h1 className="mt-5 max-w-4xl !text-[40px] font-semibold tracking-[0.02em] leading-[1.15] text-navy-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? <ButtonLink href={secondaryCta.href} variant="secondary">{secondaryCta.label}</ButtonLink> : null}
          </div>
        </AnimatedSection>
        {image ? (
          <AnimatedSection delay={0.15} variant="pop" className="relative h-[320px] overflow-hidden rounded-card bg-brand-lavender shadow-soft sm:h-[440px]">
            <Image src={image} alt={title} fill className="object-cover transition duration-1000 hover:scale-[1.03]" priority />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
          </AnimatedSection>
        ) : null}
      </div>
    </section>
  );
}
