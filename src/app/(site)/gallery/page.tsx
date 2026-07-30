import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Company gallery of Sumathi IT events, UAV demonstrations, training sessions, projects, and team activities.",
  path: "/gallery",
  keywords: ["Sumathi IT gallery", "UAV demonstrations Sri Lanka", "Sumathi IT events"]
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A curated view of our work, people, and technology moments"
        breadcrumbs={[{ label: "Gallery" }]}
        backgroundImage="/images/home/sumathiIT-home-image2.jpg"
      />
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
            <div className="max-w-8Wxl">
              <p className="text-base leading-8 text-slate-700">
            Sumathi IT Gallery showcases our journey of innovation, technology, and excellence through real project moments, team achievements, product launches, client engagements, exhibitions, training programs, and professional events. Every image reflects our commitment to delivering reliable, future-ready information technology solutions that empower businesses and organizations across Sri Lanka.
            <br />
            <br />
            As a trusted technology solutions provider, Sumathi IT specializes in networking, geospatial engineering, enterprise system integration, cybersecurity, software development, cloud technologies, and digital transformation. Our gallery highlights the expertise, dedication, and teamwork behind every successful project, showcasing the people, partnerships, and innovations that drive our success.
            <br />
            <br />
            Explore our collection to discover how Sumathi IT continues to build smarter businesses, strengthen digital connectivity, and create innovative solutions that shape a more connected and technology-driven future.
          </p>

        </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <GalleryGrid />
      </section>
    </>
  );
}