"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants/testimonials";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewContactSection() {
  return (
    <section className="relative py-14 md:py-20 lg:py-28  overflow-hidden">

      {/* ================= DESKTOP BACKGROUND ================= */}

  {/* FULL SECTION BACKGROUND */}
  <div className="absolute inset-0 ">
    <Image
      src="/images/testimonials-bg.png"
      alt="Section Background"
      fill
      className="object-cover"
      priority
    />
  </div>

      {/* Left Full Image */}
      <div className="absolute left-0 top-0 bottom-0 w-[38%] hidden lg:block">
        <Image
          // src="/assets/img/contact-review-bg-img.jpg"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Angled Overlay */}
      <div className="absolute left-[34%] top-0 bottom-0 w-[180px] 
                      bg-white rotate-[10deg] origin-left hidden lg:block" />

      {/* Right Wave Pattern (Tablet+) */}
      <div className="absolute inset-0 hidden md:block 
                      bg-[url('/assets/img/wave.png')] 
                      bg-no-repeat bg-right bg-contain 
                      opacity-20 pointer-events-none" />

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-4 
                      grid grid-cols-1 lg:grid-cols-2 
                      gap-12 lg:gap-16 items-center">

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 
                          rounded-[18px] 
                          p-5 sm:p-6 md:p-8 lg:p-10
                          shadow-[0_15px_40px_rgba(0,0,0,0.15)] 
                          text-white">

            <span className="text-xs tracking-widest uppercase opacity-80">
              Talk To Us
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 mb-6 md:mb-8">
              How May We Help You!
            </h2>

            <form className="space-y-5 md:space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                <input className="formInput" placeholder="Your Name*" />
                <input className="formInput" placeholder="Your Email*" />
                <input className="formInput" placeholder="Subject*" />
                <input className="formInput" placeholder="Your Phone*" />

              </div>

              <textarea
                rows={4}
                placeholder="Write Message"
                className="formInput"
              />

              <button className="w-full py-3 md:py-4 bg-black rounded-md 
                                font-semibold hover:bg-gray-900 
                                transition shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* ================= TESTIMONIAL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-xs tracking-widest uppercase 
                          text-indigo-600 font-semibold">
            Clients Review
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl 
                        font-bold mt-3 mb-4">
            What They Say About Our
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 max-w-xl">
            It is a long established fact that a reader will be distracted
            by the readable content of a page.
          </p>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-6 sm:p-8 md:p-10 
                                rounded-[18px] 
                                shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

                  <div className="flex items-start gap-4 sm:gap-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full sm:w-[60px] sm:h-[60px]"
                    />

                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>

                      {/* SVG Stars */}
                      <div className="flex gap-1 mt-2 text-indigo-600">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg key={i} width="16" height="16" fill="currentColor">
                            <path d="M8 0l2.39 4.85 5.36.78-3.87 3.77.91 5.3L8 12.9l-4.79 2.8.91-5.3L.25 5.63l5.36-.78L8 0z"/>
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div className="ml-auto text-indigo-600 opacity-60">
                      <svg width="24" height="24" fill="currentColor">
                        <path d="M0 14h5l3-7H3L0 14zm10 0h5l3-7h-5l-3 7z"/>
                      </svg>
                    </div>

                  </div>

                  <p className="text-gray-600 mt-5 md:mt-6 text-sm sm:text-base">
                    {item.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start 
                          gap-6 mt-8 md:mt-10">

            <button className="navBtn prev-btn">‹</button>
            <button className="navBtn next-btn">›</button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}