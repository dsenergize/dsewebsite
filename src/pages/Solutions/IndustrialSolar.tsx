import React from 'react';
import Footer from '@/components/Footer';

// Reusable icon component for feature lists
const CheckmarkIcon = () => (
    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const IndustrialSolar = () => {
  return (
    <>
    <div className="w-full min-h-screen pt-8 bg-blue-900 text-white flex items-center">
      
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 lg:px-16 pt-16 pb-16">
        
        {/* --- UPDATED: Column 1: Text Content --- */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Maximize Solar ROI with <span className="text-yellow-400">Enterprise-Grade Analytics</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            For businesses, solar is a critical financial asset. Our enterprise-grade platform provides the powerful analytics you need to manage one or one hundred sites, reduce operational costs, and ensure your renewable energy assets meet their expected ROI.
          </p>
          <ul className="space-y-4 mb-10 text-left">
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Portfolio Management:</strong> Monitor one or one hundred sites from a single, unified dashboard for complete visibility across your assets.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Financial & Performance Analytics:</strong> Access detailed reports on generation, financial returns, and asset performance to make data-driven decisions.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Automated Fault Alerts:</strong> Receive instant notifications for any performance issues, enabling rapid response to minimize downtime and revenue loss.</span></li>
            <li className="flex items-center"><CheckmarkIcon /><span><strong>Reduce Operational Costs:</strong> Streamline O&M activities and ensure your entire renewable energy portfolio performs optimally.</span></li>
          </ul>
          <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            Request a Platform Demo →
          </button>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center">
          <img 
            src="https://truesun.in/wp-content/uploads/2022/01/Solar-rooftop-for-industries.jpg" 
            alt="Enterprise dashboard showing analytics for a portfolio of industrial solar assets" 
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