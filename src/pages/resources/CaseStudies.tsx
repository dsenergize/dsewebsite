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

            {/* === CASE STUDY 2: Indian Railways === */}
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

            {/* === CASE STUDY 3: Sunshine Engineering === */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-bold text-blue-700">C&I PERFORMANCE OPTIMIZATION</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Maximizing ROI: How Sunshine Engineering Boosted Performance for a 1 MW C&I Solar Plant
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Challenge</h3>
                <p className="text-gray-700">
                  For its 1 MW commercial solar plant in Maharashtra, Sunshine Engineering was struggling with underperformance. They lacked detailed insights into string-level issues and performance deviations, making it difficult to maximize their return on investment. Manual data collection was proving to be inefficient and prone to error.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  DS Energize implemented its advanced RMS with real-time string monitoring and automated performance ratio (PR) calculations. The platform provided granular data, allowing the O&M team to quickly identify underperforming strings and proactively address issues like soiling and module degradation, ensuring optimal energy generation.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Results</h3>
                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <p className="text-lg italic text-gray-800">
                    "DS Energize's platform gave us the granular visibility we needed. We improved our plant’s PR by 3% within the first quarter and significantly cut down on diagnostic time."
                  </p>
                  <cite className="block text-right mt-4 not-italic font-semibold text-gray-600">
                    – Technical Head, Sunshine Engineering, Maharashtra
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* === CASE STUDY 4: Suryam === */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-bold text-blue-700">GRID COMPLIANCE & ASSET MANAGEMENT</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Streamlining Operations: Suryam's Success in Managing a 2.5 MW Plant in Punjab
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Challenge</h3>
                <p className="text-gray-700">
                  Managing a 2.5 MW solar plant in Kapurthala required precise control and reporting to ensure grid compliance and operational stability. Suryam's team needed a unified platform to monitor key metrics, manage multiple inverters efficiently, and generate accurate reports for stakeholders without manual intervention.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  DS Energize provided a centralized monitoring solution that integrated seamlessly with their existing hardware. The platform offered a comprehensive dashboard for tracking generation, grid parameters, and inverter health. Automated reporting features saved valuable time and ensured data accuracy for regulatory compliance.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">The Results</h3>
                <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                  <p className="text-lg italic text-gray-800">
                    "With DS Energize, we have a complete overview of our 2.5 MW plant on a single screen. The automated reports are a game-changer for our compliance and stakeholder communication."
                  </p>
                  <cite className="block text-right mt-4 not-italic font-semibold text-gray-600">
                    – Operations Manager, Suryam, Kapurthala
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