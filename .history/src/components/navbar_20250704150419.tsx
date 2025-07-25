"use client";

import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo/Siri-Service.png";
import FlagEN from "@/public/flags/Flag-en.svg";
import FlagLO from "@/public/flags/Flag-lo.svg";
import FlagKO from "@/public/flags/Flag-ko.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const labels: Record<string, string[]> = {
  en: ["About", "Services", "Customers", "Portfolio"],
  lo: ["ກ່ຽວກັບ", "ບໍລິການ", "ລູກຄ້າ", "ຜົນງານທີ່ຜ່ານມາ"],
  ko: ["회사소개", "서비스", "고객", "포트폴리오"],
};
const navLinks = [
  { href: "", id: "home" },
  { href: "#about", id: "about" },
  { href: "#services", id: "services" },
  { href: "#customers", id: "customers" },
  { href: "#portfolio", id: "portfolio" },
];

const languages = [
  { code: "en", label: "English", flag: FlagEN },
  { code: "lo", label: "Lao", flag: FlagLO },
  { code: "ko", label: "Korean", flag: FlagKO },
];
export default function Navbar() {
    const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState("en");

  React.useEffect(() => {
    const lang = pathname?.split("/")[1] || "en";
    setCurrentLang(lang);
    setIsMounted(true);
  }, [pathname]);
  const currentLangData =
    languages.find((l) => l.code === currentLang) || languages[0];
    const changeLanguage = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || `/${lang}`;
    localStorage.setItem("lang", lang);
    router.push(newPath);
  };

  // ✅ Manual section detection using scrollY
  useEffect(() => {
    const sectionIds = ["about", "service", "customer", "portfolio"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${id}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = useCallback((targetId: string) => {
    setIsOpen(false);
    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("/")}
          className="bg-transparent p-0"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
            priority
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {["#about", "#service", "#customer", "#portfolio"].map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={`relative text-base font-bold px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "bg-[#D3B156] text-white shadow-md"
                  : "text-gray-800 hover:bg-yellow-100 hover:[#D3B156]"
              }`}
            >
              {["About", "Services", "Customers", "Portfolio"][i]}
            </button>
          ))}
           {isMounted && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm hover:ring-2 ring-primary transition duration-200 bg-white/80 dark:bg-zinc-800/70">
                      <Image src={currentLangData.flag} alt={currentLangData.label} width={24} height={16} />
                      {/* <span className="text-sm">{currentLangData.label}</span> */}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36 p-1 rounded-md border bg-white dark:bg-zinc-900 shadow-lg" align="end">
                    {languages.map((lang) => (
                      <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition">
                        <Image src={lang.flag} alt={lang.label} width={24} height={16} />
                        <span className="text-sm text-gray-700 dark:text-gray-200">{lang.label}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
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
          className="fixed inset-0 bg-black/60 bg-opacity-25 z-40"
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

        {/* Mobile Sidebar Menu */}
        <div className="flex flex-col space-y-4 mt-4">
          {["#about", "#service", "#customer", "#portfolio"].map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={`text-left text-lg font-bold px-3 py-2 rounded-md transition-all duration-300 ${
                activeSection === id
                  ? "bg-[#D3B156] text-white shadow-md"
                  : "text-gray-800 hover:bg-yellow-100 hover:text-[#D3B156]"
              }`}
            >
              {["About", "Services", "Customers", "Portfolio"][i]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
