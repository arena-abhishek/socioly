"use client";

import TeamCard from "./TeamCard";

const teamData = [
  {
    name: "Leslie Alexander",
    role: "Web Designer",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Devon Lane",
    role: "UI Designer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Esther Howard",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Cody Fisher",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f0e9b33d1f?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Jane Cooper",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Wade Warren",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Brooklyn Simmons",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Savannah Nguyen",
    role: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
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