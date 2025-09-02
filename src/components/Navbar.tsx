import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChartColumn } from "lucide-react";
import dselogo2 from "../assets/logo/dselogo2.png";
import dselogo3 from "../assets/logo/dselogo3.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic to determine styles based on route and scroll position
  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  // Define dynamic classes to be applied below
  const navbarClasses = isTransparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-lg";
  const linkColorClasses = isTransparent
    ? "text-white hover:text-yellow-300"
    : "text-gray-700 hover:text-yellow-600";
  const iconColorClasses = isTransparent ? "text-white" : "text-gray-700";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const solutions = [
    {
      title: "Residential Solar",
      href: "/solutions/residential",
      description: "Smart monitoring for home solar systems",
    },
    {
      title: "Commercial Solar",
      href: "/solutions/commercial",
      description: "Advanced analytics for commercial installations",
    },
    {
      title: "Industrial Solar",
      href: "/solutions/industrial",
      description: "Enterprise-grade monitoring and management",
    },
    {
      title: "O&M Services",
      href: "/solutions/om-services",
      description: "Operations & maintenance solutions",
    },
    {
      title: "Energy Storage",
      href: "/solutions/energy-storage",
      description: "Battery and storage system monitoring",
    },
    {
      title: "Remote Monitoring",
      href: "/solutions/remote-monitoring",
      description: "Real-time IoT monitoring solutions",
    },
  ];

  const resources = [
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      description: "Success stories and project highlights",
    },
    {
      title: "Brochures",
      href: "/resources/brochures",
      description: "Download product information",
    },
    {
      title: "Blog",
      href: "/resources/Blog",
      description: "Software tools and utilities",
    },
    {
      title: "FAQ,s",
      href: "/resources/whitepapers",
      description: "Technical documentation and insights",
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      if (location.pathname !== "/") {
        navigate("/", { state: { targetId: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center cursor-pointer'>
            {isTransparent ? (
              <img src={dselogo2} alt='DSenergize Logo' className='w-24' />
            ) : (
              <img src={dselogo3} alt='DSenergize Logo' className='w-24' />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`px-3 py-2 text-sm font-medium transition ${linkColorClasses}`}
                    >
                      {link.name}
                    </button>
                  </NavigationMenuItem>
                ))}

                {/* Solutions dropdown */}
                <NavigationMenuItem >
                  <NavigationMenuTrigger
                    className={`bg-transparent px-3 py-2 text-sm font-medium transition ${linkColorClasses}`}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent  >
                    <ul className='grid w-[500px] gap-3 p-4 md:grid-cols-2'>
                      {solutions.map((s) => (
                        <li key={s.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={s.href}
                              className='block space-y-1 rounded-md p-3 hover:bg-yellow-100'
                            >
                              <div className='text-sm font-medium'>
                                {s.title}
                              </div>
                              <p className='text-sm text-gray-500'>
                                {s.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources dropdown */}
                <NavigationMenuItem   >
                  <NavigationMenuTrigger
                    className={`bg-transparent px-3 py-2 text-sm font-medium transition ${linkColorClasses}`}
                  >
                    Resources 
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>

                    <ul className='grid w-[500px] gap-3 p-4 '>
                      {resources.map((r) => (
                        <li key={r.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={r.href}
                              className='block space-y-1 rounded-md p-3 hover:bg-yellow-100'
                            >
                              <div className='text-sm font-medium'>
                                {r.title}
                              </div>
                              <p className='text-sm text-gray-500'>
                                {r.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA */}
            <Button
              onClick={() =>
                window.open("https://os.dsenergize.com/login", "_blank")
              }
              className='bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 hover:scale-105'
            >
              <ChartColumn className='mr-2 h-4 w-4' /> Our OS
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${iconColorClasses}`}
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='px-2 pt-2 pb-2 space-y-2 bg-white rounded-lg shadow-lg mt-2'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className='block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md'
              >
                {link.name}
              </button>
            ))}

            {/* Solutions (mobile) */}
            <div className='px-3 py-2'>
              <div className='font-medium text-gray-700'>Solutions</div>
              {solutions.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className='block py-1 text-sm text-gray-500 hover:text-yellow-600'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>

            {/* Resources (mobile) */}
            <div className='px-3 py-2'>
              <div className='font-medium text-gray-700'>Resources</div>
              {resources.map((r) => (
                <Link
                  key={r.title}
                  to={r.href}
                  className='block py-1 text-sm text-gray-500 hover:text-yellow-600'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {r.title}
                </Link>
              ))}
            </div>

            <div className='pt-2'>
              <Button
                onClick={() =>
                  window.open("https://os.dsenergize.com/login", "_blank")
                }
                className='w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2'
              >
                <ChartColumn className='mr-2 h-4 w-4' /> Our OS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;