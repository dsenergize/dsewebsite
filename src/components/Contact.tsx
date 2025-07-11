import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { submitContactForm } from "@/services/sheetdbApi";
import { ContactFormData } from "@/services/sheetdbApi";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    requirement: "",
    rfq: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await submitContactForm(formData);
      if (res.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          requirement: "",
          rfq: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className='py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Get in <span className='text-yellow-400'>Touch</span>
          </h2>
          <p className='text-xl opacity-90 max-w-3xl mx-auto'>
            Ready to start your solar journey? Contact us for a free
            consultation and custom quote
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
          <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
            <CardContent className='p-8'>
              <h3 className='text-2xl font-bold mb-6 text-yellow-400'>
                Send us a Message
              </h3>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className='bg-white/10 border-white/30 text-white placeholder-white/70'
                  />
                  <Input
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    className='bg-white/10 border-white/30 text-white placeholder-white/70'
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Input
                    name='phone'
                    type='number'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Mobile Number'
                    className='bg-white/10 border-white/30 text-white placeholder-white/70'
                  />
                  <Input
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Subject'
                    className='bg-white/10 border-white/30 text-white placeholder-white/70'
                  />
                </div>
                <Input
                  name='requirement'
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder='Your Requirement'
                  className='bg-white/10 border-white/30 text-white placeholder-white/70'
                />
                <Input
                  name='rfq'
                  value={formData.rfq}
                  onChange={handleChange}
                  placeholder='Your RFQ'
                  className='bg-white/10 border-white/30 text-white placeholder-white/70'
                />
                <Textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your Message'
                  rows={5}
                  className='bg-white/10 border-white/30 text-white placeholder-white/70'
                />
                <Button
                  type='submit'
                  className='w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 transition-all duration-300 hover:scale-105'
                  size='lg'
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold mb-6 text-yellow-400'>
                Contact Information
              </h3>
              <p className='text-lg opacity-90 mb-8'>
                We're here to help you make the switch to clean, renewable
                energy. Get in touch with our expert team today.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-yellow-400 rounded-full'>
                  <MapPin className='w-6 h-6 text-blue-900' />
                </div>
                <div>
                  <h4 className='font-semibold text-yellow-400'>Address</h4>
                  <p className='opacity-90'>
                    123 Solar Street, Energy City, EC 12345
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-yellow-400 rounded-full'>
                  <Phone className='w-6 h-6 text-blue-900' />
                </div>
                <div>
                  <h4 className='font-semibold text-yellow-400'>Phone</h4>
                  <p className='opacity-90'>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-yellow-400 rounded-full'>
                  <Mail className='w-6 h-6 text-blue-900' />
                </div>
                <div>
                  <h4 className='font-semibold text-yellow-400'>Email</h4>
                  <p className='opacity-90'>info@dsenergize.com</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-yellow-400 rounded-full'>
                  <Clock className='w-6 h-6 text-blue-900' />
                </div>
                <div>
                  <h4 className='font-semibold text-yellow-400'>
                    Business Hours
                  </h4>
                  <p className='opacity-90'>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className='opacity-90'>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* <div className='pt-8'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 transition-all duration-300 hover:scale-105'
              >
                Schedule Free Consultation
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
