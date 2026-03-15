"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper core styles
import "swiper/css";

// ── Temporary Unsplash images ─────────────────────────────────────
const IMG = {
  a: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80",
  b: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
  c: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  d: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
};

// Each strip uses a different image order — mirrors original HTML
const STRIPS = [
  { images: [IMG.a, IMG.b, IMG.c, IMG.d], delay: 3000 },
  { images: [IMG.d, IMG.a, IMG.b, IMG.c], delay: 3700 },
  { images: [IMG.b, IMG.c, IMG.d, IMG.a], delay: 4200 },
  { images: [IMG.c, IMG.d, IMG.a, IMG.b], delay: 2800 },
];

// ── Exact clip-paths from original CSS ───────────────────────────
const CLIP = {
  s1: "polygon(35.014% 0%, 98.457% 0%, 98.832% 0.057%, 99.164% 0.218%, 99.447% 0.465%, 99.676% 0.783%, 99.843% 1.154%, 99.945% 1.563%, 99.975% 1.992%, 99.927% 2.426%, 99.795% 2.847%, 99.575% 3.239%, 30.829% 99.274%, 30.74% 99.389%, 30.644% 99.493%, 30.542% 99.587%, 30.434% 99.669%, 30.322% 99.739%, 30.206% 99.797%, 30.086% 99.843%, 29.963% 99.876%, 29.838% 99.896%, 29.711% 99.903%, -29.581% 99.903%, -29.95% 99.848%, -30.279% 99.691%, -30.56% 99.45%, -30.788% 99.14%, -30.958% 98.776%, -31.063% 98.375%, -31.099% 97.952%, -31.059% 97.523%, -30.938% 97.103%, -30.73% 96.709%, 33.865% 0.674%, 33.955% 0.551%, 34.052% 0.44%, 34.156% 0.34%, 34.266% 0.252%, 34.382% 0.177%, 34.502% 0.114%, 34.626% 0.065%, 34.753% 0.029%, 34.882% 0.007%, 35.014% 0%)",
  s2: "polygon(44.741% 0%, 98.445% 0%, 98.796% 0.083%, 99.108% 0.315%, 99.374% 0.674%, 99.591% 1.135%, 99.752% 1.676%, 99.851% 2.273%, 99.885% 2.902%, 99.847% 3.54%, 99.732% 4.164%, 99.534% 4.75%, 58.979% 98.859%, 58.893% 99.041%, 58.801% 99.206%, 58.702% 99.354%, 58.598% 99.484%, 58.489% 99.595%, 58.375% 99.688%, 58.258% 99.761%, 58.138% 99.813%, 58.015% 99.845%, 57.89% 99.856%, 1.545% 99.856%, 1.189% 99.771%, 0.874% 99.532%, 0.605% 99.164%, 0.389% 98.691%, 0.23% 98.139%, 0.134% 97.531%, 0.106% 96.893%, 0.152% 96.248%, 0.277% 95.622%, 0.487% 95.039%, 43.682% 0.93%, 43.767% 0.76%, 43.858% 0.606%, 43.955% 0.468%, 44.056% 0.347%, 44.163% 0.243%, 44.273% 0.157%, 44.386% 0.089%, 44.502% 0.04%, 44.621% 0.01%, 44.741% 0%)",
  s3: "polygon(0.375% 94.473%, 33.15% 1.335%, 33.232% 1.122%, 33.321% 0.928%, 33.416% 0.755%, 33.517% 0.602%, 33.623% 0.471%, 33.733% 0.362%, 33.847% 0.276%, 33.964% 0.214%, 34.084% 0.176%, 34.206% 0.163%, 98.62% 0.163%, 98.955% 0.257%, 99.252% 0.519%, 99.506% 0.923%, 99.713% 1.444%, 99.868% 2.055%, 99.965% 2.729%, 99.999% 3.441%, 99.964% 4.165%, 99.857% 4.873%, 99.671% 5.54%, 66.574% 98.677%, 66.492% 98.888%, 66.404% 99.08%, 66.309% 99.252%, 66.208% 99.403%, 66.103% 99.533%, 65.993% 99.64%, 65.88% 99.725%, 65.763% 99.787%, 65.644% 99.824%, 65.523% 99.837%, 1.43% 99.837%, 1.096% 99.744%, 0.8% 99.483%, 0.546% 99.08%, 0.339% 98.561%, 0.184% 97.952%, 0.086% 97.28%, 0.052% 96.569%, 0.085% 95.847%, 0.191% 95.14%, 0.375% 94.473%)",
  s4: "polygon(0.505% 96.478%, 68.973% 0.705%, 69.074% 0.576%, 69.182% 0.46%, 69.297% 0.355%, 69.418% 0.263%, 69.546% 0.184%, 69.678% 0.119%, 69.815% 0.068%, 69.955% 0.03%, 70.098% 0.008%, 70.243% 0%, 127.92% 0%, 128.325% 0.058%, 128.686% 0.22%, 128.997% 0.47%, 129.25% 0.794%, 129.441% 1.173%, 129.563% 1.593%, 129.609% 2.038%, 129.573% 2.491%, 129.449% 2.936%, 129.231% 3.358%, 65.936% 99.131%, 65.835% 99.27%, 65.726% 99.397%, 65.608% 99.51%, 65.483% 99.61%, 65.351% 99.696%, 65.214% 99.767%, 65.072% 99.823%, 64.926% 99.864%, 64.776% 99.889%, 64.625% 99.897%, 1.774% 99.897%, 1.361% 99.837%, 0.995% 99.669%, 0.681% 99.41%, 0.427% 99.078%, 0.239% 98.688%, 0.123% 98.258%, 0.085% 97.805%, 0.132% 97.346%, 0.27% 96.898%, 0.505% 96.478%)",
};

// ── Stats data ────────────────────────────────────────────────────
const STATS = [
  { number: "20.5K",  label: "Projects Done"  },
  { number: "100.5K", label: "Happy Clients"   },
  { number: "150.5K", label: "Team Members"    },
];

// ── BannerSwiper strip ────────────────────────────────────────────
interface StripProps {
  images: string[];
  delay: number;
  clipPath: string;
  wrapperStyle: React.CSSProperties;
  /** Tailwind responsive visibility classes, e.g. "hidden md:block" */
  className?: string;
}

function BannerStrip({ images, delay, clipPath, wrapperStyle, className = "" }: StripProps) {
  return (
    <div
      className={`absolute overflow-hidden ${className}`}
      style={{ ...wrapperStyle, clipPath }}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{ delay, disableOnInteraction: false }}
        allowTouchMove={false}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} style={{ height: "100%" }}>
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      <style>{`
        /* sub-title sparkle icon */
        .banner-sub-title::before {
          content: "";
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 18' fill='none'%3E%3Cpath d='M10 0L12.5 7.5H20L14 12L16.5 18L10 14L3.5 18L6 12L0 7.5H7.5L10 0Z' fill='white' fill-opacity='0.8'/%3E%3C/svg%3E") no-repeat center / cover;
          display: inline-block;
          width: clamp(15px, 1.05vw, 20px);
          height: clamp(13px, 0.95vw, 18px);
          margin-right: clamp(5px, 0.53vw, 10px);
          flex-shrink: 0;
        }
        /* play-reel circle icon */
        .play-reel-icon {
          width: clamp(42px, 2.73vw, 52px);
          aspect-ratio: 1 / 1;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(10px, 0.7vw, 13px);
          transition: 0.4s ease;
          flex-shrink: 0;
        }
        .play-reel-link:hover .play-reel-icon {
          background: #fff;
          color: #2B4DFF;
          border-color: #fff;
        }
        .banner-cta-btn:hover {
          background-color: #2B4DFF !important;
          color: #fff !important;
        }
      `}</style>

      <section
        style={{
          background: "linear-gradient(105.18deg, #2B4DFF 0%, #731BB7 100%)",
          color: "#fff",
          paddingTop: "clamp(120px, 10.51vw, 200px)",
          paddingBottom: "clamp(0px, 26.96vw, 513px)",
          paddingLeft: 15,
          paddingRight: 15,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* bg shape overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 25% 55%, rgba(255,255,255,0.07) 0%, transparent 55%), radial-gradient(ellipse at 78% 22%, rgba(255,255,255,0.045) 0%, transparent 45%)",
            mixBlendMode: "multiply",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Text block ── */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* sub-title */}
          <span
            className="banner-sub-title"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              padding: "clamp(6px,0.47vw,9px) clamp(13px,0.84vw,16px)",
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 700,
              marginBottom: "clamp(7px,0.63vw,12px)",
              fontSize: "clamp(12px,0.84vw,14px)",
            }}
          >
            Amazing Solutions For Business
          </span>

          {/* headline */}
          <h1
            style={{
              fontSize: "clamp(25px, 3.68vw, 70px)",
              color: "#fff",
              fontWeight: 800,
              maxWidth: "clamp(300px, 55.6vw, 1058px)",
              margin: "0 auto clamp(8px,0.84vw,16px)",
              lineHeight: 1.15,
            }}
          >
            Trusted IT Support Designed to Safeguard Your Business
          </h1>

          {/* CTA */}
          <a
            href="/services"
            className="banner-cta-btn"
            style={{
              backgroundColor: "#fff",
              color: "#2B4DFF",
              borderRadius: 999,
              padding: "0 clamp(15px,1.05vw,20px)",
              height: "clamp(36px,2.42vw,46px)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              gap: "clamp(5px,0.53vw,10px)",
              fontSize: "clamp(13px,0.84vw,15px)",
              textDecoration: "none",
              transition: "0.4s ease",
            }}
          >
            Our Services
            <FiArrowUpRight style={{ fontSize: "clamp(9px,0.63vw,12px)" }} />
          </a>
        </div>

        {/* ── Decorative vectors ── */}
        {/* vector 1 — dashed ring, left-centre */}
        <div
          aria-hidden
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "clamp(350px, 37.62vw, 716px)",
            bottom: "clamp(68px, 5.68vw, 108px)",
            width: "clamp(88px, 9.35vw, 178px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 178 178" fill="none" width="100%" style={{ opacity: 0.35 }}>
            <circle cx="89" cy="89" r="88" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
            <circle cx="89" cy="89" r="55" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          </svg>
        </div>

        {/* vector 2 — ellipses, right side */}
        <div
          aria-hidden
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: "clamp(25px, 2.63vw, 50px)",
            bottom: "clamp(15px, 12.09vw, 230px)",
            width: "clamp(295px, 31vw, 590px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 590 400" fill="none" width="100%" style={{ opacity: 0.18 }}>
            <ellipse cx="295" cy="200" rx="294" ry="199" stroke="white" strokeWidth="1.5" />
            <ellipse cx="295" cy="200" rx="210" ry="135" stroke="white" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>

        {/* ── Image slider strips ── */}
        {/*
          Positioned absolutely at the bottom.
          Strips 3 & 4 sit higher (clamp(78px,8.3vw,158px)) exactly like the original.
          Strip 3 hidden < md, Strip 4 hidden < sm.
        */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "0 0 0 0",
            pointerEvents: "none",
          }}
        >
          {/* Strip 1 — #ul-banner-slider-1 */}
          <BannerStrip
            images={STRIPS[0].images}
            delay={STRIPS[0].delay}
            clipPath={CLIP.s1}
            wrapperStyle={{
              left: 0,
              bottom: 0,
              width: "clamp(160px, 34.68vw, 660px)",
              height: "clamp(250px, 30vw, 580px)",
            }}
          />

          {/* Strip 2 — #ul-banner-slider-2 */}
          <BannerStrip
            images={STRIPS[1].images}
            delay={STRIPS[1].delay}
            clipPath={CLIP.s2}
            wrapperStyle={{
              left: "clamp(137px, 12.45vw, 237px)",
              bottom: 0,
              width: "clamp(160px, 36.57vw, 696px)",
              height: "clamp(200px, 22vw, 420px)",
            }}
          />

          {/* Strip 3 — #ul-banner-slider-3, hidden < md */}
          <BannerStrip
            images={STRIPS[2].images}
            delay={STRIPS[2].delay}
            clipPath={CLIP.s3}
            className="hidden md:block"
            wrapperStyle={{
              right: "clamp(180px, 20.23vw, 385px)",
              bottom: "clamp(78px, 8.3vw, 158px)",
              width: "clamp(0px, 38.2vw, 727px)",
              height: "clamp(200px, 22vw, 420px)",
            }}
          />

          {/* Strip 4 — #ul-banner-slider-4, hidden < sm */}
          <BannerStrip
            images={STRIPS[3].images}
            delay={STRIPS[3].delay}
            clipPath={CLIP.s4}
            className="hidden sm:block"
            wrapperStyle={{
              right: 0,
              bottom: "clamp(78px, 8.3vw, 158px)",
              width: "clamp(193px, 31.16vw, 593px)",
              height: "clamp(250px, 30vw, 580px)",
            }}
          />
        </div>

        {/* ── Stats bar — desktop (absolute, bottom-right) ── */}
        <div
          className="hidden xl:flex items-center"
          style={{
            position: "absolute",
            bottom: "clamp(28px, 3.05vw, 58px)",
            right: 0,
            zIndex: 3,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "left",
                paddingRight: "clamp(30px, 3.42vw, 65px)",
                marginRight: "clamp(30px, 3.42vw, 65px)",
                borderRight: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(20px, 1.26vw, 24px)",
                  lineHeight: 0.7,
                  marginBottom: 5,
                  display: "block",
                }}
              >
                {s.number}
              </span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{s.label}</span>
            </div>
          ))}

          <a
            href="https://youtu.be/WUB2pSkwN2M?si=mE9CqwAUIjpYiwGm"
            target="_blank"
            rel="noopener noreferrer"
            className="play-reel-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(15px, 1.58vw, 30px)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              transition: "0.4s ease",
            }}
          >
            <span>Play Reel</span>
            <span className="play-reel-icon">
              <FaPlay />
            </span>
          </a>
        </div>

        {/* ── Stats bar — mobile / tablet (inline, below headline) ── */}
        <div
          className="xl:hidden flex justify-center flex-wrap items-center"
          style={{ gap: "20px 0", paddingTop: 30, position: "relative", zIndex: 3 }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "left",
                paddingRight: "clamp(15px, 3.42vw, 50px)",
                marginRight: "clamp(15px, 3.42vw, 50px)",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "clamp(16px,1.26vw,22px)", lineHeight: 0.7, display: "block", marginBottom: 5 }}>
                {s.number}
              </span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{s.label}</span>
            </div>
          ))}

          <a
            href="https://youtu.be/WUB2pSkwN2M?si=mE9CqwAUIjpYiwGm"
            target="_blank"
            rel="noopener noreferrer"
            className="play-reel-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 13,
              transition: "0.4s ease",
            }}
          >
            <span>Play Reel</span>
            <span className="play-reel-icon">
              <FaPlay />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}