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
  const aboutContent: AboutContent = FALLBACK_ABOUT;

  return (
    <div className="overflow-x-clip">
      <AboutSection content={aboutContent} />
    </div>
  );
}
