import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/site";

const service = getService("lavadores-de-gases");

export const metadata: Metadata = service
  ? {
      title: service.name,
      description: service.shortDescription,
    }
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
