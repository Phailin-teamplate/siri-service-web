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
<div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-10 space-y-20">
  {/* Service 1 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
    {/* Text */}
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Event Planning & Management
      </h1>
      <p className="text-gray-700 text-3xl md:text-3xl font-normal leading-relaxed">
        We provide end-to-end planning and<br />
        on-site management for government,<br />
        corporate, and institutional events<br />
        including forums, exhibitions, and<br />
        conferences.
      </p>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
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

  {/* Service 2 */}
  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
    {/* Image */}
    <div className="w-full md:w-1/2 max-w-md">
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
    <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-black text-3xl md:text-3xl font-semibold mb-4">
        Interpretation & Translation
      </h1>
      <p className="text-gray-700 text-3xl md:text-3xl font-normal leading-relaxed">
        We offer professional interpretation and<br />
        translation services in multiple languages<br />
        for conferences, meetings, and official<br />
        documents tailored to international standards.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}
