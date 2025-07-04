"use client";

import { useEffect } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/src/lib/i18n";
import { usePathname } from "next/navigation";
export default function Footer() {
   const pathname = usePathname();
      const { t } = useTranslation();
      useEffect(() => {
        const lang = pathname.split("/")[1];
        if (["en", "lo", "ko"].includes(lang)) {
          i18n.changeLanguage(lang);
        }
      }, [pathname]);
  return (
    <footer className="w-full bg-[#535353] text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
          <h3 className="text-2xl font-bold">{t("Footer.title")}</h3>
          <p className="text-base">&copy; {t("Footer.text")}</p>
          {/* You can add social icons here if needed */}
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right flex flex-col gap-2">
          <p className="font-medium text-base sm:text-lg ">
            {t("Footer.Address")}
          </p>
          <p className="font-medium text-base sm:text-lg ">
            Sales@siriservice.com
          </p>
          <p className="font-medium text-base sm:text-lg ">
            +856-20-9437-1405
          </p>
        </div>
      </div>
    </footer>
  );
}
