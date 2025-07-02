"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import Image from "next/image";
import logo from "@/public/logo/Siri Service.png";
import { motion } from "framer-motion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setIsVisible(window.scrollY > 300)
    );
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-[#34D1BC] text-white"
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          <Image src={logo} alt="Logo" width={80} height={80} className="z-10" />
          <motion.div
            className="absolute w-full h-full border-4 border-dashed border-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-medium mt-5"
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
          className="fixed bottom-2 right-5 md:bottom-5 md:right-10 bg-blue-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-110"
        >
          <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}
    </>
  );
}
