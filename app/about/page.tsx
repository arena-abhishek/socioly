import Container from "@/components/ui/Container";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";
import ReviewContactSection from "@/components/sections/ReviewContactSection";
import CompanyHistory from "@/components/sections/CompanyHistory";
import WorkProcess from "@/components/sections/WorkProcess";
import Clients from "@/components/sections/Clients";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Socioly's mission, team, and our approach to digital marketing.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Experts", value: "25+" },
  ];

  return (
    <div>
      <BreadcrumbSection
        title="About Us"
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <div className="py-24 space-y-32">
        {/* Mission Section */}
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Empowering Enterprises with{" "}
                  <span className="text-indigo-600">
                    AI-Driven CXaaS Solutions
                  </span>
                  .
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  At Exato.ai, we don’t just provide technology; we are
                  Experience Integrators. We bridge the gap between fragmented
                  data and meaningful human connection. By fusing cutting-edge
                  Generative AI with strategic cloud consulting, we transform
                  traditional contact centers into high-performance engines of
                  growth.
                </p>

                <p className="text-lg text-slate-600">
                  From our roots as a boutique analytics firm to our global
                  presence as a publicly listed leader, we help over 150+
                  enterprise clients deliver seamless, context-aware experiences
                  that drive loyalty and measurable ROI.
                </p>

                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Work With Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  // src="https://picsum.photos/seed/socioly-about/800/800"
                  src="https://exato.ai/Screenshot%202023-11-05%20at%2012.19.38%20PM.png"
                  alt="Our Team at Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <WorkProcess />

        <CompanyHistory />

        {stats && (
          <section className="bg-slate-900 py-24 text-white">
            <Container>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-4xl md:text-6xl font-black text-indigo-400">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        <TeamSection />

        <ReviewContactSection />
        <Clients />
        {/* Values Section */}
        {/* <section>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Core Values
              </h2>
              <p className="text-slate-600">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  desc: "We believe in honest communication and clear reporting. No vanity metrics, just real results.",
                },
                {
                  title: "Innovation",
                  desc: "The digital world moves fast. We're constantly experimenting with new tools and strategies.",
                },
                {
                  title: "Empathy",
                  desc: "We put ourselves in your customers' shoes to create experiences they actually value.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4"
                >
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section> */}
      </div>
    </div>
  );
}
