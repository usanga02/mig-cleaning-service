import { CheckCircle } from "lucide-react";
import ServiceCard, { ServiceProps } from "./ui/serviceCard";

export default function Services() {
  const servicesData: ServiceProps[] = [
    {
      icon: "🏠",
      title: "Household Cleaning",
      desc: "Affordable and thorough cleaning for homes, apartments, and estates. We keep your home healthy and organized.",
      points: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning"],
    },
    {
      icon: "🏢",
      title: "Commercial Cleaning",
      desc: "Scheduled and on-demand services for offices, retail stores, and hotels to maintain professional, hygienic environments.",
      points: ["Office buildings", "Retail spaces", "Medical facilities"],
    },
    {
      icon: "🛠️",
      title: "Post-Renovation & Specialized",
      desc: "We restore order after construction or renovation, removing dust and debris for immediate space usability.",
      points: ["Post-construction", "Carpet cleaning", "Window cleaning"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Cleaning solutions for individuals, businesses, and institutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
