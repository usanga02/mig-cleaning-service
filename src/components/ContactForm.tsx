import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      form.reset();
      toast.success(
        <div>
          <strong>Email sent successfully</strong>
          <p className="text-sm">
            We will review your request and get back to you shortly.
          </p>
        </div>
      );
    } catch (error: any) {
      toast.error(
        <div>
          <strong>Something went wrong</strong>
          <p className="text-sm">
            Please check your internet or try again later.
          </p>
        </div>
      );
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Let MIG Cleaning Services handle the dirt, while you focus on what
            matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="household">Household Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="post-renovation">Post-Renovation</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tell us about your cleaning needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 disabled:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Submit Request
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="font-medium">Phone:</span>
                  <span>08060206107</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">Email:</span>
                  <span>migcleaningserviices@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">Address:</span>
                  <span>No 4 Biskra Street, Wuse Zone 4</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-gray-600">
                We aim to respond within 2 hours during business hours with your
                personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
