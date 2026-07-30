import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { GlobalPartners } from "@/components/sections/GlobalPartners";
import { StatsBand } from "@/components/sections/Statsband";
import { JourneyTimeline } from "@/components/sections/Journeytimeline";
import { AwardsShowcase } from "@/components/sections/Awardsshowcase";
import { FloatingImage } from "@/components/common/Floatingimage";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about Sumathi IT, a Sri Lankan IT solutions and system integration company under Sumathi Holdings.",
  path: "/about-us",
  keywords: ["about Sumathi IT", "Sumathi Holdings IT company", "Sri Lanka system integration company"]
});

const leadership = [
  { name: "Chadu Sumathipala", role: "Executive Director", image: "/images/team/person 2.webp" },
  { name: "Chandima Wickramatunge", role: "CEO - IT Cluster", image: "/images/anniversary/ceo.jpg" },
  { name: "Sivayoganathan Sivasankar", role: "Chief Technology Officer", image: "/images/team/sivakumar.jpg" },
  { name: "Ravi Sivasithamparam", role: "Chief Sales Officer", image: "/images/team/person4.webp" }
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Sumathi IT"
        description="A trusted technology partner under Sumathi Holdings"
        breadcrumbs={[{ label: "About Us" }]}
        backgroundImage="/images/home/sumathiIT-home-image2.jpg"
      />

      {/* Mission & Vision */}
<section className="section-padding relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40">
  {/* soft ambient glow, purely decorative */}
  <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-brand-lavender/20 blur-3xl" />

  <div className="container-padded relative grid items-stretch gap-12 lg:grid-cols-[1fr_1fr_1fr]">
    <AnimatedSection variant="pop">
      <FloatingImage
        src="/images/home/Sumathiit-home-image3.jpg"
        alt="Sumathi IT engineers collaborating on a project"
        className="h-full min-h-[280px] w-full"
      />
    </AnimatedSection>

    <AnimatedSection variant="pop" delay={0.05}>
      <div className="premium-card flex h-full flex-col items-start gap-4 border border-purple-100 bg-white/80 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
        <h2 className="text-2xl font-semibold text-navy-950">Our Mission</h2>
        <p className="leading-8 text-slate-600">
          Being in the people business can mean difficult decisions and tough conversations. We go into every
          meeting with a desire and ability to be genuine and compassionate. We&apos;re here to help you move
          forward, without risk or judgment.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection variant="pop" delay={0.1}>
      <div className="premium-card flex h-full flex-col items-start gap-4 border border-purple-100 bg-white/80 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
        <h2 className="text-2xl font-semibold text-navy-950">Our Vision</h2>
        <p className="leading-8 text-slate-600">
          We are a Sri Lankan technology partner committed to collaborating with business leaders on their
          most critical challenges, backed by a global community of Sumathi Holdings expertise.
        </p>
        <p className="leading-8 text-slate-600">
          Our engineers apply a deep, practice-tested pool of knowledge to deliver solutions that meet each
          client&apos;s needs, expectations and budget.
        </p>
      </div>
    </AnimatedSection>
  </div>
</section>

      {/* Leadership team */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader title="Leadership team" description="Meet the experienced professionals driving Sumathi IT's vision and growth." />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <AnimatedSection key={person.name} delay={index * 0.06} variant="pop">
                <div className="premium-card overflow-hidden p-0 text-center">
                  <div className="relative h-96 overflow-hidden bg-brand-lavender">
                    <Image src={person.image} alt={person.name} fill className="object-cover transition duration-1000 hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-navy-950">{person.name}</h3>
                    <p className="mt-2 text-base text-brand-purple">{person.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Animated counters + banner imagery */}
      <StatsBand />

      {/* Our journey — scroll-animated timeline (replaces the old static journey cards) */}
      <JourneyTimeline />

      {/* Awards & recognition gallery (replaces the chairman message section) */}
      <AwardsShowcase />

      <GlobalPartners />
      <CtaBand />
    </>
  );
}