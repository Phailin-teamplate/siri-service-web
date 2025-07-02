"use client";

import Image from "next/image";
import AboutSV from "@/public/About.png";
import type { Metadata } from "next";
import Service1 from "@/public/service/service1.png"

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
          <h1 className="text-black text-3xl sm:text-3xl font-semibold mb-4">
            Event Planning & Management
          </h1>
          <p className="text-gray-700 text-2xl font-medium leading-relaxed">
            We provide end-to-end planning and on-site management for
            government, corporate, and institutional events including forums,
            exhibitions, and conferences.
          </p>
        </div>
        {/* Image */}
        <div className="w-full max-w-[570px] ">
          <Image
            src={Service1}
            alt="Service1"
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
