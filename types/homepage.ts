// types/homepage.ts
// ─────────────────────────────────────────────────────────────────

export interface HeroStat {
  number: string
  label: string
}

export interface HeroContent {
  sub_title: string
  title: string
  cta_text: string
  cta_href: string
  video_url: string
  images: string[]   // min 4, max 6
  stats: HeroStat[]  // exactly 3
}

// ── About Section ─────────────────────────────────────────────────
export interface AboutTab {
  id: string           // "about-tab-1" | "about-tab-2" | "about-tab-3"
  nav_label: string    // "Problem Solving"
  image: string        // Supabase Storage public URL
  sub_title: string    // small pill — "About Us"
  title: string        // section heading
  description: string
  list_items: string[]
  cta_text: string     // "Know More"
  cta_href: string     // "/about"
}

export interface AboutContent {
  tabs: AboutTab[]     // exactly 3
}

// ── Full homepage JSON ─────────────────────────────────────────────
export interface HomepageContent {
  hero: HeroContent
  about: AboutContent
}