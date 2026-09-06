import type { MetadataRoute } from "next";

const baseUrl = "https://cjm-limpezadecoifas.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
