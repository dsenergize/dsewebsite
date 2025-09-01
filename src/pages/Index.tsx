import React, { useEffect } from "react"; // Add useEffect
import { useLocation } from "react-router-dom"; // Add useLocation
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  const location = useLocation();

  // This effect runs when the component mounts or location state changes
  // It checks if we were redirected here with a target section to scroll to
  useEffect(() => {
    if (location.state?.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='min-h-screen'>
      {/* REMOVED: The <Navbar /> component is now only in App.tsx */}
      <section id='home'>
        <Hero />
      </section>
      <ImageCarousel />
      <section id='services'>
        <Services />
      </section>
      <section id='about'>
        <About />
      </section>
      <Testimonials />
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
      <WhatsAppChat
        phoneNumber='+918920525465'
        message={`Hello, I'm interested in your DSE loggers. Can you share more details on features, compatibility, and pricing for solar energy systems?`}
      />
    </div>
  );
};

export default Index;