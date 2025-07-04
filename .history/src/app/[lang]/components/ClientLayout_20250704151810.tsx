// app/ClientLayout.tsx
"use client";

import React, { useState, useEffect } from "react";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Navbar from "@/src/app/[lang]/components/navbar";
import Footer from "@/src/app/[lang]/components/footer";
import Image from "next/image";
import logo from "@/public/logo/Siri-Service.png";
import { motion } from "framer-motion";



export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-[#D3B156]"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <Image src={logo} alt="Siri Logo" width={80} height={80} className="z-10" />
        
        {/* วงกลมหมุน สีเหลือง */}
        <motion.div
          className="absolute w-full h-full border-4 border-dashed border-[#D3B156] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>

      {/* ข้อความสีเหลือง */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-medium mt-5 text-[#D3B156]"
      >
        Loading SIRI SERVICE...
      </motion.p>
    </motion.div>
  );
}


  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-5 md:bottom-5 md:right-10 bg-[#D3B156] text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-[#D3B156] focus:outline-none transition-transform transform hover:scale-110"
        >
          <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}
    </>
  );
}
