import { ShieldCheck, Users, Leaf, Building2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About{" "}
              <span className="text-orange-600">MIG Cleaning Services</span>
            </h2>
            <p>
              Our purpose is simple — to create cleaner, healthier, and more
              sustainable environments across Nigeria. Through a combination of
              professionalism, eco-conscious practices, and tailored cleaning
              solutions, we help families, businesses, and institutions maintain
              safe, organized spaces they can trust. Our team doesn’t just clean
              — we empower communities and elevate standards.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Professional Standards
                  </h4>
                  <p className="text-gray-600 text-base">
                    We are committed to cleaner, healthier, and sustainable
                    environments across Nigeria with strict professionalism and
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Leaf className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Eco-Conscious Practices
                  </h4>
                  <p className="text-gray-600 text-base">
                    Our cleaning methods include safe, eco-friendly products and
                    green equipment to protect your home and our planet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    People-Driven Impact
                  </h4>
                  <p className="text-gray-600 text-base">
                    We empower communities by creating jobs, upskilling talents,
                    and supporting national development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Tailored for Every Space
                  </h4>
                  <p className="text-gray-600 text-base">
                    Whether you're a household, a business, or an institution,
                    we deliver customized cleaning solutions with precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1608012075343-25226e3099f0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHRlYW0lMjBzdGFmZiUyMHVuaWZvcm18ZW58MHx8fHwxNzUxMjg0NTQxfDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800"
              alt="Professional cleaning team member"
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
