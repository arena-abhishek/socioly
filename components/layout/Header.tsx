"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const pathname = usePathname();

  const navItems = [
    {
      label: "SOLUTIONS & SERVICE OFFERINGS",
      href: "/solutions",
      dropdown: [
        {
          label: "CX & ANALYTICS",
          href: "/solutions/cx-analytics",
          subDropdown: [
            { label: "CX AS A SERVICE", href: "/solutions/cx-as-a-service" },
            {
              label: "CONVERSATIONAL AI",
              href: "/solutions/conversational-ai",
            },
            {
              label: "AUTOMATION AS A SERVICE",
              href: "/solutions/automation-as-a-service",
            },
            {
              label: "WORKFORCE MANAGEMENT",
              href: "/solutions/workforce-management",
            },
          ],
        },
        {
          label: "UNIFIED COMMUNICATIONS & INFRA",
          href: "/solutions/unified-communications",
        },
        { label: "EXATOIQ", href: "/solutions/exatoiq" },
        { label: "CLOUD ERP", href: "/solutions/cloud-erp" },
      ],
    },

    {
      label: "INDUSTRIES",
      href: "/industries",
      dropdown: [{ label: "INDUSTRIES", href: "/industries" }],
    },
    {
      label: "COMPANY",
      href: "/company",
      dropdown: [
        { label: "ABOUT US", href: "/about" },
        { label: "CONTACT US", href: "/contact" },
        { label: "CAREERS", href: "/careers" },
      ],
    },
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
              // src="https://exato.ai/Exato-Logo.png"
              src="/images/exato.png"
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

              if (item.dropdown) {
                return (
                  <div key={item.href} className="relative group">
                    {/* Parent Button */}
                    <Link
                      href={item.href}
                      className={`
              border rounded-full font-semibold text-sm
              transition-all duration-300
              px-[clamp(10px,0.79vw,15px)]
              py-[clamp(5px,0.42vw,8px)]
              flex items-center gap-2
              ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
              }
            `}
                    >
                      {item.label}

                      {/* Better Chevron */}
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Main Dropdown */}
                    <div
                      className="
              absolute left-0 top-full mt-3 w-60
              bg-white shadow-xl rounded-2xl p-3
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 ease-out
            "
                    >
                      {item.dropdown.map((sub) => {
                        if (sub.subDropdown) {
                          return (
                            <div key={sub.href} className="relative group/sub">
                              <div className="flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition cursor-pointer">
                                {sub.label}

                                {/* Side Arrow */}
                                <svg
                                  className="w-4 h-4 transition-transform duration-300 group-hover/sub:rotate-90"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>

                              {/* Sub Dropdown */}
                              <div
                                className="
                        absolute left-full top-0 ml-2 w-56
                        bg-white shadow-xl rounded-2xl p-3
                        opacity-0 invisible translate-x-2
                        group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0
                        transition-all duration-300 ease-out
                      "
                              >
                                {sub.subDropdown.map((nested) => (
                                  <Link
                                    key={nested.href}
                                    href={nested.href}
                                    className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
          border rounded-full font-semibold text-sm
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 h-11 text-white text-sm font-semibold hover:opacity-90 transition"
            >
              TALK TO CX EXPERT
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Image src="/images/exato.png" alt="Logo" width={100} height={35} />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map((item, index) => {
            const isOpenMenu = openMenu === index;

            if (item.dropdown) {
              return (
                <div
                  key={item.href}
                  className="bg-gray-50 rounded-xl overflow-hidden transition-all"
                >
                  {/* Parent */}
                  <button
                    onClick={() => setOpenMenu(isOpenMenu ? null : index)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
                  >
                    {item.label}

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpenMenu
                          ? "rotate-180 text-indigo-600"
                          : "text-gray-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpenMenu ? "max-h-[500px] pb-3" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 px-4">
                      {item.dropdown.map((sub, subIndex) => {
                        const isSubOpen =
                          openSubMenu === `${index}-${subIndex}`;

                        if (sub.subDropdown) {
                          return (
                            <div
                              key={sub.href}
                              className="bg-white rounded-lg shadow-sm"
                            >
                              <button
                                onClick={() =>
                                  setOpenSubMenu(
                                    isSubOpen ? null : `${index}-${subIndex}`,
                                  )
                                }
                                className="w-full flex items-center  px-3 py-2 text-xs font-medium text-gray-700"
                              >
                                {sub.label}

                                <svg
                                  className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                                    isSubOpen
                                      ? "rotate-180 text-indigo-600"
                                      : "text-gray-400"
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>

                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isSubOpen ? "max-h-96 pb-2" : "max-h-0"
                                }`}
                              >
                                <div className="flex flex-col gap-1 px-4">
                                  {sub.subDropdown.map((nested) => (
                                    <Link
                                      key={nested.href}
                                      href={nested.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenMenu(null);
                                        setOpenSubMenu(null);
                                      }}
                                      className="text-xs text-gray-600 hover:text-indigo-600 py-1 transition"
                                    >
                                      {nested.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenMenu(null);
                            }}
                            className="text-xs text-gray-700 hover:text-indigo-600 py-2 transition"
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            TALK TO CX EXPERT
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
