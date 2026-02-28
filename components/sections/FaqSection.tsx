"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "Where should I incorporate my business?",
    answer:
      "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
  },
  {
    question: "How long should a business plan be?",
    answer:
      "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
  },
  {
    question: "Be Part of a Community",
    answer:
      "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(1);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#f3f4f6] overflow-hidden">
      
      {/* Full width grid */}
      <div className="grid lg:grid-cols-2 items-center">

        {/* LEFT SIDE IMAGE (FULL WIDTH EDGE) */}
        <div className="relative h-[500px] lg:h-[650px]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full">
            <defs>
              <clipPath id="faqCurve" clipPathUnits="objectBoundingBox">
                <path d="M0,0 L1,0 L1,1 Q0.3,0.95 0,0.85 Z" />
              </clipPath>
            </defs>
          </svg>

          <div
            className="relative w-full h-full"
            style={{ clipPath: "url(#faqCurve)" }}
          >
            <Image
              src="/faq-img.png"
              alt="FAQ"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="relative px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
          
          <span className="flex items-center gap-2 text-sm font-medium text-indigo-500 uppercase tracking-wider">
            <span className="w-5 h-2 bg-indigo-500 rounded-full"></span>
            Frequently Ask Question
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-6 mb-10 leading-snug">
            Let's Meet And Work Together Your Project
          </h2>

          <div className="space-y-5 max-w-xl">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl transition-all duration-300 hover:shadow-2xl"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3
                    className={`font-medium text-lg ${
                      active === index
                        ? "text-indigo-600"
                        : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </h3>

                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      active === index
                        ? "rotate-90 text-indigo-600"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Right Gradient Blur */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-400 rounded-full blur-3xl opacity-30" />
    </section>
  );
}