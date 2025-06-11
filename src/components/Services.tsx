
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, ShoppingCart, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Rooftop Solar Installations",
      description: "Premium residential solar panel systems designed for maximum efficiency and aesthetic appeal.",
      features: ["Custom Design", "Professional Installation", "25-Year Warranty"]
    },
    {
      icon: Building2,
      title: "Industrial Solar Solutions",
      description: "Large-scale commercial and industrial solar projects for businesses looking to reduce energy costs.",
      features: ["High Capacity Systems", "Grid Integration", "Energy Storage Solutions"]
    },
    {
      icon: ShoppingCart,
      title: "Solar Panel Sales",
      description: "High-quality solar panels from leading manufacturers at competitive prices.",
      features: ["Top Brands", "Bulk Discounts", "Technical Support"]
    },
    {
      icon: Wrench,
      title: "AMC & Maintenance",
      description: "Comprehensive maintenance services to ensure optimal performance of your solar systems.",
      features: ["Regular Inspections", "Performance Monitoring", "24/7 Support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions tailored to meet your specific needs
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
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-blue-700 font-medium">
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
