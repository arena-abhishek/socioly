"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientsData } from "@/lib/constants/clients";

export default function Clients() {
  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

          {/* Optional subtle pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />

          {/* Slider */}
          <div className="relative py-12">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[150px]"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain brightness-0 invert opacity-90 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}