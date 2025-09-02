import React from 'react';
import Footer from '@/components/Footer';

// The main component for the O&M Services page
const OMServices = () => {
    return (
        // Primary container div for the entire component
        <div className=" w-full bg-white text-gray-900">
            
            {/* Parent div with white background and scroll */}
            <div className="w-full min-h-screen pt-8  text-white overflow-y-auto">
                
                {/* Main content container with top padding to avoid the navbar */}
                {/* MODIFIED: Removed 'container' and 'mx-auto' to allow full-width expansion */}
                <div className="px-6 md:px-12 lg:px-24 py-16 pt-24">

                    {/* --- 1. Hero & Introduction Section --- */}
                    {/* MODIFIED: Removed 'max-w-4xl' and 'mx-auto' */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
                            Unlocking Peak Performance with Solar O&M Services
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                            In the ever-expanding realm of renewable energy, solar power has emerged as a frontrunner, harnessing the sun’s energy to power homes, businesses, and entire communities across India. To truly unlock the power of solar energy, understanding the secrets behind effective solar O&M services is crucial. At <strong>DSenergize</strong>, we explore the world of O&M services for solar installations, highlighting key strategies and best practices to ensure optimal performance and long-term reliability for your investment.
                        </p>
                    </div>

                    {/* --- 2. Main Content Sections --- */}
                    {/* MODIFIED: Removed 'max-w-4xl' and 'mx-auto' */}
                    <div className="mt-16 space-y-12">
                        
                        {/* Importance of O&M */}
                        <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">The Importance of Effective O&M Services</h2>
                            <p className="text-gray-200">
                                Effective solar O&M services are the backbone of a high-performing solar power plant. They ensure that your installations generate maximum power over their entire lifespan. Proper O&M not only safeguards your investment but also minimizes downtime, maximizing energy production and helping you achieve your energy targets in India’s competitive market.
                            </p>
                        </div>

                        {/* Common Challenges */}
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Common Challenges in Solar O&M</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Harsh Weather:</strong> Extreme heat and monsoons can impact panel efficiency.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Dust and Pollution:</strong> Reduces efficiency by up to 20%, requiring regular cleaning.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Component Degradation:</strong> Performance of modules and inverters declines over time.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Remote Monitoring:</strong> Managing large-scale sites requires robust monitoring systems.</div>
                            </div>
                        </div>

                        {/* O&M Strategy */}
                         <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Components of an Effective O&M Strategy</h2>
                            <ul className="space-y-3 text-gray-200 list-disc list-inside">
                                <li><strong>Regular Inspections:</strong> Conducting routine visual checks to identify potential issues like cracks or dirt buildup early.</li>
                                <li><strong>Preventive Maintenance:</strong> Scheduling check-ups on inverters and electrical connections to prevent failures.</li>
                                <li><strong>Performance Monitoring:</strong> Using real-time data to track production, detect anomalies, and evaluate efficiency.</li>
                                <li><strong>System Upgrades:</strong> Keeping hardware and software updated to maintain peak performance as technology advances.</li>
                            </ul>
                        </div>
                        
                        {/* Best Practices */}
                        <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Best Practices for Solar O&M</h2>
                            <ul className="space-y-3 text-gray-200 list-disc list-inside">
                                <li><strong>Frequent Cleaning of Solar Panels:</strong> Especially in dusty regions, regular cleaning ensures maximum sunlight absorption.</li>
                                <li><strong>Proactive Monitoring:</strong> Leveraging data analytics to address issues before they escalate.</li>
                                <li><strong>Thermal Imaging:</strong> Using infrared cameras to detect faulty cells, hot spots, or irregular heat distribution.</li>
                                <li><strong>Warranty Management:</strong> Keeping track of component warranties for timely replacements or repairs.</li>
                            </ul>
                        </div>

                        {/* Tools and Technologies */}
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Advanced Tools and Technologies We Use</h2>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start"><strong className="text-yellow-500 mr-3 text-xl">✓</strong><span><strong>Remote Monitoring Systems:</strong> IoT-enabled platforms to monitor plant performance from any location.</span></li>
                                <li className="flex items-start"><strong className="text-yellow-500 mr-3 text-xl">✓</strong><span><strong>Data Analytics:</strong> Predicting potential failures and optimizing performance with real-time data.</span></li>
                                <li className="flex items-start"><strong className="text-yellow-500 mr-3 text-xl">✓</strong><span><strong>Drones for Inspections:</strong> Detailed aerial inspections to identify damaged panels or faulty wiring safely.</span></li>
                                <li className="flex items-start"><strong className="text-yellow-500 mr-3 text-xl">✓</strong><span><strong>SCADA Systems:</strong> Real-time data and system control for large-scale solar plants.</span></li>
                            </ul>
                        </div>
                        
                        {/* KPIs */}
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Measuring O&M Effectiveness with KPIs</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Energy Yield:</strong> Total energy generated compared to the theoretical maximum.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Availability Ratio:</strong> The amount of time the system is operational and ready to generate power.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>Downtime Reduction:</strong> The percentage of time the system is down due to technical issues.</div>
                                <div className="bg-blue-900 text-white p-6 rounded-lg"><strong>O&M Cost per Watt:</strong> Total maintenance cost divided by the total installed capacity.</div>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg text-center mt-12">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Conclusion: Powering a Brighter Future for India</h2>
                            <div className="space-y-4 text-gray-200 text-left">
                                <p>
                                    Mastering the art of effective solar O&M services is key to unlocking the full potential of solar power in India. By adopting best practices, leveraging advanced technologies, and continuously monitoring performance, solar energy stakeholders can maximize efficiency, minimize downtime, and enhance the lifespan of their solar systems. As India continues its journey toward a greener and more sustainable future, the role of professional O&M services, like those offered by DSenergize, will become even more crucial in ensuring the success of solar projects across the country.
                                </p>
                                <p>
                                    By embracing innovative O&M strategies, solar energy projects can continue to power a brighter future for India, ensuring reliable, cost-effective, and sustainable energy for generations to come. Moreover, with DSenergize’s focus on intelligent monitoring, predictive maintenance, and data-driven performance optimization, businesses and homeowners alike can gain confidence in the long-term reliability of their solar investments.
                                </p>
                                <p>
                                    As the renewable energy landscape evolves, DSenergize remains committed to empowering clients with cutting-edge tools, expert support, and tailored solutions designed to meet India’s growing energy demands. Together, by combining technology, innovation, and sustainability, we can pave the way for a cleaner environment, stronger energy independence, and a future where solar power stands at the heart of India’s progress.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OMServices;