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
    <div className="w-full bg-white px-6 md:px-12 py-20" id="about">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          About Us
        </h2>
      </div>

      {/* Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
  {/* Image */}
  <div className="w-full max-w-[660px] ">
    <Image
      src={AboutSV}
      alt="About"
    width={500}
            height={300}
      className="object-cover w-full h-auto rounded-xl"
      priority
    />
  </div>

  {/* Text */}
  <div className="w-full max-w-[720px] text-center md:text-left">
    <p className="text-3xl font-medium leading-relaxed text-gray-800">
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
