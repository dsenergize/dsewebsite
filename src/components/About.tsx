
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize clean energy by making solar power accessible, affordable, and efficient for everyone."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A sustainable future where renewable energy powers every home and business, creating a cleaner planet for generations to come."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, integrity, and environmental responsibility guide everything we do in our quest for a greener tomorrow."
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
                With over a decade of experience in renewable energy, DSenergize has been at the forefront of solar innovation, 
                transforming how businesses and homeowners harness the power of the sun.
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
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-yellow-400 rounded-full">
                          <value.icon className="w-6 h-6 text-blue-900" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-yellow-400">{value.title}</h4>
                        <p className="opacity-90 leading-relaxed">{value.description}</p>
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
