import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/site";

const baseUrl = "https://cjm-limpezadecoifas.com.br";

const staticRoutes = [
  "",
  "/sobre",
  "/servicos",
  "/engenharia",
  "/laudos-e-relatorios",
  "/portfolio",
  "/blog",
  "/contato",
  "/solicitar-orcamento",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => `/servicos/${service.slug}`);
  const localRoutes = cities.map((city) => `/limpeza-de-coifas-${city.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...localRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
