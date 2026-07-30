import Image from "next/image";
import Link from "next/link";

export function FloatingAnniversaryBadge() {
  return (
    <Link
      href="/chairman-message"
      aria-label="25th anniversary chairman message"
      className="anniversary-badge-motion fixed right-3 top-1/2 z-30 hidden rounded-full border border-gold-300 bg-white p-2 shadow-gold transition hover:scale-105 md:block"
    >
      <span className="absolute -inset-1 rounded-full border border-gold-300/60" />
      <span className="relative grid h-[76px] w-[76px] place-items-center rounded-full bg-white ring-1 ring-gold-100">
        <Image src="/images/anniversary/25-badge.svg" alt="Sumathi IT 25th anniversary" width={66} height={66} />
      </span>
    </Link>
  );
}
