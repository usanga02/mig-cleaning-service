import { Star } from "lucide-react";
import team from "../assets/1.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored Cleaning Services for Homes & Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Flexible, professional, and sustainable cleaning solutions from
              MIG Cleaning Services Nig. Ltd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-center font-semibold"
              >
                Get Free Quote
              </a>
              <a
                href="tel:08060206107"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 text-center font-semibold"
              >
                Call 0806 020 6107
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">
                Trusted by homes & institutions across Nigeria
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src={team}
              alt="Professional cleaning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
