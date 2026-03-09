

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { getPublishedPosts, getServices } from '@/lib/fetchers';
import Image from 'next/image';
// import PremiumHero from '@/components/sections/Hero';
import Hero from '@/components/sections/Hero';
import StackCards from '@/components/sections/StackCards';
import WhyChoose from '@/components/sections/WhyChoose';
import ServicesSection from '@/components/sections/ServicesSection';
import FaqSection from '@/components/sections/FaqSection';
import WorkProcess from '@/components/sections/WorkProcess';
import Clients from '@/components/sections/Clients';
import ReviewContactSection from '@/components/sections/ReviewContactSection';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function HomePage() {
  const [posts, services] = await Promise.all([
    getPublishedPosts(),
    getServices(),
  ]);

  const featuredPosts = posts.slice(0, 3);
  const featuredServices = services.slice(0, 4);

  return (
    // <div className="space-y-24 pb-24 overflow-x-hidden">
    <div className="  overflow-x-clip">
    {/* Hero Section */}
      <Hero />

  

      {/* Services Section */}

      <StackCards />
      <ServicesSection />
      <Clients/>
      <WhyChoose />
      <WorkProcess/>
      <FaqSection/>
      <ReviewContactSection />
 
    </div>
  );
}
