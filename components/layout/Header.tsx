"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 -z-10" /> */}

      <div className="max-w-7xl mx-auto px-2">
        {/* Floating Rounded Container */}
        <div
          className={`flex items-center justify-between bg-white shadow-lg rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled ? "h-14 mt-3 px-6" : "h-20 mt-6 px-10"}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://exato.ai/Exato-Logo.png"
              // src="/assets/img/2.png"
              alt="Exato.ai Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                // <Link
                //   key={item.href}
                //   href={item.href}
                //   className="relative text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                // >
                //   {item.label}

                //   <span
                //     className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 transform origin-left transition-transform duration-300
                //     ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                //     `}
                //   />
                // </Link>
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
          border
          rounded-full
          font-semibold
          text-sm
          transition-all duration-300
          px-[clamp(10px,0.79vw,15px)]
          py-[clamp(5px,0.42vw,8px)]
          ${
            isActive
              ? "bg-indigo-600 text-white border-indigo-600"
              : "border-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
          }
        `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className=" inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 h-11 text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl p-6
        transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button onClick={() => setIsOpen(false)} className="mb-8 text-gray-600">
          ✕
        </button>

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 h-11 text-white text-sm font-semibold"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-indigo-600">
          SOCIOLY
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-indigo-600 px-6 text-sm font-bold text-white hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button className="md:hidden p-2 text-slate-600" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </Container>
    </header>
  );
}
 */
