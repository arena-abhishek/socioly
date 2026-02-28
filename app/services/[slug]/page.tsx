
import { getServiceBySlug } from "@/lib/fetchers";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";
import { motion } from "framer-motion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

const DUMMY_SERVICES = [
  {
    title: "Social Media Management",
    slug: "social-media",
    description:
      "We handle your social presence from strategy to execution, ensuring your brand stays relevant and engaged.",
    content:
      "Our comprehensive social media management includes content creation, community management, and detailed analytics reporting.",
    image: "https://picsum.photos/seed/social/1200/800",
  },
  {
    title: "SEO Optimization",
    slug: "seo",
    description:
      "Dominate search results and drive organic traffic with our data-driven SEO strategies.",
    content:
      "From technical SEO audits to content optimization and link building, we cover all aspects of search engine visibility.",
    image: "https://picsum.photos/seed/seo/1200/800",
  },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  let service = await getServiceBySlug(slug);

  if (!service) {
    service = DUMMY_SERVICES.find((s) => s.slug === slug) as any;
  }

  if (!service) {
    notFound();
  }

  return (
    <div>
      <BreadcrumbSection
        title={service.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <div className="py-24 space-y-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* ================= LEFT SIDEBAR ================= */}
            <aside className="lg:col-span-1 space-y-6 sticky top-24 self-start">
              {/* Service List */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-3">
                {DUMMY_SERVICES.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition
            ${
              item.slug === slug
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
                  >
                    {item.title}
                    <span>↗</span>
                  </Link>
                ))}
              </div>

              {/* CTA Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white space-y-6 shadow-lg">
                <h3 className="text-2xl font-bold">
                  Don't Hesitate to Contact Us
                </h3>
                <p className="text-white/80 text-sm">
                  At our IT solution company, we are committed to excellence.
                </p>
                <Button
                  asChild
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  <Link href="/contact">Get in Touch →</Link>
                </Button>
              </div>
            </aside>

            {/* ================= RIGHT CONTENT ================= */}
            <div
              // initial={{ opacity: 0, y: 40 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9]">
                <Image
                  src={
                    service.image ||
                    `https://picsum.photos/seed/${service.slug}/1200/800`
                  }
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Overview */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">Overview</h1>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {service.content}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Features</h2>

                <ul className="space-y-4">
                  {[
                    "Creating and editing content",
                    "Workflows, reporting, and content organization",
                    "User & role-based administration",
                    "Flexibility and performance analysis",
                    "Multilingual content capabilities",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-indigo-600 mt-1">✔</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <section className="bg-slate-50 py-24">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  What's Included
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.content ||
                    "Our approach is holistic and results-oriented. We don't just provide a service; we become an extension of your team."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Strategic Planning",
                  "Weekly Reporting",
                  "Dedicated Account Manager",
                  "Custom Content Creation",
                  "Competitor Analysis",
                  "Performance Optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <div className="p-12 md:p-24 rounded-[3rem] bg-slate-900 text-white text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to see results?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Schedule a free 30-minute strategy session with one of our
              experts.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100 border-none"
              asChild
            >
              <Link href="/contact">Book Your Session</Link>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
