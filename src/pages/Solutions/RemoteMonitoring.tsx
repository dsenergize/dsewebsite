import React from 'react';
import Footer from '@/components/Footer'; // Assuming you have a Footer component

const RemoteMonitoring = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="w-full">
        {/* Main content container */}
        <div className="px-6 md:px-12 lg:px-24 py-16 pt-24">

          {/* --- 1. Page Header / Hero Section --- */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
              A Unified Platform for Any Connected Asset
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
              Beyond energy, our core remote monitoring solution is a versatile and scalable platform built to connect to virtually any sensor, machine, or device.
            </p>
          </div>

          {/* --- 2. Applications Section (Formerly Main Content) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Key Use Cases */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-yellow-500 pl-4">
                Complete Operational Visibility
              </h2>
              <p className="text-gray-700">
                Whether you need to monitor industrial equipment, environmental conditions, or remote infrastructure, our RMS and SCADA systems provide the <strong>single pane of glass</strong> you need for total control.
              </p>
              
              {/* Use Case Cards */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.022.547m14.454-3.454a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-3.86-.517l-.318-.158a6 6 0 01-3.86-.517L9 3.58a2 2 0 00-1.806-.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 003.86.517l.318.158a6 6 0 013.86.517l2.387.477a2 2 0 001.806.547z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Industrial Equipment</h3>
                    <p className="text-gray-600 mt-1">Monitor machinery health, track production metrics, and predict maintenance needs to reduce downtime.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Environmental Conditions</h3>
                    <p className="text-gray-600 mt-1">Track temperature, humidity, air quality, and other environmental data for compliance and safety.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1974&auto=format&fit=crop" alt="Centralized monitoring dashboard" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* --- 3. How It Works Section --- */}
        <div className="bg-gray-50 py-20">
          <div className="px-6 md:px-12 lg:px-24">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Steps to Total Visibility</h2>
              <p className="text-lg text-gray-600 mb-12">Our process is designed for rapid deployment and immediate results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-blue-600 text-5xl mb-4 font-bold">1</div>
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-gray-600">Our hardware-agnostic platform integrates with any sensor or device using standard protocols like Modbus, MQTT, or custom APIs.</p>
              </div>
              <div className="p-6">
                <div className="text-blue-600 text-5xl mb-4 font-bold">2</div>
                <h3 className="text-xl font-bold mb-2">Visualize</h3>
                <p className="text-gray-600">Create custom, drag-and-drop dashboards to monitor your critical KPIs in real-time from any browser or device.</p>
              </div>
              <div className="p-6">
                <div className="text-blue-600 text-5xl mb-4 font-bold">3</div>
                <h3 className="text-xl font-bold mb-2">Automate</h3>
                <p className="text-gray-600">Set intelligent alerts and control logic to respond to events instantly, reducing manual intervention and preventing issues.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* --- 4. Core Platform Features --- */}
        <div className="py-20 px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Built for Power and Flexibility</h2>
            <p className="text-lg text-gray-600 mb-12">Our platform is more than just a dashboard; it's a powerful engine for operational intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">Hardware Agnostic</h3>
              <p className="text-gray-600">Connect any device from any manufacturer. Our flexible data ingestion engine eliminates vendor lock-in.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">Infinite Scalability</h3>
              <p className="text-gray-600">From a single sensor to millions of data points, our cloud-native architecture scales effortlessly with your needs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">Custom Dashboards</h3>
              <p className="text-gray-600">Build the exact views you need. Generate and schedule detailed reports automatically for stakeholders.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">AI-Powered Analytics</h3>
              <p className="text-gray-600">Leverage machine learning to detect anomalies, predict failures, and optimize asset performance.</p>
            </div>
          </div>
        </div>

        {/* --- 5. Call to Action Section --- */}
        <div className="bg-blue-800 text-white">
          <div className="px-6 md:px-12 lg:px-24 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect Your World?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let us show you how our unified remote monitoring platform can transform your operations and unlock new efficiencies.
            </p>
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default RemoteMonitoring;