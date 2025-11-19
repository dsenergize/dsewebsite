import React from "react";
// import CaseStudies from "@/pages/resources/CaseStudies";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import dselogo3 from "../assets/logo/dselogo3.png";
import StartUp from "../assets/StartUp.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              <img
                src={dselogo3}
                alt="DSenergize Logo"
                className="inline-block w-14"
              />
              <Link to="/">
                <span className="text-2xl font-bold">
                  <span className="text-yellow-400">DS</span>energize
                </span>
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed text-justify">
              DSE provides advanced data logging solutions for the solar
              industry. Our cutting-edge technology empowers businesses to
              optimize solar plant performance, improve maintenance efficiency,
              and maximize energy generation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579214008092"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
              </a>
              <a
                href="https://x.com/DSENERGIZE?t=snQqqEsywYtet9s8XK1wpw&s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/dsenergize/profilecard/?igsh=NzMyczg2NDhxbDFo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/ds-energize/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/solutions/residential"
                >
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/solutions/commercial"
                >
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/solutions/industrial"
                >
                  Industrial Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/maintenance-amc"
                >
                  Maintenance & AMC
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/solutions/energy-storage"
                >
                  Energy Storage
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/news">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/resources/case-studies"
                >
                  CaseStudies
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/resources/whitepapers"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/docs">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/warranty"
                >
                  Warranty
                </Link>
              </li>
              <li>
                {" "}
                <div className="mt-10  p-2 ">
                  {/* <img
                    src={StartUp}
                    alt="Startup"
                    className="w-48 h-auto"
                  /> */}
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DSenergize. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link className="hover:text-white transition-colors" to="/terms">
                Terms of Service
              </Link>
              <Link
                className="hover:text-white transition-colors"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
