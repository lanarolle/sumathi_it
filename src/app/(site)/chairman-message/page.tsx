import Image from "next/image";

import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnniversaryCelebration } from "@/components/sections/AnniversaryCelebration";

export const metadata = buildMetadata({
  title: "25th Anniversary Message",
  description:
    "Sumathi IT celebrates 25 years of trusted technology solutions, service excellence, enterprise IT capability, UAV technologies, and customer partnerships in Sri Lanka.",
  path: "/chairman-message",
  keywords: ["Sumathi IT 25 anniversary", "25 years technology solutions Sri Lanka", "Sumathi IT chairman message"]
});

export default function ChairmanMessagePage() {
  return (
    <div className="font-poppins">
      <AnniversaryCelebration logoSrc="/images/logo/logo_white.png" companyName="Sumathi IT" years={25}>
        {/* ---------- Page hero: logo + anniversary medallion ---------- */}
        <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_1px)] [background-size:22px_22px]"
          />

          <div className="container-padded relative flex flex-col items-center text-center">
            {/* Company logo lives here, on the dark band where the white lockup reads clearly.
                If you have a colour/dark-on-light logo file, swap it in wherever the mark
                needs to sit on a white or gold-50 background further down the page. */}
            <Image
              src="/images/logo/logo_white.png"
              alt="Sumathi IT"
              width={252}
              height={60}
              className="h-14 w-auto opacity-90 sm:h-16"
            />

            {/* Anniversary medallion — the signature element for this page */}
            <div className="relative mt-10 flex h-40 w-40 items-center justify-center text-gold-300 sm:h-48 sm:w-48">
              <svg viewBox="0 0 200 200" className="absolute h-full w-full" fill="none">
                <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
                <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                <path d="M100 12 L106 30 L100 26 L94 30 Z" fill="currentColor" opacity="0.9" />
                <g stroke="currentColor" strokeWidth="1.4" opacity="0.8">
                  <path d="M46 118 C36 108 34 90 42 74" />
                  <path d="M34 70 L42 74 M36 79 L44 82 M39 88 L47 90 M42 97 L50 98 M45 106 L53 106" />
                </g>
                <g stroke="currentColor" strokeWidth="1.4" opacity="0.8">
                  <path d="M154 118 C164 108 166 90 158 74" />
                  <path d="M166 70 L158 74 M164 79 L156 82 M161 88 L153 90 M158 97 L150 98 M155 106 L147 106" />
                </g>
              </svg>
              <span className="font-serif text-6xl font-semibold sm:text-7xl">25</span>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
              Twenty-Five Years of Trust
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-white sm:text-4xl">
              A Message from Our CEO
            </h1>
            <div className="mt-6 h-px w-16 bg-gold-400/60" />
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Reflecting on a quarter century of partnership, innovation and service to Sri
              Lanka&apos;s technology landscape.
            </p>
          </div>
        </section>

        {/* ---------- Main content ---------- */}
        <section className="section-padding bg-white">
          <div className="container-padded grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <AnimatedSection
                variant="pop"
                className="relative overflow-hidden rounded-card border border-gold-100 bg-white p-6 text-center shadow-card"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gold-50 to-transparent"
                />
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-gold-200 shadow-md sm:h-48 sm:w-48">
                  <Image src="/images/anniversary/ceo.jpg" alt="Chandima Wickramatunge" fill className="object-cover" />
                </div>

                <h2 className="relative mt-4 font-serif text-xl font-semibold text-navy-950">
                  Chandima Wickramatunge
                </h2>
                <p className="relative mt-1 text-sm font-medium text-gold-700">CEO - IT Cluster</p>
                <div className="relative mx-auto mt-3 h-px w-10 bg-gold-300" />
                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  A dedicated anniversary page honouring the trust, partnership and legacy built
                  over a quarter century.
                </p>
              </AnimatedSection>
            </aside>

            <article className="space-y-7 text-base leading-8 text-slate-700">
              <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">Our Journey</p>
                <p className="mt-4">Dear valued clients, partners and members of the Sumathi Holdings family,</p>
                <p className="mt-5">
                  For 25 years, Sumathi IT has had the privilege of supporting businesses,
                  institutions and organisations across Sri Lanka with reliable ICT solutions,
                  enterprise technology services, system integration, end-user devices, repair
                  services, UAV technologies, GNSS solutions, BIM and scanning solutions, and
                  software services. Over the years, we have continued to grow alongside the
                  changing needs of the country&apos;s business and technology landscape.
                </p>
                <p className="mt-5">
                  As part of the Sumathi Holdings Group, we have built our reputation on service
                  reliability, technical expertise and long-term relationships. It has been our
                  honour to work closely with clients across many industries, helping them
                  strengthen their infrastructure, improve their operations and adopt technology
                  that supports lasting growth.
                </p>
              </AnimatedSection>

              <AnimatedSection
                variant="pop"
                className="relative overflow-hidden rounded-card bg-navy-950 p-8 shadow-card sm:p-10"
              >
                <span
  className="absolute -top-6 left-8 select-none font-serif text-8xl text-gold-400/90"
  style={{ lineHeight: "1.5rem" }}
>
                  &ldquo;
                </span>
                <blockquote className="relative mt-4 font-serif text-xl font-medium leading-9 text-white sm:text-2xl">
                  Reaching 25 years is a proud and humbling moment for everyone connected to
                  Sumathi IT. This milestone reflects the trust so generously placed in us by our
                  clients, our partners, our employees, and the wider Sumathi Holdings family.
                </blockquote>
                <div className="relative mt-6 h-px w-12 bg-gold-400/60" />
                <p className="relative mt-4 text-sm font-semibold text-gold-300">
                  Chandima Wickramatunge, Group CEO – IT Cluster, Sumathi Holdings
                </p>
              </AnimatedSection>

              <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">Gratitude</p>
                <p className="mt-4">
                  We are sincerely grateful to every client who has walked this journey with us.
                  As technology continues to evolve, Sumathi IT remains committed to delivering
                  dependable solutions, deepening our client partnerships, and contributing
                  meaningfully to Sri Lanka&apos;s digital future.
                </p>
                <p className="mt-5">
                  From ICT infrastructure and enterprise networking to geospatial technologies and
                  technical support services, our focus continues to be practical, scalable and
                  dependable technology. Our growth has been shaped by our willingness to embrace
                  new technologies while never losing sight of the customer service that first
                  earned your trust.
                </p>
                <p className="mt-5">
                  This anniversary is also a moment to recognise the people behind Sumathi IT. Our
                  engineers, technical teams, consultants, service staff and management have each
                  contributed to this progress, and it is their dedication that has allowed us to
                  earn your confidence and remain a reliable technology partner in Sri Lanka.
                </p>
              </AnimatedSection>

              <AnimatedSection
                variant="pop"
                className="relative overflow-hidden rounded-card border border-gold-200 bg-gradient-to-br from-gold-50 to-white p-7 shadow-card sm:p-9"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">Recognition</p>
                    <p className="mt-3 font-serif text-lg font-semibold text-navy-950">
                      Sri Lanka&apos;s only HPE Gold Partner for Networking, 2026
                    </p>
                  </div>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold-300 bg-white font-serif text-sm font-semibold text-gold-700">
                    HPE
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Our continued partnerships with leading global technology brands have further
                  strengthened our capabilities in enterprise IT, a reflection of our commitment
                  to advanced networking, infrastructure and service excellence.
                </p>
              </AnimatedSection>

              <AnimatedSection
                variant="pop"
                className="rounded-card border border-gold-100 bg-gold-50 p-7 sm:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">Looking Ahead</p>
                <p className="mt-4">
                  Looking ahead, Sumathi IT remains focused on delivering future-ready IT
                  solutions for Sri Lanka. With 25 years of experience, strong technical
                  capability and a clear commitment to innovation, we are ready to support
                  businesses as they continue to transform, modernise and grow.
                </p>
                <div className="mt-6 h-px w-16 bg-gold-300" />
                <p className="mt-6 font-serif text-lg font-semibold text-navy-950">
                  With heartfelt thanks, Sumathi IT proudly celebrates 25 years of trust,
                  technology and service excellence, and looks forward to continuing as your
                  dependable technology partner for many years to come.
                </p>
              </AnimatedSection>
            </article>
          </div>
        </section>
      </AnniversaryCelebration>

      <CtaBand
        title="Continue the next chapter with Sumathi IT"
        description="Connect with Sumathi IT for future-ready enterprise IT, UAV, geospatial and system integration solutions."
      />
    </div>
  );
}