module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabase",
    ()=>getSupabase,
    "getSupabaseServer",
    ()=>getSupabaseServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
let supabaseInstance = null;
const getSupabase = ()=>{
    if (supabaseInstance) return supabaseInstance;
    const supabaseUrl = ("TURBOPACK compile-time value", "https://nevefdkkrpjlxglayitn.supabase.co");
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldmVmZGtrcnBqbHhnbGF5aXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NTQyNzQsImV4cCI6MjA4NzAzMDI3NH0.BufQlHHTJ6OZ13YmOzv-kIY7oNM2LNlnhY6Yox5vvac");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    supabaseInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
    return supabaseInstance;
};
const getSupabaseServer = ()=>{
    const supabaseUrl = ("TURBOPACK compile-time value", "https://nevefdkkrpjlxglayitn.supabase.co");
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldmVmZGtrcnBqbHhnbGF5aXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NTQyNzQsImV4cCI6MjA4NzAzMDI3NH0.BufQlHHTJ6OZ13YmOzv-kIY7oNM2LNlnhY6Yox5vvac");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey);
};
}),
"[project]/lib/fetchers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllTags",
    ()=>getAllTags,
    "getCategories",
    ()=>getCategories,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPublishedPosts",
    ()=>getPublishedPosts,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServices",
    ()=>getServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-rsc] (ecmascript)");
;
async function getPublishedPosts() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) {
        return [];
    }
    try {
        const { data, error } = await supabase.from('posts').select('*').order('created_at', {
            ascending: false
        });
        if (error) {
            if (error.message.includes('Could not find the table') || error.message.includes('does not exist')) {
                console.warn('Table "posts" missing in Supabase. Please ensure your schema matches supabase_schema.sql');
            } else {
                console.error('Supabase error fetching posts:', error.message);
            }
            return [];
        }
        // Filter in-memory if status column exists
        if (data && data.length > 0 && 'status' in data[0]) {
            return data.filter((post)=>post.status === 'published');
        }
        return data || [];
    } catch (e) {
        console.error('Unexpected error fetching posts:', e);
        return [];
    }
}
async function getPostBySlug(slug) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) return null;
    try {
        const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).single();
        if (error) {
            if (!error.message.includes('PGRST116')) {
                console.error(`Supabase error fetching post ${slug}:`, error.message);
            }
            return null;
        }
        // Check status in-memory if it exists
        if (data && 'status' in data && data.status !== 'published') {
        // In a real app we might return null here, but for resilience we'll return it
        // unless the user specifically wants strict filtering.
        }
        return data;
    } catch (e) {
        console.error(`Unexpected error fetching post ${slug}:`, e);
        return null;
    }
}
async function getCategories() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) return [];
    try {
        const { data, error } = await supabase.from('categories').select('*').order('created_at', {
            ascending: false
        });
        if (error) {
            if (error.message.includes('Could not find the table') || error.message.includes('does not exist')) {
                console.warn('Table "categories" missing in Supabase. Please ensure your schema matches.');
            } else {
                console.error('Supabase error fetching categories:', error.message);
            }
            return [];
        }
        // Filter published if status exists
        if (data && data.length > 0 && 'status' in data[0]) {
            return data.filter((cat)=>cat.status === 'published');
        }
        return data || [];
    } catch (e) {
        console.error('Unexpected error fetching categories:', e);
        return [];
    }
}
async function getAllTags() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) return [];
    try {
        const { data, error } = await supabase.from('tags').select('*').order('created_at', {
            ascending: false
        });
        if (error) {
            if (error.message.includes('Could not find the table') || error.message.includes('does not exist')) {
                console.warn('Table "tags" missing in Supabase. Please ensure your schema matches.');
            } else {
                console.error('Supabase error fetching tags:', error.message);
            }
            return [];
        }
        // Filter published if status exists
        if (data && data.length > 0 && 'status' in data[0]) {
            return data.filter((tag)=>tag.status === 'published');
        }
        return data || [];
    } catch (e) {
        console.error('Unexpected error fetching tags:', e);
        return [];
    }
}
async function getServices() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) return [];
    try {
        const { data, error } = await supabase.from('services').select('*').order('order', {
            ascending: true
        });
        if (error) {
            if (error.message.includes('Could not find the table') || error.message.includes('does not exist')) {
                console.warn('Table "services" missing in Supabase. Please ensure your schema matches supabase_schema.sql');
            } else {
                console.error('Supabase error fetching services:', error.message);
            }
            return [];
        }
        // Filter in-memory if status column exists
        if (data && data.length > 0 && 'status' in data[0]) {
            return data.filter((service)=>service.status === 'published');
        }
        return data || [];
    } catch (e) {
        console.error('Unexpected error fetching services:', e);
        return [];
    }
}
async function getServiceBySlug(slug) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabase"])();
    if (!supabase || !supabase.from) return null;
    try {
        const { data, error } = await supabase.from('services').select('*').eq('slug', slug).single();
        if (error) {
            if (!error.message.includes('PGRST116')) {
                console.error(`Supabase error fetching service ${slug}:`, error.message);
            }
            return null;
        }
        return data;
    } catch (e) {
        console.error(`Unexpected error fetching service ${slug}:`, e);
        return null;
    }
}
}),
"[project]/components/sections/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* "use client";

import { useState } from "react";
import Slider from "@/components/ui/Slider";
import Stat from "@/components/ui/Stat";
import { PlayButton } from "@/components/ui/PlayButton";
import VideoModal from "@/components/ui/VideoModal";

export default function Banner() {
  const [open, setOpen] = useState(false);

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
];

  return (
    <>
      <section
        className="
        relative overflow-hidden text-white text-center
        px-4
        pt-[clamp(120px,10.5vw,200px)]
        pb-[clamp(130px,26vw,513px)]
        bg-gradient-to-r from-indigo-600 to-purple-700"
      >
 
        <div className="absolute inset-0 -z-10 mix-blend-multiply bg-[url('/assets/img/banner-bg-shape.svg')] bg-cover bg-center" />


        <div className="relative z-20 max-w-[1058px] mx-auto">
          <span
            className="inline-flex items-center border border-white/20 rounded-full
          px-[clamp(13px,0.84vw,16px)]
          py-[clamp(6px,0.47vw,9px)]
          font-bold mb-[clamp(7px,0.63vw,12px)]"
          >
            Empowering Your Business with Data-Driven Marketing
          </span>

          <h1
            className="
            font-extrabold
            text-[clamp(25px,3.68vw,70px)]
            leading-tight
            mb-[clamp(8px,0.84vw,16px)]
          "
          >
            Empowering Your Business with Data-Driven Marketing
          </h1>

          <a
            href="/services"
            className="
            inline-flex items-center gap-[clamp(5px,0.53vw,10px)]
            bg-white text-indigo-600
            rounded-full
            px-[clamp(15px,1.05vw,20px)]
            h-[clamp(36px,2.42vw,46px)]
            font-bold
            hover:bg-indigo-600 hover:text-white transition"
          >
            Our Services ↗
          </a>
        </div>

      
        <div className="absolute inset-0 pointer-events-none z-10">
      
         <Slider
  images={images}
  className="absolute left-0 bottom-0 w-[300px] md:w-[660px] h-[260px] md:h-[517px]"
  style={{ clipPath: "polygon(20% 0%, 100% 0%, 90% 10%, 70% 100%, 0% 90%, 20% 0%)" }}
/>

<Slider
  images={images}
  className="absolute left-[140px] bottom-0 w-[320px] md:w-[696px] h-[180px] md:h-[348px]"
  style={{ clipPath: "polygon(10% 0%, 95% 0%, 100% 5%, 50% 100%, 0% 95%, 10% 0%)" }}
/>

<Slider
  images={images}
  className="absolute bottom-[80px] right-[180px] w-[400px] md:w-[727px] h-[170px] md:h-[306px] hidden md:block"
  style={{ clipPath: "polygon(0% 95%, 35% 0%, 100% 0%, 100% 10%, 60% 100%, 0% 95%)" }}
/>

<Slider
  images={images}
  className="absolute bottom-[80px] right-0 w-[350px] md:w-[593px] h-[220px] md:h-[485px] hidden sm:block"
  style={{ clipPath: "polygon(0% 96%, 70% 0%, 100% 0%, 100% 10%, 65% 100%, 0% 96%)" }}
/>
        </div>



        <div
          className="
          absolute
          bottom-[clamp(28px,3.05vw,58px)]
          right-0
          flex
          items-start
          max-xl:static
          max-xl:justify-center
          max-xl:py-[30px]
        "
        >
          <div className="flex flex-wrap max-md:justify-center">
            <div
              className="text-left
              pr-[clamp(30px,3.42vw,65px)]
              mr-[clamp(30px,3.42vw,65px)]
              border-r border-white/20"
            >
              <Stat number={20500} label="Projects Done" />
            </div>

            <div
              className="text-left
              pr-[clamp(30px,3.42vw,65px)]
              mr-[clamp(30px,3.42vw,65px)]
              border-r border-white/20"
            >
              <Stat number={100500} label="Happy Clients" />
            </div>

            <div
              className="text-left
              pr-[clamp(30px,3.42vw,65px)]
              mr-[clamp(30px,3.42vw,65px)]
              border-r border-white/20"
            >
              <Stat number={150500} label="Team Members" />
            </div>

            <div
              className="flex items-center gap-[clamp(15px,1.58vw,30px)] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <span>Play Reel</span>
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
 */ // version 2 with swiper and countup, but not as good as the first one, so keeping the first one for now.
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
 */ //version 1, which is better than version 2, so keeping this one for now.
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
} */ __turbopack_context__.s([]);
}),
"[project]/components/sections/StackCards.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/StackCards.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/StackCards.tsx <module evaluation>", "default");
}),
"[project]/components/sections/StackCards.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/StackCards.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/StackCards.tsx", "default");
}),
"[project]/components/sections/StackCards.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StackCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/StackCards.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StackCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/StackCards.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StackCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/WhyChoose.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/WhyChoose.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/WhyChoose.jsx <module evaluation>", "default");
}),
"[project]/components/sections/WhyChoose.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/WhyChoose.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/WhyChoose.jsx", "default");
}),
"[project]/components/sections/WhyChoose.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WhyChoose$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/WhyChoose.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WhyChoose$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/WhyChoose.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WhyChoose$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/ServicesSection.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/ServicesSection.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/ServicesSection.jsx <module evaluation>", "default");
}),
"[project]/components/sections/ServicesSection.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/ServicesSection.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/ServicesSection.jsx", "default");
}),
"[project]/components/sections/ServicesSection.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/ServicesSection.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/ServicesSection.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/FaqSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/FaqSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/FaqSection.tsx <module evaluation>", "default");
}),
"[project]/components/sections/FaqSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/FaqSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/FaqSection.tsx", "default");
}),
"[project]/components/sections/FaqSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/FaqSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/FaqSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/WorkProcess.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/WorkProcess.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/WorkProcess.tsx <module evaluation>", "default");
}),
"[project]/components/sections/WorkProcess.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/WorkProcess.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/WorkProcess.tsx", "default");
}),
"[project]/components/sections/WorkProcess.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkProcess$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/WorkProcess.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkProcess$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/WorkProcess.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkProcess$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/Clients.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/Clients.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/Clients.tsx <module evaluation>", "default");
}),
"[project]/components/sections/Clients.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/Clients.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/Clients.tsx", "default");
}),
"[project]/components/sections/Clients.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/Clients.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/Clients.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/ReviewContactSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/ReviewContactSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/ReviewContactSection.tsx <module evaluation>", "default");
}),
"[project]/components/sections/ReviewContactSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sections/ReviewContactSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sections/ReviewContactSection.tsx", "default");
}),
"[project]/components/sections/ReviewContactSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ReviewContactSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sections/ReviewContactSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ReviewContactSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sections/ReviewContactSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ReviewContactSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fetchers.ts [app-rsc] (ecmascript)");
// import PremiumHero from '@/components/sections/Hero';
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StackCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/StackCards.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WhyChoose$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/WhyChoose.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ServicesSection.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/FaqSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkProcess$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/WorkProcess.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/Clients.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ReviewContactSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ReviewContactSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const revalidate = 60; // ISR: Revalidate every 60 seconds
async function HomePage() {
    const [posts, services] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedPosts"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"])()
    ]);
    const featuredPosts = posts.slice(0, 3);
    const featuredServices = services.slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-24 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StackCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WhyChoose$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkProcess$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ReviewContactSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa148789._.js.map