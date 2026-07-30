import { buildMetadata } from "@/lib/seo";
import { blogs } from "@/data/blogs";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "News and Blog",
  description: "Technology news, IT insights, UAV updates, cybersecurity guidance, and enterprise infrastructure content from Sumathi IT.",
  path: "/news",
  keywords: ["Sumathi IT news", "enterprise IT blog Sri Lanka", "UAV updates Sri Lanka"]
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News and Blog"
        description="Technology insights for business decision makers"
        breadcrumbs={[{ label: "News" }]}
      />
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-6 md:grid-cols-3">
          {blogs.map((item, index) => (
            <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
              <ArticleCard {...item} href={`/news/${item.slug}`} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
