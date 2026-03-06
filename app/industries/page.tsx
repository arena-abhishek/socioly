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
import AboutHero from "@/components/sections/AboutHero";
import {  IndustriesHeroData, } from "@/lib/constants/AboutHero";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Learn about Exato.ai's mission, team, and our approach to digital marketing.",
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
        title="Industries We Serve"
        items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <div className="py-24 space-y-32">
   
        <AboutHero data={IndustriesHeroData} />

        <Clients />

        <ReviewContactSection />

    
      </div>
    </div>
  );
}
