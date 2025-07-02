import { useState, useCallback, useEffect} from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo/Siri Service.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function for smooth scrolling
  const handleSmoothScroll = useCallback((targetId: string) => {
    setIsOpen(false); // Close the sidebar

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

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Trigger when scrolled 10px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="w-full sticky top-0 z-50 bg-white shadow-md">
    <div  className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
    }`}>
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("/")}
          className="p-0 border-none bg-transparent active:opacity-80"
        >
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56"
            src={Logo}
            alt="Appstore"
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("#services")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
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

      {/* Overlay (Closes menu when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pb-4 mt-1">
          <h3 className="text-black text-2xl font-semibold">Menu</h3>
          <button
            className="text-black text-3xl font-bold focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-4 pb-4">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("#services")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
