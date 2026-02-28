"use client";

import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase.ts";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const fallbackData = {
  subtitle: "Why Choose Us",
  title: "Seeing The Full potential of Your Brand",
  video_url: "https://youtu.be/GGf1JjSAKP4",
  image_url: "/why-choose-us-img.png",
  points: [
    {
      title: "Quality Result",
      description:
        "There are many variations of passages of Digital Lorem Ipsum available.",
      icon: "quality",
    },
    {
      title: "Best Team Members",
      description:
        "There are many variations of passages available.",
      icon: "team",
    },
    {
      title: "High Success Rate",
      description:
        "Majority have suffered alteration in some form.",
      icon: "success",
    },
  ],
};

export default function WhyChoose() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    const fetchData = async () => {
      const { data: supaData } = await supabase
        .from("why_choose")
        .select("*")
        .single();

      if (supaData) {
        setData({
          ...supaData,
          points: supaData.points || fallbackData.points,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-xl">
            <Image
              src={data.image_url}
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
                  <h3 className="font-semibold text-lg">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}