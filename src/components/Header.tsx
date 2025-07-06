// components/Header.tsx
import { Phone } from "lucide-react";
import logo from "../assets/Borcelle_clean.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" width={300} className="cursor-pointer" />
          </div>
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
          <a
            href="tel:08060206107"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
