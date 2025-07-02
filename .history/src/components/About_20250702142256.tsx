"use client";

import Image from "next/image";
import AboutSV from "@/public/About.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function About() {
  return (
    <div className="w-full bg-white px-6 md:px-12 py-10" id="about">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          About Us
        </h2>
      </div>

      {/* Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16">
        {/* Image */}
        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md">
          <Image
            src={AboutSV}
            alt="About"
            width={512}
            height={340}
            className="object-cover w-full h-auto rounded-xl"
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full max-w-xl text-center md:text-left">
          
          <p className="text-3xl md:text-5xl font-extrabold leading-relaxed">
            Siri Service is a versatile company based in Laos, offering a wide range of
            services including event planning and management, interpretation and
            translation, visual design and publishing, as well as printing. We specialize
            in supporting foreign companies conducting various activities in Laos by
            providing localized, professional assistance across these areas.
          </p>
        </div>
      </div>
    </div>
  );
}
