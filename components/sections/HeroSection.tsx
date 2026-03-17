"use client";

// ── globals.css imported in app/layout.tsx — NOT here ────────────

import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import type { HeroContent } from "@/types/homepage";

import VideoModal from "@/components/ui/VideoModal";

// ── Extract YouTube video ID ──────────────────────────────────────
function extractYouTubeId(url: string): string {
  const patterns = [
    /youtu\.be\/([^?&\s]+)/,
    /[?&]v=([^?&\s]+)/,
    /\/embed\/([^?&\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return m[1];
  }
  return url.split("/").pop()?.split("?")[0] ?? "";
}

// ── Counter animation hook ────────────────────────────────────────
function useCounterAnimation(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function parseStatNumber(raw: string): { value: number; suffix: string } {
  const m = raw.match(/^([\d.]+)(.*)$/);
  if (!m) return { value: 0, suffix: raw };
  return { value: parseFloat(m[1]), suffix: m[2] ?? "" };
}

function AnimatedStat({ number, label, animate }: { number: string; label: string; animate: boolean }) {
  const { value, suffix } = parseStatNumber(number);
  const isDecimal = number.includes(".");
  const intTarget = isDecimal ? Math.floor(value * 10) : Math.floor(value);
  const raw = useCounterAnimation(intTarget, 2000, animate);
  const displayNum = isDecimal ? (raw / 10).toFixed(1) : raw.toString();
  return (
    <div className="ul-banner-stat">
      <span className="ul-banner-stat-number">{animate ? `${displayNum}${suffix}` : number}</span>
      <span className="ul-banner-stat-text">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// SYNCED SWIPER STRIPS
//
// Strategy: 4 Swiper instances — strip1 is MASTER (has autoplay).
// Strips 2, 3, 4 are SLAVES — controlled via Controller module.
// Sab ek saath slide karte hain, same direction, same speed.
//
// Image distribution (offset pattern):
//   Strip 1 → images[0], images[1], images[2] ... (offset 0)
//   Strip 2 → images[1], images[2], images[3] ... (offset 1)
//   Strip 3 → images[2], images[3], images[4] ... (offset 2)
//   Strip 4 → images[3], images[4], images[5] ... (offset 3)
//
// Each strip gets ALL images rotated by its offset —
// so when master advances by 1, each strip shows next image
// and the "consecutive" pattern is preserved across strips.
// ─────────────────────────────────────────────────────────────────

function rotateArray<T>(arr: T[], offset: number): T[] {
  if (!arr.length) return arr;
  const n = offset % arr.length;
  return [...arr.slice(n), ...arr.slice(0, n)];
}

// ── Single Swiper strip ───────────────────────────────────────────
interface StripProps {
  images: string[];        // rotated image list for this strip
  id: string;
  isMaster?: boolean;      // only master has autoplay
  onSwiper?: (s: SwiperType) => void;
  controlledSwiper?: SwiperType | SwiperType[]; // slaves receive this
}

function BannerStrip({ images, id, isMaster = false, onSwiper, controlledSwiper }: StripProps) {
  return (
    <Swiper
      id={id}
      modules={[Autoplay, Controller]}
      slidesPerView={1}
      loop
      speed={700}
      // Only master drives autoplay; slaves just follow via controller
      autoplay={isMaster ? { delay: 3000, disableOnInteraction: false } : false}
      controller={{ control: controlledSwiper }}
      allowTouchMove={false}
      className="ul-banner-slider"
      onSwiper={onSwiper}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// ── Props ─────────────────────────────────────────────────────────
interface HeroSectionProps {
  content: HeroContent | null;
}

// ── Main component ────────────────────────────────────────────────
export default function HeroSection({ content }: HeroSectionProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Swiper instance refs for controller sync
  const [swiper1, setSwiper1] = useState<SwiperType | null>(null);
  const [swiper2, setSwiper2] = useState<SwiperType | null>(null);
  const [swiper3, setSwiper3] = useState<SwiperType | null>(null);
  const [swiper4, setSwiper4] = useState<SwiperType | null>(null);

  // IntersectionObserver for stats counter
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  if (!content) return null;

  const { sub_title, title, cta_text, cta_href, video_url, images, stats } = content;
  const youtubeId = extractYouTubeId(video_url);

  // Build per-strip image arrays with offset
  const set1 = rotateArray(images, 0);
  const set2 = rotateArray(images, 1);
  const set3 = rotateArray(images, 2);
  const set4 = rotateArray(images, 3);

  // Master (strip1) controls all slaves
  const slaves = [swiper2, swiper3, swiper4].filter(Boolean) as SwiperType[];

  return (
    <>
      <style>{`
        /* ── Banner base ─────────────────────────────────────── */
        .ul-banner {
          background: var(--ul-gradient);
          color: var(--white);
          padding: 0 15px;
          padding-top: clamp(120px, 10.51vw, 200px);
          text-align: center;
          position: relative;
          z-index: 1;
          padding-bottom: clamp(0px, 26.96vw, 513px);
        }
        @media screen and (max-width: 479px) {
          .ul-banner { padding-bottom: clamp(130px, 26.96vw, 513px); }
        }
        .ul-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 25% 55%, rgba(255,255,255,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 78% 22%, rgba(255,255,255,0.045) 0%, transparent 45%);
          z-index: -1;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* ── Sub-title ───────────────────────────────────────── */
        .ul-banner-sub-title {
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: clamp(6px,0.47vw,9px) clamp(13px,0.84vw,16px);
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          margin-bottom: clamp(7px,0.63vw,12px);
        }
        .ul-banner-sub-title::before {
          content: "";
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 18' fill='none'%3E%3Cpath d='M10 0L12.5 7.5H20L14 12L16.5 18L10 14L3.5 18L6 12L0 7.5H7.5L10 0Z' fill='white' fill-opacity='0.8'/%3E%3C/svg%3E") no-repeat center/cover;
          display: inline-block;
          width: clamp(15px,1.05vw,20px);
          height: clamp(13px,0.95vw,18px);
          margin-right: clamp(5px,0.53vw,10px);
          flex-shrink: 0;
        }

        /* ── Headline ────────────────────────────────────────── */
        .ul-banner-title {
          font-size: clamp(25px,3.68vw,70px);
          color: var(--white);
          font-weight: 800;
          max-width: clamp(300px,55.6vw,1058px);
          margin: auto;
          margin-bottom: clamp(8px,0.84vw,16px);
          line-height: 1.15;
        }
        @media screen and (max-width: 767px) {
          .ul-banner-title { max-width: 100%; }
        }

        /* ── CTA button ──────────────────────────────────────── */
        .ul-banner-btn {
          background-color: var(--white);
          color: var(--ul-primary);
          border-radius: 999px;
          padding: 0 clamp(15px,1.05vw,20px);
          height: clamp(36px,2.42vw,46px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          gap: clamp(5px,0.53vw,10px);
        }
        .ul-banner-btn:hover { background-color: var(--ul-primary); color: var(--white); }
        .ul-banner-btn i { font-size: clamp(9px,0.63vw,12px); }

        /* ── Vectors ─────────────────────────────────────────── */
        .ul-banner-vectors img,
        .ul-banner-vectors svg {
          position: absolute; z-index: 3; pointer-events: none;
        }
        .ul-banner-vectors .vector-1 {
          left: clamp(350px,37.62vw,716px);
          bottom: clamp(68px,5.68vw,108px);
          max-width: clamp(88px,9.35vw,178px);
          width: clamp(88px,9.35vw,178px);
        }
        @media screen and (max-width: 991px) { .ul-banner-vectors .vector-1 { display: none; } }
        .ul-banner-vectors .vector-2 {
          right: clamp(25px,2.63vw,50px);
          bottom: clamp(15px,12.09vw,230px);
          max-width: clamp(295px,31vw,590px);
          width: clamp(295px,31vw,590px);
        }
        @media screen and (max-width: 991px) { .ul-banner-vectors .vector-2 { display: none; } }

        /* ── Slider wrapper ──────────────────────────────────── */
        .ul-banner-slider-wrapper { pointer-events: none; z-index: 2; }
        .ul-banner-slider-wrapper .ul-banner-slider {
          position: absolute;
          overflow: hidden;
        }
        /* Swiper slide images */
        .ul-banner-slider .swiper-slide { overflow: hidden; }
        .ul-banner-slider .swiper-slide img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }

        /* Strip 1 */
        .ul-banner-slider-wrapper #ul-banner-slider-1 {
          left: 0; bottom: 0;
          width: clamp(160px,34.68vw,660px);
          clip-path: polygon(35.014% 0%,98.457% 0%,98.457% 0%,98.832% 0.057%,99.164% 0.218%,99.447% 0.465%,99.676% 0.783%,99.843% 1.154%,99.945% 1.563%,99.975% 1.992%,99.927% 2.426%,99.795% 2.847%,99.575% 3.239%,30.829% 99.274%,30.829% 99.274%,30.74% 99.389%,30.644% 99.493%,30.542% 99.587%,30.434% 99.669%,30.322% 99.739%,30.206% 99.797%,30.086% 99.843%,29.963% 99.876%,29.838% 99.896%,29.711% 99.903%,-29.581% 99.903%,-29.581% 99.903%,-29.95% 99.848%,-30.279% 99.691%,-30.56% 99.45%,-30.788% 99.14%,-30.958% 98.776%,-31.063% 98.375%,-31.099% 97.952%,-31.059% 97.523%,-30.938% 97.103%,-30.73% 96.709%,33.865% 0.674%,33.865% 0.674%,33.955% 0.551%,34.052% 0.44%,34.156% 0.34%,34.266% 0.252%,34.382% 0.177%,34.502% 0.114%,34.626% 0.065%,34.753% 0.029%,34.882% 0.007%,35.014% 0%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-1 .swiper-slide img { aspect-ratio: 660/517; }

        /* Strip 2 */
        .ul-banner-slider-wrapper #ul-banner-slider-2 {
          left: clamp(137px,12.45vw,237px); bottom: 0;
          width: clamp(160px,36.57vw,696px);
          clip-path: polygon(44.741% 0%,98.445% 0%,98.445% 0%,98.796% 0.083%,99.108% 0.315%,99.374% 0.674%,99.591% 1.135%,99.752% 1.676%,99.851% 2.273%,99.885% 2.902%,99.847% 3.54%,99.732% 4.164%,99.534% 4.75%,58.979% 98.859%,58.979% 98.859%,58.893% 99.041%,58.801% 99.206%,58.702% 99.354%,58.598% 99.484%,58.489% 99.595%,58.375% 99.688%,58.258% 99.761%,58.138% 99.813%,58.015% 99.845%,57.89% 99.856%,1.545% 99.856%,1.545% 99.856%,1.189% 99.771%,0.874% 99.532%,0.605% 99.164%,0.389% 98.691%,0.23% 98.139%,0.134% 97.531%,0.106% 96.893%,0.152% 96.248%,0.277% 95.622%,0.487% 95.039%,43.682% 0.93%,43.682% 0.93%,43.767% 0.76%,43.858% 0.606%,43.955% 0.468%,44.056% 0.347%,44.163% 0.243%,44.273% 0.157%,44.386% 0.089%,44.502% 0.04%,44.621% 0.01%,44.741% 0%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-2 .swiper-slide img { aspect-ratio: 696/348; }
        @media screen and (max-width: 991px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { left: clamp(107px,12.45vw,237px); }
        }
        @media screen and (max-width: 767px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px,52.57vw,696px); }
        }
        @media screen and (max-width: 575px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px,42.57vw,696px); }
        }
        @media screen and (max-width: 479px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px,62.57vw,696px); }
        }

        /* Strip 3 */
        .ul-banner-slider-wrapper #ul-banner-slider-3 {
          right: clamp(180px,20.23vw,385px);
          width: clamp(0px,38.2vw,727px);
          clip-path: polygon(0.375% 94.473%,33.15% 1.335%,33.15% 1.335%,33.232% 1.122%,33.321% 0.928%,33.416% 0.755%,33.517% 0.602%,33.623% 0.471%,33.733% 0.362%,33.847% 0.276%,33.964% 0.214%,34.084% 0.176%,34.206% 0.163%,98.62% 0.163%,98.62% 0.163%,98.955% 0.257%,99.252% 0.519%,99.506% 0.923%,99.713% 1.444%,99.868% 2.055%,99.965% 2.729%,99.999% 3.441%,99.964% 4.165%,99.857% 4.873%,99.671% 5.54%,66.574% 98.677%,66.574% 98.677%,66.492% 98.888%,66.404% 99.08%,66.309% 99.252%,66.208% 99.403%,66.103% 99.533%,65.993% 99.64%,65.88% 99.725%,65.763% 99.787%,65.644% 99.824%,65.523% 99.837%,1.43% 99.837%,1.43% 99.837%,1.096% 99.744%,0.8% 99.483%,0.546% 99.08%,0.339% 98.561%,0.184% 97.952%,0.086% 97.28%,0.052% 96.569%,0.085% 95.847%,0.191% 95.14%,0.375% 94.473%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-3 .swiper-slide img { aspect-ratio: 727/306; }
        @media screen and (max-width: 767px) {
          .ul-banner-slider-wrapper #ul-banner-slider-3 { display: none; }
        }

        /* Strip 4 */
        .ul-banner-slider-wrapper #ul-banner-slider-4 {
          right: 0;
          width: clamp(263px,31.16vw,593px);
          clip-path: polygon(0.505% 96.478%,68.973% 0.705%,68.973% 0.705%,69.074% 0.576%,69.182% 0.46%,69.297% 0.355%,69.418% 0.263%,69.546% 0.184%,69.678% 0.119%,69.815% 0.068%,69.955% 0.03%,70.098% 0.008%,70.243% 0%,127.92% 0%,127.92% 0%,128.325% 0.058%,128.686% 0.22%,128.997% 0.47%,129.25% 0.794%,129.441% 1.173%,129.563% 1.593%,129.609% 2.038%,129.573% 2.491%,129.449% 2.936%,129.231% 3.358%,65.936% 99.131%,65.936% 99.131%,65.835% 99.27%,65.726% 99.397%,65.608% 99.51%,65.483% 99.61%,65.351% 99.696%,65.214% 99.767%,65.072% 99.823%,64.926% 99.864%,64.776% 99.889%,64.625% 99.897%,1.774% 99.897%,1.774% 99.897%,1.361% 99.837%,0.995% 99.669%,0.681% 99.41%,0.427% 99.078%,0.239% 98.688%,0.123% 98.258%,0.085% 97.805%,0.132% 97.346%,0.27% 96.898%,0.505% 96.478%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-4 .swiper-slide img { aspect-ratio: 593/485; }
        @media screen and (max-width: 575px) {
          .ul-banner-slider-wrapper #ul-banner-slider-4 { width: clamp(193px,21.16vw,593px); }
        }
        @media screen and (max-width: 479px) {
          .ul-banner-slider-wrapper #ul-banner-slider-4 { display: none; }
        }

        /* Strips 3 & 4 bottom */
        .ul-banner-slider-wrapper #ul-banner-slider-3,
        .ul-banner-slider-wrapper #ul-banner-slider-4 {
          bottom: clamp(78px,8.3vw,158px);
        }
        @media screen and (max-width: 991px) {
          .ul-banner-slider-wrapper #ul-banner-slider-3,
          .ul-banner-slider-wrapper #ul-banner-slider-4 { bottom: 0; }
        }

        /* ── Stats bar ───────────────────────────────────────── */
        /*
          Breakpoint strategy:
          > 1400px      : absolute position (original behaviour)
          1025px-1400px : absolute, font + padding compressed to prevent overlap
          <= 1024px     : ORIGINAL — position static, justify center, padding 30px 15px
        */
        .ul-banner-stats {
          display: flex;
          position: absolute;
          bottom: clamp(28px, 3.05vw, 58px);
          right: 0;
          z-index: 3;
        }

        /* 1025px-1400px: stay absolute but compress to prevent overlap */
        @media screen and (max-width: 1400px) and (min-width: 1025px) {
          .ul-banner-stats {
            bottom: clamp(12px, 1.5vw, 28px);
            right: 0;
            gap: 0;
          }
          .ul-banner-stat {
            padding-right: clamp(12px, 1.4vw, 24px) !important;
            margin-right: clamp(12px, 1.4vw, 24px) !important;
          }
          .ul-banner-stat-number {
            font-size: clamp(15px, 1.1vw, 19px) !important;
          }
          .ul-banner-stat-text {
            font-size: 12px !important;
          }
          .ul-banner-stat-btn {
            gap: clamp(8px, 1vw, 16px) !important;
          }
          .ul-banner-stat-btn i {
            width: clamp(32px, 2vw, 40px) !important;
            font-size: 10px !important;
          }
        }

        /* <= 1024px: original behaviour — static flow, same as original 1199px breakpoint */
        @media screen and (max-width: 1024px) {
          .ul-banner-stats { position: static; justify-content: center; padding: 30px 15px; }
        }

        /* Original mobile breakpoints — completely untouched from original code */
        @media screen and (max-width: 767px) {
          .ul-banner-stats { flex-wrap: wrap; gap: 20px 0; }
        }

        .ul-banner-stat {
          text-align: left;
          padding-right: clamp(30px,3.42vw,65px);
          margin-right: clamp(30px,3.42vw,65px);
          border-right: 1px solid rgba(255,255,255,0.2);
        }
        @media screen and (max-width: 479px) {
          .ul-banner-stat { padding-right: 10px; margin-right: 10px; flex-grow: 1; }
        }
        .ul-banner-stat:last-child { border-right: none; padding-right: 0; }
        .ul-banner-stat-number {
          font-weight: 700;
          font-size: clamp(20px,1.26vw,24px);
          line-height: 0.7;
          margin-bottom: 5px;
          display: block;
        }
        .ul-banner-stat-text { color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 400; }

        /* Play Reel button */
        .ul-banner-stat-btn {
          display: flex;
          align-items: center;
          gap: clamp(15px,1.58vw,30px);
          visibility: hidden;
          color: var(--white);
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }
        .ul-banner-stat-btn > * { visibility: visible; }
        .ul-banner-stat-btn:hover { color: var(--black); }
        .ul-banner-stat-btn i {
          width: clamp(42px,2.73vw,52px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(10px,0.7vw,13px);
          transition: 0.4s ease;
        }
        .ul-banner-stat-btn:hover i {
          background-color: var(--white);
          color: var(--ul-primary);
          border-color: var(--white);
        }
      `}</style>

      <section className="ul-banner">

        {/* Text block */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <span className="ul-banner-sub-title">{sub_title}</span>
          <h1 className="ul-banner-title">{title}</h1>
          <a href={cta_href} className="ul-banner-btn">
            {cta_text}
            <i><FiArrowUpRight /></i>
          </a>
        </div>

        {/* Vectors */}
        <div className="ul-banner-vectors">
          <svg className="vector-1" width="178" height="126" viewBox="0 0 178 126" fill="none" aria-hidden>
            <path d="M107.574 0H178L73.9087 126H0L107.574 0Z" fill="#2B4DFF"/>
          </svg>
          <svg className="vector-2" width="590" height="512" viewBox="0 0 590 512" fill="none" aria-hidden>
            <path
              d="M171.317 510H12.2429C3.78269 510 -0.854941 500.148 4.53586 493.628L408 5.62805C409.9 3.33028 412.726 2 415.707 2H578.144C586.623 2 591.255 11.8904 585.825 18.4033L178.998 506.403C177.098 508.682 174.285 510 171.317 510Z"
              stroke="url(#hero-grad)" strokeWidth="3"
            />
            <defs>
              <linearGradient id="hero-grad" x1="295.25" y1="2" x2="295.25" y2="510" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/*
          SYNCED SWIPER STRIPS
          ─────────────────────
          Strip 1 = MASTER: has autoplay (3s), controls strips 2/3/4 via Controller.
          Strips 2/3/4 = SLAVES: no autoplay, just receive slide commands from master.
          All 4 fire at same time → right-to-left slide animation in sync.

          Image offset per strip:
            Strip 1 → offset 0 (img1, img2, img3 ...)
            Strip 2 → offset 1 (img2, img3, img4 ...)
            Strip 3 → offset 2 (img3, img4, img5 ...)
            Strip 4 → offset 3 (img4, img5, img6 ...)
        */}
        <div className="ul-banner-slider-wrapper">

          {/* MASTER — drives all slaves */}
          <BannerStrip
            id="ul-banner-slider-1"
            images={set1}
            isMaster
            onSwiper={setSwiper1}
            controlledSwiper={slaves.length ? slaves : undefined}
          />

          {/* SLAVE 2 */}
          <BannerStrip
            id="ul-banner-slider-2"
            images={set2}
            onSwiper={setSwiper2}
          />

          {/* SLAVE 3 */}
          <BannerStrip
            id="ul-banner-slider-3"
            images={set3}
            onSwiper={setSwiper3}
          />

          {/* SLAVE 4 */}
          <BannerStrip
            id="ul-banner-slider-4"
            images={set4}
            onSwiper={setSwiper4}
          />

        </div>

        {/* Stats bar */}
        <div className="ul-banner-stats" ref={statsRef}>
          {stats.map((s, i) => (
            <AnimatedStat key={i} number={s.number} label={s.label} animate={statsVisible} />
          ))}
          <div className="ul-banner-stat">
            <button
              className="ul-banner-stat-btn"
              onClick={() => setVideoOpen(true)}
              aria-label="Play Reel"
            >
              <span className="btn-txt">Play Reel</span>
              <i><FaPlay /></i>
            </button>
          </div>
        </div>

      </section>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        youtubeId={youtubeId}
      />
    </>
  );
}