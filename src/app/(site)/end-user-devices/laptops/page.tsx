import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalPartners } from "@/components/sections/GlobalPartners";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Enterprise Laptops Sri Lanka | Business Computing Solutions",
  description: "Premium enterprise laptops for business productivity from Sumathi IT. Featuring high-performance processors, extended battery life, and enterprise security features for mobile workforce.",
  path: "/end-user-devices/laptops",
  keywords: ["laptops Sri Lanka", "business laptops", "enterprise laptops", "corporate laptops", "workforce laptops"]
});

export default function LaptopsPage() {
  return (
    <>
      <PageHero
        title="Enterprise Laptops"
        description="High-performance laptops designed for business productivity and mobile workforce"
        breadcrumbs={[{ label: "End User Devices" }, { label: "Laptops" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Business Laptops"
              title="Reliable Performance for Mobile Workforce"
              description="Equip your team with powerful, secure laptops designed for enterprise productivity and collaboration."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["High-performance processors", "Extended battery life", "Enterprise security features", "Lightweight and portable designs"]} />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[400px] overflow-hidden rounded-card">
            <Image
              src="/images/end user devices/subpages/laptops.jpg"
              alt="Business Laptops"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Why Choose Our Laptops"
            title="Enterprise-Grade Features for Business Success"
            description="Our laptop solutions are selected to meet the demanding needs of modern business environments."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">Performance & Reliability</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Latest generation processors and SSD storage for seamless multitasking and fast application performance.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">Enterprise Security</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Built-in security features including TPM, biometric authentication, and encrypted storage options.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6 min-h-[180px] flex flex-col">
                <h3 className="font-semibold text-navy-950">All-Day Battery</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Extended battery life for full-day productivity without frequent charging requirements.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Industries We Serve"
              title="Laptops for Every Business Sector"
              description="Tailored laptop solutions for diverse industry requirements and use cases."
            />
            <div className="mt-10">
              <AnimatedList
                items={[
                  "Corporate - Executive and management laptops",
                  "Healthcare - Medical and clinical computing",
                  "Education - Teaching and learning devices",
                  "Field Services - Rugged and portable solutions"
                ]}
              />
            </div>
          </div>
          <AnimatedSection variant="pop" className="relative h-[300px] overflow-hidden rounded-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/end user devices/subpages/laptop bg remove.png"
                alt="Laptop Solutions"
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
