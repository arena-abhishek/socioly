"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "What is CXaaS?",
    answer:
      "CXaaS stands for Customer Experience as a Service. It is our comprehensive model that combines technology (like CCaaS and AI) with strategic consulting to manage the entire customer journey.",
  },
  {
    question: "How does your AI handle complex customer queries?",
    answer:
      "We use Generative AI and advanced NLP engines that go beyond predefined scripts. This allows our systems to understand context and provide human-like, dynamic responses.",
  },
  {
    question: "Can your solutions integrate with our existing CRM?",
    answer:
      'Yes. We specialize in "Ecosystem Integration," creating technological bridges (CTI and WFM connectors) that allow our tools to communicate seamlessly with your existing software.',
  },
  {
    question: "What industries do you serve?",
    answer:
      "We have deep expertise in BFSI (Banking/Insurance), Healthcare, Retail, Telecom, Manufacturing, and the IT/BPO sectors.",
  },
  {
    question: "Do you offer support after implementation?",
    answer:
      'Absolutely. We provide "Ongoing Monitoring and Support," including 24/7 technical assistance and performance audits to ensure your systems remain optimized.',
  },
];

export default function FaqSection() {
  // Default: first item open
  const [active, setActive] = useState<number>(0);

  const toggle = (index: number) => {
    // Prevent all collapsing: if clicked same as active, do nothing
    if (active === index) return;
    setActive(index);
  };

  return (
    <section className="relative w-full bg-[#f3f4f6] overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="relative h-[500px] lg:h-[650px]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
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
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-6 mb-10 leading-snug">
            Everything You Need To Know About CXaaS
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
                      active === index ? "text-indigo-600" : "text-gray-800"
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
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
      <div
  className="absolute bottom-[-250px] right-[-150px] w-[400px] h-[400px] 
             bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-400 
             rounded-full blur-3xl opacity-30 pointer-events-none
             sm:bottom-[-200px] sm:right-[-200px] md:w-[500px] md:h-[500px]"
/>
    </section>
  );
}