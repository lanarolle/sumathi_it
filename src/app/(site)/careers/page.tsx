import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Briefcase, Users, Target, Zap, Heart, Shield } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join Sumathi IT and build your career in enterprise IT, UAV solutions, cybersecurity, and system integration in Sri Lanka.",
  path: "/careers",
  keywords: ["careers at Sumathi IT", "IT jobs Sri Lanka", "system integration careers", "UAV engineer jobs"]
});

const benefits = [
  { title: "Growth Opportunities", description: "Continuous learning, certifications, and career advancement paths in enterprise IT and emerging technologies.", icon: Target },
  { title: "Competitive Benefits", description: "Attractive salary packages, health insurance, performance bonuses, and comprehensive employee benefits.", icon: Heart },
  { title: "Work-Life Balance", description: "Flexible working arrangements, supportive culture, and respect for personal time and well-being.", icon: Users },
  { title: "Innovation Culture", description: "Work on cutting-edge projects including UAV, cybersecurity, data center, and digital transformation initiatives.", icon: Zap },
  { title: "Team Environment", description: "Collaborative, inclusive workplace with experienced mentors and a strong focus on teamwork.", icon: Briefcase },
  { title: "Job Security", description: "Stable employment with a 30+ year legacy company and strong market position in Sri Lanka.", icon: Shield }
];

const openPositions = [
  { title: "Senior Network Engineer", department: "Infrastructure", location: "Colombo", type: "Full-time" },
  { title: "Cybersecurity Analyst", department: "Security", location: "Colombo", type: "Full-time" },
  { title: "UAV Pilot/Operator", department: "UAV Solutions", location: "Colombo", type: "Full-time" },
  { title: "System Administrator", department: "Infrastructure", location: "Colombo", type: "Full-time" },
  { title: "Software Developer", department: "Development", location: "Colombo", type: "Full-time" },
  { title: "Technical Support Engineer", department: "Support", location: "Colombo", type: "Full-time" }
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="Build your future with Sumathi IT - Join a team of innovators in enterprise technology and system integration"
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader 
            title="Why work with us" 
            description="Join a 30+ year legacy IT company with strong growth, innovation, and a supportive work environment."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={index * 0.06} variant="pop">
                  <div className="premium-card p-6">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-lavender text-brand-purple">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy-950">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader 
            title="Open positions" 
            description="Explore current career opportunities at Sumathi IT across various departments and roles."
          />
          <div className="mt-8 space-y-4">
            {openPositions.map((position, index) => (
              <AnimatedSection key={position.title} delay={index * 0.04} variant="pop">
                <div className="premium-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-950">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <ButtonLink href="/contact-us" variant="secondary">Apply Now</ButtonLink>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <AnimatedSection variant="pop" className="grid gap-8 rounded-card bg-white p-8 shadow-card lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">Application process</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy-950">How to apply</h2>
              <div className="mt-6 grid gap-4">
                <div className="flex gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-purple text-white font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold text-navy-950">Submit your application</h4>
                    <p className="text-sm text-slate-600">Send your CV and cover letter to our HR team</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-purple text-white font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold text-navy-950">Initial screening</h4>
                    <p className="text-sm text-slate-600">Our team reviews your qualifications and experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-purple text-white font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold text-navy-950">Interview process</h4>
                    <p className="text-sm text-slate-600">Technical and cultural fit interviews with our team</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-purple text-white font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold text-navy-950">Welcome aboard</h4>
                    <p className="text-sm text-slate-600">Join our team and start your journey with Sumathi IT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-card bg-brand-lavender">
              <Image src="/images/team/careers.svg" alt="Team collaboration" fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
