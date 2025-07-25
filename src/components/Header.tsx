// components/Header.tsx
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/Borcelle_clean.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center cursor-pointer space-x-2"
          >
            <img src={logo} alt="logo" width={50} />
            <div className="relative flex flex-col justify-center">
              <h2 className="absolute text-base md:text-lg -top-4 -left-2 text-blue-900 leading-none font-bold">
                MIG
              </h2>
              <div className="absolute -top-2 md:-top-1 -left-3">
                <span className="text-[6px] whitespace-nowrap uppercase font-bold text-blue-600">
                  Cleaning Services
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex">
            <a
              href="tel:08060206107"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" width={50} className="cursor-pointer" />
            <div className="relative flex flex-col justify-center">
              <h2 className="absolute text-base md:text-lg -top-4 -left-2 text-blue-900 leading-none font-bold">
                MIG
              </h2>
              <div className="absolute -top-2 md:-top-1 -left-3">
                <span className="text-[6px] whitespace-nowrap uppercase font-bold text-blue-600">
                  Cleaning Services
                </span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6 mt-1 mr-1 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-8">
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl text-gray-700 leading-relaxed tracking-widest hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl text-gray-700 leading-relaxed tracking-widest hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl text-gray-700 leading-relaxed tracking-widest hover:text-blue-600"
          >
            Contact
          </a>
          <a
            href="tel:08060206107"
            className="bg-blue-600 text-white tracking-wider px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
