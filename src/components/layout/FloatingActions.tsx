"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M16.02 3.2C9 3.2 3.3 8.86 3.3 15.82c0 2.24.6 4.43 1.73 6.35L3.2 28.8l6.82-1.78a12.8 12.8 0 0 0 6 1.53h.01c7.02 0 12.73-5.66 12.73-12.62S23.04 3.2 16.02 3.2Zm0 23.18h-.01a10.62 10.62 0 0 1-5.42-1.48l-.39-.23-4.04 1.05 1.08-3.92-.25-.4a10.42 10.42 0 0 1-1.62-5.58c0-5.76 4.78-10.44 10.65-10.44 2.84 0 5.52 1.09 7.53 3.06a10.32 10.32 0 0 1 3.12 7.38c0 5.76-4.78 10.56-10.65 10.56Zm5.84-7.82c-.32-.16-1.9-.93-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.84 1.04-1.03 1.25-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.58-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.74-1.76-1.01-2.41-.27-.63-.54-.54-.74-.55h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68s1.17 3.12 1.33 3.33c.16.22 2.3 3.47 5.57 4.87.78.33 1.38.53 1.85.68.78.25 1.49.21 2.05.13.63-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export function FloatingActions() {
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;

  // Hide on home page and enterprise solutions page
  if (pathname === "/" || pathname === "/enterprise-solutions") {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        aria-label="WhatsApp Sumathi IT"
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:bg-[#1fb85a]"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
}
