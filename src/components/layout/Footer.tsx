import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { uavCategories } from "@/data/uav-categories";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 tech-grid-bg opacity-20" />
      <div className="container-padded relative py-8 sm:py-10 lg:py-16">
        {/* CTA card */}
        <div className="rounded-card border border-white/10 bg-white/[0.04] p-4 shadow-soft xs:p-5 sm:p-8 lg:p-10">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-100 sm:text-sm">
                Start with clarity
              </p>
              <h2 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em] sm:mt-3 sm:text-3xl lg:text-4xl">
                Need a reliable IT solution partner?
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100 sm:mt-4 sm:leading-7">
                Talk to Sumathi IT for enterprise infrastructure, UAV, cybersecurity, data center, end-user
                devices, and system integration support.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/contact-us"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-100 sm:w-auto"
              >
                Contact Sumathi IT <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span className="break-words">{siteConfig.contact.phone}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-1 gap-8 xs:grid-cols-2 sm:mt-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]">
          <div className="xs:col-span-2 md:col-span-2 xl:col-span-1">
            <Image
              src="/images/logo/logo_white.png"
              alt="Sumathi IT"
              width={380}
              height={54}
              className="h-auto max-w-[220px] p-2 sm:max-w-[280px] xl:max-w-[380px]"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100 sm:leading-7">
              Sri Lankan IT solutions and system integration partner for enterprise infrastructure, UAV
              solutions, cybersecurity, data center, geospatial, and digital transformation services.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-blue-100">
              <span className="inline-flex items-start gap-3 break-words">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span className="min-w-0">{siteConfig.contact.address}</span>
              </span>
              <a
                className="inline-flex items-center gap-3 break-all hover:text-white"
                href={`mailto:${siteConfig.contact.email}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                <span className="min-w-0">{siteConfig.contact.email}</span>
              </a>
              <a className="inline-flex items-center gap-3 hover:text-white" href="tel:0115553311">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" /> {siteConfig.contact.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/SumathiITSriLanka"
                aria-label="Facebook"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 hover:text-gold-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sumathiit/"
                aria-label="Instagram"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 hover:text-gold-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sumathi-information-technologies/"
                aria-label="LinkedIn"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 hover:text-gold-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            <Link href="/about-us">About Us</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/news">News &amp; Blog</Link>
            <Link href="/contact-us">Contact Us</Link>
          </FooterColumn>

          <FooterColumn title="Enterprise Solutions">
            {enterpriseSolutions.slice(0, 5).map((item) => (
              <Link key={item.slug} href={`/enterprise-solutions/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </FooterColumn>

          <div className="xs:col-span-2 md:col-span-2 xl:col-span-1">
            <FooterColumn title="UAV Solutions">
              {uavCategories.map((item) => (
                <Link key={item.slug} href={`/uav-solutions/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </FooterColumn>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 sm:mt-8 sm:p-5">
              <p className="text-sm font-semibold text-white">Get updates from Sumathi IT</p>
              <div className="mt-3 min-w-0 [&_input]:w-full [&_input]:min-w-0">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-center text-xs text-blue-100 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
          <p>© {new Date().getFullYear()} Sumathi IT. All rights reserved.</p>
          <p>Built for 25 years of trust, technology and service excellence.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-100">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-blue-100 [&_a]:block [&_a]:break-words [&_a]:transition [&_a:hover]:translate-x-1 [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}