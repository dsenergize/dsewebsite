import React from 'react';
import Footer from '@/components/Footer'; // Assuming you have a Footer component

const CaseStudies = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="w-full min-h-screen">
        {/* Main content container with generous padding to match your example */}
        <div className="px-6 md:px-12 lg:px-24 py-16 pt-24">

          {/* --- 1. Page Header --- */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
              Customer Success Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
              See how leading organizations use DS Energize to enhance performance, reduce downtime, and simplify solar asset management.
            </p>
          </div>

          {/* --- 2. Container for all case study sections --- */}
          <div className="mt-20 space-y-20">

            {/* === CASE STUDY 1: Surya International === */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-bold text-blue-700">REMOTE ROOFTOP MONITORING</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  How Surya International Achieved 'Zero Hassle' Real-Time Monitoring for a 2.1 MW Remote Rooftop Solar Plant
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Challenge</h3>
                <p className="text-gray-700">
                  Surya International faced a significant challenge with its 2.1 MW rooftop solar installation in Odisha. Due to the plant's remote location, implementing traditional monitoring systems was problematic. Running physical data cables for a standard wired monitoring system was not a viable option, creating a high risk of data gaps and delayed fault detection, which could lead to significant revenue loss.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  DS Energize deployed a 4G-based datalogger solution tailored for remote solar assets. This advanced hardware eliminated the need for physical wiring and transmitted all performance data securely to the central DS Energize RMS platform. This allowed the plant manager to access real-time data from anywhere, simplifying O&M for the rooftop-scale plant.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Results</h3>
                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <p className="text-lg italic text-gray-800">
                    "In a remote rooftop setup like ours, wired systems weren't feasible. The 4G-based solution from DS Energize worked seamlessly—real-time data, zero hassle."
                  </p>
                  <cite className="block text-right mt-4 not-italic font-semibold text-gray-600">
                    – Plant Manager, Surya International, Odisha
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* === CASE STUDY 2: Rewa Ultra Mega Solar Park === */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-bold text-blue-700">UTILITY-SCALE EFFICIENCY</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Enhancing Operational Efficiency for the 250 MW Rewa Ultra Mega Solar Park
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Challenge</h3>
                <p className="text-gray-700">
                  For a massive 250 MW solar park, operational efficiency is critical. The sheer scale makes it extremely difficult to pinpoint the exact location of faults quickly, leading to prolonged energy losses. Managing data from thousands of sources without a clear, simple interface can overwhelm the O&M team.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  DS Energize implemented its advanced monitoring solution with AI-enabled fault detection to proactively identify issues. The system's intuitive, real-time dashboard provided a clear, at-a-glance view of the entire plant's health, simplifying data analysis and empowering the O&M team with actionable insights. This was backed by DS Energize's dedicated and responsive support team.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Results</h3>
                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <p className="text-lg italic text-gray-800">
                    "DS Energize's monitoring system has helped us reduce downtime and detect faults faster. Their dashboard is intuitive and their support team is extremely responsive."
                  </p>
                  <cite className="block text-right mt-4 not-italic font-semibold text-gray-600">
                    – Operations Head, Rewa Ultra Mega Solar Park
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* === CASE STUDY 3: Indian Railways === */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-bold text-blue-700">MULTI-SITE PORTFOLIO MANAGEMENT</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Centralizing Success: How Indian Railways Simplified Monitoring Across Six Solar Sites
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Challenge</h3>
                <p className="text-gray-700">
                  The Kharagpur Railway Division needed to manage a 4.6 MW solar portfolio spread across six different sites. This distributed setup led to fragmented data, a lack of a unified portfolio view, and a complex, manual process for generating consolidated reports.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  DS Energize provided a powerful smart monitoring platform designed to aggregate data from all six disparate locations into one centralized hub. With custom integration capabilities, the system seamlessly connected with the diverse equipment at each railway site, providing a single source of truth for the entire portfolio.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Results</h3>
                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <p className="text-lg italic text-gray-800">
                    "Six different sites, one smart monitoring platform. DS Energize helped us centralize and simplify our plant reporting like never before."
                  </p>
                  <cite className="block text-right mt-4 not-italic font-semibold text-gray-600">
                    – Senior Engineer, Indian Railways, Kharagpur Division
                  </cite>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;