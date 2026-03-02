"use client";

import { useEffect, useState, useRef } from "react";
import { getSupabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";

const fallbackServices = [
  {
    tag: "Digital Security",
    title: "Data Guard Sentinel",
    description:
      "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    image_url: "/service1.png",
    gradient_from: "from-fuchsia-600",
    gradient_to: "to-orange-400",
  },
  {
    tag: "Digital Shop",
    title: "Woo commerce",
    description: "Collaboratively formulate principle capital.",
    image_url: "/service2.png",
    gradient_from: "from-blue-600",
    gradient_to: "to-purple-500",
  },
  {
    tag: "CRM solutions",
    title: "CRM Solutions",
    description: "Progressively evolve user revolutionary hosting services.",
    image_url: "/service3.png",
    gradient_from: "from-purple-600",
    gradient_to: "to-pink-500",
  },
  {
    tag: "Web Design",
    title: "Web Design",
    description: "Collaboratively formulate principle capital.",
    image_url: "/service4.png",
    gradient_from: "from-indigo-600",
    gradient_to: "to-purple-600",
  },
];

export default function ServicesSection() {
  const [services, setServices] = useState(fallbackServices);
  const swiperRef = useRef(null);

useEffect(() => {
  const fetchServices = async () => {
    const supabase = getSupabase(); // ← Initialize the client

    if (!supabase || !supabase.from) {
      console.warn("Supabase client not initialized, using fallback services");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("order_no", { ascending: true });

      if (error) {
        console.warn("Error fetching services:", error.message);
        return;
      }

      if (data && data.length > 0) {
        setServices(data);
      }
    } catch (err) {
      console.error("Unexpected error fetching services:", err);
    }
  };

  fetchServices();
}, []);

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Left Background Vectors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="services-vector"></div>
        <div className="services-vector services-vector-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading + Top Right Arrows */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-blue-600 font-semibold uppercase text-sm">
              Our Services
            </span>
            <h2 className="text-4xl font-bold mt-2">Best Solutions</h2>
          </div>

          {/* Custom Round Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl p-8 text-white 
bg-gradient-to-br ${service.gradient_from} ${service.gradient_to} 
flex flex-col justify-between h-[520px]`}
              >
                <div>
                  <span className="text-sm bg-white/20 px-4 py-1 rounded-full">
                    {service.tag}
                  </span>

                  <h3 className="text-2xl font-bold mt-6">{service.title}</h3>

                  <p className="mt-4 text-sm text-white/90">
                    {service.description}
                  </p>

                  <button className="mt-6 border border-white/40 px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
                    Read More →
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full object-cover rounded-b-3xl"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
