"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase"; // ✅ use getSupabase
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const fallbackData = {
  subtitle: "Why Choose Us",
  title: "We Position Ourselves as an Experience Integrator",
  video_url: "https://youtu.be/GGf1JjSAKP4",
  image_url: "/images/why-choose-us.png",
  points: [
    {
      title: "Cutting-Edge Technology",
      description:
        "Our solutions are powered by advanced LLM models, Generative AI, and NLP engines, ensuring conversations are context-aware and natural.",
      icon: "technology",
    },
    {
      title: "Industry-Focused Approach",
      description:
        "We provide consulting-led solutions tailored to sectors like BFSI, Healthcare, Retail, and Telecom.",
      icon: "industry",
    },
    {
      title: "Proven Scale & Global Presence",
      description:
        "Serving 150+ enterprise customers across USA, Singapore, and India, managing over 100,000 agent licenses globally.",
      icon: "global",
    },
  ],
};
export default function WhyChoose() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = getSupabase(); // ✅ Supabase client

      if (!supabase || !supabase.from) {
        console.warn("Supabase client not initialized, using fallback data");
        return;
      }

      try {
        const { data: supaData, error } = await supabase
          .from("why_choose")
          .select("*")
          .single();

        if (error) {
          console.warn("Supabase fetch error, using fallback data:", error.message);
          return;
        }

        if (supaData) {
          setData({
            ...supaData,
            points: supaData.points || fallbackData.points, // points fallback
          });
        }
      } catch (e) {
        console.error("Unexpected fetch error, using fallback data:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
    <Image
      src="/images/why-choose-us-bg.png"   // 👈 your background image
      alt="background"
      fill
      quality={100}
      className="object-cover object-center "
      priority
    />
  </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden ">
            <Image
              src={data.image_url}
              //  src="https://images.unsplash.com/photo-1581091870622-fca4dc3d3c27?crop=entropy&cs=tinysrgb&fit=max&h=500&w=800"
              alt="Why Choose Us"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority={false}
            />
          </div>

          {/* Play Button */}
          <a
            href={data.video_url}
            target="_blank"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-blue-600 hover:bg-blue-700 transition p-6 rounded-full shadow-lg">
              <Play className="text-white w-8 h-8 fill-white" />
            </div>
          </a>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            {data.subtitle}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 leading-tight">
            {data.title}
          </h2>

          <div className="space-y-6">
            {data.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="bg-blue-100 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-blue-600 rounded-full" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}