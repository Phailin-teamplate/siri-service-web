"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AboutSV from "@/public/About.png";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "@/src/lib/i18n";
import { usePathname } from "next/navigation";
export const metadata: Metadata = {
  title: "SIRI SERVICE",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function About() {
   const pathname = usePathname();
    const { t } = useTranslation();
    useEffect(() => {
      const lang = pathname.split("/")[1];
      if (["en", "lo", "ko"].includes(lang)) {
        i18n.changeLanguage(lang);
      }
    }, [pathname]);
  return (
    <section
      id="about"
      className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 pt-10 sm:py-5 lg:py-15 md:scroll-mt-20 scroll-mt-14"
    >
      {/* Section Title */}
      <motion.div
        className="text-center md:mb-10 mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D3B156]">
          {t("About.title")}
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between py-5 gap-10 md:gap-16"  initial={{ opacity: 0, y: 20 }} // 👈 slide from bottom
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}>
        {/* Image */}
        <div
          className="w-full md:w-1/2 max-w-[600px]"
         
        >
          <Image
            src={AboutSV}
            alt="About"
            width={500}
            height={300}
            className="object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Text */}
        <div
          className="w-full md:w-1/2 max-w-[700px] text-center md:text-left"
          
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-800">
           {t("About.subtitle")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
