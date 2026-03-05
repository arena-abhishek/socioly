"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { workProcessData } from "@/lib/constants/workProcess";
import { ArrowRight } from "lucide-react";

export default function WorkProcess() {
  return (
    <section className="relative py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Work Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Our Development Process
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {workProcessData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Image Circle */}
              <div className="relative mx-auto w-44 h-44 rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center">
                
                <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg">
                  {item.id}
                </div>

                <div className="w-36 h-36 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>

              {/* Arrow (Desktop Only) */}
              {index !== workProcessData.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-10 text-gray-300">
                  <ArrowRight size={40} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}