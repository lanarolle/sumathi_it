import Image from "next/image";

const partners = [
  { name: "Acronis", logo: "/images/logo/partners logos/Acronis-150x80.png" },
  { name: "Check Point", logo: "/images/logo/partners logos/Check-Point-150x80.png" },
  { name: "Coral", logo: "/images/logo/partners logos/Coral-Logo-150x80.png" },
  { name: "Dahua", logo: "/images/logo/partners logos/Dahua_Technology_logo-150x80.png" },
  { name: "Dell", logo: "/images/logo/partners logos/Dell_logo_PNG1-scaled-150x80.png" },
  { name: "Fortinet", logo: "/images/logo/partners logos/Fortinet-150x80.png" },
  { name: "Hikvision", logo: "/images/logo/partners logos/Hikvision-Logo-150x80.png" },
  { name: "Huawei", logo: "/images/logo/partners logos/Huawei-150x80.png" },
  { name: "Juniper", logo: "/images/logo/partners logos/Juniper-150x80.png" },
  { name: "Kaspersky", logo: "/images/logo/partners logos/Kaspersky-150x80.png" },
  { name: "Lenovo", logo: "/images/logo/partners logos/Lenovo_logo_PNG3-scaled-150x80.png" },
  { name: "Sonicwall", logo: "/images/logo/partners logos/Sonicwall-150x80.png" },
  { name: "Synology", logo: "/images/logo/partners logos/Synology_logo-150x80.png" },
  { name: "VMware", logo: "/images/logo/partners logos/VMware-Logo-150x80.png" },
  { name: "Veeam", logo: "/images/logo/partners logos/Veeam-logo-150x80.png" },
  { name: "Cohesity", logo: "/images/logo/partners logos/cohesity-jpg-150x80.png" },
  { name: "Grandstream", logo: "/images/logo/partners logos/grandstream-logo-150x80.png" }
];

export function GlobalPartners() {
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="container-padded overflow-hidden">
        <h2 className="text-center text-2xl font-semibold tracking-normal text-navy-950 mb-12">
          OUR GLOBAL PARTNERS
        </h2>
        <div className="relative w-full">
          <div className="flex w-max animate-[marquee_60s_linear_infinite] gap-20 hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((item, index) => (
              <div key={`${item.name}-${index}`} className="flex items-center justify-center opacity-60 grayscale transition hover:grayscale-0 hover:opacity-100">
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  width={150}
                  height={80}
                  className="h-16 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
