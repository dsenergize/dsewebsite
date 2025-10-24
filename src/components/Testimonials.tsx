import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pic1 from "@/assets/Pic1.jpg";
import pic2 from "@/assets/Pic2.jpg";
import pic3 from "@/assets/Pic3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jogashish Barik",
      role: "Head of Projects, Surya International",
      image: pic1,
      content:
        "DSenergize's Remote Monitoring System has been crucial for managing our 11.5MW solar portfolio for Indian Railways. Remote monitoring of Kharagpur, Jharkhand, and Osidha installations has enhanced reliability and maximized energy output. Real-time data provides essential insights for maintaining performance and ensuring optimal investment returns.",
      rating: 5,
    },
    {
      name: "Mohammad Shahnawaz",
      role: "Project Manager, Sunshine Engineering",
      image: pic2,
      content:
        "DSenergize RMS has transformed management of our 3.5MW ground-mounted solar assets across Maharashtra. The centralized dashboard provides instant performance insights for addressing underperforming panels and optimizing energy. This comprehensive solution significantly improves operational efficiency while delivering strong returns across our portfolio.",
      rating: 5,
    },
    {
      name: "Ehtesham Haider",
      role: "Founder & CEO, HelioShift Solar",
      image: pic3,
      content:
        "DSenergize's remote monitoring platform delivers comprehensive analytics and transparent reporting essential for solar asset management. Reliable performance data guarantees assets operate at peak efficiency while exceeding financial targets, providing complete confidence to operational teams and investment stakeholders in maximizing portfolio returns.",
      rating: 5,
    },
    // {
    //   name: "Rajesh Kumar",
    //   role: "Energy Manager, GreenTech Solutions",
    //   //image: pic1,
    //   content:
    //     "DSenergize's proactive maintenance alerts and predictive analytics have revolutionized our solar asset management approach. Identifying potential issues before escalation has saved significant downtime costs. This ensures our 8MW commercial portfolio operates at peak efficiency, delivering consistent returns and maximizing energy generation across sites.",
    //   rating: 5,
    // },
    // {
    //   name: "Priya Sharma",
    //   role: "Operations Director, SolarOne Technologies",
    //   //image: pic2,
    //   content:
    //     "Implementing DSenergize RMS across our 12MW industrial installations achieved 30% operational cost reduction with first-year ROI. Comprehensive performance tracking and automated reporting streamline operations, providing clear asset visibility. The system optimizes energy output and ensures reliable solar infrastructure operation.",
    //   rating: 5,
    // },
    // {
    //   name: "Amit Patel",
    //   role: "CTO, Renewable Energy Corp",
    //   //image: pic3,
    //   content:
    //     "DSenergize's unparalleled data accuracy and sophisticated reporting have transformed our solar asset management strategy. The platform provides unprecedented insights for data-driven decisions across our 15MW portfolio. Real-time monitoring and analytics optimize performance, ensure compliance, and deliver maximum stakeholder returns.",
    //   rating: 5,
    // },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
            who've made the switch to solar
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-4" // Added py-4
                >
                  <div className="p-2">
                    {" "}
                    {/* Increased padding */}
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border h-full w-[350px] flex flex-col relative z-10 hover:z-20 gap-5">
                      {" "}
                      {/* Added z-index */}
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex justify-center mb-6">
                          <Quote className="w-8 h-6 text-yellow-500 opacity-50" />
                        </div>

                        <div className="flex-1 mb-6">
                          <p className="text-gray-700 leading-relaxed italic text-lg">
                            "{testimonial.content}"
                          </p>
                        </div>

                        <div className="flex items-center justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>

                        <div className="text-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                          />
                          <h4 className="font-bold text-blue-900 text-xl">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-base">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-50 z-30" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-50 z-30" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
