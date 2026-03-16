import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getPublishedPosts, getServices } from "@/lib/fetchers";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import { FALLBACK_ABOUT } from "@/lib/homepage";
import type { AboutContent } from "@/types/homepage";
// import PremiumHero from '@/components/sections/Hero';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function AboutPage() {
  return (
    // <div className="space-y-24 pb-24 overflow-x-hidden">
    <div className="  overflow-x-clip">
      {/* Hero Section */}
      <AboutSection />
    </div>
  );
}
