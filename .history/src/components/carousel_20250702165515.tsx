"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  return (
    <div
      className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-20 scroll-mt-24"
      id="portfolio"
    >
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#D3B156] mb-12">
        Our Portfolio
      </h2>

      {/* Carousel */}
      <div className="relative w-full">
        <Carousel>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={`transition-opacity duration-700 ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="w-full max-w-[650px] h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[400px] mx-auto  rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={550}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-xl font-semibold text-gray-700 mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-sm md:text-lg text-gray-800 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
          }
          aria-label="Previous Slide"
          className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-yellow-600 rounded-full w-10 h-10 shadow-md flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
          aria-label="Next Slide"
          className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-yellow-600 rounded-full w-10 h-10 shadow-md flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-yellow-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
