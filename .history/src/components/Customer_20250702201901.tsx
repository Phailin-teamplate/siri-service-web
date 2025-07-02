"use client";

import Image from "next/image";
import type { Metadata } from "next";
import KLab from "@/public/customer/logo-klab.png";
import Ktra from "@/public/customer/logo-kotra.png";
import AKCF from "@/public/customer/logo-akcf.png";
import KWISA from "@/public/customer/logo-kwisa.png";
import FEN from "@/public/customer/logo-fen.png";
import IDCC from "@/public/customer/logo-idcc.png";
import NIPA from "@/public/customer/logo-nipa.png";
import KCFS from "@/public/customer/logo-kcfs.png";
import DOP from "@/public/customer/logo-dop.png";
import BPICT from "@/public/customer/logo-bpict.png";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Customer() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-16 sm:py-20 lg:py-24 " id="customer">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D3B156]">
          Our Customers
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 place-items-center">
        {[KLab, Ktra, AKCF, KWISA, FEN, IDCC, NIPA, KCFS, DOP, BPICT].map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-full">
            <div className="w-40 h-40 sm:w-28 sm:h-28 md:w-32 md:h-50 lg:w-50 lg:h-50 xl:w-50 xl:h-50 2xl:w-50 2xl:h-50  flex items-center justify-center overflow-hidden">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={250}
                height={250}
                className="object-contain w-full h-full p-3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
