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
        <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-20 py-3">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("/")}
          className="p-0 border-none bg-transparent active:opacity-80"
        >
          <Image
            className="w-20 sm:w-20 md:w-30 lg:w-30 xl:w-30 2xl:w-30 h-auto"
            src={Logo}
            alt="Appstore"
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="hover:text-blue-600 hover:underline transition-colors text-black duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("#services")}
            className="hover:text-blue-600 hover:underline transition-colors text-black duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="hover:text-blue-600 hover:underline transition-colors text-black duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-black">Menu</h3>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="text-black focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {["#about", "#services", "#contact"].map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className="text-black hover:text-blue-600 hover:underline transition duration-200 text-lg"
            >
              {["About", "Services", "Contact"][i]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
