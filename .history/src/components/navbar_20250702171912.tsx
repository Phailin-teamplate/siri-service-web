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
    <header className={`w-full sticky top-0 z-50 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
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
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )} */}
      {isOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6 pt-10 transition-all duration-300 shadow-md">
    {/* ปุ่ม Close (X) อยู่มุมขวาบน */}
    <div className="flex justify-end mb-8">
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close Menu"
        className="text-gray-800 hover:text-red-500 transition"
      >
        <X size={28} />
      </button>
    </div>

    {/* ลิงก์เมนูแบบเรียงจากบนลงล่าง */}
    <div className="flex flex-col space-y-6 items-start px-2">
      <button
        onClick={() => handleSmoothScroll("#about")}
        className="text-xl text-gray-800 hover:text-blue-600 transition"
      >
        About
      </button>
      <button
        onClick={() => handleSmoothScroll("#services")}
        className="text-xl text-gray-800 hover:text-blue-600 transition"
      >
        Services
      </button>
      <button
        onClick={() => handleSmoothScroll("#contact")}
        className="text-xl text-gray-800 hover:text-blue-600 transition"
      >
        Contact
      </button>
    </div>
  </div>
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
    </header>
  );
}
