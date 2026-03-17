// lib/homepage.ts
import { createClient } from "@supabase/supabase-js";
import type { HeroContent, AboutContent, HomepageContent } from "@/types/homepage";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Fallbacks ─────────────────────────────────────────────────────

export const FALLBACK_HERO: HeroContent = {
  sub_title: "Next-Gen Engagement",
  title: "Evolving Customer Journeys: Better Customer Experience",
  cta_text: "Talk To AI Expert",
  cta_href: "/contact",
  video_url: "https://youtu.be/WUB2pSkwN2M",

  images: [
    "/images/hero-banners/banner-1.jpeg",
    "/images/hero-banners/banner-2.jpeg",
    "/images/hero-banners/banner-3.jpeg",
    "/images/hero-banners/banner-4.jpeg",
    "/images/hero-banners/banner-5.jpeg",
    "/images/hero-banners/banner-6.jpeg",
  ],

  stats: [
    { number: "100K+", label: "Agents Enabled" },
    { number: "100", label: "Business Transformed" },
    { number: "97%", label: "Customer Retention" },
  ],
};

export const FALLBACK_ABOUT: AboutContent = {
  tabs: [
    {
      id: "about-tab-1",
      nav_label: "Who We Are",
      image: "/images/about-tab-img.png",
      sub_title: "About Us",
      title: "AI-Powered Customer Experience Experts",
      description:
        "We help businesses transform customer engagement using AI-driven automation, conversational intelligence, and data insights. Our solutions improve customer journeys, increase retention, and drive measurable growth.",
      list_items: [
        "AI-powered CX automation",
        "Omnichannel customer engagement",
        "Scalable enterprise solutions",
        "Data-driven decision making",
      ],
      cta_text: "Know More",
      cta_href: "/about",
    },

    {
      id: "about-tab-2",
      nav_label: "Our Mission",
      image: "/images/about-tab-img-2.png",
      sub_title: "Our Mission",
      title: "Transforming Businesses Through Intelligent Automation",
      description:
        "Our mission is to empower organizations with AI technologies that streamline operations, enhance customer satisfaction, and unlock new growth opportunities.",
      list_items: [
        "Automate customer support with AI agents",
        "Improve operational efficiency",
        "Deliver personalized customer experiences",
        "Enable data-backed business strategies",
      ],
      cta_text: "Know More",
      cta_href: "/about",
    },

    {
      id: "about-tab-3",
      nav_label: "Our Vision",
      image: "/images/about-tab-img-3.png",
      sub_title: "Our Vision",
      title: "Building the Future of AI Conversations",
      description:
        "We envision a world where businesses and customers interact seamlessly through intelligent, context-aware AI conversations that feel natural, efficient, and impactful.",
      list_items: [
        "Next-gen conversational AI",
        "Context-aware intelligent agents",
        "Seamless human + AI collaboration",
        "Future-ready customer engagement",
      ],
      cta_text: "Know More",
      cta_href: "/about",
    },
  ],
};

// ── Fetch helpers ─────────────────────────────────────────────────

async function fetchSection<T>(section: string, fallback: T): Promise<T> {
  try {
    const { data, error } = await supabase
      .from("homepage_content")
      .select("content")
      .eq("section", section)
      .single();

    if (error || !data?.content) {
      console.warn(`[${section}] Supabase fetch failed, using fallback:`, error?.message);
      return fallback;
    }
    return data.content as T;
  } catch (err) {
    console.error(`[${section}] Unexpected error, using fallback:`, err);
    return fallback;
  }
}

export const getHeroContent  = () => fetchSection<HeroContent>("hero",  FALLBACK_HERO);
export const getAboutContent = () => fetchSection<AboutContent>("about", FALLBACK_ABOUT);

export async function getHomepageContent(): Promise<HomepageContent> {
  const [hero, about] = await Promise.all([
    getHeroContent(),
    getAboutContent(),
  ]);
  return { hero, about };
}
