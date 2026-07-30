import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { products } from "@/data/products";
import { blogs } from "@/data/blogs";
import { caseStudies } from "@/data/case-studies";
import { uavCategories } from "@/data/uav-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/enterprise-solutions",
    "/uav-solutions",
    "/end-user-devices",
    "/case-studies",
    "/news",
    "/gallery",
    "/about-us",
    "/chairman-message",
    "/contact-us"
  ];

  const dynamicRoutes = [
    ...enterpriseSolutions.map((item) => `/enterprise-solutions/${item.slug}`),
    ...uavCategories.map((item) => `/uav-solutions/${item.slug}`),
    ...products.map((item) => `/products/${item.slug}`),
    ...blogs.map((item) => `/news/${item.slug}`),
    ...caseStudies.map((item) => `/case-studies/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));
}
