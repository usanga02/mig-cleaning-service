import { ShieldCheck, Users, Leaf, Building2 } from "lucide-react";
import cleaner from "../assets/7-small.jpg";
import ListCard from "./ui/listCard";

export default function About() {
  const abouts = [
    {
      title: "Eco-Conscious Practices",
      icon: <Leaf className="h-6 w-6 text-orange-600" />,
      description:
        "Our cleaning methods include safe, eco-friendly products and green equipment to protect your home and our planet.",
    },
    {
      title: "People-Driven Impact",
      icon: <Users className="h-6 w-6 text-orange-600" />,
      description:
        "We empower communities by creating jobs, upskilling talents, and supporting national development.",
    },
    {
      title: "Tailored for Every Space",
      icon: <Building2 className="h-6 w-6 text-orange-600" />,
      description:
        "Whether you're a household, a business, or an institution, we deliver customized cleaning solutions with precision.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="space-y-8">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900">
              About{" "}
              <span className="text-orange-600">MIG Cleaning Services</span>
            </h2>
            <p className="px-2 md:px-0">
              Our purpose is simply to create cleaner, healthier, and more
              sustainable environments across Nigeria. Through a combination of
              professionalism, eco-conscious practices, and tailored cleaning
              solutions, we help families, businesses, and institutions maintain
              safe, organized spaces they can trust.
            </p>
            <div className="space-y-6">
              {abouts.map((about, index) => (
                <ListCard {...about} key={index} />
              ))}
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
            <img
              src={cleaner}
              alt="Professional cleaning team member"
              className="rounded-lg h-full object-cover shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
