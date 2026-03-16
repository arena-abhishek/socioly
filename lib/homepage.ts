// lib/homepage.ts
import { createClient } from "@supabase/supabase-js";
import type { HeroContent, AboutContent, HomepageContent } from "@/types/homepage";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Fallbacks ─────────────────────────────────────────────────────

export const FALLBACK_HERO: HeroContent = {
  sub_title: "Amazing Solutions For Business",
  title: "Trusted IT Support Designed to Safeguard Your Business",
  cta_text: "Our Services",
  cta_href: "/services",
  video_url: "https://youtu.be/WUB2pSkwN2M?si=mE9CqwAUIjpYiwGm",
  images: [
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
  ],
  stats: [
    { number: "20.5K",  label: "Projects Done"  },
    { number: "100.5K", label: "Happy Clients"   },
    { number: "150.5K", label: "Team Members"    },
  ],
};

export const FALLBACK_ABOUT: AboutContent = {
  tabs: [
    {
      id: "about-tab-1",
      nav_label: "Problem Solving",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      sub_title: "About Us",
      title: "Where CX Meets Excellence",
      description: "At Exato, we proudly bear the title of 'Experience Integrator.' With a commitment to our mission, we've partnered with over 100 businesses, helping them achieve exceptional CX and EX results.",
      list_items: [
        "Strategic Partnerships",
        "Innovation-Driven Excellence",
        "Proven Outcomes",
        "Dedication to the Future",
      ],
      cta_text: "Know More",
      cta_href: "/about",
    },
    {
      id: "about-tab-2",
      nav_label: "Our Mission",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      sub_title: "Our Mission",
      title: "Industry-Focused Technology Solutions",
      description: "Exato serves key sectors including BFSI, Healthcare, Retail, Telecom, Manufacturing, and IT/ITeS & BPO/KPO, delivering solutions that address specific business challenges.",
      list_items: [
        "Retail: AI-driven product recommendations & loyalty analytics",
        "Telecom: Customer churn prediction & omnichannel CX deployment",
        "Manufacturing: Supply chain optimization & predictive revenue models",
      ],
      cta_text: "Know More",
      cta_href: "/about",
    },
    {
      id: "about-tab-3",
      nav_label: "Our Vision",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      sub_title: "Our Vision",
      title: "Engage. Understand. Innovate: The AI-Powered Conversation Revolution",
      description: "Leveraging LLM models, Generative AI, and NLP engines, we craft conversations that don't just respond, but truly understand and engage.",
      list_items: [
        "Next-Gen Conversations: Global Adaptability, Context-Aware",
        "Mending the Fragmented Landscape: Bridging CX and EX Gaps",
        "Empowering Your Business: Tangible Outcomes with Our Solutions",
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
