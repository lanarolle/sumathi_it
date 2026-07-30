import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageBackgroundVideo } from "@/components/common/PageBackgroundVideo";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  useVideo?: boolean;
}

export function PageHero({ title, description, breadcrumbs, backgroundImage = "/images/hero/page-hero-bg.svg", useVideo = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      {useVideo ? (
        <>
          <PageBackgroundVideo />
          <div className="absolute inset-0 bg-navy-950/80" />
        </>
      ) : (
        <div className="absolute inset-0 opacity-20">
          <Image
  src={backgroundImage}
  alt=""
  fill
  className="object-cover object-[bottom_10%]"
  priority
/>
        </div>
      )}
      <div className="container-padded relative z-10">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[0.02em] leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
