import { CheckCircle } from "lucide-react";
import React from "react";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Trained and Uniformed Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our cleaning team is carefully selected, rigorously trained,
                    and always presents themselves with professionalism and
                    courtesy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Eco-Friendly and Safe Products
                  </h3>
                  <p className="text-gray-600">
                    We use non-toxic, biodegradable products to ensure a safe
                    environment for your family, staff, and the planet.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Flexible Scheduling & Custom Plans
                  </h3>
                  <p className="text-gray-600">
                    Whether you need a one-time deep clean or regular service,
                    we work around your schedule with customizable cleaning
                    packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1646929996390-2c1e83316525?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2UlMjBob3VzZSUyMGtpdGNoZW4lMjBiYXRocm9vbXxlbnwwfHx8fDE3NTEyODQxOTJ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
              alt="Clean kitchen sink"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1722153151852-c2c1a61e98c9?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2UlMjBob3VzZSUyMGtpdGNoZW4lMjBiYXRocm9vbXxlbnwwfHx8fDE3NTEyODQxOTJ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
              alt="Clean bathroom"
              className="rounded-lg shadow-md mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
