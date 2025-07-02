"use client";

import Image from "next/image";
import AboutSV from "@/public/About.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Service() {
  return (
    <div className="w-full bg-white px-6 md:px-12 py-10" id="service">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          Our Services
        </h2>
      </div>

      {/* Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
  

        {/* Text */}
  <div className="w-full max-w-[720px] text-center md:text-left">
          <h1 className="text-black text-2xl sm:text-3xl font-semibold mb-4">
            Siri Service is a versatile company based in Laos
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Siri Service is a versatile company based in Laos, offering a wide range of
            services including event planning and management, interpretation and
            translation, visual design and publishing, as well as printing. We specialize
            in supporting foreign companies conducting various activities in Laos by
            providing localized, professional assistance across these areas.
          </p>
        </div>
        {/* Image */}
  <div className="w-full max-w-[570px] ">
          <Image
            src={AboutSV}
            alt="About"
            width={512}
            height={340}
            className="object-cover w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
