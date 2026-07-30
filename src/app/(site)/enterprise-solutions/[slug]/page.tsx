import { notFound } from "next/navigation";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { SolutionShowcaseBand } from "@/components/sections/SolutionShowcaseBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export function generateStaticParams() {
  return enterpriseSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = enterpriseSolutions.find((item) => item.slug === slug);
  if (!solution) return {};
  return buildMetadata({ title: solution.seoTitle, description: solution.seoDescription, path: `/enterprise-solutions/${solution.slug}`, keywords: [solution.title, `${solution.title} Sri Lanka`] });
}

export default async function EnterpriseSolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = enterpriseSolutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const related = enterpriseSolutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Enterprise Solutions", href: "/enterprise-solutions" }, { label: solution.title }]} />
      <HeroBlock eyebrow="Enterprise Solution" title={solution.title} description={solution.summary} image={solution.image} useVideo={true} />
      <section className="section-padding relative bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/background/Back_ground_visual.png" 
            alt="Background visual" 
            fill 
            className="object-cover opacity-[0.06]"
            priority
          />
        </div>
        <div className="container-padded relative z-10">
          <AnimatedSection variant="pop">
            <div className="prose prose-lg max-w-none text-slate-700">
              {solution.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-8">{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      <SolutionShowcaseBand
        eyebrow="In the Field"
        title={`${solution.title} deployments, done right.`}
        description="From planning to go-live, our engineers deliver every deployment with the same precision and care every enterprise client expects."
        image={solution.bannerImage}
        imageAlt={`${solution.title} deployment by Sumathi IT`}
      />
      
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <AnimatedSection variant="pop" className="h-full">
            <div className="premium-card flex h-full flex-col p-7">
              <h2 className="text-2xl font-semibold text-navy-950">Key benefits</h2>
              <div className="mt-6">
                <AnimatedList items={solution.benefits} />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" delay={0.08} className="h-full">
            <div className="premium-card flex h-full flex-col p-7">
              <h2 className="text-2xl font-semibold text-navy-950">Industries served</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {solution.industries.map((industry) => <span key={industry} className="rounded-full bg-brand-lavender px-4 py-2 text-sm font-medium text-brand-purple">{industry}</span>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">Each deployment can be tailored for performance, security, compliance, uptime and long-term support requirements.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950">Related solutions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
                <SolutionCard {...item} href={`/enterprise-solutions/${item.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Plan your ${solution.title.toLowerCase()} requirement`} />
    </>
  );
}