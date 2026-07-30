export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type StatItem = {
  label: string;
  value: string;
  suffix?: string;
};
