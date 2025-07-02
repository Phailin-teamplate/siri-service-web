"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo/Siri Service.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = useCallback((targetId: string) => {
    setIsOpen(false);
    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <button onClick={() => handleSmoothScroll("/")} className="bg-transparent p-0">
          <Image
            src={Logo}
            alt="Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
            priority
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {["#about", "#services", "#contact"].map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className="text-black hover:text-blue-600 hover:underline transition duration-200"
            >
              {["About", "Services", "Contact"][i]}
            </button>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-8">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="text-black hover:text-red-500"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-start space-y-6 text-lg">
            {["#about", "#services", "#contact"].map((id, i) => (
              <button
                key={id}
                onClick={() => handleSmoothScroll(id)}
                className="text-black hover:text-blue-600 transition"
              >
                {["About", "Services", "Contact"][i]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
