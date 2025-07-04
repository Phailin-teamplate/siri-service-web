"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { motion } from "framer-motion";

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
import { usePathname } from "next/navigation";
import i18n from "@/src/lib/i18n"; // import i18n setup
import { useTranslation } from "react-i18next";

export const metadata: Metadata = {
  title: "Teamplate",
  description: "We are a Laos-based IT startup aiming for the global market.",
};

export default function Customer() {
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
      id="customer"
      className="w-full bg-white px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-5 sm:py-5 lg:py-15 md:scroll-mt-20 scroll-mt-15"
    >
       {/* Section Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#D3B156]">
          {t("Customer.title")}
        </h2>
      </motion.div>

      {/* Logos Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 place-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {[KLab, Ktra, AKCF, KWISA, FEN, IDCC, NIPA, KCFS, DOP, BPICT].map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-40 h-40 sm:w-28 sm:h-28 md:w-32 md:h-50 lg:w-50 lg:h-50 xl:w-50 xl:h-50 2xl:w-50 2xl:h-50 flex items-center justify-center overflow-hidden">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={250}
                height={250}
                className="object-contain w-full h-full p-3"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
