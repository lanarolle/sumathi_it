import { Award, Handshake, Settings2, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export const metadata = buildMetadata({
  title: "Enterprise Solutions",
  description: "Future-ready IT infrastructure solutions from Sumathi IT including networking, unified communication, data center, cybersecurity, and ELV solutions.",
  path: "/enterprise-solutions",
  keywords: ["enterprise IT infrastructure Sri Lanka", "networking solutions Colombo", "cybersecurity system integration"]
});

const highlights = [
  { label: "25+ Years of Expertise", description: "Over two decades of delivering enterprise IT solutions across Sri Lanka with proven technical excellence.", icon: Award },
  { label: "Vendor-Agnostic Approach", description: "Technology-agnostic solutions focused on your business needs, not product constraints.", icon: Handshake },
  { label: "End-to-End Support", description: "Complete lifecycle support from consultation and deployment to ongoing maintenance and optimization.", icon: Settings2 },
  { label: "Proven Track Record", description: "Trusted by leading enterprises across banking, healthcare, government, and manufacturing sectors.", icon: ShieldCheck }
];

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <PageHero
        title="Enterprise Solutions"
        description="Future-ready IT infrastructure for your business"
        breadcrumbs={[{ label: "Enterprise Solutions" }]}
        useVideo={true}
      />
      <section className="bg-white py-10">
        <div className="container-padded grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.label} delay={index * 0.04} variant="pop">
                <div className="premium-card flex h-full flex-col items-center p-6 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-4 text-base font-semibold text-navy-950">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Explore our enterprise solution areas" description="Each solution page is SEO-ready and structured with benefits, industries, related solutions, and clear CTA actions." />

          <div className="mt-7 rounded-card bg-white p-6 shadow-card">
            <AnimatedList items={["Architecture-led solution planning", "Multi-vendor deployment capability", "Implementation, handover, and support readiness", "Scalable designs for future business growth"]} />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseSolutions.map((solution, index) => (
              <AnimatedSection key={solution.slug} delay={index * 0.05} variant="pop">
                <SolutionCard {...solution} href={`/enterprise-solutions/${solution.slug}`} tag="Enterprise Solution" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}