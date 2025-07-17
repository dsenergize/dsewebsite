import React from "react";
import {
  Sun,
  // Scale,
  // Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import dselogo3 from "../assets/logo/dselogo3.png";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-1'>
              {/* <Sun className='w-8 h-8 text-yellow-400' /> */}
              <img
                src={dselogo3}
                alt='DSenergize Logo'
                className='inline-block w-14'
              />
              <Link to='/'>
                <span className='text-2xl font-bold'>
                  <span className='text-yellow-400'>DS</span>energize
                </span>
              </Link>
            </div>
            <p className='text-gray-400 leading-relaxed text-justify'>
              DSE provides advanced data logging solutions for the solar
              industry. Our cutting-edge technology empowers businesses to
              optimize solar plant performance, improve maintenance efficiency,
              and maximize energy generation.
            </p>
            <div className='flex space-x-4'>
              <Facebook className='w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors' />
              <Twitter className='w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors' />
              <Instagram className='w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors' />
              <a
                href='https://www.linkedin.com/company/ds-energize/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors' />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-yellow-400 mb-4'>
              Services
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Residential Solar
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Commercial Solar
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Industrial Solutions
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Maintenance & AMC
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Energy Storage
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-lg font-semibold text-yellow-400 mb-4'>
              Company
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='hover:text-white cursor-pointer transition-colors'>
                About Us
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Our Team
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Careers
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                News & Updates
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Case Studies
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-semibold text-yellow-400 mb-4'>
              Support
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Contact Us
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                FAQ
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Documentation
              </li>
              <li className='hover:text-white cursor-pointer transition-colors'>
                Warranty
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} DSenergize. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm text-gray-400'>
              <span className='hover:text-white cursor-pointer transition-colors'>
                <Link to='/terms'>
                  {/* <Scale className='h-5 w-5 mr-2' /> */}
                  Get Terms of Service
                </Link>
              </span>
              <span className='hover:text-white cursor-pointer transition-colors'>
                <Link to='/privacy'>
                  {/* <Shield className='h-5 w-5 mr-2' /> */}
                  Get Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
