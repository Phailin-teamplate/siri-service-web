import Image from "next/image";
import BgSiri from "@/public/bg-siri.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SiriService | About Us",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Homepage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="relative w-full h-[400px] xs:h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px]">
          {/* Background Image */}
          <Image
            src={BgSiri}
            alt="StartUp"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Centered Text */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <div className="mb-4">
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
                Total Business Support Service in Laos
              </p>
            </div>
            <h1 className="text-white font-extrabold leading-tight text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] 2xl:text-[7rem]">
              SIRI SERVICE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
