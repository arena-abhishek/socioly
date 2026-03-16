/**
 * lib/headerData.ts
 *
 * Static fallback data for the Header mega-menu.
 *
 * ── Supabase integration guide ────────────────────────────────────────────────
 * 1. Install: `npm i @supabase/supabase-js`
 * 2. Create `lib/supabase.ts` (see bottom of this file for the setup snippet).
 * 3. Create tables in Supabase that mirror each exported const below:
 *      • header_utility_links  (id, label, href, sort_order)
 *      • header_languages      (id, label, href, sort_order)
 *      • header_nav            (id, label, href, type, sort_order)
 *      • header_nav_mega       (id, nav_id FK, json column: megaMenu SubMenu)
 *      • header_nav_promo      (id, nav_id FK, json column: promoItems PromoItem[])
 * 4. Replace each exported const with an async fetch function, e.g.:
 *
 *    export async function getUtilityLinks(): Promise<UtilityLink[]> {
 *      const { data } = await supabase
 *        .from("header_utility_links")
 *        .select("*")
 *        .order("sort_order");
 *      return data ?? staticUtilityLinks;
 *    }
 *
 * 5. In your Header component (or a Server Component wrapper), call these
 *    functions and pass the results as props.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  TopNavItem,
  UtilityLink,
  Language,
} from "../types/header";

// ─── Utility Bar Links ────────────────────────────────────────────────────────

export const utilityLinks: UtilityLink[] = [
  { label: "Login", href: "https://login.incontact.com/inContact/Login.aspx?ReturnUrl=%2f" },
  { label: "Status", href: "/company/status-sla" },
  { label: "Support", href: "/services/customer-support" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/websites/pricing" },
  { label: "Careers", href: "/careers" },
];

// ─── Language Options ─────────────────────────────────────────────────────────

export const languages: Language[] = [
  { label: "English", href: "/" },
  { label: "Deutsch", href: "/de" },
  { label: "Français", href: "/fr" },
  { label: "日本", href: "/ja" },
  { label: "简体中文", href: "/zh" },
  { label: "العربية", href: "/ar" },
  { label: "한국", href: "/ko" },
  { label: "Español", href: "/es" },
  { label: "Portuguese", href: "/pt-br" },
];

// ─── Main Navigation Data ─────────────────────────────────────────────────────

export const navData: TopNavItem[] = [
  // ── Platform ──────────────────────────────────────────────────────────────
  {
    label: "Platform",
    href: "/platform/ai-platform",
    type: "mega",
    megaMenu: {
      title: "CXone",
      titleHref: "/products/cxone",
      titleDescription:
        "The enterprise AI platform for orchestrating human and AI Agents to automate service, augment work, and accelerate intelligent experiences at scale.",
      titleButtonLabel: "Learn more",
      columns: [
        {
          items: [
            { title: "Platform Overview", description: "Complete AI platform for customer service automation", href: "/platform/ai-platform" },
            { title: "Purpose-built AI for CX", description: "Powering smarter CX with AI-driven insights and automation.", href: "/platform/enlighten-ai" },
            { title: "Cloud Architecture", description: "Innovative cloud-native foundation to rapidly scale extraordinary CX", href: "/platform/cloud-architecture" },
            { title: "Voice as a Service (VaaS)", description: "Crystal-clear, scalable voice interactions for effortless interactions", href: "/platform/voice-as-a-service" },
          ],
        },
        {
          items: [
            { title: "Dashboards & Reporting", description: "Gain a full operational picture of your contact center, with enhanced visualization of real-time and historical insights", href: "/platform/reporting-and-dashboards" },
            { title: "Integrations", description: "Seamlessly connect your business systems with our platform", href: "/platform/integrations" },
            { title: "Trust & Compliance", description: "Securing your trust with every interaction", href: "/company/trust-center" },
          ],
        },
      ],
      resource: {
        img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dresources.nice.com/wp-content/uploads/2025/06/ai-calc-new.webp",
        imgAlt: "Discover the full value of AI in customer service",
        title: "Discover the full value of AI in customer service",
        description: "Understand the benefits and cost savings you can achieve by embracing AI, from automation to augmentation.",
        linkLabel: "Calculate your savings",
        linkHref: "/ai-value-calculator",
      },
    },
  },

  // ── Products (promo-mega) ─────────────────────────────────────────────────
  {
    label: "Products",
    href: "/products",
    type: "promo-mega",
    promoItems: [
      { type: "title", label: "Capabilities" },
      {
        type: "item",
        label: "Agentic Experience Automation​",
        subMenu: {
          title: "Agentic Experience Automation​",
          titleHref: "/products/agentic-experience-automation",
          titleDescription: "AI that resolves customer needs instantly and proactively",
          titleButtonLabel: "Learn more",
          columns: [
            {
              colTitle: "Conversational AI and Agentic Platform​",
              stretch: true,
              items: [
                { title: "AI Agents for Self-Service", description: "Go beyond answering questions to fully automate customer intent through fulfillment with Agentic AI.", href: "/products/ai-agents-for-self-service" },
              ],
            },
            {
              separator: true,
              items: [
                { title: "AI Agents for Proactive Engagement", description: "Keep customers engaged in conversation from onboarding to installation, service, and retention.", href: "/products/ai-agents-for-proactive-engagement" },
              ],
            },
            {
              colTitle: "Knowledge Management",
              items: [
                { title: "Knowledge Management", description: "Activate AI-powered enterprise knowledge to increase self-resolution rates and loyalty.", href: "/products/knowledge-management" },
              ],
            },
          ],
        },
      },
      {
        type: "item",
        label: "Engagement Orchestration​",
        subMenu: {
          title: "Engagement Orchestration​",
          titleHref: "/products/engagement-orchestration",
          titleDescription: "AI-driven orchestration that streamlines service journeys across the enterprise",
          titleButtonLabel: "Learn more",
          columns: [
            {
              colTitle: "Omnichannel Engagement​",
              separator: true,
              items: [
                { title: "Interactive Voice Response​", description: "Let customers quickly get the help they need with easy, automated phone self-service and smarter call routing.", href: "/products/interactive-voice-response-ivr" },
                { title: "Omnichannel Routing", description: "Reduce wait times and boost conversions with smart customer-agent matching.", href: "/products/omnichannel-routing" },
                { title: "Outbound Engagement​", description: "Generate more revenue, minimize hang-ups, and proactively connect to reduce friction.", href: "/products/proactive-outbound-engagement" },
              ],
            },
            {
              colTitle: "Workflow Orchestration",
              separator: true,
              items: [
                { title: "Orchestrator", description: "Unify and optimize every customer service workflow from intent to fulfillment.", href: "/products/orchestrator" },
              ],
            },
            {
              colTitle: "Voice Services​",
              items: [
                { title: "Voice Services​", description: "Voice as a service that delivers cloud voice and data services on the world's most resilient, AI-ready network.", href: "/products/voice-services" },
              ],
            },
          ],
        },
      },
      {
        type: "item",
        label: "Workforce Empowerment",
        subMenu: {
          title: "Workforce Empowerment",
          titleHref: "/products/workforce-empowerment",
          titleDescription: "Real-time AI assistance that makes every employee faster and smarter",
          titleButtonLabel: "Learn more",
          columns: [
            {
              colTitle: "Workforce Engagement Management​",
              stretch: true,
              items: [
                { title: "Workforce Management​", description: "Powerful AI-based forecasting and scheduling to keep SLAs up and costs down​.", href: "/products/workforce-management" },
                { title: "Quality Management​", description: "Evaluate 100% of interactions with AI and deliver effective coaching to agents.​", href: "/products/quality-management" },
                { title: "Performance Management​", description: "Meet your goals while engaging employees through personal coaching and gamification.​", href: "/products/performance-management" },
              ],
            },
            {
              separator: true,
              items: [
                { title: "Recording Management​", description: "Capture 100% of interactions, meet regulatory needs, and drive better performance.​", href: "/products/recording-management" },
                { title: "Interaction Analytics", description: "Gain AI-powered insights from 100% of interactions to drive continuous improvement.​", href: "/products/interaction-analytics" },
                { title: "Feedback Management​", description: "Unlock Voice of the Customer insights to drive loyalty and boost business growth.​", href: "/products/voice-of-the-customer" },
              ],
            },
            {
              colTitle: "Copilots​",
              items: [
                { title: "Copilot for Agents​", description: "Empower customer service agents with an AI companion to drive productivity and engagement.​", href: "/products/copilot-for-agents" },
                { title: "Copilot for Supervisors​", description: "Empower all customer service supervisors to drive focus, productivity, and engagement.​", href: "/products/copilot-for-supervisors" },
              ],
            },
          ],
        },
      },
      { type: "divider" },
      { type: "title", label: "Solutions" },
      {
        type: "item",
        label: "By Business Initiative",
        subMenu: {
          title: "By Business Initiative",
          columns: [
            {
              items: [
                { title: "Grow Revenue", description: "Boost conversions and win rates to accelerate growth", href: "/solutions/grow-revenues" },
                { title: "Engage & Empower Employees", description: "Create a workplace of truly engaged employees", href: "/solutions/employee-engagement" },
                { title: "Boost Customer Loyalty", description: "Improve customer loyalty on interactions across the journey", href: "/solutions/boost-customer-loyalty" },
                { title: "Drive Digital Transformation", description: "Integrate digital technology at the center of CX", href: "/solutions/drive-digital-transformation" },
                { title: "Small and Medium Business", description: "Drive growth and boost revenue with smarter, cost-effective customer service built for SMBs.", href: "/solutions/small-business" },
              ],
            },
            {
              items: [
                { title: "Call Center Software", description: "Empower agents to provide better experiences", href: "/solutions/call-center-software" },
                { title: "Increase Operational Efficiency", description: "Leverage AI and automation to increase agent retention", href: "/solutions/increase-operational-efficiency" },
                { title: "Move to the Cloud", description: "Elevate experiences by moving operations to the cloud", href: "/solutions/move-to-the-cloud" },
                { title: "Improve Compliance", description: "Protect your consumers with pre-built compliance solutions", href: "/solutions/improve-compliance" },
                { title: "Proactive Customer Engagement", description: "Elevate customer satisfaction with proactive conversational AI", href: "/solutions/proactive-customer-engagement" },
              ],
            },
          ],
        },
      },
      {
        type: "item",
        label: "Integrations & Custom Solutions",
        subMenu: {
          title: "Integrations & Custom Solutions",
          columns: [
            {
              items: [
                { title: "CXexchange Marketplace", description: "Discover partner solutions to extend capabilities on our platform", href: "https://cxexchange.niceincontact.com/en-US/home" },
                { title: "Pre-Built Integrations", description: "Seamlessly connect your business systems with our platform", href: "/platform/integrations/hubs" },
              ],
            },
            {
              items: [
                { title: "Developer Tools & APIs", description: "Endless customization options with RESTful APIs and robust SDKs", href: "/products/integrations-developer-tools-apis" },
                { title: "Partner Ecosystem", description: "Embark on a journey of shared success and collaboration", href: "/partners" },
              ],
            },
          ],
          resource: {
            img: "https://resources.nice.com/wp-content/uploads/2025/09/Gartner-MQ-2025-Nav-877x364-final.jpg",
            imgAlt: "Make the smartest buying decision with the latest Gartner analysis",
            title: "Make the smartest buying decision with the latest Gartner analysis",
            description: "EXATO has been named a Gartner® Magic Quadrant™ Leader for Contact Center as a Service for the 11th consecutive year.",
            linkLabel: "Get report",
            linkHref: "https://www.nice.com/lps/gartnermq2025",
          },
        },
      },
      { type: "divider" },
      { type: "link", label: "View All Products", href: "/products" },
    ],
  },

  // ── Industries ────────────────────────────────────────────────────────────
  {
    label: "Industries",
    type: "mega",
    megaMenu: {
      title: "By Industry",
      titleHref: "/industries",
      titleDescription: "Industry focused solutions built to elevate experiences in the moments that matter most.",
      titleButtonLabel: "View all",
      columns: [
        {
          items: [
            { title: "BPO", description: "Business Process Outsourcers", href: "/industries/business-process-outsourcers" },
            { title: "Education", description: "Frictionless student journey", href: "/industries/education" },
            { title: "Financial Services", description: "Customer experiences that count", href: "/industries/financial-services" },
            { title: "View all Industries", href: "/industries" },
          ],
        },
        {
          items: [
            { title: "Government", description: "Elevate citizen trust", href: "/industries/government" },
            { title: "Healthcare", description: "Healthy patient experiences", href: "/industries/healthcare" },
            { title: "Insurance", description: "Secure policyholder experiences", href: "/industries/insurance" },
          ],
        },
        {
          items: [
            { title: "Retail", description: "Delight customers where they shop", href: "/industries/retail" },
            { title: "Telecom", description: "CX for Telecommunications", href: "/industries/telecommunications" },
            { title: "Travel & Hospitality", description: "Boost traveler and guest loyalty", href: "/industries/travel-and-hospitality" },
          ],
        },
      ],
      resource: {
        img: "https://resources.nice.com/wp-content/uploads/2024/11/ai-value-calculator-255x145-1.jpg",
        imgAlt: "Discover the full value of AI in customer service",
        title: "Discover the full value of AI in customer service",
        description: "Understand the benefits and cost savings you can achieve by embracing AI, from automation to augmentation.",
        linkLabel: "Calculate your savings",
        linkHref: "/ai-value-calculator",
      },
    },
  },

  // ── Services ──────────────────────────────────────────────────────────────
  {
    label: "Services",
    href: "/services",
    type: "mega",
    megaMenu: {
      columns: [
        {
          colTitle: "Professional Services",
          items: [
            { title: "Professional Services", description: "Industry-leading expertise, tools and know-how", href: "/services/professional-services" },
            { title: "Implementation Partners", description: "EXATO-certified implementation partners", href: "https://cxexchange.niceincontact.com/en-US/home" },
            { title: "Business Consulting", description: "Your partner for successful transformation", href: "/services/business-consulting" },
          ],
        },
        {
          colTitle: "Tools",
          items: [
            { title: "Contact Center Training", description: "Tailored education delivered by CX experts", href: "/services/training-and-education" },
            { title: "AI Value Calculator", description: "Understand the benefits and cost savings you can achieve by embracing AI.", href: "/ai-value-calculator" },
          ],
        },
        {
          colTitle: "Support & Assistance",
          items: [
            { title: "Customer Support", description: "Global support you can depend on", href: "/services/customer-support" },
          ],
        },
      ],
      resource: {
        img: "https://resources.nice.com/wp-content/uploads/2025/09/Gartner-MQ-2025-Nav-877x364-final.jpg",
        imgAlt: "Make the smartest buying decision with the latest Gartner analysis",
        title: "Make the smartest buying decision with the latest Gartner analysis",
        description: "EXATO has been named a Gartner® Magic Quadrant™ Leader for Contact Center as a Service for the 11th consecutive year.",
        linkLabel: "Get report",
        linkHref: "https://www.nice.com/lps/gartnermq2025",
      },
    },
  },

  // ── Resources ─────────────────────────────────────────────────────────────
  {
    label: "Resources",
    href: "/resources",
    type: "mega",
    megaMenu: {
      columns: [
        {
          colTitle: "Knowledge Base",
          items: [
            { title: "All Resources", description: "Whitepapers, datasheets, demos and more", href: "/resources" },
            { title: "Analyst Perspectives", description: "Contact center reports from third party analysis", href: "/resources/analyst-perspectives" },
            { title: "Terms Glossary", description: "Detailed descriptions of industry-related terms", href: "/glossary" },
            { title: "FAQs", description: "Contact center focused frequently asked questions", href: "/faq" },
            { title: "Guides", description: "Expert insights for superior CX", href: "/info" },
          ],
        },
        {
          colTitle: "Learning & Insights",
          items: [
            { title: "On-Demand Webinars", description: "Browse our extensive webinar catalog", href: "/on-demand-webinars" },
            { title: "Interactive Product Tours", description: "Explore the complete platform with our self-guided demos", href: "/interactive-product-tours" },
            { title: "Blog", description: "CX industry guidance by contact center experts", href: "/blog" },
            { title: "Why EXATO? Video Series", description: "Step Inside The Room Where It Happened to see CX AI in action", href: "/resources/why-exato-the-room-where-it-happened-video-series" },
          ],
        },
        {
          colTitle: "Community",
          items: [
            { title: "Events", description: "Upcoming events and webinars", href: "/events" },
            { title: "Customer Stories", description: "Our customer's success is paramount. Read case studies about real CX transformation", href: "/customer-stories" },
            { title: "EXATO Clubs", description: "Collaborate, learn, and share best practices for customer service excellence", href: "/clubs" },
          ],
        },
      ],
      resource: {
        img: "https://resources.nice.com/wp-content/uploads/2024/11/ai-value-calculator-255x145-1.jpg",
        imgAlt: "Discover the full value of AI in customer service",
        title: "Discover the full value of AI in customer service",
        description: "Understand the benefits and cost savings you can achieve by embracing AI, from automation to augmentation.",
        linkLabel: "Calculate your savings",
        linkHref: "/ai-value-calculator",
      },
    },
  },

  // ── Company ───────────────────────────────────────────────────────────────
  {
    label: "Company",
    href: "/company/about-us",
    type: "mega",
    megaMenu: {
      columns: [
        {
          colTitle: "Company",
          items: [
            { title: "About Us", description: "Powering seamless cloud experiences", href: "/company/about-us" },
            { title: "Investors", description: "Investors relations, reports and filings", href: "/company/investors" },
            { title: "Global Offices", description: "Interactive map of locations worldwide", href: "/company/global-locations" },
            { title: "Careers", description: "View job openings and learn about our culture", href: "/careers" },
            { title: "EXATO Leadership", description: "Meet our global leadership and executive team", href: "/company/global-leadership" },
          ],
        },
        {
          colTitle: "News & Media",
          items: [
            { title: "Events", description: "Upcoming events and webinars", href: "/events" },
            { title: "Press Releases", description: "Find the latest updates from EXATO", href: "/press-releases" },
            { title: "Media Center", description: "Media contacts and resources", href: "/company/media-center" },
          ],
        },
        {
          colTitle: "Corporate Governance",
          items: [
            { title: "EXATO Trust Center", description: "Securing your trust with every interaction", href: "/company/trust-center" },
            { title: "Market Leadership", description: "Discover why EXATO is the market leader", href: "/company/market-leadership" },
            { title: "Corporate Responsibility", description: "In a world where you can be anything, be EXATO", href: "/company/corporate-responsibility" },
          ],
        },
      ],
      resource: {
        img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgAlt: "Meet EXATO Cognigy",
        title: "Meet EXATO Cognigy",
        description: "Together, CXone and Cognigy AI enable organizations to accelerate AI adoption and scale it seamlessly across every customer experience.",
        linkLabel: "See what's possible",
        linkHref: "https://www.nice.com/lps/nice-cognigy",
      },
    },
  },
];

/*
 * ── Supabase client setup snippet ────────────────────────────────────────────
 * Create this file at: lib/supabase.ts
 *
 * import { createClient } from "@supabase/supabase-js";
 *
 * export const supabase = createClient(
 *   process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
 * );
 *
 * Then add to .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...
 * ─────────────────────────────────────────────────────────────────────────────
 */