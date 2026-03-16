"use client";

// ── globals.css imported in app/layout.tsx — NOT here ────────────

import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import type { AboutContent } from "@/types/homepage";
import { createClient } from "@supabase/supabase-js";

// ── Props ─────────────────────────────────────────────────────────
interface AboutSectionProps {
  content: AboutContent | null;
}

export default function AboutSection({ content }: AboutSectionProps) {
  const sectionRef    = useRef<HTMLElement>(null);
  const navRef        = useRef<HTMLDivElement>(null);
  const tabsRef       = useRef<(HTMLDivElement | null)[]>([]);

  // ── Scroll logic — mirrors original JS exactly ─────────────────
  useEffect(() => {
    if (!content) return;

    const tabs    = tabsRef.current.filter(Boolean) as HTMLDivElement[];
    const navLinks = navRef.current?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement> | undefined;

    // ── 1. class-80 / class-20 + tab-sticky-nav margin ───────────
    //    (original checkCardPosition function)
    function checkCardPosition() {
      const vh = window.innerHeight;
      let totalWidth = 0;

      tabs.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top <= vh * 0.8) {
          card.classList.add("class-80");
        } else {
          card.classList.remove("class-80");
        }

        if (top <= vh * 0.2) {
          card.classList.add("class-20");
        } else {
          card.classList.remove("class-20");
        }

        const tabNav = card.querySelector<HTMLAnchorElement>(".tab-sticky-nav");
        if (tabNav) {
          tabNav.style.marginLeft = index === 0 ? "0px" : `${totalWidth}px`;
          totalWidth += tabNav.offsetWidth + 10;
        }
      });
    }

    // ── 2. Scroll-spy nav — highlights active nav pill ────────────
    //    (original scrollSpy behaviour with offset -420)
    function updateScrollSpyNav() {
      if (!navLinks) return;
      const offset = 420;
      let activeIndex = -1;

      tabs.forEach((tab, i) => {
        const rect = tab.getBoundingClientRect();
        if (rect.top <= offset) activeIndex = i;
      });

      navLinks.forEach((link, i) => {
        link.classList.toggle("active", i === activeIndex);
      });
    }

    // ── 3. Combined scroll handler ────────────────────────────────
    function onScroll() {
      checkCardPosition();
      updateScrollSpyNav();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount (elements already in viewport)
    checkCardPosition();
    updateScrollSpyNav();

    return () => window.removeEventListener("scroll", onScroll);
  }, [content]);

  // ── Smooth scroll on nav click ────────────────────────────────
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, tabId: string) {
    e.preventDefault();
    const target = document.getElementById(tabId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  if (!content) return null;

  const { tabs } = content;

  return (
    <>
      <style>{`
        /* ── About section base ──────────────────────────────── */
        .ul-about {
          position: relative;
          z-index: 1;
        }
        .ul-about::before {
          position: absolute;
          content: "";
          height: clamp(60px, 6.31vw, 120px);
          bottom: 0;
          width: 100%;
          left: 0;
          z-index: 24;
          background-color: var(--white);
        }

        /* ── Container ───────────────────────────────────────── */
        .ul-about-container {
          max-width: clamp(1200px, 71.47vw, 1360px);
          margin: auto;
        }
        @media screen and (max-width: 1199px) {
          .ul-about-container { margin: 0 15px; }
        }

        /* ── Vectors ─────────────────────────────────────────── */
        .ul-about-vectors > * { position: absolute; }
        @media screen and (max-width: 767px) {
          .ul-about-vectors > * { display: none; }
        }
        .ul-about-vectors .vector-1 {
          bottom: clamp(46px, 5.41vw, 103px);
          left: clamp(47px, 5.1vw, 97px);
          max-width: clamp(644px, 39.1vw, 744px);
        }
        .ul-about-vectors .vector-2 {
          right: 0;
          top: clamp(78px, 8.3vw, 158px);
          max-width: clamp(644px, 39.1vw, 744px);
        }

        /* ── Sticky nav (desktop floating pills) ─────────────── */
        .ul-about-content-nav {
          margin-left: 56%;
          display: flex;
          gap: 10px;
          margin-bottom: calc(0% - clamp(57px, 3.52vw, 67px));
          padding-top: clamp(8px, 0.79vw, 15px);
          position: sticky;
          top: 130px;
          z-index: 22;
        }
        @media screen and (max-width: 1199px) {
          .ul-about-content-nav {
            margin-bottom: calc(0% - clamp(50px, 3.52vw, 67px));
          }
        }
        @media screen and (max-width: 767px) {
          .ul-about-content-nav {
            margin: auto;
            padding: 15px 0;
            justify-content: center;
            flex-wrap: wrap;
            background-color: var(--white);
          }
        }
        .ul-about-content-nav a {
          height: clamp(45px, 2.73vw, 52px);
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 999px;
          padding: 0 clamp(15px, 1.05vw, 20px);
          display: flex;
          gap: clamp(6px, 0.53vw, 10px);
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--ul-black);
          transition: 0.3s ease;
          white-space: nowrap;
        }
        .ul-about-content-nav a i { font-size: 11px; }
        .ul-about-content-nav a.active,
        .ul-about-content-nav a:hover {
          background-color: var(--ul-primary);
          color: var(--white);
          border-color: var(--ul-primary);
        }

        /* ── Content wrapper ─────────────────────────────────── */
        .ul-about-content-wrapper {
          border-radius: clamp(20px, 2.1vw, 40px);
          position: relative;
        }
        @media screen and (max-width: 767px) {
          .ul-about-content-wrapper { background-color: var(--white); }
        }

        /* ── Individual tab card ─────────────────────────────── */
        .ul-about-content-tab {
          position: sticky;
          top: 130px;
          z-index: 1;
          padding: clamp(30px, 3.15vw, 60px) clamp(15px, 4.99vw, 95px);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ul-about-content-tab.class-80 {
          opacity: 1;
          transform: translateY(0);
        }
        /* tab card border shape via ::before / ::after */
        .ul-about-content-tab::before,
        .ul-about-content-tab::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          background-color: var(--ul-primary);
          clip-path: polygon(97.052% 100%, 2.948% 100%, 2.948% 100%, 2.47% 99.924%, 2.016% 99.705%, 1.593% 99.355%, 1.207% 98.885%, 0.863% 98.307%, 0.569% 97.633%, 0.329% 96.876%, 0.15% 96.047%, 0.039% 95.157%, 0% 94.22%, 0% 5.78%, 0% 5.78%, 0.039% 4.843%, 0.15% 3.953%, 0.329% 3.124%, 0.569% 2.367%, 0.863% 1.693%, 1.207% 1.115%, 1.593% 0.645%, 2.016% 0.295%, 2.47% 0.076%, 2.948% 0%, 51.953% 0%, 51.953% 0%, 52.431% 0.076%, 52.885% 0.295%, 53.307% 0.645%, 53.694% 1.115%, 54.037% 1.693%, 54.332% 2.367%, 54.571% 3.124%, 54.75% 3.953%, 54.862% 4.843%, 54.901% 5.78%, 54.901% 5.962%, 54.901% 5.962%, 54.939% 6.9%, 55.051% 7.789%, 55.23% 8.618%, 55.469% 9.376%, 55.764% 10.049%, 56.107% 10.627%, 56.494% 11.097%, 56.917% 11.448%, 57.37% 11.667%, 57.848% 11.742%, 97.052% 11.742%, 97.052% 11.742%, 97.53% 11.818%, 97.984% 12.037%, 98.407% 12.388%, 98.793% 12.858%, 99.137% 13.435%, 99.431% 14.109%, 99.671% 14.866%, 99.85% 15.696%, 99.961% 16.585%, 100% 17.523%, 100% 94.22%, 100% 94.22%, 99.961% 95.157%, 99.85% 96.047%, 99.671% 96.876%, 99.431% 97.633%, 99.137% 98.307%, 98.793% 98.885%, 98.407% 99.355%, 97.984% 99.705%, 97.53% 99.924%, 97.052% 100%);
        }
        @media screen and (max-width: 767px) {
          .ul-about-content-tab::before,
          .ul-about-content-tab::after { display: none; }
        }
        .ul-about-content-tab::after {
          inset: 3px;
          background-color: var(--white);
          clip-path: polygon(97.261% 100%, 2.739% 100%, 2.739% 100%, 2.294% 99.929%, 1.873% 99.725%, 1.48% 99.398%, 1.121% 98.959%, 0.802% 98.42%, 0.528% 97.792%, 0.306% 97.085%, 0.14% 96.311%, 0.036% 95.481%, 0% 94.606%, 0% 5.394%, 0% 5.394%, 0.036% 4.519%, 0.14% 3.689%, 0.306% 2.915%, 0.528% 2.208%, 0.802% 1.58%, 1.121% 1.041%, 1.48% 0.602%, 1.873% 0.275%, 2.294% 0.071%, 2.739% 0%, 51.973% 0%, 51.973% 0%, 52.354% 0.052%, 52.72% 0.204%, 53.068% 0.449%, 53.394% 0.782%, 53.693% 1.195%, 53.961% 1.683%, 54.195% 2.239%, 54.39% 2.857%, 54.543% 3.53%, 54.65% 4.251%, 54.663% 4.373%, 54.737% 5.831%, 54.757% 6.209%, 54.757% 6.209%, 54.77% 6.408%, 54.786% 6.606%, 54.806% 6.802%, 54.83% 6.996%, 54.857% 7.189%, 54.888% 7.379%, 54.922% 7.567%, 54.96% 7.753%, 55.002% 7.935%, 55.047% 8.115%, 55.231% 8.819%, 55.231% 8.819%, 55.385% 9.337%, 55.566% 9.813%, 55.77% 10.242%, 55.995% 10.624%, 56.24% 10.954%, 56.501% 11.23%, 56.776% 11.45%, 57.063% 11.611%, 57.361% 11.709%, 57.665% 11.742%, 97.261% 11.742%, 97.261% 11.742%, 97.705% 11.813%, 98.127% 12.017%, 98.52% 12.344%, 98.879% 12.783%, 99.198% 13.322%, 99.471% 13.951%, 99.694% 14.657%, 99.86% 15.431%, 99.964% 16.261%, 100% 17.136%, 100% 94.606%, 100% 94.606%, 99.964% 95.481%, 99.86% 96.311%, 99.694% 97.085%, 99.471% 97.792%, 99.198% 98.42%, 98.879% 98.959%, 98.52% 99.398%, 98.127% 99.725%, 97.705% 99.929%, 97.261% 100%);
        }
        @media screen and (max-width: 767px) {
          .ul-about-content-tab {
            background-color: var(--white);
            position: relative;
            top: 0;
          }
        }

        /* tab-sticky-nav (the inline pill that appears on each card) */
        .ul-about-content-tab .tab-sticky-nav {
          height: clamp(45px, 2.73vw, 52px);
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 999px;
          padding: 0 clamp(15px, 1.05vw, 20px);
          display: inline-flex;
          gap: clamp(6px, 0.53vw, 10px);
          align-items: center;
          justify-content: center;
          font-weight: 700;
          background-color: var(--white);
          color: var(--ul-black);
          position: absolute;
          top: 15px;
          left: 56.5%;
          transition: 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        @media screen and (max-width: 1199px) {
          .ul-about-content-tab .tab-sticky-nav { top: 0; }
        }
        @media screen and (max-width: 991px) {
          .ul-about-content-tab .tab-sticky-nav { display: none; }
        }
        .ul-about-content-tab .tab-sticky-nav i { font-size: 11px; }

        /* active / class-20 states — same as original */
        .ul-about-content-tab.class-80 .tab-sticky-nav {
          background-color: var(--ul-primary);
          border-color: var(--ul-primary);
          color: var(--white);
        }
        .ul-about-content-tab.class-20 .tab-sticky-nav {
          background-color: var(--white);
          border-color: var(--ul-primary);
          color: var(--ul-primary);
        }
        .ul-about-content-tab:last-child.class-20 .tab-sticky-nav {
          background-color: var(--ul-primary);
          border-color: var(--ul-primary);
          color: var(--white);
        }

        /* ── Tab inner grid ──────────────────────────────────── */
        .ul-about-tab-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(30px, 3.15vw, 60px);
          align-items: center;
        }
        @media screen and (max-width: 767px) {
          .ul-about-tab-row {
            grid-template-columns: 1fr;
          }
        }

        /* ── Tab image ───────────────────────────────────────── */
        .ul-about-content-tab-img img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 3;
        }

        /* ── Tab text block ──────────────────────────────────── */
        .ul-about-content-tab-txt {
          padding-top: 40px;
        }

        /* section sub-title pill */
        .ul-section-sub-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: clamp(12px, 0.84vw, 14px);
          color: var(--ul-primary);
          border: 1px solid rgba(43,77,255,0.25);
          border-radius: 999px;
          padding: clamp(4px, 0.32vw, 6px) clamp(10px, 0.79vw, 15px);
          margin-bottom: clamp(8px, 0.63vw, 12px);
        }

        /* section title */
        .ul-section-title {
          font-size: clamp(22px, 2.1vw, 40px);
          font-weight: 800;
          color: var(--ul-black);
          line-height: 1.2;
          margin-bottom: 0;
        }

        /* description */
        .ul-about-content-tab-descr {
          color: var(--ul-gray);
          margin-top: clamp(14px, 1.26vw, 24px);
          line-height: 1.75;
        }

        /* bullet list */
        .ul-about-content-tab-list {
          margin-top: clamp(16px, 1.26vw, 24px);
          margin-bottom: clamp(22px, 2.89vw, 54px);
        }
        .ul-about-content-tab-list li {
          display: flex;
          gap: 10px;
          align-items: center;
          color: var(--ul-c4);
          margin-bottom: clamp(5px, 0.42vw, 8px);
          line-height: 1.5;
        }
        .ul-about-content-tab-list li:last-child { margin-bottom: 0; }
        .ul-about-content-tab-list li::before {
          content: "";
          width: 5px;
          min-width: 5px;
          aspect-ratio: 1/1;
          display: inline-block;
          background-color: var(--ul-c4);
          border-radius: 50%;
        }

        /* ── CTA button (ul-btn--2 style) ────────────────────── */
        .ul-btn.ul-btn--2 {
          display: inline-flex;
          visibility: hidden;
        }
        .ul-btn.ul-btn--2 > * {
          visibility: visible;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 clamp(18px, 1.31vw, 25px);
          height: clamp(45px, 2.73vw, 52px);
          background: linear-gradient(90deg, #2B4DFF 0%, #C700B1 100%);
          border-radius: 100px;
          color: var(--white);
          font-weight: 700;
          position: relative;
          overflow: hidden;
          z-index: 1;
          text-decoration: none;
        }
        .ul-btn.ul-btn--2 > *::after {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 100px;
          position: absolute;
          z-index: -1;
          top: 0; left: 0;
          background: linear-gradient(90deg, #C700B1 0%, #2B4DFF 100%);
          transition: 0.4s ease;
          opacity: 0;
        }
        .ul-btn.ul-btn--2:hover > *::after { opacity: 1; }
        .ul-btn.ul-btn--2 i { font-size: 12px; }
      `}</style>

      <section
        ref={sectionRef}
        className="ul-about ul-section-spacing"
        aria-label="About Section"
      >
        <div className="ul-about-container">
          <div className="ul-about-content-wrapper">

            {/* ── Floating nav pills (desktop) ── */}
            <nav
              ref={navRef}
              className="ul-about-content-nav"
              aria-label="About tabs navigation"
            >
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => handleNavClick(e, tab.id)}
                  aria-label={tab.nav_label}
                >
                  {tab.nav_label}
                  <i><FiArrowUpRight /></i>
                </a>
              ))}
            </nav>

            {/* ── Tab cards ── */}
            <div className="ul-about-content-tabs">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  id={tab.id}
                  className="ul-about-content-tab tab"
                  ref={(el) => { tabsRef.current[index] = el; }}
                >
                  {/* Inline pill (appears on the card itself, positioned absolutely) */}
                  <a
                    href={`#${tab.id}`}
                    className="tab-sticky-nav"
                    onClick={(e) => handleNavClick(e, tab.id)}
                  >
                    {tab.nav_label}
                    <i><FiArrowUpRight /></i>
                  </a>

                  {/* Two-column grid: image | text */}
                  <div className="ul-about-tab-row">
                    {/* Image */}
                    <div className="ul-about-content-tab-img">
                      <img src={tab.image} alt={tab.title} loading="lazy" />
                    </div>

                    {/* Text */}
                    <div className="ul-about-content-tab-txt">
                      <span className="ul-section-sub-title">{tab.sub_title}</span>
                      <h2 className="ul-section-title">{tab.title}</h2>
                      <p className="ul-about-content-tab-descr">{tab.description}</p>

                      <ul className="ul-about-content-tab-list">
                        {tab.list_items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="ul-btn ul-btn--2">
                        <a href={tab.cta_href}>
                          <span>{tab.cta_text}</span>
                          <i><FiArrowUpRight /></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Background vectors (SVG placeholders) ── */}
        <div className="ul-about-vectors" aria-hidden>
          {/* vector-1: bottom-left background shape */}
          <svg
            className="vector-1"
            viewBox="0 0 744 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 400 L200 0 L744 0 L744 400 Z"
              fill="url(#about-v1-grad)"
              opacity="0.06"
            />
            <defs>
              <linearGradient id="about-v1-grad" x1="0" y1="0" x2="744" y2="400">
                <stop stopColor="#2B4DFF"/>
                <stop offset="1" stopColor="#731BB7" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* vector-2: right side decoration */}
          <svg
            className="vector-2"
            viewBox="0 0 744 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M744 0 L544 600 L0 600 L0 0 Z"
              fill="url(#about-v2-grad)"
              opacity="0.05"
            />
            <defs>
              <linearGradient id="about-v2-grad" x1="744" y1="0" x2="0" y2="600">
                <stop stopColor="#731BB7"/>
                <stop offset="1" stopColor="#2B4DFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}
