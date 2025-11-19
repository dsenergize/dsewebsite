import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// The Router icon is added to better represent dataloggers/connectivity
import { Building2, ShoppingCart, Wrench, Router } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Router, // Updated Icon
      title: "IoT Dataloggers & WMS",
      // Combined and refined the description for clarity
      description:
        "Our industrial-grade dataloggers and advanced Weather Monitoring Stations reliably capture critical operational and environmental data. Built for harsh environments, these high-precision systems connect to any sensor to provide trusted insights. They are perfect for performance-critical projects in agriculture, renewable energy, and infrastructure.",
      // Updated features to be more specific to the hardware
      features: [
        "Rugged Industrial Hardware",
        "Real-Time Data Access",
        "Versatile Sensor Integration",
      ],
    },
    {
      icon: Building2,
      title: "Remote Monitoring System",
      description:
        "Large-scale commercial and industrial solar projects for businesses looking to reduce energy costOur powerful, cloud-based platform gives you anywhere, anytime access to your assets. Visualize real-time data on customizable dashboards, receive instant alerts, and generate insightful reports to drive performance.",
      features: [
        "High Capacity Systems",
        "Grid Integration",
        "Energy Storage Solutions",
      ],
    },
    {
      icon: ShoppingCart,
      title: "SCADA Systems",
      description:
        "Gain complete supervisory control and data acquisition. Our SCADA solutions provide a centralized system to monitor and manage your entire operational landscape, from a single facility to a distributed network of sites.",
      features: ["Top Brands", "Bulk Discounts", "Technical Support"],
    },
    {
      icon: Wrench,
      title: "String Monitoring IoT for Solar",
      description:
        "Maximize the efficiency and output of your solar assets. Our string monitoring solutions provide granular, panel-level insights, enabling proactive maintenance and optimizing energy yield for the entire plant.",
      features: [
        "Regular Inspections",
        "Performance Monitoring",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the hardware and software backbone for your monitoring
            and control needs. Our integrated solutions ensure seamless data
            flow from the field to your screen.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-blue-50 to-yellow-50 hover:from-yellow-100 hover:to-orange-100"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* I've also fixed the bug where the description was appearing twice */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-blue-700 font-medium"
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;