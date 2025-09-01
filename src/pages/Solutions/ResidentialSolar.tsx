// src/components/ResidentialSolar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Your import is correct
import Footer from "@/components/Footer";

const CheckmarkIcon = () => (
    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const ResidentialSolar = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-8 bg-blue-900 text-white flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 lg:px-16 pt-16 pb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Power Your Home with <span className="text-yellow-400">Smart Solar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              DSenergize provides advanced residential solar solutions...
            </p>
            <ul className="space-y-4 mb-10 text-left">
                {/* ... list items ... */}
                <li className="flex items-center"><CheckmarkIcon /><span><strong>Real-Time Monitoring:</strong> Track energy generation and consumption instantly.</span></li>
                <li className="flex items-center"><CheckmarkIcon /><span><strong>Optimize Performance:</strong> Reduce electricity bills and lower your carbon footprint.</span></li>
                <li className="flex items-center"><CheckmarkIcon /><span><strong>Complete Solution:</strong> From custom design and installation to intelligent monitoring.</span></li>
                <li className="flex items-center"><CheckmarkIcon /><span><strong>Sustainable Lifestyle:</strong> Take control of your energy with reliable, future-ready technology.</span></li>
            </ul>
            
            {/* CORRECTED: Use lowercase "/contact" for the URL path */}
            <Link to="/contact"> 
              <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                Get a Free Consultation →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1552197892-f2ad2f75e7c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern home with solar panels on the roof" 
              className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResidentialSolar;