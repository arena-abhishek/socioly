import { getServices } from "@/lib/fetchers";
import Container from "@/components/ui/Container";
import { FaSearch, FaBullhorn, FaChartLine, FaUsers } from "react-icons/fa";
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

const DUMMY_SERVICES = [
  {
    id: "1",
    icon: <FaSearch size={24} />,
    title: "Search Engine Optimization",
    description:
      "Boost your rankings and drive organic traffic with our expert SEO strategies.",
    image: "https://picsum.photos/seed/seo/400/300",
    slug: "seo",
  },
  {
    id: "2",
    icon: <FaBullhorn size={24} />,
    title: "Social Media Marketing",
    description:
      "Engage your audience and grow your brand through social media campaigns.",
    image: "https://picsum.photos/seed/smm/400/300",
    slug: "smm",
  },
  {
    id: "3",
    icon: <FaChartLine size={24} />,
    title: "Performance Marketing",
    description:
      "Maximize ROI with targeted ads and data-driven marketing solutions.",
    image: "https://picsum.photos/seed/performance/400/300",
    slug: "performance",
  },
  {
    id: "4",
    icon: <FaUsers size={24} />,
    title: "Content Marketing",
    description:
      "Create engaging content that resonates with your audience and drives conversions.",
    image: "https://picsum.photos/seed/content/400/300",
    slug: "content",
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
