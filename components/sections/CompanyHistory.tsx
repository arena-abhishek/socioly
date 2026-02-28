"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { historyData } from "@/lib/constants/history";

export default function CompanyHistory() {
  return (
    <section className="relative py-20 bg-[#f7f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Company History
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-10">
              Our Company History
            </h2>

            <div className="relative border-l border-gray-300 ml-4 space-y-10">
              {historyData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  {/* Timeline Circle */}
                  <div className="absolute -left-[18px] top-1 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
                    {item.id}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/history-img.jpg"
                alt="Company History"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}