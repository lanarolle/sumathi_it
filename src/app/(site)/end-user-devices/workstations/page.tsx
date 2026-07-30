import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalPartners } from "@/components/sections/GlobalPartners";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Workstations Sri Lanka | High-Performance Computing Solutions",
  description: "High-performance workstations for demanding applications from Sumathi IT. Multi-core processors, professional graphics cards, and ISV-certified configurations for CAD, 3D modeling, and data-intensive workloads.",
  path: "/end-user-devices/workstations",
  keywords: ["workstations Sri Lanka", "high-performance computers", "engineering workstations", "CAD workstations", "professional computers"]
});

export default function WorkstationsPage() {
  return (
    <>
      <PageHero
        title="High-Performance Workstations"
        description="Professional computing solutions for demanding applications and data-intensive workloads"
        breadcrumbs={[{ label: "End User Devices" }, { label: "Workstations" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Professional Workstations"
              title="Maximum Performance for Demanding Workloads"
              description="Engineered for CAD, 3D modeling, video editing, and data-intensive applications."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["Multi-core processors", "Professional graphics cards", "Large memory capacity", "ISV-certified configurations"]} />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[400px] overflow-hidden rounded-card">
            <Image
              src="/images/end user devices/subpages/workstation.jpg"
              alt="Professional Workstations"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Why Choose Our Workstations"
            title="Enterprise-Grade Features for Professional Excellence"
            description="Our workstation solutions deliver uncompromising performance for the most demanding professional applications."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">Unmatched Performance</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Multi-core CPUs and professional GPUs for rendering, simulation, and complex calculations.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">ISV Certification</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Certified for leading professional software applications ensuring compatibility and stability.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">Expandable Architecture</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Scalable memory, storage, and GPU configurations for growing computational requirements.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Professional Applications"
              title="Workstations for Every Specialized Need"
              description="Purpose-built solutions for diverse professional workflows and industry requirements."
            />
            <div className="mt-10">
              <AnimatedList
                items={[
                  "CAD & Engineering - Design and simulation workloads",
                  "3D & Animation - Modeling and rendering pipelines",
                  "Video Production - Editing and post-production",
                  "Data Science - Analytics and machine learning"
                ]}
              />
            </div>
          </div>
          <AnimatedSection variant="pop" className="relative h-[300px] overflow-hidden rounded-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/end user devices/subpages/workstation bg remove.png"
                alt="Workstation Solutions"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GlobalPartners />
      <CtaBand />
    </>
  );
}
