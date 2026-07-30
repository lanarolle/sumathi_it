import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { titleCase } from "@/lib/utils";
import { uavCategories } from "@/data/uav-categories";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { ProductCard } from "@/components/cards/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CategoryVideoHeader } from "@/components/sections/CategoryVideoHeader";
import { ImageTextBanner } from "@/components/sections/ImageTextBanner";
import { DroneImageSlider } from "@/components/sections/DroneImageSlider";

export function generateStaticParams() {
  return uavCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) return {};
  return buildMetadata({
    title: `${item.title} | UAV Solutions`,
    description: item.summary,
    path: `/uav-solutions/${item.slug}`,
    keywords: [`${item.title} Sri Lanka`, "UAV products Sri Lanka"]
  });
}

export default async function UavCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) notFound();
  const categoryProducts = products.filter((product) => product.category === item.slug);
  const isDrones = item.slug === "drones";

  return (
    <>
      {!isDrones && <Breadcrumbs items={[{ label: "UAV Solutions", href: "/uav-solutions" }, { label: item.title }]} />}
      {/* Full-width header video — currently only supplied for Drones, but any
          category can opt in by adding a `videoUrl` in uav-categories.ts */}
      {item.videoUrl && (
        <CategoryVideoHeader
          videoUrl={item.videoUrl}
          poster={item.videoPoster}
          eyebrow={item.tagline ?? "In the field"}
          title={item.title}
          description={item.description}
        />
      )}
      <HeroBlock eyebrow="UAV Category" title={item.title} description={item.summary} image={item.image} useVideo={!isDrones} />

      {item.tagline && !item.videoUrl && (
        <section className="section-padding bg-brand-purple text-white">
          <div className="container-padded text-center">
            <AnimatedSection variant="pop">
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">{item.tagline}</h2>
            </AnimatedSection>
          </div>
        </section>
      )}

      {item.description && (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <AnimatedSection variant="pop">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="leading-8">{item.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Image + overlay text banner, tuned to each category's content */}
      {item.bannerImage && item.bannerHeading && (
        <ImageTextBanner
          image={item.bannerImage}
          eyebrow={item.bannerEyebrow}
          heading={item.bannerHeading}
          text={item.bannerText}
          align={isDrones ? "left" : "right"}
        />
      )}

      {/* Drone-only auto-sliding gallery — dummy slides until real photography is uploaded */}
      {isDrones && <DroneImageSlider />}

      {item.features && item.features.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader title="Key Features" description="What makes this solution stand out." />
            <div className="mt-10">
              <AnimatedList items={item.features} />
            </div>
          </div>
        </section>
      )}

      {item.applications && item.applications.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <SectionHeader title="Applications" description="Common use cases and industries." />
            <div className="mt-10">
              <AnimatedList items={item.applications} />
            </div>
          </div>
        </section>
      )}

      {item.services && item.services.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader title="Our Services" description="Professional services we offer." />
            <div className="mt-10">
              <AnimatedList items={item.services} />
            </div>
          </div>
        </section>
      )}

      {item.whyChooseUs && item.whyChooseUs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <SectionHeader title="Why Choose Us" description="Benefits of working with Sumathi IT." />
            <div className="mt-10">
              <AnimatedList items={item.whyChooseUs} />
            </div>
          </div>
        </section>
      )}

      {categoryProducts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader
              title={`${item.title} products and services`}
              description={`Browse available ${titleCase(item.slug)} content managed from JSON.`}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product, index) => (
                <AnimatedSection key={product.slug} delay={index * 0.05} variant="pop">
                  <ProductCard
                    title={product.title}
                    summary={product.summary}
                    image={product.images[0]}
                    href={`/products/${product.slug}`}
                    category={product.category}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}


      <CtaBand title={`Need support with ${item.title.toLowerCase()}?`} />
    </>
  );
}