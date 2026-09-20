import type { MetadataRoute } from "next";

export const SITE_URL = "https://mahiyarahmanrafa.com";

const ROUTES = ["", "/about", "/projects", "/search", "/blogs", "/contact", "/gitHub"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
