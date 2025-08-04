import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, ChartColumn } from "lucide-react";
import dselogo2 from "../assets/logo/dselogo2.png";
import dselogo3 from "../assets/logo/dselogo3.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2 cursor-pointer group'>
            {/* <Sun className={`w-8 h-8 transition-all duration-300 ${
              isScrolled ? 'text-yellow-500' : 'text-yellow-300'
            } group-hover:rotate-180`} /> */}
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              {isScrolled ? (
                <img
                  src={dselogo3}
                  alt='DSenergize Logo'
                  className='inline-block w-24'
                />
              ) : (
                <img
                  src={dselogo2}
                  alt='DSenergize Logo'
                  className='inline-block w-24'
                />
              )}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-700 hover:text-yellow-600"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full'></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Button
              onClick={() =>
                window.open(
                  "https://os.dsenergize.com/login",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className='bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <ChartColumn /> Our OS
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-yellow-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className='block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-all duration-300'
              >
                {link.name}
              </button>
            ))}
            <div className='pt-2'>
              <Button
                onClick={() => scrollToSection("#contact")}
                className='w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 transition-all duration-300'
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
