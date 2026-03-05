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
    tag: "CX as a Service",
    title: "Cloud Contact Center Solutions",
    description:
      "Transform your customer interactions into growth opportunities with our Cloud Contact Center solutions.",
    image_url:
      "https://www.nextiva.com/cdn-cgi/image/width=1200,height=675,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/01/customer-experience-cx-software-1.webp?resize=1024,576",
    gradient_from: "from-fuchsia-600",
    gradient_to: "to-orange-400",
  },
  {
    tag: "Conversational AI",
    title: "AI-Powered Conversations",
    description:
      "Empower your business with cutting-edge Conversational AI solutions curated from platforms like Kore.AI, Yellow.AI, Google CCAI, Amazon, Microsoft, and more.",
    image_url:
      "https://www.nextiva.com/cdn-cgi/image/width=1200,height=675,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/01/customer-experience-cx-software-1.webp?resize=1024,576",
    gradient_from: "from-blue-600",
    gradient_to: "to-purple-500",
  },
  {
    tag: "Automation as a Service",
    title: "Efficiency & Agility",
    description:
      "At Exato, we are the Automation Accelerator, driving organizations towards unprecedented efficiency and agility.",
    image_url:
      "https://www.nextiva.com/cdn-cgi/image/width=1200,height=675,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/01/customer-experience-cx-software-1.webp?resize=1024,576",
    gradient_from: "from-purple-600",
    gradient_to: "to-pink-500",
  },
  {
    tag: "Unified Communications",
    title: "Enterprise Communication Solutions",
    description:
      "Delivers integrated technology solutions for secure, scalable, and efficient enterprise communication and IT infrastructure management.",
    image_url:
      "https://plus.unsplash.com/premium_photo-1723291315024-89b911f46471?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient_from: "from-indigo-600",
    gradient_to: "to-purple-600",
  },
  {
    tag: "Exato IQ",
    title: "Seamless System Integrations",
    description:
      "We create technological bridges, like CTI connections and WFM connectors, enabling software and phone systems to communicate seamlessly.",
    image_url:
      "https://www.nextiva.com/cdn-cgi/image/width=1200,height=675,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/01/customer-experience-cx-software-1.webp?resize=1024,576",
    gradient_from: "from-green-600",
    gradient_to: "to-teal-500",
  },
  {
    tag: "Cloud ERP",
    title: "Modern ERP & CRM Solutions",
    description:
      "Built using world-class cloud and mobile technology, Acumatica’s applications deliver adaptable and integrated ERP and CRM solutions.",
    image_url:
      "https://images.unsplash.com/photo-1555421689-2d2c6f08333f?crop=entropy&cs=tinysrgb&fit=max&h=500&w=800",
    gradient_from: "from-yellow-600",
    gradient_to: "to-orange-500",
  },
];
export default function ServicesSection() {
  const [services, setServices] = useState(fallbackServices);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      const supabase = getSupabase(); // ← Initialize the client

      if (!supabase || !supabase.from) {
        console.warn(
          "Supabase client not initialized, using fallback services",
        );
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
    <section className="relative py-24  overflow-hidden">
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
                className={`relative overflow-hidden rounded-3xl p-6 text-white 
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

                {/* Responsive Image Section */}
                <div className="w-full mt-4 flex-shrink-0 h-[40%] md:h-[45%] lg:h-[50%] relative ">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    fill
                    className="object-cover rounded-2xl"
                    priority
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
