import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-900 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-yellow-500 rounded-full opacity-25 animate-bounce delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <Sun className="w-16 h-16 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-yellow-300">DS</span>energize
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 animate-fade-in animation-delay-300 max-w-4xl mx-auto leading-relaxed">
          Powering Tomorrow, Energizing Today with DSenergize
        </p>
        
        <p className="text-lg mb-12 animate-fade-in animation-delay-500 max-w-3xl mx-auto opacity-90">
          Transform your energy future with cutting-edge solar solutions designed for homes and businesses
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-700">
          <Button 
            onClick={scrollToServices}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Solar Power
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;
