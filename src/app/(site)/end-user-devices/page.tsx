import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { GlobalPartners } from "@/components/sections/GlobalPartners";

export const metadata = buildMetadata({
  title: "End User Devices - Business Laptops, Workstations & Tablets",
  description:
    "High-performance computing devices for professionals, businesses, and educational institutions. Business laptops, workstations, and tablets from HP, Dell, Lenovo, Apple, ASUS, and MSI in Sri Lanka.",
  path: "/end-user-devices",
  keywords: [
    "business laptops Sri Lanka",
    "enterprise devices Sri Lanka",
    "workstations Colombo",
    "HP Dell Lenovo laptops Sri Lanka",
    "Apple MacBook supplier Sri Lanka",
    "gaming PC Sri Lanka",
  ],
});

const offerings = [
  {
    title: "Laptops",
    text: "Business, gaming, and ultraportable laptop models for modern teams, from everyday productivity to demanding creative and technical workloads.",
    image: "/images/end user devices/subpages/laptops.jpg",
    link: "/end-user-devices/laptops"
  },
  {
    title: "Desktops",
    text: "Reliable desktop solutions for office productivity and demanding business applications with expandable configurations.",
    image: "/images/end user devices/subpages/dextop.png",
    link: "/end-user-devices/desktop"
  },
  {
    title: "Workstations",
    text: "High-performance workstations for CAD, 3D modeling, video editing, and data-intensive applications with professional graphics.",
    image: "/images/end user devices/subpages/workstation.jpg",
    link: "/end-user-devices/workstations"
  },
  {
    title: "Tablets",
    text: "Portable devices for fieldwork, presentations, and flexible work, built for teams that move between the office and the field.",
    image: "/images/end user devices/subpages/tabs.jpg",
    link: "/end-user-devices/tablets"
  },
];

export default function EndUserDevicesPage() {
  return (
    <>
      <PageHero
        title="End User Devices"
        description="Business-ready devices for every team and workload"
        breadcrumbs={[{ label: "End User Devices" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Our offerings"
            description="High-performance computing devices for professionals, businesses, and educational institutions — structured for quotation-driven B2B users who need reliable supply, brand options, and practical guidance."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offerings.map((item, index) => {
              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.06}
                  variant="pop"
                >
                  <Link href={item.link} className="block h-full">
                    <div className="premium-card flex h-full flex-col p-7 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="relative h-[250px] w-full overflow-hidden rounded-lg bg-brand-lavender mb-5">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-navy-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Endpoints */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <AnimatedSection
            // variant="pop"
            className="grid gap-10 rounded-card bg-brand-lavender p-8 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
                Enterprise Endpoints
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-navy-950">
                Comprehensive End User Device Solutions
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  We provide high-performance computing devices for
                  professionals, businesses, and educational institutions across
                  Sri Lanka. End user devices encompass enterprise computing
                  endpoints such as desktops, notebooks, workstations, and
                  intelligent client devices designed for secure access, data
                  processing, and application delivery across modern IT
                  environments.
                </p>

                <p>
                  Our device portfolio is engineered to support heterogeneous
                  enterprise environments, enabling integration with on-premises
                  infrastructure, virtual desktop environments (VDI/DaaS), and
                  cloud-first architectures. This ensures users can operate
                  efficiently across distributed workforces while maintaining
                  centralized control, policy enforcement, and security
                  compliance.
                </p>
              </div>
            </div>

            {/* Larger Image */}
            <div className="relative h-[500px] overflow-hidden rounded-card bg-white">
              <Image
                src="/images/end user devices/laptops.jpg"
                alt="End User Devices"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GlobalPartners />

      <CtaBand title="Need a device supply quotation?" />
    </>
  );
}