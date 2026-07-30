import { ButtonLink } from "@/components/common/ButtonLink";
import { siteConfig } from "@/data/site";

export function CtaBand({ title = "Need help choosing the right IT solution?", description = "Talk to Sumathi IT and plan a practical technology roadmap for your organization." }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="relative overflow-hidden rounded-card bg-brand-purple p-8 text-white shadow-glow sm:p-10 lg:p-12">
          <div className="absolute inset-0 tech-grid-bg opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-100">Consultation ready</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-blue-50">{description}</p>
              <p className="mt-4 text-sm text-blue-50">Call Us Today: {siteConfig.contact.callToday} | WhatsApp Us: {siteConfig.contact.whatsapp}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact-us" variant="light">Contact Sales</ButtonLink>
              <ButtonLink href="/enterprise-solutions" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-navy-950">Explore Solutions</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
