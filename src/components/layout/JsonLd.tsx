import { siteConfig } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "532/2, Sirikotha Lane",
      addressLocality: "Colombo",
      addressCountry: "LK"
    },
    description: siteConfig.description,
    areaServed: "Sri Lanka",
    keywords: siteConfig.keywords.join(", ")
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
