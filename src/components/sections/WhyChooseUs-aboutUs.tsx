import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ShieldCheck, LineChart, Users, Award, PiggyBank, HeartHandshake } from "lucide-react";

const checklist = ["Strategic infrastructure analysis", "25+ years of development experience", "Enterprise-grade solutions"];

const features = [
  {
    icon: ShieldCheck,
    title: "Experience and expertise",
    description: "Three decades of proven solutions delivered across surveying, telecom, agriculture and public safety."
  },
  {
    icon: LineChart,
    title: "Strategic, data-driven",
    description: "Recommendations grounded in real assessments of your infrastructure, not off-the-shelf packages."
  },
  {
    icon: Users,
    title: "Customer focused",
    description: "A dedicated team that stays engaged from the first assessment through to long-term support."
  },
  {
    icon: Award,
    title: "Industry certified",
    description: "Certified engineers held to the same standards our global technology partners hold themselves to."
  },
  {
    icon: PiggyBank,
    title: "Built to save costs",
    description: "Solutions engineered to lower operating costs without compromising on quality or reliability."
  },
  {
    icon: HeartHandshake,
    title: "Honesty and integrity",
    description: "Transparent operations and ethical practice in every partnership, every project, every time."
  }
];

export function WhyChooseUs_au() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="grid items-center !gap-[7rem] lg:grid-cols-2 !mb-[8rem]">
          <AnimatedSection variant="pop">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-card">
                <Image
                  src="/images/home/SumathiIT-Hero-Image.jpg"
                  alt="Sumathi IT consultant reviewing infrastructure plans"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 max-w-[240px] rounded-card border border-white/20 bg-navy-950/30 p-6 text-white shadow-card backdrop-blur-md sm:-right-10">
                <p className="text-lg font-semibold leading-snug drop-shadow-sm">IT solutions for the modern workplace.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="pop" delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">Why choose Sumathi IT</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy-950 sm:text-4xl">
              We see solutions growing for your business
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Our consultants assess your IT infrastructure thoroughly, then recommend the long-term approach that
              fits your resources and your goals — not a generic playbook.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-950">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-brand-purple" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} variant="pop" delay={index * 0.05}>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-brand-purple">
                  <feature.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-950">{feature.title}</h3>
                  <p className="mt-1.5 leading-7 text-slate-600">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}