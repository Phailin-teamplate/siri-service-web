"use client";

import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ForumImage from "@/public/About.png";
import AnotherImage from "@/public/service/service1.png";
import Service2 from "@/public/service/service2.png";
import Service3 from "@/public/service/service3.png";
import Service4 from "@/public/service/service4.png";
import Service5 from "@/public/service/service5.png";
import { motion } from "framer-motion";

const items = [
  {
    image: AnotherImage,
    title: "2025 Lao Digital Forum",
    subtitle: "Event Organization & Interpretation",
    description:
      "As the event organizer, we successfully hosted the 2025 Lao Digital Forum, overseeing the entire event operation. We also provided Korean–Lao interpretation services, ensuring smooth and effective communication throughout the forum.",
  },
  {
    image: Service2,
    title: "IT Training for Public Sector",
    subtitle: "Technical Workshop & Translation",
    description:
      "We organized IT capacity-building workshops for public institutions, including on-site translation and documentation in Lao and English. We ensured smooth knowledge transfer for all participants.",
  },
  {
    image: Service3,
    title: "Mobile App for Agriculture Data",
    subtitle: "UX/UI Design & Cross-platform Development",
    description:
      "We developed a user-friendly mobile application that allows farmers to record, track, and share agricultural data in real time. The app supports multiple languages and works seamlessly across iOS and Android devices.",
  },
  {
    image: Service4,
    title: "Smart City Dashboard",
    subtitle: "Data Integration & Visualization",
    description:
      "We built a real-time dashboard for municipal governments to monitor traffic, air quality, and energy usage. The platform helps decision-makers make data-driven choices for city planning and resource optimization.",
  },
  {
    image: Service5,
    title: "Multilingual e-Learning Platform",
    subtitle: "Content Localization & LMS Setup",
    description:
      "We deployed a customized learning management system with multilingual support and localized content for education institutions. The platform enables remote learning with integrated video, quiz, and progress tracking features.",
  },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const goToPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    startAutoSlide();
  };

  const goToNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % items.length);
    startAutoSlide();
  };

  return (
    <div
      className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-10 sm:py-10 lg:py-16"
      id="portfolio"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D3B156]">
          Our Portfolio
        </h2>
      </motion.div>

      <motion.div
        className="relative w-full px-2 sm:px-4 md:px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Carousel>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={`transition-opacity duration-700 ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                {index === activeIndex && (
                  <motion.div
                    className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-14"
                    initial={{
                      opacity: 0,
                      x: direction === "right" ? 100 : -100,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: direction === "right" ? -100 : 100,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-full xl:w-1/2">
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[380px] xl:h-[420px] 2xl:h-[480px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={550}
                          height={400}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2 text-center xl:text-left">
                      <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-xl font-semibold text-gray-700 mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <button
          onClick={goToPrev}
          aria-label="Previous Slide"
          className="absolute left-2 xl:left-[-80px] top-1/2 -translate-y-1/2 z-10 
                     bg-white border border-gray-300 hover:border-yellow-500 
                     text-gray-600 hover:text-yellow-600 
                     rounded-full w-8 h-8 md:w-10 md:h-10 shadow-md 
                     flex items-center justify-center 
                     transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="absolute right-2 xl:right-[-80px] top-1/2 -translate-y-1/2 z-10 
                     bg-white border border-gray-300 hover:border-yellow-500 
                     text-gray-600 hover:text-yellow-600 
                     rounded-full w-8 h-8 md:w-10 md:h-10 shadow-md 
                     flex items-center justify-center 
                     transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button> */}

        <div className="flex justify-center mt-6 gap-2">
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
      </motion.div>
    </div>
  );
}
