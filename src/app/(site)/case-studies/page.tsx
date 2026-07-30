import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "Case Studies",
  description: "Explore Sumathi IT case studies across enterprise IT, networking, UAV, geospatial, and infrastructure projects.",
  path: "/case-studies",
  keywords: ["Sumathi IT case studies", "enterprise IT projects Sri Lanka"]
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        description="Proof of practical technology execution"
        breadcrumbs={[{ label: "Case Studies" }]}
        backgroundImage="/images/home/sumathiIT-home-image2.jpg"
      />
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, index) => (
            <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
              <ArticleCard {...item} href={`/case-studies/${item.slug}`} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
