import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
// import Img1 from "@/assets/logo/1.png"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shahbaz Akhter",
      role: "Founder & CEO, DSenergize",
      image: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/456031128_2240910346266497_8474055792725903276_n.jpg?ccb=11-4&oh=01_Q5Aa2QEv07Tso-P5om2PTFNNM8lp8OTCDs152zBwaZUtnjCGpQ&oe=68C7BAC7&_nc_sid=5e03e0&_nc_cat=104",
      content:
        "The DSenergize remote monitoring system is a game-changer. I love being able to see my home's energy production in real-time on my phone. The proactive alerts gave me peace of mind that my investment is always performing its best.",
      rating: 5,
    },
    {
      name: "Danish Ilyas",
      role: "Full Stack Developer",
      image: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/507921728_1242947670456402_7926231869976855401_n.jpg?ccb=11-4&oh=01_Q5Aa2QEWxnH0p5q0Z2DiJwTBuNjDoFIq4Qvm7OiE6sedKvy3Mw&oe=68C78968&_nc_sid=5e03e0&_nc_cat=104",
      content:
        "Managing our company's portfolio of solar assets across multiple locations was a challenge. DSenergize's RMS dashboard centralized everything, allowing us to instantly spot underperforming panels and maximize our energy generation and ROI.",
      rating: 5,
    },
    {
      name: "David Green",
      role: "Solar Farm Investor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevUwZJM2JzUarw4SPkl4wRqfDwG7-McWSpg&s",
      content:
        "The detailed analytics and reporting from the remote monitoring platform are invaluable. It provides the transparent, verifiable data we need to ensure our assets are operating efficiently and delivering the expected financial returns.",
      rating: 5,
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-r from-yellow-50 to-orange-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-blue-900 mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Don't just take our word for it - hear from satisfied customers
            who've made the switch to solar
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0'
            >
              <CardContent className='p-8'>
                <div className='flex justify-center mb-6'>
                  <Quote className='w-12 h-12 text-yellow-500 opacity-50' />
                </div>

                <p className='text-gray-700 mb-6 leading-relaxed italic'>
                  "{testimonial.content}"
                </p>

                <div className='flex items-center justify-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>

                <div className='text-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full mx-auto mb-3 object-cover'
                  />
                  <h4 className='font-bold text-blue-900'>
                    {testimonial.name}
                  </h4>
                  <p className='text-gray-600 text-sm'>{testimonial.role}</p>
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
