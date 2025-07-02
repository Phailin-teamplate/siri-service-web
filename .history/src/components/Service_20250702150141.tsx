"use client";

import Image from "next/image";
import type { Metadata } from "next";
import Service1 from "@/public/service/service1.png";
import Service2 from "@/public/service/service2.png";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Service() {
  return (
    <div className="w-full bg-white px-6 md:px-12 py-20" id="service">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left mb-30">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          Our Services
        </h2>
      </div>

      {/* Service 1 Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-10">
        {/* Text */}
        <div className="w-full max-w-[720px] text-center md:text-left">
          <h1 className="text-black text-3xl sm:text-3xl font-semibold mb-6">
            Event Planning & Management
          </h1>
          <p className="text-gray-700 text-3xl font-normal leading-relaxed">
            We provide end-to-end planning and <br />
            on-site management for government,
            <br />
            corporate, and institutional events
            <br />
            including forums, exhibitions, and
            <br />
            conferences.
          </p>
        </div>
        {/* Image */}
        <div className="w-full max-w-[500px] ">
          <Image
            src={Service1}
            alt="Service1"
            width={500}
            height={340}
            className="object-cover w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
       {/* Service 2 Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start justify-center mt-10 gap-10 md:gap-10">
         {/* Image */}
        <div className="w-full max-w-[500px] ">
          <Image
            src={Service2}
            alt="Service2"
            width={500}
            height={340}
            className="object-cover w-full h-auto rounded-xl"
            priority
          />
        </div>
        {/* Text */}
        <div className="w-full max-w-[720px] text-center md:text-left">
          <h1 className="text-black text-3xl sm:text-3xl font-semibold mb-6">
            Event Planning & Management
          </h1>
          <p className="text-gray-700 text-3xl font-normal leading-relaxed">
            We provide end-to-end planning and <br />
            on-site management for government,
            <br />
            corporate, and institutional events
            <br />
            including forums, exhibitions, and
            <br />
            conferences.
          </p>
        </div>
       
      </div>
    </div>
  );
}
