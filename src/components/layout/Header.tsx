"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Facebook, Instagram, Linkedin, MapPin, Phone, Menu, X, ChevronRight, AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import type { NavItem } from "@/types/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  // Check if current path matches any child route
  const isChildActive = (children?: NavItem[]) => {
    return children?.some(child => pathname === child.href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95">
      <div className="container-header flex h-[82px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center rounded-2x pr-3" aria-label="Sumathi IT home">
          <Image src="/images/logo/sumathi-it-logo.png" alt="Sumathi IT" width={220} height={52} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || isChildActive(item.children);
            const hasChildren = item.children && item.children.length > 0;
            
            return (
              <div key={item.label} className="group relative py-7">
                <div className="flex items-center gap-1">
                  <Link 
                    href={item.href} 
                    className={`nav-link rounded-full px-3 py-2 ${isActive ? 'text-brand-purple' : ''}`}
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <ChevronDown className="h-4 w-4 text-slate-400 transition group-hover:rotate-180" />
                  )}
                </div>
                {hasChildren && (
                  <div className="invisible absolute left-0 top-full w-[330px] translate-y-3 rounded-[1.4rem] border border-slate-200 bg-white p-3 opacity-0 shadow-soft transition duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-slate-50 ${pathname === child.href ? 'text-brand-purple bg-slate-50' : 'text-slate-700 hover:text-brand-purple'}`}
                      >
                        {child.label}
                        <ChevronRight className="h-4 w-4 opacity-0 transition group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Panel Button - Hidden on mobile/tablet */}
        <div className="hidden items-center gap-2 2xl:flex">
          <button
            type="button"
            onClick={() => setPanelOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-navy-950 shadow-sm transition hover:border-brand-purple hover:text-brand-purple"
            aria-label="Open company information"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile & Tablet Controls - Only show on xl and below */}
        <div className="flex items-center gap-2 xl:hidden">
          <button 
            className="inline-flex rounded-full border border-slate-200 p-3 hover:border-brand-purple hover:text-brand-purple transition-colors" 
            onClick={() => setOpen((value) => !value)} 
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <div className="container-padded py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || isChildActive(item.children);
                const isExpanded = expandedItems[item.label] || false;
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div key={item.label} className="border-b border-slate-100 py-2">
                    <div className="flex items-center justify-between">
                      <Link 
                        href={item.href} 
                        className={`block text-base font-semibold py-2 ${isActive ? 'text-brand-purple' : 'text-navy-950'}`} 
                        onClick={() => !hasChildren && setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() => toggleSubMenu(item.label)}
                          className="p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronRight 
                            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {hasChildren && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 grid gap-1 pl-4 pb-2">
                              {item.children?.map((child) => (
                                <Link 
                                  key={child.href} 
                                  href={child.href} 
                                  className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                                    pathname === child.href 
                                      ? 'text-brand-purple font-medium bg-brand-lavender/30' 
                                      : 'text-slate-600 hover:bg-slate-50'
                                  }`} 
                                  onClick={() => setOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
              <Link 
                href={`tel:${siteConfig.contact.hotline}`} 
                className="mt-4 inline-flex rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                Hotline {siteConfig.contact.hotline}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Company Info Panel - Hidden on mobile/tablet, only visible on 2xl screens */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.button
              aria-label="Close company information"
              className="fixed inset-0 z-[80] bg-navy-950/45 backdrop-blur-sm hidden 2xl:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[90] h-dvh w-full max-w-md overflow-y-auto bg-white p-7 shadow-soft hidden 2xl:block"
            >
              <div className="flex items-center justify-between gap-4">
                <Image src="/images/logo/sumathi-it-logo.png" alt="Sumathi IT" width={250} height={62} />
                <button 
                  type="button" 
                  onClick={() => setPanelOpen(false)} 
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 hover:text-brand-purple transition-colors" 
                  aria-label="Close panel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-8 text-base leading-8 text-slate-600">
                Sri Lanka&apos;s premier IT System Integration company, with a strong legacy and over ten years of experience in IT domain.
              </p>

              <div className="mt-8 grid gap-4">
                <InfoBlock title="Main Office" value="532/2 Sirikotha Ln, Colombo" icon={<MapPin className="h-5 w-5" />} />
                <InfoBlock title="Contact with us" value="Call Consulting: 0115 553 311" icon={<Phone className="h-5 w-5" />} />
                <InfoBlock title="Working time" value={`Mon - Fri: 8.15am - 05.30pm\nHoliday: Closed`} icon={<ChevronDown className="h-5 w-5" />} />
              </div>

              <div className="mt-8 rounded-card bg-brand-lavender p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-purple">Follow Sumathi IT</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://www.facebook.com/SumathiITSriLanka" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-purple shadow-sm transition hover:bg-navy-950 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/sumathiit/" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-purple shadow-sm transition hover:bg-navy-950 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/sumathi-information-technologies/" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-purple shadow-sm transition hover:bg-navy-950 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function InfoBlock({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-lavender text-brand-purple">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-navy-950">{title}</h3>
          <p className="mt-1 whitespace-pre-line text-sm leading-7 text-slate-600">{value}</p>
        </div>
      </div>
    </div>
  );
}