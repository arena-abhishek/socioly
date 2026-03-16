"use client";

// ── globals.css imported in app/layout.tsx — NOT here ────────────

import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { HeroContent } from "@/types/homepage";

// ── Reuse tumhare existing components ────────────────────────────
import Stat        from "@/components/ui/Stat";
import { PlayButton } from "@/components/ui/PlayButton";
import VideoModal  from "@/components/ui/VideoModal";

// ── Extract YouTube video ID from any YouTube URL ─────────────────
// Handles: youtu.be/ID, youtube.com/watch?v=ID, /embed/ID
function extractYouTubeId(url: string): string {
  const patterns = [
    /youtu\.be\/([^?&\s]+)/,
    /[?&]v=([^?&\s]+)/,
    /\/embed\/([^?&\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  // fallback — last segment
  return url.split("/").pop()?.split("?")[0] ?? "";
}

// ── Counter animation hook ────────────────────────────────────────
// Jab stat visible ho tab 0 se target tak count karta hai
function useCounterAnimation(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart — fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Stat item with counter + suffix ──────────────────────────────
// number string mein numeric part aur suffix alag karta hai
// e.g. "20.5K" → number=20.5, suffix="K"
//      "100.5K" → number=100.5, suffix="K"
function parseStatNumber(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  return { value: parseFloat(match[1]), suffix: match[2] ?? "" };
}

function AnimatedStat({
  number,
  label,
  animate,
}: {
  number: string;
  label: string;
  animate: boolean;
}) {
  const { value, suffix } = parseStatNumber(number);
  // Agar decimal hai (e.g. 20.5) to integer animate karo aur suffix mein decimal add karo
  const isDecimal  = number.includes(".");
  const intTarget  = isDecimal ? Math.floor(value * 10) : Math.floor(value);
  const raw        = useCounterAnimation(intTarget, 2000, animate);
  const displayNum = isDecimal
    ? (raw / 10).toFixed(1)  // "20.5"
    : raw.toString();         // "100"

  return (
    <div className="ul-banner-stat">
      <span className="ul-banner-stat-number">
        {animate ? `${displayNum}${suffix}` : number}
      </span>
      <span className="ul-banner-stat-text">{label}</span>
    </div>
  );
}

// ── Exact clip-paths from original CSS ───────────────────────────
const CLIP = {
  s1: "polygon(35.014% 0%, 98.457% 0%, 98.457% 0%, 98.832% 0.057%, 99.164% 0.218%, 99.447% 0.465%, 99.676% 0.783%, 99.843% 1.154%, 99.945% 1.563%, 99.975% 1.992%, 99.927% 2.426%, 99.795% 2.847%, 99.575% 3.239%, 30.829% 99.274%, 30.829% 99.274%, 30.74% 99.389%, 30.644% 99.493%, 30.542% 99.587%, 30.434% 99.669%, 30.322% 99.739%, 30.206% 99.797%, 30.086% 99.843%, 29.963% 99.876%, 29.838% 99.896%, 29.711% 99.903%, -29.581% 99.903%, -29.581% 99.903%, -29.95% 99.848%, -30.279% 99.691%, -30.56% 99.45%, -30.788% 99.14%, -30.958% 98.776%, -31.063% 98.375%, -31.099% 97.952%, -31.059% 97.523%, -30.938% 97.103%, -30.73% 96.709%, 33.865% 0.674%, 33.865% 0.674%, 33.955% 0.551%, 34.052% 0.44%, 34.156% 0.34%, 34.266% 0.252%, 34.382% 0.177%, 34.502% 0.114%, 34.626% 0.065%, 34.753% 0.029%, 34.882% 0.007%, 35.014% 0%)",
  s2: "polygon(44.741% 0%, 98.445% 0%, 98.445% 0%, 98.796% 0.083%, 99.108% 0.315%, 99.374% 0.674%, 99.591% 1.135%, 99.752% 1.676%, 99.851% 2.273%, 99.885% 2.902%, 99.847% 3.54%, 99.732% 4.164%, 99.534% 4.75%, 58.979% 98.859%, 58.979% 98.859%, 58.893% 99.041%, 58.801% 99.206%, 58.702% 99.354%, 58.598% 99.484%, 58.489% 99.595%, 58.375% 99.688%, 58.258% 99.761%, 58.138% 99.813%, 58.015% 99.845%, 57.89% 99.856%, 1.545% 99.856%, 1.545% 99.856%, 1.189% 99.771%, 0.874% 99.532%, 0.605% 99.164%, 0.389% 98.691%, 0.23% 98.139%, 0.134% 97.531%, 0.106% 96.893%, 0.152% 96.248%, 0.277% 95.622%, 0.487% 95.039%, 43.682% 0.93%, 43.682% 0.93%, 43.767% 0.76%, 43.858% 0.606%, 43.955% 0.468%, 44.056% 0.347%, 44.163% 0.243%, 44.273% 0.157%, 44.386% 0.089%, 44.502% 0.04%, 44.621% 0.01%, 44.741% 0%)",
  s3: "polygon(0.375% 94.473%, 33.15% 1.335%, 33.15% 1.335%, 33.232% 1.122%, 33.321% 0.928%, 33.416% 0.755%, 33.517% 0.602%, 33.623% 0.471%, 33.733% 0.362%, 33.847% 0.276%, 33.964% 0.214%, 34.084% 0.176%, 34.206% 0.163%, 98.62% 0.163%, 98.62% 0.163%, 98.955% 0.257%, 99.252% 0.519%, 99.506% 0.923%, 99.713% 1.444%, 99.868% 2.055%, 99.965% 2.729%, 99.999% 3.441%, 99.964% 4.165%, 99.857% 4.873%, 99.671% 5.54%, 66.574% 98.677%, 66.574% 98.677%, 66.492% 98.888%, 66.404% 99.08%, 66.309% 99.252%, 66.208% 99.403%, 66.103% 99.533%, 65.993% 99.64%, 65.88% 99.725%, 65.763% 99.787%, 65.644% 99.824%, 65.523% 99.837%, 1.43% 99.837%, 1.43% 99.837%, 1.096% 99.744%, 0.8% 99.483%, 0.546% 99.08%, 0.339% 98.561%, 0.184% 97.952%, 0.086% 97.28%, 0.052% 96.569%, 0.085% 95.847%, 0.191% 95.14%, 0.375% 94.473%)",
  s4: "polygon(0.505% 96.478%, 68.973% 0.705%, 68.973% 0.705%, 69.074% 0.576%, 69.182% 0.46%, 69.297% 0.355%, 69.418% 0.263%, 69.546% 0.184%, 69.678% 0.119%, 69.815% 0.068%, 69.955% 0.03%, 70.098% 0.008%, 70.243% 0%, 127.92% 0%, 127.92% 0%, 128.325% 0.058%, 128.686% 0.22%, 128.997% 0.47%, 129.25% 0.794%, 129.441% 1.173%, 129.563% 1.593%, 129.609% 2.038%, 129.573% 2.491%, 129.449% 2.936%, 129.231% 3.358%, 65.936% 99.131%, 65.936% 99.131%, 65.835% 99.27%, 65.726% 99.397%, 65.608% 99.51%, 65.483% 99.61%, 65.351% 99.696%, 65.214% 99.767%, 65.072% 99.823%, 64.926% 99.864%, 64.776% 99.889%, 64.625% 99.897%, 1.774% 99.897%, 1.774% 99.897%, 1.361% 99.837%, 0.995% 99.669%, 0.681% 99.41%, 0.427% 99.078%, 0.239% 98.688%, 0.123% 98.258%, 0.085% 97.805%, 0.132% 97.346%, 0.27% 96.898%, 0.505% 96.478%)",
};

// ─────────────────────────────────────────────────────────────────
// buildStripSets — 4-6 images ko 4 strips mein distribute karta hai
//
// Logic:
//   4 images → [0,1,2,3] → each strip gets all 4, different start
//   5 images → [0,1,2,3,4] → strips get 4 each, rotating offset
//   6 images → [0,1,2,3,4,5] → strips get all 6, rotating offset
//
// Har strip ek alag offset se start karti hai taaki
// same time pe alag images dikhein (original HTML ka behaviour)
// ─────────────────────────────────────────────────────────────────
function buildStripSets(images: string[]): [string[], string[], string[], string[]] {
  const len = images.length; // 4, 5, or 6

  // rotate(arr, n) — array ko n positions se rotate karo
  const rotate = (arr: string[], n: number) => [
    ...arr.slice(n % arr.length),
    ...arr.slice(0, n % arr.length),
  ];

  // 4 images: original behaviour exactly
  if (len === 4) {
    return [
      rotate(images, 0), // [0,1,2,3]
      rotate(images, 3), // [3,0,1,2]
      rotate(images, 1), // [1,2,3,0]
      rotate(images, 2), // [2,3,0,1]
    ];
  }

  // 5 or 6 images: sabhi use hoti hain, alag offsets
  return [
    rotate(images, 0),
    rotate(images, Math.floor(len * 0.25)),
    rotate(images, Math.floor(len * 0.5)),
    rotate(images, Math.floor(len * 0.75)),
  ];
}

// ── Single Swiper strip ───────────────────────────────────────────
function BannerStrip({
  images,
  delay,
  id,
}: {
  images: string[];
  delay: number;
  id: string;
}) {
  return (
    <Swiper
      id={id}
      modules={[Autoplay]}
      slidesPerView={1}
      loop
      speed={700}
      autoplay={{ delay, disableOnInteraction: false }}
      allowTouchMove={false}
      className="ul-banner-slider"
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
  const [videoOpen, setVideoOpen]   = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver — jab stats bar viewport mein aaye tab counter start
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
  const [set1, set2, set3, set4] = buildStripSets(images);

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
          background: radial-gradient(ellipse at 25% 55%, rgba(255,255,255,0.07) 0%, transparent 55%),
                      radial-gradient(ellipse at 78% 22%, rgba(255,255,255,0.045) 0%, transparent 45%);
          z-index: -1;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* ── Sub-title ───────────────────────────────────────── */
        .ul-banner-sub-title {
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          padding: clamp(6px, 0.47vw, 9px) clamp(13px, 0.84vw, 16px);
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          margin-bottom: clamp(7px, 0.63vw, 12px);
        }
        .ul-banner-sub-title::before {
          content: "";
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 18' fill='none'%3E%3Cpath d='M10 0L12.5 7.5H20L14 12L16.5 18L10 14L3.5 18L6 12L0 7.5H7.5L10 0Z' fill='white' fill-opacity='0.8'/%3E%3C/svg%3E") no-repeat center center / cover;
          display: inline-block;
          width: clamp(15px, 1.05vw, 20px);
          height: clamp(13px, 0.95vw, 18px);
          margin-right: clamp(5px, 0.53vw, 10px);
          flex-shrink: 0;
        }

        /* ── Headline ────────────────────────────────────────── */
        .ul-banner-title {
          font-size: clamp(25px, 3.68vw, 70px);
          color: var(--white);
          font-weight: 800;
          max-width: clamp(300px, 55.6vw, 1058px);
          margin: auto;
          margin-bottom: clamp(8px, 0.84vw, 16px);
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
          padding: 0 clamp(15px, 1.05vw, 20px);
          height: clamp(36px, 2.42vw, 46px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          gap: clamp(5px, 0.53vw, 10px);
        }
        .ul-banner-btn:hover {
          background-color: var(--ul-primary);
          color: var(--white);
        }
        .ul-banner-btn i { font-size: clamp(9px, 0.63vw, 12px); }

        /* ── Vectors ─────────────────────────────────────────── */
        .ul-banner-vectors img,
        .ul-banner-vectors svg {
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }
        .ul-banner-vectors .vector-1 {
          left: clamp(350px, 37.62vw, 716px);
          bottom: clamp(68px, 5.68vw, 108px);
          max-width: clamp(88px, 9.35vw, 178px);
          width: clamp(88px, 9.35vw, 178px);
        }
        @media screen and (max-width: 991px) {
          .ul-banner-vectors .vector-1 { display: none; }
        }
        .ul-banner-vectors .vector-2 {
          right: clamp(25px, 2.63vw, 50px);
          bottom: clamp(15px, 12.09vw, 230px);
          max-width: clamp(295px, 31vw, 590px);
          width: clamp(295px, 31vw, 590px);
        }
        @media screen and (max-width: 991px) {
          .ul-banner-vectors .vector-2 { display: none; }
        }

        /* ── Slider wrapper ──────────────────────────────────── */
        .ul-banner-slider-wrapper { pointer-events: none; z-index: 2; }
        .ul-banner-slider-wrapper .ul-banner-slider {
          position: absolute;
          overflow: hidden;
        }
        .ul-banner-slider-wrapper .ul-banner-slider img {
          width: 100%;
          object-fit: cover;
          display: block;
        }

        /* Strip 1 */
        .ul-banner-slider-wrapper #ul-banner-slider-1 {
          left: 0; bottom: 0;
          width: clamp(160px, 34.68vw, 660px);
          clip-path: polygon(35.014% 0%, 98.457% 0%, 98.457% 0%, 98.832% 0.057%, 99.164% 0.218%, 99.447% 0.465%, 99.676% 0.783%, 99.843% 1.154%, 99.945% 1.563%, 99.975% 1.992%, 99.927% 2.426%, 99.795% 2.847%, 99.575% 3.239%, 30.829% 99.274%, 30.829% 99.274%, 30.74% 99.389%, 30.644% 99.493%, 30.542% 99.587%, 30.434% 99.669%, 30.322% 99.739%, 30.206% 99.797%, 30.086% 99.843%, 29.963% 99.876%, 29.838% 99.896%, 29.711% 99.903%, -29.581% 99.903%, -29.581% 99.903%, -29.95% 99.848%, -30.279% 99.691%, -30.56% 99.45%, -30.788% 99.14%, -30.958% 98.776%, -31.063% 98.375%, -31.099% 97.952%, -31.059% 97.523%, -30.938% 97.103%, -30.73% 96.709%, 33.865% 0.674%, 33.865% 0.674%, 33.955% 0.551%, 34.052% 0.44%, 34.156% 0.34%, 34.266% 0.252%, 34.382% 0.177%, 34.502% 0.114%, 34.626% 0.065%, 34.753% 0.029%, 34.882% 0.007%, 35.014% 0%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-1 img { aspect-ratio: 660 / 517; }

        /* Strip 2 */
        .ul-banner-slider-wrapper #ul-banner-slider-2 {
          left: clamp(137px, 12.45vw, 237px); bottom: 0;
          width: clamp(160px, 36.57vw, 696px);
          clip-path: polygon(44.741% 0%, 98.445% 0%, 98.445% 0%, 98.796% 0.083%, 99.108% 0.315%, 99.374% 0.674%, 99.591% 1.135%, 99.752% 1.676%, 99.851% 2.273%, 99.885% 2.902%, 99.847% 3.54%, 99.732% 4.164%, 99.534% 4.75%, 58.979% 98.859%, 58.979% 98.859%, 58.893% 99.041%, 58.801% 99.206%, 58.702% 99.354%, 58.598% 99.484%, 58.489% 99.595%, 58.375% 99.688%, 58.258% 99.761%, 58.138% 99.813%, 58.015% 99.845%, 57.89% 99.856%, 1.545% 99.856%, 1.545% 99.856%, 1.189% 99.771%, 0.874% 99.532%, 0.605% 99.164%, 0.389% 98.691%, 0.23% 98.139%, 0.134% 97.531%, 0.106% 96.893%, 0.152% 96.248%, 0.277% 95.622%, 0.487% 95.039%, 43.682% 0.93%, 43.682% 0.93%, 43.767% 0.76%, 43.858% 0.606%, 43.955% 0.468%, 44.056% 0.347%, 44.163% 0.243%, 44.273% 0.157%, 44.386% 0.089%, 44.502% 0.04%, 44.621% 0.01%, 44.741% 0%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-2 img { aspect-ratio: 696 / 348; }
        @media screen and (max-width: 991px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { left: clamp(107px, 12.45vw, 237px); }
        }
        @media screen and (max-width: 767px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px, 52.57vw, 696px); }
        }
        @media screen and (max-width: 575px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px, 42.57vw, 696px); }
        }
        @media screen and (max-width: 479px) {
          .ul-banner-slider-wrapper #ul-banner-slider-2 { width: clamp(160px, 62.57vw, 696px); }
        }

        /* Strip 3 */
        .ul-banner-slider-wrapper #ul-banner-slider-3 {
          right: clamp(180px, 20.23vw, 385px);
          width: clamp(0px, 38.2vw, 727px);
          clip-path: polygon(0.375% 94.473%, 33.15% 1.335%, 33.15% 1.335%, 33.232% 1.122%, 33.321% 0.928%, 33.416% 0.755%, 33.517% 0.602%, 33.623% 0.471%, 33.733% 0.362%, 33.847% 0.276%, 33.964% 0.214%, 34.084% 0.176%, 34.206% 0.163%, 98.62% 0.163%, 98.62% 0.163%, 98.955% 0.257%, 99.252% 0.519%, 99.506% 0.923%, 99.713% 1.444%, 99.868% 2.055%, 99.965% 2.729%, 99.999% 3.441%, 99.964% 4.165%, 99.857% 4.873%, 99.671% 5.54%, 66.574% 98.677%, 66.574% 98.677%, 66.492% 98.888%, 66.404% 99.08%, 66.309% 99.252%, 66.208% 99.403%, 66.103% 99.533%, 65.993% 99.64%, 65.88% 99.725%, 65.763% 99.787%, 65.644% 99.824%, 65.523% 99.837%, 1.43% 99.837%, 1.43% 99.837%, 1.096% 99.744%, 0.8% 99.483%, 0.546% 99.08%, 0.339% 98.561%, 0.184% 97.952%, 0.086% 97.28%, 0.052% 96.569%, 0.085% 95.847%, 0.191% 95.14%, 0.375% 94.473%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-3 img { aspect-ratio: 727 / 306; }
        @media screen and (max-width: 767px) {
          .ul-banner-slider-wrapper #ul-banner-slider-3 { display: none; }
        }

        /* Strip 4 */
        .ul-banner-slider-wrapper #ul-banner-slider-4 {
          right: 0;
          width: clamp(263px, 31.16vw, 593px);
          clip-path: polygon(0.505% 96.478%, 68.973% 0.705%, 68.973% 0.705%, 69.074% 0.576%, 69.182% 0.46%, 69.297% 0.355%, 69.418% 0.263%, 69.546% 0.184%, 69.678% 0.119%, 69.815% 0.068%, 69.955% 0.03%, 70.098% 0.008%, 70.243% 0%, 127.92% 0%, 127.92% 0%, 128.325% 0.058%, 128.686% 0.22%, 128.997% 0.47%, 129.25% 0.794%, 129.441% 1.173%, 129.563% 1.593%, 129.609% 2.038%, 129.573% 2.491%, 129.449% 2.936%, 129.231% 3.358%, 65.936% 99.131%, 65.936% 99.131%, 65.835% 99.27%, 65.726% 99.397%, 65.608% 99.51%, 65.483% 99.61%, 65.351% 99.696%, 65.214% 99.767%, 65.072% 99.823%, 64.926% 99.864%, 64.776% 99.889%, 64.625% 99.897%, 1.774% 99.897%, 1.774% 99.897%, 1.361% 99.837%, 0.995% 99.669%, 0.681% 99.41%, 0.427% 99.078%, 0.239% 98.688%, 0.123% 98.258%, 0.085% 97.805%, 0.132% 97.346%, 0.27% 96.898%, 0.505% 96.478%);
        }
        .ul-banner-slider-wrapper #ul-banner-slider-4 img { aspect-ratio: 593 / 485; }
        @media screen and (max-width: 575px) {
          .ul-banner-slider-wrapper #ul-banner-slider-4 { width: clamp(193px, 21.16vw, 593px); }
        }
        @media screen and (max-width: 479px) {
          .ul-banner-slider-wrapper #ul-banner-slider-4 { display: none; }
        }

        /* Strips 3 & 4 bottom value */
        .ul-banner-slider-wrapper #ul-banner-slider-3,
        .ul-banner-slider-wrapper #ul-banner-slider-4 {
          bottom: clamp(78px, 8.3vw, 158px);
        }
        @media screen and (max-width: 991px) {
          .ul-banner-slider-wrapper #ul-banner-slider-3,
          .ul-banner-slider-wrapper #ul-banner-slider-4 { bottom: 0; }
        }

        /* ── Stats bar ───────────────────────────────────────── */
        .ul-banner-stats {
          display: flex;
          position: absolute;
          bottom: clamp(28px, 3.05vw, 58px);
          right: 0;
          z-index: 3;
        }
        @media screen and (max-width: 1199px) {
          .ul-banner-stats { position: static; justify-content: center; padding: 30px 15px; }
        }
        @media screen and (max-width: 767px) {
          .ul-banner-stats { flex-wrap: wrap; gap: 20px 0; }
        }
        .ul-banner-stat {
          text-align: left;
          padding-right: clamp(30px, 3.42vw, 65px);
          margin-right: clamp(30px, 3.42vw, 65px);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }
        @media screen and (max-width: 479px) {
          .ul-banner-stat { padding-right: 10px; margin-right: 10px; flex-grow: 1; }
        }
        .ul-banner-stat:last-child { border-right: none; padding-right: 0; }
        .ul-banner-stat-number {
          font-weight: 700;
          font-size: clamp(20px, 1.26vw, 24px);
          line-height: 0.7;
          margin-bottom: 5px;
          display: block;
        }
        .ul-banner-stat-text { color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 400; }

        /* Play Reel */
        .ul-banner-stat-btn {
          display: flex;
          align-items: center;
          gap: clamp(15px, 1.58vw, 30px);
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
          width: clamp(42px, 2.73vw, 52px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(10px, 0.7vw, 13px);
          transition: 0.4s ease;
        }
        .ul-banner-stat-btn:hover i {
          background-color: var(--white);
          color: var(--ul-primary);
          border-color: var(--white);
        }

        /* Swiper slide */
        .ul-banner-slider .swiper-slide { overflow: hidden; }
        .ul-banner-slider .swiper-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
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

        {/* Image sliders — dynamic images distribute ho jaati hain */}
        <div className="ul-banner-slider-wrapper">
          <BannerStrip id="ul-banner-slider-1" images={set1} delay={3000} />
          <BannerStrip id="ul-banner-slider-2" images={set2} delay={3700} />
          <BannerStrip id="ul-banner-slider-3" images={set3} delay={4200} />
          <BannerStrip id="ul-banner-slider-4" images={set4} delay={2800} />
        </div>

        {/* Stats bar — animated counter + Play Reel modal */}
        <div className="ul-banner-stats" ref={statsRef}>
          {stats.map((s, i) => (
            <AnimatedStat
              key={i}
              number={s.number}
              label={s.label}
              animate={statsVisible}
            />
          ))}

          {/* Play Reel */}
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

      {/* Video Modal — tumhara existing component */}
      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        youtubeId={youtubeId}
      />
    </>
  );
}