// src/components/ResidentialSolar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "@/components/Footer";

const CheckmarkIcon = () => (
    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
            {/* --- UPDATED PARAGRAPH --- */}
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We empower homeowners to take full control of their energy future. Through our intuitive apps, you can monitor solar production, track consumption, and see your savings add up, ensuring your system is always performing at its best.
            </p>
            {/* --- UPDATED LIST ITEMS --- */}
            <ul className="space-y-4 mb-10 text-left">
              <li className="flex items-center"><CheckmarkIcon /><span><strong>Real-Time Monitoring:</strong> Track solar production and energy use from our mobile and web apps.</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span><strong>Maximize Your Savings:</strong> Watch your savings grow and get the maximum return on your investment.</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span><strong>Intuitive App Control:</strong> Manage your home solar system with an easy-to-use, powerful platform.</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span><strong>Peace of Mind:</strong> Take control of your energy with reliable technology that ensures peak performance.</span></li>
            </ul>
            
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