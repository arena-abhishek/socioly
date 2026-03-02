"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    tag: "Problem Solving",
    title: "Empowering Brands to Thrive in the Digital World",
    description:
      "At Socioly, we blend creativity with strategy to help brands grow faster, smarter, and more effectively through data-driven digital marketing.",
    points: [
      "Customized marketing campaigns tailored for real impact.",
      "ROI-focused strategies across every digital channel.",
      "Consistent growth through innovative marketing solutions.",
    ],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    ],
  },
  {
    id: 2,
    tag: "Creative Strategy",
    title: "Innovative Ideas That Drive Real Results",
    description: "We create meaningful digital experiences powered by creativity.",
    points: ["Brand-first mindset", "Conversion-driven campaigns", "Measurable outcomes"],
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    ],
  },
  {
    id: 3,
    tag: "Growth Marketing",
    title: "Scaling Businesses With Smart Execution",
    description: "Our performance-driven model ensures long-term growth.",
    points: ["Data-backed decisions", "Omnichannel presence", "High ROI focus"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    ],
  },
];

export default function StackCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = document.querySelectorAll(".stack-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#f4f6fb]">
      {cards.map((card, index) => (
        <div
          key={card.id}
          data-index={index}
          style={{ zIndex: index + 1 }}
          className={`
            stack-card
            w-full
            ${/* Sticky + full-screen only on lg */ ""}
            lg:sticky lg:top-0 lg:h-screen
            flex items-center justify-center
            py-12 lg:py-0
          `}
        >
          <div className="max-w-7xl w-full px-6 lg:px-12">
            {/* Sticky Tabs on Desktop */}
            <div className="hidden lg:block absolute w-[30%] right-80 top-40 z-50 pointer-events-none">
              <div className="relative max-w-7xl mx-auto h-16">
                {cards.map((c, i) => (
                  <div
                    key={c.id}
                    className={`
                      absolute top-0
                      ${i === 0 ? "left-0" : i === 1 ? "left-1/2 -translate-x-1/2" : "right-0"}
                      px-8 py-3 rounded-full border-2 text-sm font-medium
                      transition-all duration-500
                      ${i > activeIndex
                        ? "opacity-0 pointer-events-none"
                        : i === activeIndex
                        ? "bg-blue-600 border-blue-600 text-white opacity-100"
                        : "bg-transparent border-blue-600 text-blue-600 opacity-100"}
                    `}
                  >
                    {c.tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative clip-card bg-white rounded-[45px] border-2 border-blue-500 shadow-xl overflow-visible pt-16">
              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
              </div>

              <div className="p-6 md:p-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* LEFT IMAGES */}
                <div className="relative flex justify-center mb-8 lg:mb-0">
                  <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
                    {card.images.map((img, i) => {
                      const positions = [
                        "absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60",
                        "absolute bottom-0 left-10 w-40 h-40 md:w-60 md:h-60",
                        "absolute top-10 right-0 w-48 h-48 md:w-72 md:h-72",
                      ];
                      return (
                        <div
                          key={i}
                          className={`rounded-full overflow-hidden ${positions[i]}`}
                        >
                          <Image src={img} alt="" fill className="object-cover" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div>
                  <div className="relative pl-10 inline-block">
                    <span className="text-blue-600 text-sm font-semibold uppercase">
                      {card.tag}
                    </span>

                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-3 border-2 border-blue-600 rounded-full"></span>

                    <span className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-3 bg-gradient-to-r from-blue-600 to-black rounded-full"></span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                    {card.title}
                  </h2>

                  <p className="text-gray-600 mt-6 leading-relaxed">{card.description}</p>

                  <ul className="mt-6 space-y-3 text-gray-700">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="inline-flex mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                  >
                    Know More ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
/*    <section className="relative bg-[#f4f6fb] lg:h-[300vh]">
{cards.map((card, index) => (
<div
  key={card.id}
  data-index={index}
  style={{ zIndex: cards.length - index }}
  className="stack-card w-full lg:sticky lg:top-0 lg:h-screen flex items-center justify-center py-12 lg:py-0"
>
  <div className="max-w-[90vw] md:max-w-7xl w-full px-4 md:px-12">
    
    <div className="relative bg-white border-2 border-blue-500 shadow-xl rounded-[20px] md:rounded-[45px] overflow-hidden pt-4 md:pt-16">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="p-4 md:p-16 grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
       
        <div className="relative flex justify-center mb-6 md:mb-0">
          <div className="relative w-[200px] sm:w-[280px] md:w-[420px] h-[200px] sm:h-[280px] md:h-[420px]">
            {card.images.map((img, i) => {
              const positions = [
                "absolute top-0 left-0 w-1/3 sm:w-40 md:w-60 h-1/3 sm:h-40 md:h-60",
                "absolute bottom-0 left-2 w-1/3 sm:w-40 md:w-60 h-1/3 sm:h-40 md:h-60",
                "absolute top-2 right-0 w-1/2 sm:w-48 md:w-72 h-1/2 sm:h-48 md:h-72",
              ];
              return (
                <div key={i} className={`rounded-full overflow-hidden ${positions[i]}`}>
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              );
            })}
          </div>
        </div>

        
        <div>
          <div className="relative pl-4 md:pl-10 inline-block">
            <span className="text-blue-600 text-xs sm:text-sm font-semibold uppercase">
              {card.tag}
            </span>

            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-2 border-2 border-blue-600 rounded-full"></span>

            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-2 bg-gradient-to-r from-blue-600 to-black rounded-full"></span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold mt-4 leading-tight">
            {card.title}
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
            {card.description}
          </p>

          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            {card.points.map((point, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-1" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="inline-flex mt-4 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm sm:text-base"
          >
            Know More ↗
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
))}
</section> */




//  version with framer motion scroll effects, not used in the end but kept for reference
/* "use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    tag: "Problem Solving",
    title: "Empowering Brands to Thrive in the Digital World",
    description:
      "At Socioly, we blend creativity with strategy to help brands grow faster, smarter, and more effectively through data-driven digital marketing.",
    points: [
      "Customized marketing campaigns tailored for real impact.",
      "ROI-focused strategies across every digital channel.",
      "Consistent growth through innovative marketing solutions.",
    ],
    images: [
      "/images/about1.jpg",
      "/images/about2.jpg",
      "/images/about3.jpg",
    ],
  },
  {
    id: 2,
    tag: "Creative Strategy",
    title: "Innovative Ideas That Drive Real Results",
    description:
      "We combine research and creativity to build meaningful digital experiences.",
    points: [
      "Brand-first approach",
      "Conversion-driven campaigns",
      "Measurable performance",
    ],
    images: [
      "/images/about4.jpg",
      "/images/about5.jpg",
      "/images/about6.jpg",
    ],
  },
  {
    id: 3,
    tag: "Growth Marketing",
    title: "Scaling Businesses With Smart Digital Execution",
    description:
      "Our performance-led approach ensures long-term sustainable growth.",
    points: [
      "Data-backed decisions",
      "Omnichannel strategy",
      "High ROI focus",
    ],
    images: [
      "/images/about7.jpg",
      "/images/about8.jpg",
      "/images/about9.jpg",
    ],
  },
];

export default function AboutStackSection() {
  return (
    <section className="relative bg-[#f5f5f7]">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="h-[100dvh] sticky top-0 flex items-center justify-center"
          style={{ zIndex: cards.length - index }}
        >
          <div className="max-w-7xl w-full px-6 lg:px-12">
            <div className="relative border-2 border-blue-500 rounded-[40px] p-6 md:p-16 bg-white shadow-xl">

           
              <div className="absolute -top-6 right-10 bg-white">
                <span className="px-6 py-3 border border-blue-500 rounded-full text-blue-600 font-medium text-sm">
                  {card.tag} ↗
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">

        
                <div className="relative flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">

                  
                    <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
                      <Image
                        src={card.images[0]}
                        alt="about"
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 160px, 240px"
                      />
                    </div>

                    <div className="absolute bottom-0 left-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
                      <Image
                        src={card.images[1]}
                        alt="about"
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 160px, 240px"
                      />
                    </div>

                  
                    <div className="absolute top-10 right-0 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
                      <Image
                        src={card.images[2]}
                        alt="about"
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 200px, 300px"
                      />
                    </div>

                  </div>
                </div>

             
                <div>
                  <span className="text-blue-600 font-medium text-sm">
                    ABOUT US
                  </span>

                  <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                    {card.title}
                  </h2>

                  <p className="text-gray-600 mt-6 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-gray-700">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                  >
                    Know More ↗
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} */
/* "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";

const cards = [
  {
    smallTopBtn: "Creative Strategy",
    tag: "ABOUT US",
    title: "Empowering Brands to Thrive in the Digital World",
    paragraph:
      "At Socioly, we blend creativity with strategy to build strong digital brands and drive measurable growth.",
    list: [
      "Customized marketing strategies tailored for your brand",
      "ROI-focused campaigns with data-driven insights",
      "Creative growth strategies to maximize engagement",
    ],
    gradient: "from-blue-500 to-indigo-500",
    ctaAlign: "left",
  },
  {
    smallTopBtn: "Our Mission",
    tag: "OUR MISSION",
    title: "Driving Meaningful Growth Through Smart Digital Marketing",
    paragraph:
      "We empower businesses to scale through intelligent marketing solutions and innovation-driven strategies.",
    list: [
      "Strategic digital growth solutions",
      "Strong analytics and performance tracking",
      "Scalable marketing campaigns",
    ],
    gradient: "from-purple-500 to-indigo-500",
    ctaAlign: "right",
  },
  {
    smallTopBtn: "Our Vision",
    tag: "OUR VISION",
    title: "Shaping the Future of Marketing Through Innovation",
    paragraph:
      "Our vision is to lead brands toward sustainable success using future-ready marketing approaches.",
    list: [
      "Innovation-focused brand positioning",
      "Future-proof marketing systems",
      "Long-term performance strategy",
    ],
    gradient: "from-pink-500 to-purple-500",
    ctaAlign: "center",
  },
];

export default function StackCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-[#f4f6fb]">
      <Container>
      <div className="sticky top-20 flex items-center justify-center h-screen">

        {cards.map((card, i) => {
          const scale = useTransform(
            scrollYProgress,
            [i * 0.3, 1],
            [1 - i * 0.05, 1]
          );

          const y = useTransform(
            scrollYProgress,
            [i * 0.3, 1],
            [i * 80, 0]
          );

          return (
            <motion.div
              key={i}
              style={{ scale, y, zIndex: cards.length - i }}
              className="absolute w-[1000px] bg-white rounded-[28px] border border-blue-500 shadow-2xl p-12"
            >
              <Card card={card} />
            </motion.div>
          );
        })}

      </div>
       </Container>
    </section>
  );
}


function Card({ card }: any) {
  return (
    <div className="relative grid grid-cols-2 gap-14 items-center">

  
      <div className="absolute -top-6 right-10 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">
        {card.smallTopBtn} ↗
      </div>

 
      <div className="relative flex justify-center items-center">

        <div className="absolute w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl -top-6 left-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="absolute w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bottom-0 right-0">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

      
        <div
          className={`absolute -top-12 right-16 w-24 h-24 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white text-xl shadow-xl`}
        >
          ↗
        </div>
      </div>

 
      <div>

        <div className="text-xs tracking-wider text-blue-600 font-semibold mb-3">
          {card.tag}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
          {card.title}
        </h2>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {card.paragraph}
        </p>

        <ul className="space-y-2 mb-6">
          {card.list.map((item: string, idx: number) => (
            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

   
        <div
          className={`flex ${
            card.ctaAlign === "left"
              ? "justify-start"
              : card.ctaAlign === "right"
              ? "justify-end"
              : "justify-center"
          }`}
        >
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm shadow-lg hover:scale-105 transition">
            Learn More →
          </button>
        </div>

      </div>
    </div>
  );
} */
