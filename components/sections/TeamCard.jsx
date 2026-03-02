"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ member }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative h-[320px] rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Gradient Border on Hover */}
      <div
        className={`absolute inset-0 rounded-3xl p-[2px] transition-all duration-300 
        ${
          isHover
            ? "bg-gradient-to-br from-fuchsia-500 to-[#2b4dff]"
            : "bg-transparent border border-fuchsia-500/40"
        }`}
      >
        <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white">
          {/* Image */}
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover object-top transition duration-500 
            ${isHover ? "brightness-75 scale-105" : "brightness-95"}`}
          />

          {/* Bottom Blue Line */}
          {/* <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2b4dff]" /> */}

          {/* Bottom Name + Role */}
          <AnimatePresence>
            {isHover && (
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full bg-[#2b4dff] text-white px-6 py-5 z-10"
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm opacity-90">{member.role}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Pill */}
          {/* Social Pill */}
          <AnimatePresence>
            {isHover && (
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-6 right-0 z-20"
              >
                <div className="bg-white rounded-l-full py-4 px-3 flex flex-col gap-5 shadow-lg">
                  {/* Gradient Definition */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="iconGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#2b4dff" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <a
                    href={member.social.facebook}
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <FaFacebookF style={{ fill: "url(#iconGradient)" }} />
                  </a>

                  <a
                    href={member.social.instagram}
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <FaInstagram style={{ fill: "url(#iconGradient)" }} />
                  </a>

                  <a
                    href={member.social.linkedin}
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <FaLinkedinIn style={{ fill: "url(#iconGradient)" }} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
