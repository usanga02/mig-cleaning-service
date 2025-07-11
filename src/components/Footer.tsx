import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/Borcelle_clean.png";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center whitespace-nowrap md:col-span-2 space-x-2 mb-4">
              <img
                src={logo}
                alt="logo"
                width={50}
                className="cursor-pointer"
              />
              <div className="relative flex flex-col justify-center">
                <h2 className="absolute text-base md:text-lg -top-4 -left-2 text-slate-400 leading-none font-bold">
                  MIG
                </h2>
                <div className="absolute -top-2 md:-top-1 -left-3">
                  <span className="text-[6px] whitespace-nowrap uppercase font-bold text-slate-600">
                    Cleaning Services
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-300">
              Professional, eco-friendly cleaning services for homes,
              businesses, and institutions across Nigeria.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Household Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Post-Renovation Cleaning</li>
              <li>Specialized Cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>0806 020 6107</li>
              <li>migcleaningserviices@gmail.com</li>
              <li>No. 4 Biskra Street, Wuse Zone 4</li>
            </ul>

            <div className="flex space-x-4 text-gray-300 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 hover:text-slate-600 transition" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 hover:text-slate-600 transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-slate-600 transition" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 hover:text-slate-600 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-slate-600 transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MIG Cleaning Services Nig. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
