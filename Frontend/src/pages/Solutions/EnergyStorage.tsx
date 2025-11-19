import React from 'react';
import Enesto from '@/assets/Enesto.png';
import Footer from '@/components/Footer'; // Assuming you have a Footer component

const EnergyStorage = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="w-full min-h-screen">
        {/* Main content container */}
        <div className="px-6 md:px-12 lg:px-24 py-16 pt-24">

          {/* --- 1. Page Header / Hero Section --- */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
              Intelligent Monitoring for Battery Energy Storage Systems
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
              Energy storage is key to a stable and efficient grid. Our platform provides deep insights into battery health, state of charge, and performance, ensuring you get the maximum value from your storage assets.
            </p>
          </div>

          {/* --- 2. Main Content Grid (Image and Features) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="w-full">
              {/* You can replace this placeholder with an actual image of a BESS */}
              <img 
                src={Enesto}
                alt="Battery Energy Storage System" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>

            {/* Right Column: Key Features */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4">
                Advanced Control & Optimization
              </h2>
              <p className="text-gray-700">
                We enable advanced control strategies to optimize charge/discharge cycles for time-of-use billing, demand charge reduction, and grid services.
              </p>
              
              {/* Feature Cards */}
              <div className="space-y-6">

                {/* Card 1: Deep Insights */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Deep Performance Insights</h3>
                    <p className="text-gray-600 mt-1">
                      Gain complete visibility into battery health, state of charge (SoC), and overall performance with real-time analytics.
                    </p>
                  </div>
                </div>

                {/* Card 2: Cost Optimization */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Economic Optimization</h3>
                    <p className="text-gray-600 mt-1">
                      Automate charge/discharge cycles to align with time-of-use tariffs and significantly reduce demand charges.
                    </p>
                  </div>
                </div>

                {/* Card 3: Grid Services */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A5 5 0 0014.142 11.858l-2.471-2.471A5 5 0 009.879 16.121z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Enhanced Grid Stability</h3>
                    <p className="text-gray-600 mt-1">
                      Enable participation in grid services like frequency regulation and peak shaving, creating new revenue streams.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EnergyStorage;