"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

// ── Types ─────────────────────────────────────────────────────────
interface SliderInnerProps {
  images: string[];
  index: number;
  aspect: string;
}

interface StatItem {
  number: string;
  label: string;
}

// ── Slider images — replace with your actual paths ────────────────
const sliderImages: string[] = [
  "/images/service-details.jpg",
  "/images/blog-b-1.jpg",
  "/images/blog-b-2.jpg",
  "/images/blog-b-3.jpg",
];

// ── Custom hook: auto-advances index every `interval` ms ──────────
function useAutoSlider(length: number, interval: number = 3000): number {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return index;
}

// ── SliderInner: sliding track inside each clipped strip ──────────
function SliderInner({ images, index, aspect }: SliderInnerProps) {
  return (
    <div
      className="flex transition-transform duration-700 ease-in-out h-full"
      style={{
        transform: `translateX(-${index * 100}%)`,
        width: `${images.length * 100}%`,
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 h-full"
          style={{ width: `${100 / images.length}%` }}
        >
          <img
            src={src}
            alt=""
            className={`w-full h-full object-cover ${aspect}`}
          />
        </div>
      ))}
    </div>
  );
}

// ── StatsBar ──────────────────────────────────────────────────────
function StatsBar() {
  const stats: StatItem[] = [
    { number: "20.5K", label: "Projects Done" },
    { number: "100.5K", label: "Happy Clients" },
    { number: "150.5K", label: "Team Members" },
  ];

  return (
    <div
      className="flex items-center flex-wrap gap-y-5 absolute right-0"
      style={{ bottom: "clamp(28px, 3.05vw, 58px)" }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="text-left border-r border-white/20"
          style={{
            paddingRight: "clamp(30px, 3.42vw, 65px)",
            marginRight: "clamp(30px, 3.42vw, 65px)",
          }}
        >
          <span
            className="font-bold block mb-1"
            style={{ fontSize: "clamp(20px, 1.26vw, 24px)", lineHeight: 0.7 }}
          >
            {s.number}
          </span>
          <span className="text-white/60 text-sm font-normal">{s.label}</span>
        </div>
      ))}

      {/* Play Reel */}
      <a
        href="https://youtu.be/WUB2pSkwN2M"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:opacity-80 transition-opacity duration-300"
        style={{ gap: "clamp(15px, 1.58vw, 30px)" }}
      >
        <span className="font-bold text-sm">Play Reel</span>
        <span
          className="flex items-center justify-center border border-white/20 rounded-full"
          style={{ width: "clamp(42px, 2.73vw, 52px)", aspectRatio: "1/1" }}
        >
          <FaPlay style={{ fontSize: "clamp(10px, 0.7vw, 13px)" }} />
        </span>
      </a>
    </div>
  );
}

// ── Main HeroSection component ────────────────────────────────────
export default function HeroSection() {
  // Each strip cycles at a slightly different speed for visual interest
  const idx1 = useAutoSlider(4, 3000);
  const idx2 = useAutoSlider(4, 3700);
  const idx3 = useAutoSlider(4, 4200);
  const idx4 = useAutoSlider(4, 2800);

  // Reordered sets per strip (mirrors the original HTML slide order)
  const set1 = [sliderImages[0], sliderImages[1], sliderImages[2], sliderImages[3]];
  const set2 = [sliderImages[3], sliderImages[0], sliderImages[1], sliderImages[2]];
  const set3 = [sliderImages[1], sliderImages[2], sliderImages[3], sliderImages[0]];
  const set4 = [sliderImages[2], sliderImages[3], sliderImages[0], sliderImages[1]];

  return (
    <section
      className="relative z-10 text-white text-center overflow-hidden"
      style={{
        background: "linear-gradient(105.18deg, #2B4DFF 0%, #731BB7 100%)",
        paddingTop: "clamp(120px, 10.51vw, 200px)",
        paddingBottom: "clamp(130px, 26.96vw, 513px)",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Sub-title pill */}
        <span
          className="inline-flex items-center gap-2 border border-white/20 rounded-full font-bold mb-3"
          style={{
            padding: "clamp(6px, 0.47vw, 9px) clamp(13px, 0.84vw, 16px)",
            fontSize: "clamp(12px, 0.84vw, 14px)",
          }}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M10 0L12.5 7.5H20L14 12L16.5 18L10 14L3.5 18L6 12L0 7.5H7.5L10 0Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
          Amazing Solutions For Business
        </span>

        {/* Headline */}
        <h1
          className="font-extrabold text-white mx-auto"
          style={{
            fontSize: "clamp(25px, 3.68vw, 70px)",
            maxWidth: "clamp(300px, 55.6vw, 1058px)",
            marginBottom: "clamp(8px, 0.84vw, 16px)",
            lineHeight: 1.15,
          }}
        >
          Trusted IT Support Designed to Safeguard Your Business
        </h1>

        {/* CTA Button */}
        <a
          href="/services"
          className="inline-flex items-center gap-2 bg-white font-bold rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
          style={{
            color: "#2B4DFF",
            padding: "0 clamp(15px, 1.05vw, 20px)",
            height: "clamp(36px, 2.42vw, 46px)",
            fontSize: "clamp(13px, 0.84vw, 15px)",
          }}
        >
          Our Services
          <FiArrowUpRight />
        </a>
      </div>

      {/* ── Decorative vectors ── */}
      <div
        className="absolute z-20 hidden lg:block pointer-events-none"
        style={{
          left: "clamp(350px, 37.62vw, 716px)",
          bottom: "clamp(68px, 5.68vw, 108px)",
          maxWidth: "clamp(88px, 9.35vw, 178px)",
        }}
      >
        <svg viewBox="0 0 178 178" fill="none" className="w-full opacity-30">
          <circle cx="89" cy="89" r="88" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="89" cy="89" r="60" stroke="white" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      <div
        className="absolute z-20 hidden lg:block pointer-events-none"
        style={{
          right: "clamp(25px, 2.63vw, 50px)",
          bottom: "clamp(15px, 12.09vw, 230px)",
          maxWidth: "clamp(295px, 31vw, 590px)",
        }}
      >
        <svg viewBox="0 0 590 400" fill="none" className="w-full opacity-20">
          <ellipse cx="295" cy="200" rx="294" ry="199" stroke="white" strokeWidth="1.5" />
          <ellipse cx="295" cy="200" rx="220" ry="140" stroke="white" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* ── Image sliders ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: "clamp(250px, 30vw, 580px)" }}
      >
        {/* Strip 1 — bottom-left, tall diagonal */}
        <div
          className="absolute left-0 bottom-0 overflow-hidden"
          style={{
            width: "clamp(160px, 34.68vw, 660px)",
            clipPath:
              "polygon(35.014% 0%, 98.457% 0%, 99.575% 3.239%, 30.829% 99.274%, -29.581% 99.903%, -30.73% 96.709%, 33.865% 0.674%)",
          }}
        >
          <SliderInner images={set1} index={idx1} aspect="aspect-[660/517]" />
        </div>

        {/* Strip 2 */}
        <div
          className="absolute bottom-0 overflow-hidden"
          style={{
            left: "clamp(137px, 12.45vw, 237px)",
            width: "clamp(160px, 36.57vw, 696px)",
            clipPath:
              "polygon(44.741% 0%, 98.445% 0%, 99.534% 4.75%, 58.979% 98.859%, 57.89% 99.856%, 1.545% 99.856%, 0.487% 95.039%, 43.682% 0.93%)",
          }}
        >
          <SliderInner images={set2} index={idx2} aspect="aspect-[696/348]" />
        </div>

        {/* Strip 3 — hidden on mobile (< md) */}
        <div
          className="absolute bottom-0 overflow-hidden hidden md:block"
          style={{
            right: "clamp(180px, 20.23vw, 385px)",
            width: "clamp(0px, 38.2vw, 727px)",
            clipPath:
              "polygon(0.375% 94.473%, 33.15% 1.335%, 34.206% 0.163%, 98.62% 0.163%, 99.671% 5.54%, 66.574% 98.677%, 65.523% 99.837%, 1.43% 99.837%, 0.375% 94.473%)",
          }}
        >
          <SliderInner images={set3} index={idx3} aspect="aspect-[727/306]" />
        </div>

        {/* Strip 4 — hidden on smallest screens (< sm) */}
        <div
          className="absolute bottom-0 overflow-hidden hidden sm:block"
          style={{
            right: 0,
            width: "clamp(193px, 31.16vw, 593px)",
            clipPath:
              "polygon(0.505% 96.478%, 68.973% 0.705%, 70.243% 0%, 127.92% 0%, 129.231% 3.358%, 65.936% 99.131%, 64.625% 99.897%, 1.774% 99.897%, 0.505% 96.478%)",
          }}
        >
          <SliderInner images={set4} index={idx4} aspect="aspect-[593/485]" />
        </div>
      </div>

      {/* ── Stats bar ── */}
      <StatsBar />
    </section>
  );
}