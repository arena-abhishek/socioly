"use client";

import { useState, useEffect } from "react"; // add useEffect
import Slider from "@/components/ui/Slider";
import Stat from "@/components/ui/Stat";
import { PlayButton } from "@/components/ui/PlayButton";
import VideoModal from "@/components/ui/VideoModal";
import dynamic from "next/dynamic";

export default function Banner() {
  const [open, setOpen] = useState(false);
  // const Slider = dynamic(() => import("@/components/ui/Slider"), { ssr: false });
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  //  if (!isClient) return null;

  // const images = [
  //   "https://images.unsplash.com/photo-1581091012184-0ffcd2bbba34?auto=format&fit=crop&w=800&q=80", // office desk
  //   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", // laptop meeting
  //   "https://images.unsplash.com/photo-1581090700227-7d5e0c2fa78b?auto=format&fit=crop&w=800&q=80", // office teamwork
  //   "https://images.unsplash.com/photo-1593642632559-0c9b53aefb7e?auto=format&fit=crop&w=800&q=80", // workspace
  // ];
  const slider1Images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // modern office interior
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // laptop & workspace
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // work desk setup
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // stylish open office
  ];

  const slider2Images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // modern office interior
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // laptop & workspace
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // work desk setup
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // open space office
  ];

  const slider3Images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // modern office interior
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // laptop & workspace
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // work desk setup
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // conference workspace
  ];

  const slider4Images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // modern office interior
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // laptop & workspace
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // work desk setup
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // business workspace
  ];
  return (
    <>
      <section
        className="
        relative overflow-hidden text-white text-center
        px-4
         h-screen        
         md:min-h-screen
        pt-[clamp(120px,10.5vw,200px)]
        pb-[clamp(130px,26vw,513px)]
        bg-gradient-to-r from-indigo-600 to-purple-700"
      >
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10 mix-blend-multiply bg-[url('/assets/img/banner-bg-shape.svg')] bg-cover bg-center" />

        {/* ================= TEXT ================= */}
        <div className="relative z-20 max-w-[1058px] mx-auto">
          <span
            className="inline-flex items-center border border-white/20 rounded-full
          px-[clamp(13px,0.84vw,16px)]
          py-[clamp(6px,0.47vw,9px)]
          font-bold mb-[clamp(7px,0.63vw,12px)]"
          >
            Next-Gen Engagement
          </span>

          <h1
            className="
           font-extrabold
    text-[clamp(1.8rem,4vw,4.5rem)]
    leading-[1.1]
    tracking-tight
 max-w-[20ch]
    md:max-w-[28ch]
    mx-auto
    mb-6
          "
          >
            Evolving Customer Journeys: Better Customer Experience
          </h1>

          <a
            href="/services"
            className="
              inline-flex items-center justify-center
    text-[clamp(0.9rem,1vw,1rem)]
    font-semibold
    px-6 md:px-8
    h-12 md:h-14
    rounded-full
    bg-white text-indigo-600
    hover:bg-indigo-600 hover:text-white
    transition-all duration-300"
          >
            Talk To CX Expert ↗
          </a>
        </div>

        <div
          className="absolute inset-0  md:bottom-0
    bottom-[-55px] pointer-events-none z-10"
        >
          {/* Slider 1 */}
          <Slider
            images={slider1Images}
            className="absolute left-0 bottom-0 w-[clamp(160px,34.68vw,660px)] h-[clamp(200px,30vw,517px)]"
            clipPath="polygon(35.014% 0%, 98.457% 0%, 98.457% 0%, 98.832% 0.057%, 99.164% 0.218%, 99.447% 0.465%, 99.676% 0.783%, 99.843% 1.154%, 99.945% 1.563%, 99.975% 1.992%, 99.927% 2.426%, 99.795% 2.847%, 99.575% 3.239%, 30.829% 99.274%, 30.829% 99.274%, 30.74% 99.389%, 30.644% 99.493%, 30.542% 99.587%, 30.434% 99.669%, 30.322% 99.739%, 30.206% 99.797%, 30.086% 99.843%, 29.963% 99.876%, 29.838% 99.896%, 29.711% 99.903%, -29.581% 99.903%, -29.581% 99.903%, -29.95% 99.848%, -30.279% 99.691%, -30.56% 99.45%, -30.788% 99.14%, -30.958% 98.776%, -31.063% 98.375%, -31.099% 97.952%, -31.059% 97.523%, -30.938% 97.103%, -30.73% 96.709%, 33.865% 0.674%, 33.865% 0.674%, 33.955% 0.551%, 34.052% 0.44%, 34.156% 0.34%, 34.266% 0.252%, 34.382% 0.177%, 34.502% 0.114%, 34.626% 0.065%, 34.753% 0.029%, 34.882% 0.007%, 35.014% 0%)"
          />
          <Slider
            images={slider2Images}
            className="absolute left-[clamp(137px,12.45vw,237px)] bottom-0 w-[clamp(160px,36.57vw,696px)] h-[clamp(180px,28vw,348px)]"
            clipPath="polygon(44.741% 0%, 98.445% 0%, 98.445% 0%, 98.796% 0.083%, 99.108% 0.315%, 99.374% 0.674%, 99.591% 1.135%, 99.752% 1.676%, 99.851% 2.273%, 99.885% 2.902%, 99.847% 3.54%, 99.732% 4.164%, 99.534% 4.75%, 58.979% 98.859%, 58.979% 98.859%, 58.893% 99.041%, 58.801% 99.206%, 58.702% 99.354%, 58.598% 99.484%, 58.489% 99.595%, 58.375% 99.688%, 58.258% 99.761%, 58.138% 99.813%, 58.015% 99.845%, 57.89% 99.856%, 1.545% 99.856%, 1.545% 99.856%, 1.189% 99.771%, 0.874% 99.532%, 0.605% 99.164%, 0.389% 98.691%, 0.23% 98.139%, 0.134% 97.531%, 0.106% 96.893%, 0.152% 96.248%, 0.277% 95.622%, 0.487% 95.039%, 43.682% 0.93%, 43.682% 0.93%, 43.767% 0.76%, 43.858% 0.606%, 43.955% 0.468%, 44.056% 0.347%, 44.163% 0.243%, 44.273% 0.157%, 44.386% 0.089%, 44.502% 0.04%, 44.621% 0.01%, 44.741% 0%)"
          />
          <Slider
            images={slider3Images}
            className="absolute right-[clamp(180px,20.23vw,385px)] bottom-[clamp(78px,8.3vw,158px)] w-[clamp(280px,38vw,727px)] h-[clamp(170px,26vw,306px)] hidden md:block "
            clipPath="polygon(0.375% 94.473%, 33.15% 1.335%, 33.15% 1.335%, 33.232% 1.122%, 33.321% 0.928%, 33.416% 0.755%, 33.517% 0.602%, 33.623% 0.471%, 33.733% 0.362%, 33.847% 0.276%, 33.964% 0.214%, 34.084% 0.176%, 34.206% 0.163%, 98.62% 0.163%, 98.62% 0.163%, 98.955% 0.257%, 99.252% 0.519%, 99.506% 0.923%, 99.713% 1.444%, 99.868% 2.055%, 99.965% 2.729%, 99.999% 3.441%, 99.964% 4.165%, 99.857% 4.873%, 99.671% 5.54%, 66.574% 98.677%, 66.574% 98.677%, 66.492% 98.888%, 66.404% 99.08%, 66.309% 99.252%, 66.208% 99.403%, 66.103% 99.533%, 65.993% 99.64%, 65.88% 99.725%, 65.763% 99.787%, 65.644% 99.824%, 65.523% 99.837%, 1.43% 99.837%, 1.43% 99.837%, 1.096% 99.744%, 0.8% 99.483%, 0.546% 99.08%, 0.339% 98.561%, 0.184% 97.952%, 0.086% 97.28%, 0.052% 96.569%, 0.085% 95.847%, 0.191% 95.14%, 0.375% 94.473%)"
          />
          <Slider
            images={slider4Images}
            className="absolute right-0 bottom-[clamp(78px,8.3vw,158px)] w-[clamp(263px,31.16vw,593px)] h-[clamp(220px,32vw,485px)] hidden md:block"
            clipPath="polygon(0.505% 96.478%, 68.973% 0.705%, 68.973% 0.705%, 69.074% 0.576%, 69.182% 0.46%, 69.297% 0.355%, 69.418% 0.263%, 69.546% 0.184%, 69.678% 0.119%, 69.815% 0.068%, 69.955% 0.03%, 70.098% 0.008%, 70.243% 0%, 127.92% 0%, 127.92% 0%, 128.325% 0.058%, 128.686% 0.22%, 128.997% 0.47%, 129.25% 0.794%, 129.441% 1.173%, 129.563% 1.593%, 129.609% 2.038%, 129.573% 2.491%, 129.449% 2.936%, 129.231% 3.358%, 65.936% 99.131%, 65.936% 99.131%, 65.835% 99.27%, 65.726% 99.397%, 65.608% 99.51%, 65.483% 99.61%, 65.351% 99.696%, 65.214% 99.767%, 65.072% 99.823%, 64.926% 99.864%, 64.776% 99.889%, 64.625% 99.897%, 1.774% 99.897%, 1.774% 99.897%, 1.361% 99.837%, 0.995% 99.669%, 0.681% 99.41%, 0.427% 99.078%, 0.239% 98.688%, 0.123% 98.258%, 0.085% 97.805%, 0.132% 97.346%, 0.27% 96.898%, 0.505% 96.478%)"
          />{" "}
          {/* {isClient ? (
            <>
            </>
          ) : (
            // Fallback during SSR
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )} */}
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
    absolute
    bottom-[clamp(28px,3.05vw,58px)]
    right-0
    w-full
    flex
    justify-end
    max-xl:static
    max-xl:justify-center
    max-xl:py-[30px]
    px-4
  "
        >
          <div
            className="  grid grid-cols-2
  gap-y-8 gap-x-10
  text-left
  md:flex md:items-center md:gap-10"
          >
            {/* Stats */}
            <Stat number={20500} label="Projects Done" />
            <Stat number={100500} label="Happy Clients" />
            <Stat number={150500} label="Team Members" />

            {/* Play Reel */}
            <div
              className="
        flex items-center gap-3
  justify-start
  md:justify-start
  cursor-pointer
  hover:scale-105 transition-transform
      "
              onClick={() => setOpen(true)}
            >
              <span className="text-white font-semibold">Play Reel</span>
              <PlayButton onClick={() => setOpen(true)} />
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
