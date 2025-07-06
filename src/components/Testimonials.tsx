import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    role: "Homeowner",
    rating: 5,
    quote:
      "MIG Cleaning Services completely transformed my living space. Their team is professional, polite, and extremely thorough. I wouldn’t trust anyone else in my home.",
  },
  {
    name: "David Johnson",
    initials: "DJ",
    role: "Office Manager",
    rating: 5,
    quote:
      "We’ve relied on MIG Cleaning for our office cleaning needs for over a year. They’re consistent, discreet, and always leave our workspace spotless.",
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    role: "Contractor",
    rating: 5,
    quote:
      "After each renovation project, I call MIG for post-construction cleanup. They handle even the toughest messes with incredible efficiency. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Here's what clients say about working with MIG
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(
            ({ name, initials, role, rating, quote }, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-orange-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">“{quote}”</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{name}</div>
                    <div className="text-gray-500 text-sm">{role}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
