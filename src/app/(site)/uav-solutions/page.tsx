import { Compass, Map, Plane, ScanLine } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { uavCategories } from "@/data/uav-categories";
import { products } from "@/data/products";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { DroneComparison } from "@/components/product/DroneComparison";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "UAV Solutions, Drones, GNSS (Global Navigation Satellite Systems), BIM (Building Information Modeling) and Scanners",
  description: "Explore Sumathi IT UAV solutions including drones, software, GNSS (Global Navigation Satellite Systems), BIM (Building Information Modeling), scanners, and professional UAV services in Sri Lanka.",
  path: "/uav-solutions",
  keywords: ["drone solutions Sri Lanka", "UAV mapping Sri Lanka", "GNSS BIM scanners Sri Lanka"]
});

const useCases = [
  { title: "Aerial Mapping", icon: Map, text: "Convert field data into useful survey, inspection and mapping outputs." },
  { title: "Autonomous Operations", icon: Plane, text: "Support repeatable UAV workflows with dock and enterprise drone platforms." },
  { title: "GNSS Accuracy", icon: Compass, text: "Improve positioning confidence for field teams and geospatial workflows." },
  { title: "Reality Capture", icon: ScanLine, text: "Connect drones, scanners, BIM and software into one delivery ecosystem." }
];

export default function UavSolutionsPage() {
  const featured = products.filter((item) => item.category === "drones").slice(0, 3);

  return (
    <>
      <PageHero
        title="UAV Solutions"
        description="Drone, geospatial, mapping and reality capture solutions"
        breadcrumbs={[{ label: "UAV Solutions" }]}
        useVideo={true}
      />

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader eyebrow="Field technology ecosystem" title="UAV use cases designed for practical business outcomes" description="The UAV section should feel more visual and interactive because customers need to understand both the product and the operational value." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.05} variant="pop">
                  <div className="premium-card p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Icon className="h-6 w-6" /></div>
                    <h3 className="mt-5 font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="UAV solution categories" description="Explore our comprehensive range of UAV solutions and services." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uavCategories.map((category, index) => (
              <AnimatedSection key={category.slug} delay={index * 0.05} variant="pop">
                <SolutionCard
                  title={category.title}
                  summary={category.tagline || category.summary}
                  image={category.image}
                  href={`/uav-solutions/${category.slug}`}
                  tag="UAV Solution"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader title="Featured drones" description="Featured UAV platforms with product detail pages, image sliders, specifications, and related products." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((product, index) => (
              <AnimatedSection key={product.slug} delay={index * 0.06} variant="pop">
                <ProductCard title={product.title} summary={product.summary} image={product.images[0]} href={`/products/${product.slug}`} category={product.category} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Compare drones" description="Select two drones and compare core technical features in a clear table." />
          <div className="mt-8">
            <DroneComparison />
          </div>
        </div>
      </section>

      <CtaBand title="Need help choosing a UAV platform?" description="Talk to Sumathi IT for drone selection, UAV workflows, mapping software, and geospatial integration support." />
    </>
  );
}