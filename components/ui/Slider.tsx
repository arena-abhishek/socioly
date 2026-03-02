"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface SliderProps {
  images: string[];
  className?: string;
  clipPath?: string;
}

export default function Slider({
  images,
  className = "",
  clipPath,
}: SliderProps) {
  return (
    <div className={className} style={{ clipPath }}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
        speed={700}
        allowTouchMove={false}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="w-full object-cover"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}