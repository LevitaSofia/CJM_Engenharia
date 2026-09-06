import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalServicePage } from "@/components/LocalServicePage";
import { getCity } from "@/lib/cities";

const city = getCity("vitoria");

export const metadata: Metadata = city
  ? {
      title: `Limpeza de Coifas em ${city.name}`,
      description: `Limpeza técnica de coifas industriais em ${city.name} (${city.region}). Avaliação, limpeza e manutenção com registro fotográfico.`,
    }
  : {};

export default function Page() {
  if (!city) notFound();
  return <LocalServicePage city={city} />;
}
