import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower industries by simplifying data acquisition and control. We make sophisticated remote monitoring and SCADA solutions accessible, intuitive, and powerful for businesses of all sizes."

    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A future where every industrial asset is connected, every process is optimized through real-time data, and every decision is intelligent. We are building a more efficient, productive, and sustainable industrial ecosystem."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, Reliability, and Partnership. These core principles guide everything we do, ensuring the integrity of your data and the success of your operations as we build the future of industrial intelligence together."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and company info */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                alt="Solar Installation Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-yellow-400">DSenergize</span>
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                With deep expertise in Industrial IoT and data systems,<strong>DS Energize</strong> is at the forefront of the digital transformation. We specialize in providing robust and intelligent solutions that connect, monitor, and control your most critical assets. We turn complex operational data into clear, actionable intelligence, empowering you to achieve unprecedented levels of efficiency and control.
              </p>
            </div>
          </div>

          {/* Right side - Mission, Vision, Values */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Foundation</h3>
              <p className="text-lg opacity-90">
                Built on innovation, driven by sustainability, and committed to excellence in every solar solution we deliver.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                
              
                <Card key={index} className="bg-white text-gray-600 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-yellow-400 rounded-full">
                          <value.icon className="w-6 h-6 text-blue-900" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-yellow-400">{value.title}</h4>
                        {/* The description's text color is now inherited from the parent Card. */}
                        <p className="leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50MW+</div>
                <div className="text-sm opacity-80">Installed Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-sm opacity-80">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;