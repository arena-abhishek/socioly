"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { FiSearch, FiChevronRight, FiMenu } from "react-icons/fi";

import type { TopNavItem, SubMenu, PromoItem } from "@/types/header";
import { navData, utilityLinks, languages } from "@/lib/headerData";

// ─── Shared type for panel positioning ────────────────────────────────────────

interface UlRect {
  left: number;
  width: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// ResourcePanel
// ─────────────────────────────────────────────────────────────────────────────

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
        <span className="inline-block w-2.5 h-2.5 border-t-2 border-r-2 border-[#3694fd] rotate-45 mt-0.5 shrink-0" />
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MegaMenuColumns
// ─────────────────────────────────────────────────────────────────────────────

function MegaMenuColumns({ menu }: { menu: SubMenu }) {
  return (
    <div className="flex-1">
      {(menu.title || menu.titleHref) && (
        <div className="hidden lg:flex items-start gap-4 mb-4">
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
            className={`w-full lg:w-auto lg:flex-1 relative ${
              col.separator
                ? "lg:pl-6 lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-px lg:before:bg-gray-100"
                : ""
            }`}
          >
            {col.colTitle && (
              <p className={`pt-2.5 pr-4 text-base font-semibold leading-6 ${col.stretch ? "w-full" : ""}`}>
                {col.colTitle}
              </p>
            )}
            <ul className="overflow-hidden m-0 p-0 list-none">
              {col.items.map((item, ii) => (
                <li key={ii} className="cursor-pointer max-w-full py-3">
                  <Link href={item.href} className="block m-0 p-0 group">
                    <p className="text-[#3694fd] font-light text-base leading-6 group-hover:underline">{item.title}</p>
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

// ─────────────────────────────────────────────────────────────────────────────
// DesktopMegaPanel
// position: absolute top-full — anchors to <nav>.
// left + width from ulRect → spans exactly the nav items <ul> area.
// ─────────────────────────────────────────────────────────────────────────────

function DesktopMegaPanel({
  menu,
  visible,
  ulRect,
}: {
  menu: SubMenu;
  visible: boolean;
  ulRect: UlRect;
}) {
  return (
    <div
      className={`absolute top-full z-30 transition-all duration-200 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
      }`}
      style={{ left: ulRect.left, width: ulRect.width }}
      aria-hidden={!visible}
    >
      <div className="bg-white shadow-xl rounded-b-2xl overflow-hidden">
        <div className="flex gap-6 px-10 py-6">
          <MegaMenuColumns menu={menu} />
          {menu.resource && (
            <div className="w-[240px] shrink-0 border-l border-gray-100 pl-6">
              <ResourcePanel resource={menu.resource} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DesktopPromoMegaPanel
// Products-style: left sidebar + right content. Same ulRect positioning.
// ─────────────────────────────────────────────────────────────────────────────

function DesktopPromoMegaPanel({
  promoItems,
  visible,
  ulRect,
}: {
  promoItems: PromoItem[];
  visible: boolean;
  ulRect: UlRect;
}) {
  const firstItemIndex = promoItems.findIndex((p) => p.type === "item");
  const [activeIndex, setActiveIndex] = useState<number>(firstItemIndex !== -1 ? firstItemIndex : 0);

  const activeItem = promoItems[activeIndex];
  const activeSubMenu = activeItem?.type === "item" ? (activeItem.subMenu ?? null) : null;

  return (
    <div
      className={`absolute top-full z-30 transition-all duration-200 ${
        visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
      }`}
      style={{ left: ulRect.left, width: ulRect.width }}
      aria-hidden={!visible}
    >
      <div className="bg-white shadow-xl rounded-b-2xl overflow-hidden">
        <div className="flex min-h-[300px]">

          {/* Left promo sidebar */}
          <div className="bg-[#f2f0eb] w-[210px] shrink-0 py-4 px-2">
            <ul className="m-0 p-0 list-none">
              {promoItems.map((item, i) => {
                if (item.type === "title") {
                  return (
                    <li key={i} className="text-[#828587] px-6 mb-2.5 text-sm font-medium leading-6 select-none">
                      {item.label}
                    </li>
                  );
                }
                if (item.type === "divider") {
                  return <li key={i}><hr className="border-gray-300 my-2 mx-3" /></li>;
                }
                if (item.type === "link") {
                  return (
                    <li key={i} className="px-3 py-3">
                      <Link href={item.href ?? "#"} className="text-[#3694fd] text-sm font-medium leading-6 flex items-center gap-1 hover:underline">
                        {item.label}
                        <FiChevronRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </li>
                  );
                }
                const isActive = activeIndex === i;
                return (
                  <li
                    key={i}
                    className={`cursor-pointer rounded-l-xl px-3 py-3 flex items-center gap-2 transition-colors ${isActive ? "bg-white" : "hover:bg-white/60"}`}
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
          <div className="flex-1 px-6 py-6">
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
                        <div className="flex items-start min-w-[140px]">
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
                        <ul className="m-0 p-0 list-none">
                          {col.items.map((navItem, ii) => (
                            <li key={ii} className="py-3 cursor-pointer">
                              <Link href={navItem.href} className="block group">
                                <p className="text-[#3694fd] font-light text-base leading-6 group-hover:underline">{navItem.title}</p>
                                {navItem.description && (
                                  <p className="text-[#666] text-xs leading-4">{navItem.description}</p>
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
                  <div className="w-[220px] shrink-0 border-l border-gray-100 pl-6">
                    <ResourcePanel resource={activeSubMenu.resource} />
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MobileNavItem
// ─────────────────────────────────────────────────────────────────────────────

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
            <Link key={ii} href={navItem.href} className="block py-2.5 border-b border-[#f2f0eb] last:border-0" onClick={onClose}>
              <p className="text-[#3694fd] text-sm font-light">{navItem.title}</p>
              {navItem.description && <p className="text-[#666] text-xs">{navItem.description}</p>}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  if (item.type === "simple") {
    return (
      <li className="border-b-[3px] border-[#f2f0eb] bg-white block w-full">
        <Link href={item.href ?? "#"} className="flex items-center w-full text-[#22212b] py-5 pl-[30px] text-base font-semibold leading-6" onClick={onClose}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b-[3px] border-[#f2f0eb] bg-white block w-full">
      <button
        className="flex items-center justify-between w-full text-[#22212b] py-5 pl-[30px] pr-[22px] text-base font-semibold leading-6"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <FiChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
      </button>

      {item.type === "mega" && item.megaMenu && open && renderMobileSubMenu(item.megaMenu)}

      {item.type === "promo-mega" && item.promoItems && open && (
        <div className="bg-white pl-4 pb-2">
          {item.promoItems.map((promoItem, pi) => {
            if (promoItem.type === "title") return <p key={pi} className="text-[#828587] text-sm font-medium py-2 pl-2">{promoItem.label}</p>;
            if (promoItem.type === "divider") return <hr key={pi} className="border-gray-200 my-1" />;
            if (promoItem.type === "link") return (
              <Link key={pi} href={promoItem.href ?? "#"} className="block py-3 text-[#3694fd] font-medium text-sm" onClick={onClose}>
                {promoItem.label}
              </Link>
            );
            const isActive = activePromoIndex === pi;
            return (
              <div key={pi}>
                <button
                  className="flex items-center justify-between w-full py-3.5 pr-2 text-[#22212b] text-sm font-normal border-b border-[#f2f0eb]"
                  onClick={() => setActivePromoIndex(isActive ? null : pi)}
                  aria-expanded={isActive}
                >
                  {promoItem.label}
                  <FiChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "rotate-90" : ""}`} />
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

// ─────────────────────────────────────────────────────────────────────────────
// Header — main export
// ─────────────────────────────────────────────────────────────────────────────

export default function Header() {
  const [activeNav, setActiveNav]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen]     = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navRef    = useRef<HTMLElement>(null);
  const ulRef     = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ulRect: measures the nav <ul> position relative to <nav>.
  // Dropdown panels use left + width so they span exactly
  // from the first nav item to the last nav item — nothing more.
  const [ulRect, setUlRect] = useState<UlRect | null>(null);

  useEffect(() => {
    function measure() {
      if (!ulRef.current || !navRef.current) return;
      const ulBox  = ulRef.current.getBoundingClientRect();
      const navBox = navRef.current.getBoundingClientRect();
      setUlRect({ left: ulBox.left - navBox.left, width: ulBox.width });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleNavEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveNav(null), 120);
  }, []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveNav(null);
        setMobileOpen(false);
        setLangOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="z-20 w-full px-2.5 absolute top-4" role="banner">

      {/* Utility Bar — desktop only */}
      <div className="bg-[#f2f0eb] w-full hidden lg:block">
        <div className="w-full max-w-[1440px] mx-auto px-2.5 py-[5px]">
          <ul className="flex items-center justify-between m-0 p-0 list-none">
            {utilityLinks.map((link) => (
              <li key={link.label} className="leading-none">
                <Link href={link.href} className="text-[#999] text-xs font-light leading-4 hover:text-[#22212b] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*
        Main Nav Bar
        ─ position:relative is the containing block for all dropdown panels.
        ─ Bottom radius flattens when a dropdown is open for seamless join.
      */}
      <nav
        ref={navRef}
        className="relative bg-white rounded-[70px] flex items-center w-full max-w-[1440px] min-h-[44px] mx-auto pl-5 pr-2.5"
        aria-label="Main navigation"
        onMouseLeave={handleNavLeave}
      >
        {/* Logo */}
        <div className="mr-4 shrink-0">
          <Link href="/" title="Customer Experience (CX) AI Platform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/exato.png"
              alt="Exato customer experience ai platform "
              width={120}
              height={42}
              className="w-auto max-h-[25px]"
              loading="eager"
            />
          </Link>
        </div>

        {/*
          Nav items <ul>
          ─ ref={ulRef} so we can measure its bounding box for panel positioning.
          ─ justify-center centres items between logo and right actions.
          ─ NO position:relative here — panels must NOT be relative to <ul>/<li>.
        */}
        <ul
          ref={ulRef}
          className="hidden lg:flex items-center justify-center flex-1 h-full m-0 p-0 list-none"
          role="menubar"
        >
          {navData.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <li
                key={item.label}
                className="h-full flex items-center"
                onMouseEnter={() => handleNavEnter(item.label)}
                role="none"
              >
                <Link
                  href={item.href ?? "#"}
                  className={`relative flex items-center h-full text-[#22212b] px-3 py-3 text-sm font-semibold leading-6 transition-all duration-200 hover:text-[#3694fd]
                    after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:h-[3px] after:bg-[#3694fd] after:transition-all after:duration-200
                    ${isActive ? "after:w-full text-[#3694fd]" : "after:w-0"}`}
                  role="menuitem"
                  aria-haspopup={item.type !== "simple" ? "true" : undefined}
                  aria-expanded={item.type !== "simple" ? isActive : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/*
          Dropdown panels — direct <nav> children, no wrapper div.
          ─ absolute top-full  → attaches to bottom of <nav> pill.
          ─ style left + width → from ulRect, so panel width = nav items area only.
          ─ Rendered only after ulRect is measured to avoid flash.
        */}
        {ulRect && navData.map((item) => {
          const isActive = activeNav === item.label;
          if (item.type === "mega" && item.megaMenu) {
            return <DesktopMegaPanel key={item.label} menu={item.megaMenu} visible={isActive} ulRect={ulRect} />;
          }
          if (item.type === "promo-mega" && item.promoItems) {
            return <DesktopPromoMegaPanel key={item.label} promoItems={item.promoItems} visible={isActive} ulRect={ulRect} />;
          }
          return null;
        })}

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 ml-2">

          {/* Search */}
          <div className="relative">
            <button
              onClick={() => { setSearchOpen((v) => !v); setLangOpen(false); }}
              aria-label="Toggle search"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f2f0eb] hover:bg-gray-200 transition-colors"
            >
              {searchOpen ? <span className="text-lg font-light leading-none">×</span> : <FiSearch className="w-4 h-4" />}
            </button>
            {searchOpen && (
              <div className="absolute top-[calc(100%+8px)] right-0 z-40 bg-white shadow-lg rounded-xl p-2 w-[280px]">
                <form action="/en/search" className="relative">
                  <input autoFocus type="text" name="q" placeholder="Search"
                    className="w-full border border-[#ccc] rounded-md px-4 py-2 text-sm text-[#22212b] bg-transparent focus:outline-none focus:border-[#3694fd]"
                    aria-label="Search"
                  />
                  <button type="submit" className="absolute top-0 right-0 w-9 h-full flex items-center justify-center" aria-label="Submit search">
                    <FiSearch className="w-4 h-4 text-[#545353]" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => { setLangOpen((v) => !v); setSearchOpen(false); }}
              className="text-sm leading-5 inline-flex items-center gap-1 hover:text-[#3694fd] transition-colors px-1"
              aria-label="Language switcher"
              aria-expanded={langOpen}
            >
              <span
                className="inline-block w-[17px] h-[17px] bg-no-repeat bg-left bg-contain shrink-0"
                style={{ backgroundImage: "url(https://www.nice.com/img/420pxGlobeiconsvg.png)" }}
                aria-hidden="true"
              />
              EN
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 z-40 bg-white shadow-lg rounded-xl w-[160px] py-2 mt-1">
                <ul className="m-0 p-0 list-none">
                  {languages.map((lang) => (
                    <li key={lang.href} className="px-3 py-1">
                      <Link href={lang.href} className="block text-sm text-[#22212b] hover:text-[#3694fd] transition-colors py-0.5" onClick={() => setLangOpen(false)}>
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2.5 ml-auto"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <FiMenu className="w-5 h-5 text-[#22212b]" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-20" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[21] flex flex-col max-w-[576px] w-[80vw] min-h-screen bg-white transition-transform duration-500 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-modal="true"
        aria-hidden={!mobileOpen}
        role="dialog"
      >
        {/* Drawer header */}
        <div className="bg-white flex items-center justify-between px-4 py-4 border-b border-[#f2f0eb] shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)} className="pl-4 pt-1 pb-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://resources.nice.com/wp-content/uploads/2025/05/nice-new-logo.svg" alt="NiCE" width={116} height={42} className="w-auto max-h-[25px] block" loading="eager" />
          </Link>
          <button onClick={() => setMobileOpen(false)} className="pr-2 pl-4 text-[38px] font-light leading-[18px] text-[#22212b] hover:text-[#3694fd] transition-colors" aria-label="Close menu">×</button>
        </div>

        {/* Mobile search */}
        <div className="px-5 py-3 border-b border-[#f2f0eb] shrink-0">
          <form action="/en/search" className="relative">
            <input type="text" name="q" placeholder="Search"
              className="w-full border border-[#ccc] rounded-md px-4 py-2 text-sm text-[#22212b] bg-transparent focus:outline-none focus:border-[#3694fd]"
              aria-label="Search"
            />
            <button type="submit" className="absolute top-0 right-0 w-10 h-full flex items-center justify-center" aria-label="Submit search">
              <FiSearch className="w-4 h-4 text-[#545353]" />
            </button>
          </form>
        </div>

        {/* Mobile nav */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <ul className="m-0 p-0 list-none">
            {navData.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </ul>
        </nav>

        {/* Language */}
        <div className="border-t border-[#f2f0eb] shrink-0">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center justify-between w-full py-5 pl-[30px] pr-[22px] text-sm leading-5 text-[#22212b]"
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
                    <Link href={lang.href} className="block text-sm pl-4 leading-5 text-[#22212b] hover:text-[#3694fd] transition-colors" onClick={() => setMobileOpen(false)}>
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-[#f2f0eb] px-5 py-5 flex items-center justify-center shrink-0">
          <Link href="/contact-us" className="bg-[#22212b] text-white text-sm font-light rounded-full h-[38px] pl-[18px] pr-[3px] inline-flex items-center gap-3 hover:bg-[#3a3948] transition-colors" onClick={() => setMobileOpen(false)}>
            Get Started
            <span className="w-8 h-8 rounded-full border-2 border-[#3694fd] flex items-center justify-center shrink-0">
              <FiChevronRight className="w-4 h-4 text-[#3694fd]" />
            </span>
          </Link>
        </div>

        {/* Footer */}
        <div className="bg-black text-white px-9 py-4 flex justify-between shrink-0">
          <div className="w-1/2">
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white hover:text-[#3694fd] transition-colors" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end gap-2.5 pt-[86px]">
            {[
              { href: "https://www.linkedin.com/company/nice-systems/", label: "LinkedIn", d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
              { href: "https://twitter.com/NICELtd", label: "X", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { href: "https://www.facebook.com/OfficialNICELtd/", label: "Facebook", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { href: "https://www.youtube.com/channel/UC4tmsS3fAVLp1Ue0DF-EauA", label: "YouTube", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            ].map(({ href, label, d }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" aria-hidden="true"><path d={d} /></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}