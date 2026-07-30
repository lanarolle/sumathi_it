import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { DroneComparison } from "@/components/product/DroneComparison";
import { ProductCard } from "@/components/cards/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return buildMetadata({ title: product.seoTitle, description: product.seoDescription, path: `/products/${product.slug}`, keywords: [product.title, `${product.title} Sri Lanka`] });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => product.relatedSlugs.includes(item.slug));

  const whatsappDigits = siteConfig.contact.phone.replace(/[^\d]/g, "");
  const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    `Hi, I'd like to ask about the ${product.title}.`
  )}`;

  return (
    <>
      <Breadcrumbs items={[{ label: "UAV Solutions", href: "/uav-solutions" }, { label: product.title }]} />

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <AnimatedSection variant="pop">
            <ProductGallery images={product.images} title={product.title} />
          </AnimatedSection>

          <AnimatedSection variant="slide-left">
            <p className="inline-flex rounded-full bg-brand-lavender px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple">
              {product.category}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-navy-950 sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

            <div className="mt-8 premium-card p-6">
              <h2 className="text-xl font-semibold text-navy-950">Key features</h2>
              <div className="mt-5">
                <AnimatedList items={product.features} />
              </div>
            </div>

            {/* Contact / support section — WhatsApp + consultation form, no iconography */}
            <div className="mt-6 overflow-hidden rounded-card border border-slate-200 shadow-card">
              <div className="border-b border-slate-100 bg-white px-6 py-5">
                <h3 className="text-lg font-semibold text-navy-950">Talk to a product specialist</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  Get help with availability, pricing, deployment planning, or compatibility for the {product.title}.
                </p>
              </div>

              <div className="grid divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-4 bg-emerald-50/60 px-6 py-6 transition hover:bg-emerald-50"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Fastest response
                    </span>
                    <p className="mt-2 text-base font-semibold text-navy-950">Chat with us on WhatsApp</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Message our team directly for a quick answer, usually within minutes.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition group-hover:gap-2.5">
                    {siteConfig.contact.phone}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>

                <Link
                  href="/contact-us"
                  className="group flex flex-col justify-between gap-4 bg-brand-lavender/40 px-6 py-6 transition hover:bg-brand-lavender/70"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
                      Prefer to write in
                    </span>
                    <p className="mt-2 text-base font-semibold text-navy-950">Request a consultation</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Share your requirements through our form and our team will follow up with guidance.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple transition group-hover:gap-2.5">
                    Open consultation form
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Product specifications"
            description="Keep the specification object clean in JSON so it can be migrated to Supabase fields later."
          />
          <AnimatedSection variant="pop" className="mt-8 overflow-hidden rounded-card border border-slate-100 bg-white shadow-card">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div
                key={key}
                className={`grid gap-2 px-6 py-5 sm:grid-cols-[260px_1fr] ${
                  index % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                }`}
              >
                <dt className="font-semibold text-navy-950">{key}</dt>
                <dd className="text-slate-600">{value}</dd>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {product.comparison ? (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <SectionHeader title="Compare with other drones" description="Useful for customers who need to shortlist drone options before contacting sales." />
            <div className="mt-8">
              <DroneComparison defaultFirstSlug={product.slug} />
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader title="Related products" />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item, index) => (
                <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
                  <ProductCard title={item.title} summary={item.summary} image={item.images[0]} href={`/products/${item.slug}`} category={item.category} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand title={`Interested in ${product.title}?`} description="Contact Sumathi IT for product availability, technical guidance, deployment planning, and solution consultation." />
    </>
  );
}