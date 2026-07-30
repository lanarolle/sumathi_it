import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { FloatingAnniversaryBadge } from "@/components/layout/FloatingAnniversaryBadge";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { JsonLd } from "@/components/layout/JsonLd";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingAnniversaryBadge />
      <FloatingActions />
    </>
  );
}
