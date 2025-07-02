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
     <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-10">
  <h2 className="text-center text-xl md:text-2xl font-semibold text-yellow-600 mb-8">
    Our Partners
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
    {[KLab, KLab, KLab, KLab, KLab, KLab, KLab, KLab, KLab, KLab].map((logo, index) => (
      <div key={index} className="flex justify-center items-center">
        <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={`Logo ${index + 1}`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
