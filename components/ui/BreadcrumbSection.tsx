"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  items: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function BreadcrumbSection({
  title,
  items,
  backgroundImage,
}: Props) {
  return (
    <section
      className="relative w-full text-white pt-[clamp(106px,10.83vw,206px)] pb-[clamp(31px,4.78vw,91px)]"
      style={{
        background: `
      linear-gradient(135deg, rgba(47,75,255,0.85), rgba(122,0,255,0.85)),
      url(https://www.socioly.in/assets/img/banner-bg-shape.svg)
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Breadcrumb */}
        <ul className="flex items-center gap-3 text-sm font-medium mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-200 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/80">{item.label}</span>
              )}

              {index !== items.length - 1 && (
                <span className="text-white/60">›</span>
              )}
            </li>
          ))}
        </ul>

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold tracking-wide">
          {title}
        </h2>
      </div>
    </section>
  );
}
