import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export interface AboutHeroData {
  title: string;
  highlight: string;
  description1: string;
  description2: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export default function AboutHero({ data }: { data: AboutHeroData }) {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {data.title}{" "}
              <span className="text-indigo-600">
                {data.highlight}
              </span>
              .
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              {data.description1}
            </p>

            <p className="text-lg text-slate-600">
              {data.description2}
            </p>

            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href={data.cta.href}>
                  {data.cta.label}
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}