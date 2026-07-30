import type { NavItem } from "@/types/site";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Enterprise Solutions",
    href: "/enterprise-solutions",
    children: [
      { label: "Networking", href: "/enterprise-solutions/networking-solutions" },
      { label: "Unified Communication", href: "/enterprise-solutions/unified-communication-solutions" },
      { label: "Data Center", href: "/enterprise-solutions/data-center-solution" },
      { label: "Information Security", href: "/enterprise-solutions/information-security-solution" },
      { label: "Smart Infrastructure / ELV", href: "/enterprise-solutions/smart-infrastructure-elv-solution" }
    ]
  },
  {
    label: "UAV Solutions",
    href: "/uav-solutions",
    children: [
      { label: "Drones", href: "/uav-solutions/drones" },
      { label: "Software", href: "/uav-solutions/software" },
      { label: "GNSS (Global Navigation Satellite Systems)", href: "/uav-solutions/gnss" },
      { label: "BIM (Building Information Modeling)", href: "/uav-solutions/bim" },
      { label: "Scanners", href: "/uav-solutions/scanners" },
      { label: "UAV Services", href: "/uav-solutions/uav-services" }
    ]
  },
  {
    label: "End User Devices",
    href: "/end-user-devices",
    children: [
      { label: "Laptops", href: "/end-user-devices/laptops" },
      { label: "Desktop", href: "/end-user-devices/desktop" },
      { label: "Tablets", href: "/end-user-devices/tablets" },
      { label: "Workstations", href: "/end-user-devices/workstations" }
    ]
  },
  { label: "Case Studies", href: "/case-studies" },
  // { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" }
];
