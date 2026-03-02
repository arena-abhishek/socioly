"use client";

import TeamCard from "./TeamCard";

const teamData = [
  {
    name: "Mr. Appuorv K Sinha",
    role: "Chairman & Managing Director",
    bio: "Mr. Appuorv K Sinha, aged 46 years, is the Promoter, Chairman and Managing Director of Exato.ai. He holds an MBA and has over 20 years of experience in CX, analytics, and enterprise tech. He oversees operations, software strategy & partnerships.",  
    image: "https://exato.ai/1-Appuorv-Sinha-p-500.png", // 🔹your uploaded image path
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Mrs. Swati Sinha",
    role: "Whole-Time Director",
    bio: "Mrs. Swati Sinha, aged 44, is Whole-Time Director focusing on HR, talent strategy and admin functions at Exato.ai.",  
    image: "https://exato.ai/swati.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Mr. Abhijeet Sinha",
    role: "Non-Executive Director",
    bio: "Mr. Abhijeet Sinha, aged 44, is Non-Executive Director at Exato.ai with over 20 years of legal experience and Advocate-on-Record at Supreme Court of India.",  
    image: "https://exato.ai/abhijeet.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Gopinath Bailur",
    role: "Chief Technology Officer (CTO)",
    bio: "Gopinath Bailur serves as Chief Technology Officer at Exato.ai bringing extensive tech leadership experience and expertise in customer interaction management.",  
    image: "https://exato.ai/gopinath-cto.jpg",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Rohit Kumar",
    role: "President & Co‑Founder",
    bio: "Rohit Kumar is Co‑Founder and Director at Exato.ai with rich leadership experience and has held senior roles in tech and banking prior to Exato.",  
    image: "https://exato.ai/3-Rohit-Kumar-p-500.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Dr. Omkar Rai",
    role: "Independent Director",
    bio: "Dr. Omkar Rai serves as Independent Director at Exato.ai with over 28 years of experience shaping India’s digital and IT ecosystem, including leading STPI.",  
    image: "https://exato.ai/omkar.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Mr. Vijay Kumar Tyagi",
    role: "Independent Director",
    bio: "Mr. Vijay Kumar Tyagi, aged 62, is Non‑Executive Independent Director of Exato.ai with deep banking sector experience and corporate governance expertise.",  
    image: "https://exato.ai/vijay.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sujit Kumar Verma",
    role: "Executive Advisor",
    bio: "Sujit Kumar Verma oversees product management and growth at Exato.ai, with prior leadership experience at Policybazaar and telecom tech firms.",  
    image: "https://exato.ai/sujit.png",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}