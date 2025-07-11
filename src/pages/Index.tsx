import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
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
