import Image from "next/image";
import Icon1 from "@/public/icon_1.svg";
import Icon2 from "@/public/business_icon.svg";
import Icon3 from "@/public/icon_3.svg";
import Icon4 from "@/public/icon_4.svg";
import Icon5 from "@/public/icon_5.svg";
import Icon6 from "@/public/icon_6.svg";
import StartUp from "@/public/Start.gif";
import ITcs from "@/public/Animated IT.gif";
import ITService from "@/public/Animated IT Service.gif";
import Mockupbg from "@/public/Mockup bg.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center">
        <div className="relative w-full h-[500px] xs:h-[600px] sm:h-[650px] md:h-[700px] lg:h-[800px]">
          {/* Background Image */}
          <Image src={Mockupbg} alt="StartUp" fill className="object-cover" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/50 to-blue-700/70 z-10" />

          {/* Centered Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <div className="mb-4 sm:mb-6">
              <p className="text-white text-sm xs:text-base sm:text-xl md:text-2xl font-medium max-w-[90%] sm:max-w-[80%]">
                From IT outsourcing development to IT business consulting
              </p>
            </div>
            <h1 className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              TEAMPLATE
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}
