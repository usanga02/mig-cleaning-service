import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* About Section */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
