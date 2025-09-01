import React from 'react';
import Footer from '@/components/Footer';

// Reusable icon component for feature lists
const CheckmarkIcon = () => (
    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const IndustrialSolar = () => {
  return (
    // This parent div ensures the blue background covers the entire screen, edge-to-edge.
    <>
    <div className="w-full min-h-screen pt-8 bg-blue-900 text-white flex items-center">
      
      {/* This grid holds your content. "pt-16" adds top padding to avoid the navbar. */}
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 lg:px-16 pt-16 pb-16">
        
        {/* Column 1: Text Content, tailored for industrial clients */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Powering Heavy Industry with <span className="text-yellow-400">High-Capacity Solar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            For manufacturing plants and industrial facilities with high energy demands, solar is a strategic imperative. DSenergize engineers robust, high-capacity solar solutions that power your most critical operations and deliver long-term financial stability.
          </p>
          <ul className="space-y-4 mb-10 text-left">
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Uninterrupted Power for Operations:</strong> Mitigate risks from grid outages and ensure continuous production with reliable, on-site power generation.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Meet High Energy Demands:</strong> Deploy systems designed to meet the intensive energy needs of heavy machinery, processing lines, and large-scale manufacturing.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Achieve ESG & Compliance Goals:</strong> Fulfill corporate sustainability mandates, improve your environmental ratings, and comply with energy regulations.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Optimize Large-Scale Assets:</strong> Convert vast rooftops and unused land into energy-producing assets that significantly lower your plant's operating expenses.</span></li>
          </ul>
          <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            Schedule an Engineering Assessment →
          </button>
        </div>

        {/* Column 2: Image - A relevant image for industrial solar */}
        <div className="flex justify-center">
          <img 
            src="https://truesun.in/wp-content/uploads/2022/01/Solar-rooftop-for-industries.jpg" 
            alt="Vast array of solar panels on the roof of a large industrial manufacturing plant" 
            className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-full"
          />
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default IndustrialSolar;
