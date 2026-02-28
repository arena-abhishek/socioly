"use client";

import { useState } from "react";
import CountUp from "react-countup";
import VideoModal from "@/components/ui/VideoModal";
import { PlayButton } from "@/components/ui/PlayButton";

export default function Banner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden text-white">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700" />

        {/* Subtle Wave Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/wave-pattern.png')] bg-cover bg-center" />

        {/* VECTOR SHAPES (Use your SVG paths here) */}
        <img
          src="/assets/img/banner-vector-2.svg"
          className="absolute top-20 left-10 w-40 opacity-40"
          alt=""
        />
        <img
          src="/assets/img/banner-vector-3.svg"
          className="absolute bottom-20 right-10 w-40 opacity-40"
          alt=""
        />

        {/* CENTER CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

          {/* TAG */}
          <div className="mb-6 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md text-sm">
            Empowering Your Business with Data-Driven Marketing
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Empowering Your Business <br />
            with Data-Driven Marketing
          </h1>

          {/* CTA */}
          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            Our Services ↗
          </button>

          {/* DIAGONAL IMAGE SECTION */}
          <div className="absolute bottom-28 left-0 w-full flex justify-center gap-6 px-10">

            <DiagonalImage src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800" />
            <DiagonalImage src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" />
            <DiagonalImage src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800" />

          </div>

          {/* STATS BAR */}
          <div className="absolute bottom-6 left-0 w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-10 py-6 flex gap-12 items-center border border-white/20">

              <Stat number={20500} label="Projects Done" />
              <Stat number={100500} label="Happy Clients" />
              <Stat number={150500} label="Team Members" />

              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setOpen(true)}>
                <span className="text-sm">Play Reel</span>
                <PlayButton onClick={() => setOpen(true)} />
              </div>

            </div>
          </div>
        </div>
      </section>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        youtubeId="WUB2pSkwN2M"
      />
    </>
  );
}

/* STAT COMPONENT */
function Stat({ number, label }: { number: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">
        <CountUp end={number} duration={3} separator="," />
      </div>
      <div className="text-sm opacity-70">{label}</div>
    </div>
  );
}

/* DIAGONAL IMAGE COMPONENT */
function DiagonalImage({ src }: { src: string }) {
  return (
    <div className="w-72 h-40 overflow-hidden transform -skew-x-12 rounded-xl shadow-2xl">
      <img
        src={src}
        className="w-full h-full object-cover skew-x-12 scale-110"
        alt=""
      />
    </div>
  );
}


// version 2 with swiper and countup, but not as good as the first one, so keeping the first one for now.
/* "use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";

import VideoModal from "@/components/ui/VideoModal";
import { PlayButton } from "@/components/ui/PlayButton";

const images = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800",
];

export default function Banner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white py-20">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1f1f1f,_#000)] -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          
   
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold mb-4">
              Empowering Your Business
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Empowering Your Business <br />
              with Data-Driven Marketing
            </h1>

            <button className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded-lg">
              Our Services
            </button>


            <div className="flex flex-wrap gap-10 mt-12 items-center">
              <Stat number={20500} label="Projects Done" />
              <Stat number={100500} label="Happy Clients" />
              <Stat number={150500} label="Team Members" />

              <PlayButton onClick={() => setOpen(true)} />
            </div>
          </motion.div>

   
          <div className="hidden lg:flex gap-6 h-[450px]">
            {[0, 1, 2, 3].map((_, index) => (
              <Swiper
                key={index}
                direction="vertical"
                slidesPerView={1}
                loop
                speed={4000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-[120px]"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt="banner"
                      className="w-full h-[200px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ))}
          </div>
        </div>
      </section>


      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        youtubeId="WUB2pSkwN2M"
      />
    </>
  );
}


function Stat({ number, label }: { number: number; label: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">
        <CountUp end={number} duration={3} separator="," />
      </h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
 */







//version 1, which is better than version 2, so keeping this one for now.
/* "use client";

import Image from "next/image";
import Link from "next/link";

const imagesRow1 = [
  "/blog-b-1.jpg",
  "/blog-b-2.jpg",
  "/blog-b-3.jpg",
  "/service-details.jpg",
];

const imagesRow2 = [
  "/blog-b-2.jpg",
  "/service-details.jpg",
  "/blog-b-1.jpg",
  "/blog-b-3.jpg",
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden text-white">


      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700" />


      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full animate-wave"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 C300,200 600,400 900,300 C1200,200 1440,350 1440,350"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,350 C300,250 600,450 900,350 C1200,250 1440,400 1440,400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

   
      <div className="hidden lg:block absolute right-10 top-40 w-[300px] h-[420px] border border-white/40 rounded-[40px] rotate-12 backdrop-blur-sm" />

   
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-44 text-center">

        <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm backdrop-blur-md">
          Amazing Solutions For business
        </span>

        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Trusted IT support Designed to Safeguard Your Business
        </h1>

        <Link
          href="/services"
          className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-medium rounded-full hover:scale-105 transition"
        >
          Our Services →
        </Link>
      </div>

    
      <div className="relative z-10 -mt-24 hidden lg:block space-y-8">

   
        <div className="flex gap-6 animate-marquee">
          {[...imagesRow1, ...imagesRow1].map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] h-[180px] overflow-hidden"
              style={{
                clipPath:
                  "polygon(15% 0%,100% 0%,85% 100%,0% 100%)",
              }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

     
        <div className="flex gap-6 animate-marquee-reverse">
          {[...imagesRow2, ...imagesRow2].map((src, i) => (
            <div
              key={i}
              className="relative w-[360px] h-[240px] overflow-hidden"
              style={{
                clipPath:
                  "polygon(15% 0%,100% 0%,85% 100%,0% 100%)",
              }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/20 pt-10">
          <div>
            <h3 className="text-2xl font-bold">20.5K</h3>
            <p className="text-white/80 text-sm">Projects Done</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100.5K</h3>
            <p className="text-white/80 text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">150.5K</h3>
            <p className="text-white/80 text-sm">Team Members</p>
          </div>
          <div>
            <Link
              href="https://youtu.be/WUB2pSkwN2M"
              target="_blank"
              className="hover:underline"
            >
              ▶ Play Reel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} */