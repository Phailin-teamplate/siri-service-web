"use client";

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

const labels: Record<string, string[]> = {
  en: ["About", "Services", "Customers", "Portfolio"],
  lo: ["ກ່ຽວກັບ", "ບໍລິການ", "ລູກຄ້າ", "ຜົນງານທີ່ຜ່ານມາ"],
  ko: ["회사소개", "서비스", "고객", "포트폴리오"],
};

const sectionIds = ["#about", "#service", "#customer", "#portfolio"];

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
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const lang = pathname?.split("/")[1] || "en";
    setCurrentLang(lang);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "";

      for (const id of sectionIds.map((s) => s.replace("#", ""))) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`;
            break;
          }
        }
      }

      setActiveSection(current);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

  const changeLanguage = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || `/${lang}`;
    localStorage.setItem("lang", lang);
    router.push(newPath);
  };

  const translatedLabels = labels[currentLang] || labels.en;

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
          {sectionIds.map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={`relative text-base font-bold px-3 py-2 rounded-lg  duration-300 ${
                activeSection === id
                  ? "bg-[#D3B156] text-white shadow-md"
                  : "text-gray-800 hover:bg-yellow-100 hover:text-[#D3B156]"
              }`}
            >
              {translatedLabels[i]}
            </button>
          ))}
            <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 border rounded shadow">
                <Image
                  src={languages.find((l) => l.code === currentLang)?.flag || FlagEN}
                  alt={currentLang}
                  width={24}
                  height={16}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center gap-2"
                >
                  <Image src={lang.flag} alt={lang.label} width={24} height={16} />
                  <span>{lang.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </div>

        {/* Language + Mobile Toggle */}
      
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

        <div className="flex flex-col space-y-4 mt-4">
          {sectionIds.map((id, i) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={`text-left text-lg font-bold px-3 py-2 rounded-md transition-all duration-300 ${
                activeSection === id
                  ? "bg-[#D3B156] text-white shadow-md"
                  : "text-gray-800 hover:bg-yellow-100 hover:text-[#D3B156]"
              }`}
            >
              {translatedLabels[i]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
