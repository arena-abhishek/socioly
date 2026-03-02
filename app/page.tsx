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
    <div className="space-y-24 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://picsum.photos/seed/socioly-hero/1920/1080"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Scale Your Brand with <span className="text-indigo-400">Socioly</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
              We combine data-driven strategies with creative storytelling to help your business dominate the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                <Link href="/contact">Get a Free Audit</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Services Section */}

      <StackCards />
      <ServicesSection />
      <WhyChoose />
      <WorkProcess/>
      <FaqSection/>
      <ReviewContactSection />
      <Clients/>
      {/* <section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Expert Solutions for Modern Brands</h2>
            <p className="text-slate-600">Comprehensive digital marketing services tailored to your unique goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">{service.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 line-clamp-3">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="ghost" asChild>
              <Link href="/services">View All Services →</Link>
            </Button>
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
              <p className="text-slate-600">Strategies, trends, and tips from our digital marketing experts.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">Read All Articles</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.cover_image || `https://picsum.photos/seed/${post.slug}/800/600`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-sm text-indigo-600 font-semibold uppercase tracking-wider">
                    {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold leading-snug hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section> */}
    </div>
  );
}
