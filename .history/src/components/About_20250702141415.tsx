import Image from "next/image";

import AboutSV from "@/public/About.png";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function About() {
  return (
    <div className="w-full">
      <div className="w-full max-w-2xl text-center md:text-left">
        <p className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
          About Us
        </p>
      </div>
      <div className="flex flex-col px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 ">
        <section
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:scroll-mt-30 scroll-mt-23" // Added scroll margin
          id="about"
        >
          {/* Image Section */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image src={AboutSV} alt="About" fill className="object-cover" />
          </div>
          {/* Text Section */}
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
              IT Specialized Company Based in Laos
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              We are a Laos-based IT startup aiming for the global market.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              We are targeting not only the local market in Laos but also
              neighboring Southeast Asian countries and the Northeast Asian
              market, including South Korea.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
