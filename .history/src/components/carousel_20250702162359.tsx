"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import ForumImage from "@/public/About.png";
import AnotherImage from "@/public/service/service1.png";

const items = [
  {
    image: ForumImage,
    title: "2025 Lao Digital Forum",
    subtitle: "Event Organization & Interpretation",
    description:
      "As the event organizer, we successfully hosted the 2025 Lao Digital Forum, overseeing the entire event operation. We also provided Korean–Lao interpretation services, ensuring smooth and effective communication throughout the forum.",
  },
  {
    image: AnotherImage,
    title: "IT Training for Public Sector",
    subtitle: "Technical Workshop & Translation",
    description:
      "We organized IT capacity-building workshops for public institutions, including on-site translation and documentation in Lao and English. We ensured smooth knowledge transfer for all participants.",
  },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ⏱️ Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-20 scroll-mt-24" id="portfolio">
      {/* Section Title */}
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#D3B156] mb-10">
        Our Portfolio
      </h2>

      {/* Carousel */}
      <Carousel className="relative w-full">
        <CarouselContent className="transition-all duration-700">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={`transition-opacity duration-700 ${index === activeIndex ? "block" : "hidden"}`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">{item.subtitle}</p>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious onClick={() => setActiveIndex((prev) => (prev - 1 + items.length) % items.length)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === activeIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
