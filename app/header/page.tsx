"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiX, FiChevronRight, FiMenu } from "react-icons/fi";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  title: string;
  description?: string;
  href: string;
}

interface NavSection {
  colTitle?: string;
  items: NavItem[];
  stretch?: boolean;
  separator?: boolean;
}

interface SubMenu {
  title?: string;
  titleHref?: string;
  titleDescription?: string;
  titleButtonLabel?: string;
  columns: NavSection[];
  resource?: {
    img: string;
    imgAlt: string;
    title: string;
    description: string;
    linkLabel: string;
    linkHref: string;
  };
}

interface PromoItem {
  type: "title" | "item" | "divider" | "link";
  label?: string;
  subMenu?: SubMenu;
  href?: string;
}

interface TopNavItem {
  label: string;
  href?: string;
  type: "simple" | "mega" | "promo-mega";
  megaMenu?: SubMenu;
  promoItems?: PromoItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const utilityLinks = [
  { label: "Login", href: "https://login.incontact.com/inContact/Login.aspx?ReturnUrl=%2f" },
  { label: "Status", href: "/company/status-sla" },
  { label: "Support", href: "/services/customer-support" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/websites/pricing" },
  { label: "Careers", href: "/careers" },
];

const languages = [
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

const navData: TopNavItem[] = [
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
        img: "https://resources.nice.com/wp-content/uploads/2025/06/ai-calc-new.webp",
        imgAlt: "Discover the full value of AI in customer service",
        title: "Discover the full value of AI in customer service",
        description: "Understand the benefits and cost savings you can achieve by embracing AI, from automation to augmentation.",
        linkLabel: "Calculate your savings",
        linkHref: "/ai-value-calculator",
      },
    },
  },
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
            description: "NiCE has been named a Gartner® Magic Quadrant™ Leader for Contact Center as a Service for the 11th consecutive year and is positioned furthest on Completeness of Vision.",
            linkLabel: "Get report",
            linkHref: "https://www.nice.com/lps/gartnermq2025",
          },
        },
      },
      { type: "divider" },
      { type: "link", label: "View All Products", href: "/products" },
    ],
  },
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
            { title: "Implementation Partners", description: "NICE-certified implementation partners", href: "https://cxexchange.niceincontact.com/en-US/home" },
            { title: "Business Consulting", description: "Your partner for successful transformation", href: "/services/business-consulting" },
          ],
        },
        {
          colTitle: "Tools",
          items: [
            { title: "Contact Center Training", description: "Tailored education delivered by CX experts", href: "/services/training-and-education" },
            { title: "AI Value Calculator", description: "Understand the benefits and cost savings you can achieve by embracing AI, from automation to augmentation.", href: "/ai-value-calculator" },
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
        description: "NiCE has been named a Gartner® Magic Quadrant™ Leader for Contact Center as a Service for the 11th consecutive year and is positioned furthest on Completeness of Vision.",
        linkLabel: "Get report",
        linkHref: "https://www.nice.com/lps/gartnermq2025",
      },
    },
  },
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
            { title: "Why NiCE? Video Series", description: "Step Inside The Room Where It Happened to see CX AI in action", href: "/resources/why-nice-the-room-where-it-happened-video-series" },
          ],
        },
        {
          colTitle: "Community",
          items: [
            { title: "Events", description: "Upcoming events and webinars", href: "/events" },
            { title: "Customer Stories", description: "Our customer's success is paramount. Read case studies about real CX transformation", href: "/customer-stories" },
            { title: "NiCE Clubs", description: "Collaborate, learn, and share best practices for customer service excellence", href: "/clubs" },
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
            { title: "NiCE Leadership", description: "Meet our global leadership and executive team", href: "/company/global-leadership" },
          ],
        },
        {
          colTitle: "News & Media",
          items: [
            { title: "Events", description: "Upcoming events and webinars", href: "/events" },
            { title: "Press Releases", description: "Find the latest updates from NiCE", href: "/press-releases" },
            { title: "Media Center", description: "Media contacts and resources", href: "/company/media-center" },
          ],
        },
        {
          colTitle: "Corporate Governance",
          items: [
            { title: "NiCE Trust Center", description: "Securing your trust with every interaction", href: "/company/trust-center" },
            { title: "Market Leadership", description: "Discover why NiCE is the market leader", href: "/company/market-leadership" },
            { title: "Corporate Responsibility", description: "In a world where you can be anything, be NiCE", href: "/company/corporate-responsibility" },
          ],
        },
      ],
      resource: {
        img: "https://resources.nice.com/wp-content/uploads/2024/11/nice-cognigy-nav-ad-877x364-1.jpg",
        imgAlt: "Meet NiCE Cognigy",
        title: "Meet NiCE Cognigy",
        description: "Together, CXone and Cognigy AI enable organizations to accelerate AI adoption and scale it seamlessly across every customer experience.",
        linkLabel: "See what's possible",
        linkHref: "https://www.nice.com/lps/nice-cognigy",
      },
    },
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ResourcePanel({ resource }: { resource: NonNullable<SubMenu["resource"]> }) {
  return (
    <div className="w-full mt-3 mb-3">
      <figure className="rounded-2xl w-full h-36 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resource.img}
          alt={resource.imgAlt}
          className="object-cover object-center w-full h-full"
          loading="lazy"
        />
      </figure>
      <p className="mt-2 text-sm font-semibold leading-5">{resource.title}</p>
      <p className="text-[#666] mt-3 mb-3 text-xs font-semibold leading-4">{resource.description}</p>
      <Link
        href={resource.linkHref}
        className="text-[#3694fd] text-xs font-semibold leading-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        {resource.linkLabel}
        <span className="inline-block w-3 h-3 border-t-2 border-r-2 border-[#3694fd] rotate-45 mt-0.5" />
      </Link>
    </div>
  );
}

function MegaMenuColumns({ menu }: { menu: SubMenu }) {
  return (
    <div className="flex-1">
      {(menu.title || menu.titleHref) && (
        <div className="flex items-start gap-4 mb-4 hidden lg:flex">
          <div className="flex-1 pr-4">
            {menu.titleHref ? (
              <Link href={menu.titleHref} className="text-[#3694fd] text-[17px] font-medium leading-tight hover:underline">
                {menu.title}
              </Link>
            ) : (
              <span className="text-[17px] font-medium leading-tight">{menu.title}</span>
            )}
            {menu.titleDescription && (
              <p className="text-[#666] text-xs leading-4 mt-1">{menu.titleDescription}</p>
            )}
          </div>
          {menu.titleButtonLabel && menu.titleHref && (
            <div className="flex items-end min-w-[140px] mt-4">
              <Link
                href={menu.titleHref}
                className="bg-[#3694fd] text-[#22212b] text-sm font-light rounded-full px-4 h-[34px] inline-flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                {menu.titleButtonLabel}
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-wrap">
        {menu.columns.map((col, ci) => (
          <div
            key={ci}
            className={`w-full lg:w-auto lg:flex-1 relative ${col.separator ? "lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-px lg:before:bg-gray-100" : ""}`}
          >
            {col.colTitle && (
              <p className={`pt-2.5 pr-4 text-base font-semibold leading-6 ${col.stretch ? "w-full" : ""}`}>
                {col.colTitle}
              </p>
            )}
            <ul className="overflow-hidden">
              {col.items.map((item, ii) => (
                <li key={ii} className="cursor-pointer max-w-full py-3">
                  <Link href={item.href} className="block m-0 p-0 group">
                    <p className="text-[#3694fd] font-light text-base leading-6 group-hover:underline">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-[#666] text-xs leading-4">{item.description}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop Mega Menu Panel ───────────────────────────────────────────────────

function DesktopMegaPanel({ menu, visible }: { menu: SubMenu; visible: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 z-30 w-full max-w-[1170px] transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
      }`}
      style={{ minWidth: 700 }}
    >
      <div className="bg-white max-w-[1170px] mx-auto relative overflow-hidden shadow-lg rounded-b-2xl">
        <div className="flex gap-6 w-full px-10 py-5">
          <MegaMenuColumns menu={menu} />
          {menu.resource && (
            <div className="w-[240px] shrink-0">
              <ResourcePanel resource={menu.resource} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Desktop Promo Mega Panel ─────────────────────────────────────────────────

function DesktopPromoMegaPanel({
  promoItems,
  visible,
}: {
  promoItems: PromoItem[];
  visible: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex !== null && promoItems[activeIndex]?.type === "item"
      ? promoItems[activeIndex]
      : promoItems.find((p) => p.type === "item") ?? null;

  const activeSubMenu = activeItem?.subMenu ?? null;

  useEffect(() => {
    const firstItemIndex = promoItems.findIndex((p) => p.type === "item");
    if (firstItemIndex !== -1) setActiveIndex(firstItemIndex);
  }, [promoItems]);

  return (
    <div
      className={`absolute top-full left-0 z-30 w-full max-w-[1170px] transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
      }`}
      style={{ minWidth: 800 }}
    >
      <div className="bg-white max-w-[1170px] mx-auto relative overflow-hidden shadow-lg rounded-b-2xl flex">
        {/* Left promo sidebar */}
        <div className="bg-[#f2f0eb] w-[200px] shrink-0 py-4 px-2">
          <ul>
            {promoItems.map((item, i) => {
              if (item.type === "title") {
                return (
                  <li key={i} className="text-[#828587] px-6 mb-2.5 text-base font-medium leading-6">
                    {item.label}
                  </li>
                );
              }
              if (item.type === "divider") {
                return <li key={i} className="py-0"><hr className="border-gray-200 my-1" /></li>;
              }
              if (item.type === "link") {
                return (
                  <li key={i} className="px-3 py-3.5">
                    <Link href={item.href ?? "#"} className="text-[#3694fd] text-base font-medium leading-6 flex items-center gap-1 hover:underline">
                      {item.label}
                      <FiChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                );
              }
              // type === "item"
              const isActive = activeIndex === i;
              return (
                <li
                  key={i}
                  className={`cursor-pointer rounded-l-xl px-3 py-3.5 flex items-center gap-2 transition-colors ${
                    isActive ? "bg-white" : "hover:bg-white/60"
                  }`}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <span className="text-sm font-normal leading-5 text-[#22212b] flex-1">{item.label}</span>
                  <FiChevronRight className="w-3.5 h-3.5 text-[#22212b] shrink-0" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right content area */}
        <div className="flex-1 px-6 py-5 min-h-[320px]">
          {activeSubMenu && (
            <div className="flex gap-4 h-full">
              <div className="flex-1">
                {activeSubMenu.titleHref && (
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1 pr-4">
                      <Link href={activeSubMenu.titleHref} className="text-[#3694fd] text-[17px] font-medium hover:underline">
                        {activeSubMenu.title}
                      </Link>
                      {activeSubMenu.titleDescription && (
                        <p className="text-[#666] text-xs leading-4 mt-1">{activeSubMenu.titleDescription}</p>
                      )}
                    </div>
                    {activeSubMenu.titleButtonLabel && (
                      <div className="flex items-end min-w-[140px] mt-2">
                        <Link
                          href={activeSubMenu.titleHref}
                          className="bg-[#3694fd] text-[#22212b] text-sm font-light rounded-full px-4 h-[34px] inline-flex items-center justify-center hover:bg-blue-400 transition-colors"
                        >
                          {activeSubMenu.titleButtonLabel}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                {!activeSubMenu.titleHref && activeSubMenu.title && (
                  <p className="text-[17px] font-medium mb-4">{activeSubMenu.title}</p>
                )}
                <div className="flex flex-wrap gap-x-4">
                  {activeSubMenu.columns.map((col, ci) => (
                    <div key={ci} className="flex-1 min-w-[140px] relative">
                      {col.colTitle && (
                        <p className={`pt-2.5 text-base font-semibold leading-6 ${col.stretch ? "w-full" : ""}`}>
                          {col.colTitle}
                        </p>
                      )}
                      <ul>
                        {col.items.map((item, ii) => (
                          <li key={ii} className="py-3 cursor-pointer">
                            <Link href={item.href} className="block group">
                              <p className="text-[#3694fd] font-light text-base leading-6 group-hover:underline">
                                {item.title}
                              </p>
                              {item.description && (
                                <p className="text-[#666] text-xs leading-4">{item.description}</p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {activeSubMenu.resource && (
                <div className="w-[220px] shrink-0">
                  <ResourcePanel resource={activeSubMenu.resource} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

function MobileNavItem({ item, onClose }: { item: TopNavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const [activePromoIndex, setActivePromoIndex] = useState<number | null>(null);

  const renderMobileSubMenu = (subMenu: SubMenu) => (
    <div className="bg-white pl-4 pb-2">
      {subMenu.title && (
        <div className="py-3 border-b border-[#f2f0eb]">
          {subMenu.titleHref ? (
            <Link href={subMenu.titleHref} className="text-[#3694fd] font-semibold text-base" onClick={onClose}>
              {subMenu.title}
            </Link>
          ) : (
            <span className="font-semibold text-base">{subMenu.title}</span>
          )}
          {subMenu.titleDescription && (
            <p className="text-[#666] text-xs mt-1">{subMenu.titleDescription}</p>
          )}
        </div>
      )}
      {subMenu.columns.map((col, ci) => (
        <div key={ci}>
          {col.colTitle && (
            <p className="text-sm font-semibold pt-3 pb-1 text-[#22212b]">{col.colTitle}</p>
          )}
          {col.items.map((navItem, ii) => (
            <Link
              key={ii}
              href={navItem.href}
              className="block py-2.5 border-b border-[#f2f0eb] last:border-0"
              onClick={onClose}
            >
              <p className="text-[#3694fd] text-sm font-light">{navItem.title}</p>
              {navItem.description && (
                <p className="text-[#666] text-xs">{navItem.description}</p>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  if (item.type === "simple") {
    return (
      <li className="border-b-[3px] border-[#f2f0eb] bg-white block w-[80vw]">
        <Link
          href={item.href ?? "#"}
          className="flex items-center w-full h-full text-[#22212b] py-5 pl-[30px] text-base font-semibold leading-6 transition-all duration-200"
          onClick={onClose}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b-[3px] border-[#f2f0eb] bg-white block w-[80vw]">
      <button
        className="flex items-center justify-between w-full text-[#22212b] py-5 pl-[30px] pr-[22px] text-base font-semibold leading-6 transition-all duration-200"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <FiChevronRight
          className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        />
      </button>

      {/* Simple mega menu */}
      {item.type === "mega" && item.megaMenu && open && renderMobileSubMenu(item.megaMenu)}

      {/* Promo mega menu */}
      {item.type === "promo-mega" && item.promoItems && open && (
        <div className="bg-white pl-4 pb-2">
          {item.promoItems.map((promoItem, pi) => {
            if (promoItem.type === "title") {
              return (
                <p key={pi} className="text-[#828587] text-base font-medium py-2 pl-2">
                  {promoItem.label}
                </p>
              );
            }
            if (promoItem.type === "divider") {
              return <hr key={pi} className="border-gray-200 my-1" />;
            }
            if (promoItem.type === "link") {
              return (
                <Link
                  key={pi}
                  href={promoItem.href ?? "#"}
                  className="block py-3 text-[#3694fd] font-medium text-base"
                  onClick={onClose}
                >
                  {promoItem.label}
                </Link>
              );
            }
            // type === "item"
            const isActive = activePromoIndex === pi;
            return (
              <div key={pi}>
                <button
                  className="flex items-center justify-between w-full py-3.5 pr-2 text-[#22212b] text-sm font-normal border-b border-[#f2f0eb]"
                  onClick={() => setActivePromoIndex(isActive ? null : pi)}
                  aria-expanded={isActive}
                >
                  {promoItem.label}
                  <FiChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                  />
                </button>
                {isActive && promoItem.subMenu && renderMobileSubMenu(promoItem.subMenu)}
              </div>
            );
          })}
        </div>
      )}
    </li>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────

export default function Header() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveNav(null), 150);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveNav(null);
        setMobileOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="z-20 w-full px-2.5 absolute top-4"
      role="banner"
    >
      {/* Utility Bar */}
      <div className="bg-[#f2f0eb] w-full hidden lg:block">
        <div className="w-full max-w-[1440px] mx-auto px-2.5 py-[5px] relative">
          <ul className="flex items-center justify-between m-0 p-0 list-none">
            {utilityLinks.map((link) => (
              <li key={link.label} className="leading-none">
                <Link
                  href={link.href}
                  className="text-[#999] text-xs font-light leading-4 hover:text-[#22212b] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="relative hidden">
              {/* Utility language switcher – hidden on desktop per original */}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="bg-white rounded-[70px] flex justify-between items-center w-full max-w-[1440px] min-h-[44px] mx-auto pl-5 pr-2.5"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="mr-3 shrink-0">
          <Link href="/" title="Customer Experience (CX) AI Platform" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://resources.nice.com/wp-content/uploads/2025/05/nice-new-logo.svg"
              alt="NiCE - Customer Experience AI Platform"
              width={116}
              height={42}
              className="w-auto max-h-[25px]"
              loading="eager"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center h-full m-0 p-0 list-none flex-1" role="menubar">
          {navData.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <li
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleNavEnter(item.label)}
                onMouseLeave={handleNavLeave}
                role="none"
              >
                <Link
                  href={item.href ?? "#"}
                  className={`relative flex items-center h-full text-[#22212b] px-3 py-3 text-sm font-semibold leading-6 transition-all duration-200 hover:text-[#3694fd] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-[#3694fd] after:transition-all after:duration-200 ${
                    isActive ? "after:w-full text-[#3694fd]" : "after:w-0"
                  }`}
                  role="menuitem"
                  aria-haspopup={item.type !== "simple"}
                  aria-expanded={isActive}
                >
                  {item.label}
                </Link>

                {/* Mega Menu */}
                {item.type === "mega" && item.megaMenu && (
                  <DesktopMegaPanel menu={item.megaMenu} visible={isActive} />
                )}

                {/* Promo Mega Menu */}
                {item.type === "promo-mega" && item.promoItems && (
                  <DesktopPromoMegaPanel promoItems={item.promoItems} visible={isActive} />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Additions */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Toggle search"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f2f0eb] hover:bg-gray-200 transition-colors"
          >
            {searchOpen ? <FiX className="w-4 h-4" /> : <FiSearch className="w-4 h-4" />}
          </button>

          {/* Search input */}
          {searchOpen && (
            <div className="absolute top-14 left-1/3 z-30 bg-white shadow-lg rounded-lg p-1 w-[300px]">
              <form action="/en/search" className="relative">
                <input
                  autoFocus
                  type="text"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full border border-[#ccc] rounded-sm px-4 py-1.5 text-base text-[#22212b] bg-transparent focus:outline-none focus:border-[#3694fd]"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 w-9 h-full flex items-center justify-center"
                  aria-label="Submit search"
                >
                  <FiSearch className="w-4 h-4 text-[#545353]" />
                </button>
              </form>
            </div>
          )}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="text-sm leading-5 pr-1 hover:text-[#3694fd] transition-colors flex items-center gap-1"
              aria-label="Language switcher"
              aria-expanded={langOpen}
            >
              <span className="inline-block w-[17px] h-[17px] bg-[length:17px] bg-no-repeat bg-left"
                style={{ backgroundImage: "url(https://www.nice.com/img/420pxGlobeiconsvg.png)" }}
              />
              EN
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 z-25 bg-white shadow-[0_5px_10px_0_rgba(0,0,0,0.05)] w-[180px] py-2 rounded-sm">
                <ul className="m-0 p-0 list-none">
                  {languages.map((lang) => (
                    <li key={lang.href} className="px-3 py-1">
                      <Link
                        href={lang.href}
                        className="text-sm text-[#22212b] hover:text-[#3694fd] transition-colors block"
                        onClick={() => setLangOpen(false)}
                      >
                        {lang.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="bg-[#22212b] text-white text-sm font-light rounded-full h-[38px] pl-[18px] pr-[3px] inline-flex items-center gap-3 hover:bg-[#3a3948] transition-colors"
          >
            Get Started
            <span className="w-8 h-8 rounded-full border-2 border-[#3694fd] flex items-center justify-center shrink-0">
              <FiChevronRight className="w-4 h-4 text-[#3694fd]" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2.5 ml-auto"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <FiMenu className="w-5 h-5 text-[#22212b]" />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-20"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[21] flex flex-col max-w-[576px] w-[80vw] min-h-screen bg-white transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer Header */}
        <div className="bg-white flex items-center justify-between px-4 py-4 border-b border-[#f2f0eb]">
          <Link href="/" onClick={() => setMobileOpen(false)} className="pl-4 pt-1 pb-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://resources.nice.com/wp-content/uploads/2025/05/nice-new-logo.svg"
              alt="NiCE"
              width={116}
              height={42}
              className="w-auto max-h-[25px] block"
              loading="eager"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="pr-2 pl-4 text-[38px] font-light leading-[18px] text-[#22212b] hover:text-[#3694fd] transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-5 py-3 border-b border-[#f2f0eb]">
          <form action="/en/search" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Search"
              className="w-full border border-[#ccc] rounded-sm px-4 py-2 text-base text-[#22212b] bg-transparent focus:outline-none focus:border-[#3694fd]"
              aria-label="Search"
            />
            <button type="submit" className="absolute top-0 right-0 w-10 h-full flex items-center justify-center" aria-label="Submit search">
              <FiSearch className="w-4 h-4 text-[#545353]" />
            </button>
          </form>
        </div>

        {/* Mobile Nav Items */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <ul className="m-0 p-0 list-none flex flex-col">
            {navData.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </ul>
        </nav>

        {/* Mobile Language */}
        <div className="border-t border-[#f2f0eb]">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center justify-between w-full py-5 pl-[30px] pr-[22px] text-sm leading-5 font-normal text-[#22212b] relative"
            aria-expanded={langOpen}
          >
            Languages
            <FiChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${langOpen ? "rotate-90" : ""}`} />
          </button>
          {langOpen && (
            <div className="pb-5 pl-[45px] pr-[45px]">
              <ul className="m-0 p-0 list-none">
                {languages.map((lang, i) => (
                  <li key={lang.href} className={i !== 0 ? "mt-2" : ""}>
                    <Link
                      href={lang.href}
                      className="text-sm pl-4 leading-5 text-[#22212b] hover:text-[#3694fd] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile CTA + Links */}
        <div className="bg-[#f2f0eb] px-5 py-5 flex items-center justify-center order-2">
          <Link
            href="/contact-us"
            className="bg-[#22212b] text-white text-sm font-light rounded-full h-[38px] pl-[18px] pr-[3px] inline-flex items-center gap-3 hover:bg-[#3a3948] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
            <span className="w-8 h-8 rounded-full border-2 border-[#3694fd] flex items-center justify-center shrink-0">
              <FiChevronRight className="w-4 h-4 text-[#3694fd]" />
            </span>
          </Link>
        </div>

        {/* Mobile footer links */}
        <div className="bg-black text-white px-9 py-4 flex justify-between">
          <div className="w-1/2">
            <ul className="flex flex-col gap-2">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm leading-5 text-white hover:text-[#3694fd] transition-colors" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Icons */}
          <div className="flex items-end gap-3 pt-[93px]">
            <Link href="https://www.linkedin.com/company/nice-systems/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </Link>
            <Link href="https://twitter.com/NICELtd" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="https://www.facebook.com/OfficialNICELtd/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="https://www.youtube.com/channel/UC4tmsS3fAVLp1Ue0DF-EauA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}