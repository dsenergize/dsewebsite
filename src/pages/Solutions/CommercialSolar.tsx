import React from 'react';
import Footer from '@/components/Footer';

// Reusable icon component for feature lists
const CheckmarkIcon = () => (
    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const CommercialSolar = () => {
  return (
    // This parent div ensures the blue background covers the entire screen, edge-to-edge.
    <>
    <div className="w-full min-h-screen pt-8  bg-blue-900 text-white flex items-center">
      
      {/* This grid holds your content. The "pt-16" class adds padding at the top
          to ensure the content appears below your fixed navbar.
      */}
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 lg:px-16 pt-16 pb-16">
        
        {/* Column 1: Text Content, tailored for commercial clients */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Optimize Your Business with <span className="text-yellow-400">Commercial Solar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Transform your energy strategy from a major expense into a powerful asset. DSenergize helps you cut operational costs, boost efficiency, and achieve your sustainability targets with intelligent, large-scale solar solutions.
          </p>
          <ul className="space-y-4 mb-10 text-left">
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Drastic Cost Reduction:</strong> Slash your electricity bills and lock in predictable energy rates for decades, maximizing your return on investment.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Intelligent Energy Management:</strong> Utilize our advanced monitoring to get a clear view of your consumption and identify new opportunities for efficiency.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Tailored for Your Infrastructure:</strong> We design and install custom solar systems perfectly suited for your facilities, whether it's rooftops, parking lots, or open land.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Future-Proof Your Brand:</strong> Lead your industry by demonstrating a powerful commitment to green energy, attracting customers who value sustainability.</span></li>
          </ul>
          <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            Get a Custom Business Analysis →
          </button>
        </div>

        {/* Column 2: Image - A relevant image for commercial solar */}
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Solar panels on a large commercial building roof" 
            className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-full"
          />
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CommercialSolar;

