import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { blogs } from "@/data/blogs";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function generateStaticParams() {
  return blogs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = blogs.find((entry) => entry.slug === slug);
  if (!item) return {};
  return buildMetadata({ title: item.seoTitle, description: item.seoDescription, path: `/news/${item.slug}`, keywords: [item.title, item.category] });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = blogs.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: item.title }]} />
      <HeroBlock eyebrow={item.category} title={item.title} description={item.excerpt} image={item.image} />
      <article className="section-padding bg-white">
        <AnimatedSection className="container-padded max-w-3xl rounded-card bg-white p-0">
          {item.body.map((paragraph, index) => <p key={index} className="mb-6 text-lg leading-9 text-slate-700">{paragraph}</p>)}
        </AnimatedSection>
      </article>
      <CtaBand />
    </>
  );
}
