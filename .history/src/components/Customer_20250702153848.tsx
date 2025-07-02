"use client";

import Image from "next/image";
import type { Metadata } from "next";
import KLab from "@/public/customer/logo-klab.png";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Customer() {
  return (
    <div className="w-full bg-white px-6 md:px-12 " id="customer">
      {/* Section Title */}
      <div className="text-center flex justify-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          Our Customers
        </h2>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-10 space-y-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-5">
          <div className="flex">
            {/* Image */}
            <div className="w-full md:w-1/2 max-w-md">
              <Image
                src={KLab}
                alt="KLab"
                width={500}
                height={340}
                className="object-cover w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
