import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogs } from "@/data/blogs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { LegacyBand } from "@/components/sections/LegacyBand";
import { ImageBand } from "@/components/sections/ImageBand";
import { TestimonialSlider } from "@/components/common/TestimonialSlider";
import { GlobalPartners } from "@/components/sections/GlobalPartners";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import { ProcessShowcase } from "@/components/sections/Processshowcase";

export const metadata = buildMetadata({
  title: "Enterprise IT, UAV and System Integration Solutions",
  description:
    "Sumathi IT delivers enterprise IT infrastructure, system integration, cybersecurity, data center, UAV, geospatial, and digital transformation solutions in Sri Lanka.",
  keywords: ["Sumathi IT website", "IT system integration Colombo", "enterprise IT Sri Lanka"],
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950">
        {/* Background Video */}
        <BackgroundVideo />

        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/80 via-navy-950/35 to-navy-950/20" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/70 via-navy-950/20 to-transparent" />

        {/* Animations */}
        <style>{`
          @keyframes heroFadeIn {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shine {
            from {
              transform: translateX(-150%) skewX(-20deg);
            }
            to {
              transform: translateX(250%) skewX(-20deg);
            }
          }

          .hero-fade {
            opacity: 0;
            animation: heroFadeIn .8s ease forwards;
          }

          .hero-btn {
            position: relative;
            overflow: hidden;
            transition: all .35s ease;
          }

          .hero-btn:hover {
            transform: translateY(-4px);
          }

          .hero-btn::before {
            content: "";
            position: absolute;
            inset: 0;
            left: -150%;
            width: 55%;
            background: linear-gradient(
              120deg,
              transparent,
              rgba(255,255,255,.35),
              transparent
            );
          }

          .hero-btn:hover::before {
            animation: shine .9s ease;
          }
        `}</style>

        <div className="relative z-10 container-padded w-full">
          <div className="max-w-3xl">
            {/* Company */}
            <p
              className="hero-fade text-sm font-medium uppercase tracking-[0.38em] text-white/90 md:text-base lg:text-lg"
              style={{ animationDelay: ".1s" }}
            >
              Sumathi IT
            </p>

            {/* Heading */}
            <h1
              className="hero-fade mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
              style={{ animationDelay: ".25s" }}
            >
              Reliable IT Services
              <br />
              For Your Organisation.
            </h1>

            {/* Description */}
            <p
              className="hero-fade mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-[17px]"
              style={{ animationDelay: ".4s" }}
            >
              We empower organizations with secure, scalable, and
              future-ready technology solutions that accelerate innovation,
              improve operational efficiency, and support sustainable
              business growth.
            </p>

            {/* Buttons */}
            <div
              className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: ".55s" }}
            >
              <Link
                href="/enterprise-solutions"
                className="hero-btn group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-950"
              >
                Enterprise Solutions
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </Link>
              
              <Link
                href="/uav-solutions"
                className="hero-btn group inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-purple bg-brand-purple px-8 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-white hover:text-brand-purple"
              >
                UAV Solutions
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GlobalPartners />

      {/* "Done right, with precision and care" band */}
      <LegacyBand />

      <CoreSolutions />

      <ImageBand />
      <ProcessShowcase/>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Customer Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from businesses we've helped transform."
          />
          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Insights"
            title="Latest news and technology updates"
            description="Keep this section updated using JSON now, then migrate to Supabase CMS in the next phase."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedSection key={blog.slug} delay={index * 0.06} variant="pop">
                <ArticleCard {...blog} href={`/news/${blog.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
