import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function CoreSolutions() {
  return (
    <section className="section-padding py-16 bg-white">
      <div className="container-padded">
        <AnimatedSection variant="fade-up">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Our Core Solutions
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-navy-950 md:text-3xl">
              Explore Our Technology Solutions
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Comprehensive IT infrastructure and advanced technology solutions for your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <AnimatedSection variant="fade-up" delay={0.15}>
            <Link href="/enterprise-solutions" className="group relative block h-[500px] overflow-hidden rounded-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
              <div className="absolute inset-0">
                <Image
                  src="/images/enterprise solutions/data center solution.jpg"
                  alt="Enterprise Solutions"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="text-3xl font-semibold tracking-[0.02em] leading-[1.2] text-white">Enterprise Solutions</h3>
                <p className="mt-3 max-w-md text-base leading-6 text-blue-100/90">
                  Future-ready IT infrastructure including networking, cybersecurity, data center, and unified communication solutions.
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-[var(--gold)] group-hover:translate-x-2 transition-transform">
                  Explore Solutions
                </div>
              </div>
            </Link>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.3}>
            <Link href="/uav-solutions" className="group relative block h-[500px] overflow-hidden rounded-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
              <div className="absolute inset-0">
                <Image
                  src="/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 3.jpg"
                  alt="UAV Solutions"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="text-3xl font-semibold tracking-[0.02em] leading-[1.2] text-white">UAV Solutions</h3>
                <p className="mt-3 max-w-md text-base leading-6 text-blue-100/90">
                  Advanced drone technology, GNSS solutions, and geospatial services for surveying, mapping, and inspection.
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-[var(--gold)] group-hover:translate-x-2 transition-transform">
                  Explore Solutions
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
