import { getServices } from "@/lib/fetchers";
import Container from "@/components/ui/Container";
import { FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import {
  FaHeadset,
  FaRobot,
  FaCogs,
  FaUsers,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover our range of digital marketing and social media services.",
};
export const revalidate = 60;


const ICONS = {
  "cx-as-a-service": <FaHeadset size={24} />,
  "conversational-ai": <FaRobot size={24} />,
  "automation-as-a-service": <FaCogs size={24} />,
  "workforce-management": <FaUsers size={24} />,
  "unified-communications": <FaNetworkWired size={24} />,
  "cloud-erp": <FaCloud size={24} />,
};

const DUMMY_SERVICES = [
  {
    id: "1",
    title: "CX as a Service",
    description:
      "Transform customer interactions with cloud contact center solutions designed to enhance engagement and business growth.",
    image: "https://picsum.photos/seed/cx/400/300",
    slug: "cx-as-a-service",
  },
  {
    id: "2",
    title: "Conversational AI",
    description:
      "Deliver intelligent customer interactions using advanced AI and conversational platforms.",
    image: "https://picsum.photos/seed/ai/400/300",
    slug: "conversational-ai",
  },
  {
    id: "3",
    title: "Automation as a Service",
    description:
      "Automate repetitive processes with powerful RPA solutions that improve efficiency.",
    image: "https://picsum.photos/seed/automation/400/300",
    slug: "automation-as-a-service",
  },
  {
    id: "4",
    title: "Workforce Management",
    description:
      "Optimize workforce productivity with AI-powered planning and forecasting tools.",
    image: "https://picsum.photos/seed/workforce/400/300",
    slug: "workforce-management",
  },
  {
    id: "5",
    title: "Unified Communications & Infrastructure",
    description:
      "Secure and scalable enterprise communication solutions integrating voice, video and collaboration.",
    image: "https://picsum.photos/seed/unified/400/300",
    slug: "unified-communications",
  },
  {
    id: "6",
    title: "Cloud ERP",
    description:
      "Modern cloud ERP powered by Acumatica to streamline operations and scale business growth.",
    image: "https://picsum.photos/seed/erp/400/300",
    slug: "cloud-erp",
  },
];
export default async function ServicesPage() {
  const servicesFromDB = await getServices();

  const services =
    servicesFromDB && servicesFromDB.length > 0
      ? servicesFromDB
      : DUMMY_SERVICES;

  return (
    <div>
      <BreadcrumbSection
        title="Services"
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Container className="py-24">
        {/* Heading */}
        <div className="max-w-2xl mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-slate-600">
            Powerful digital solutions tailored to elevate your brand.
          </p>
        </div>

        {/* Services List */}
        {/* Services List - Card UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Content */}
              <div className="p-6">
                <div className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 text-xl">
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col space-y-3">
                    <h2 className="text-xl font-semibold">{service.title}</h2>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Wrapper With Proper Spacing */}
              {/* Image Wrapper */}
              <div className="px-6 pb-6">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={
                      service.image ||
                      `https://picsum.photos/seed/${service.slug}/600/400`
                    }
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw,
             (max-width:1200px) 50vw,
             33vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <FaqSection />
    </div>
  );
}
