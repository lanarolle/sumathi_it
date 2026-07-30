import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) return {};
  return buildMetadata({ title: item.seoTitle, description: item.seoDescription, path: `/case-studies/${item.slug}`, keywords: [item.title, item.category] });
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: item.title }]} />
      <HeroBlock eyebrow={item.category} title={item.title} description={item.excerpt} image={item.image} />
      <article className="section-padding bg-white">
        <AnimatedSection className="container-padded max-w-3xl">
          {item.body.map((paragraph) => <p key={paragraph} className="mb-6 text-lg leading-9 text-slate-700">{paragraph}</p>)}
        </AnimatedSection>
      </article>
      <CtaBand title="Discuss a similar project" />
    </>
  );
}
