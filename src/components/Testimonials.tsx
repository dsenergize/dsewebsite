
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c8ec?auto=format&fit=crop&w=150&q=80",
      content: "DSenergize transformed our home with a beautiful solar installation. Our electricity bills are now almost zero, and the system looks fantastic!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "The industrial solar solution from DSenergize has saved our company thousands monthly. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Excellent maintenance service! Their team keeps our solar systems running at peak performance year-round.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who've made the switch to solar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-yellow-500 opacity-50" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
