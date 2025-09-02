import React from "react";
import Footer from "@/components/Footer";

// You can uncomment this if you have a Navbar component and it's located correctly
// import Navbar from '../../components/Navbar';

const Brochures = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-50 min-h-screen">
        {/* Removed 'container' to allow content to span full width, while keeping padding */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* --- Page Header --- */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Our Product Brochures
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the technical details, key features, and strategic
              benefits of our industry-leading solar monitoring solutions.
              Download our resources to learn more.
            </p>
          </div>

          {/* This wrapper keeps the brochure cards from becoming too wide on large screens */}
          <div className="space-y-20 max-w-7xl mx-auto">
            {/* --- 1. RMS Solution Brochure Section --- */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image for RMS */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop"
                    alt="DSenergize RMS Dashboard on a laptop"
                    className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
                  />
                </div>

                {/* Content for RMS */}
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    DSenergize RMS: Intelligent Solar Monitoring
                  </h2>
                  <p className="mt-2 text-yellow-500 font-semibold text-lg">
                    Your Solar Assets, Optimized.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Our powerful, cloud-based platform provides complete
                    visibility and control over your solar assets, turning
                    complex data into actionable insights that maximize your
                    return on investment.
                  </p>

                  <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
                    Core Features:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Intuitive Real-Time Dashboard:</strong> Get an
                      at-a-glance view of your entire portfolio's performance.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Instant Fault Alerts:</strong> Receive automated
                      notifications via SMS & Email for rapid response to
                      minimize downtime.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Advanced Analytics & KPIs:</strong> Track
                      Performance Ratio (PR) to instantly spot and address
                      inefficiencies.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Automated Reporting:</strong> Generate
                      comprehensive performance reports with a single click.
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-md">
                      Schedule a Live Demo
                    </button>
                    <a
                      href="/Datasheet.pdf" // Path to your file in the public folder
                      download="Datasheet.pdf" // The filename user will see
                      // Use the same classes to make it look like a button
                      className="bg-gray-200 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300 text-center"
                    >
                      Download Datasheet
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 2. Solar Logger Brochure Section (FIXED) --- */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* **FIX**: Image for Logger is now placed first */}
                <div className="text-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1682145358254-56e9ab8049ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="DSenergize Solar Logger device mounted on a wall"
                    className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
                  />
                </div>

                {/* Content for Logger is now second */}
                <div>
                  <h2 className="text-3xl font-bold text-blue-900">
                    DSenergize Solar Logger
                  </h2>
                  <p className="mt-2 text-yellow-500 font-semibold text-lg">
                    The Heartbeat of Your Solar Plant.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Engineered for absolute reliability in the harshest
                    conditions, our industrial-grade datalogger ensures every
                    piece of data from your on-site equipment is captured
                    accurately and transmitted securely.
                  </p>

                  <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
                    Core Features:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Universal Compatibility:</strong> Works
                      out-of-the-box with all major inverter brands using Modbus
                      & SunSpec protocols.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Flexible Connectivity:</strong> Reliable data
                      transmission with Ethernet, Wi-Fi, and 4G LTE options.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Rugged IP65 Design:</strong> Weatherproof and
                      built to withstand extreme temperatures, dust, and
                      moisture.
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">
                        ✔
                      </span>{" "}
                      <strong>Onboard Data Buffering:</strong> Guarantees zero
                      data loss, even during temporary internet outages.
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-md">
                      Request a Quote
                    </button>
                    <a
                      href="/Final DSE logger Brochure.pdf" // Path to your manual in the public folder
                      download="DSenergize-Solar-Logger-Manual.pdf" // The filename user will see
                      // Use the same classes to make it look like a button
                      className="bg-gray-200 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300 text-center"
                    >
                      Download Manual
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brochures;
