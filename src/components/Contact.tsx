
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us for a free consultation and custom quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/30 text-white placeholder-white/70"
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email"
                    className="bg-white/10 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                <Input 
                  placeholder="Phone Number" 
                  className="bg-white/10 border-white/30 text-white placeholder-white/70"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-white/10 border-white/30 text-white placeholder-white/70"
                />
                <Textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/10 border-white/30 text-white placeholder-white/70"
                />
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              <p className="text-lg opacity-90 mb-8">
                We're here to help you make the switch to clean, renewable energy. 
                Get in touch with our expert team today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-400 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Address</h4>
                  <p className="opacity-90">123 Solar Street, Energy City, EC 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-400 rounded-full">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Phone</h4>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-400 rounded-full">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Email</h4>
                  <p className="opacity-90">info@dsenergize.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-400 rounded-full">
                  <Clock className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Business Hours</h4>
                  <p className="opacity-90">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="opacity-90">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
