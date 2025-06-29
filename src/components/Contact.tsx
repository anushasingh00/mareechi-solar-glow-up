import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      toast({
        title: "Please fill all required fields",
        description: "Name, Email, Phone, and Location are required to send WhatsApp message.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello! I'd like to get a free solar quote.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}

${formData.message ? `*Additional Message:*\n${formData.message}` : ''}

Please provide me with a personalized solar energy quote. Thank you!`;

    // WhatsApp phone number (replace with actual business number)
    const whatsappNumber = '+919876543210';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp...",
      description: "Your quote request will be sent via WhatsApp with all the details.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours to discuss your solar energy needs.",
    });

    setFormData({ name: '', email: '', phone: '', location: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-solar-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Get Your <span className="text-gradient">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make the switch to solar energy? Contact us today for a free consultation 
            and personalized quote for your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your energy needs, roof size, monthly electricity bill, etc."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white h-12 text-lg group"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Get Quote via WhatsApp
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleSubmit}
                      variant="outline"
                      className="flex-1 border-2 border-solar-600 text-solar-600 hover:bg-solar-600 hover:text-white h-12 text-lg group"
                    >
                      Get Free Quote
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-solar-100 to-green-100 rounded-xl">
                      <Phone className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                      <p className="text-gray-600">+91 8765432109</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-solar-100 to-green-100 rounded-xl">
                      <Mail className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                      <p className="text-gray-600">info@marechisolar.in</p>
                      <p className="text-gray-600">sales@marechisolar.in</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-solar-100 to-green-100 rounded-xl">
                      <MapPin className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                      <p className="text-gray-600">
                        SHOP NO. LGF-36 SHIVA PLAZA, NEAR ENGINEERING COLLEGE CHAURAHA,SECTOR E JANKIPURAM<br />
                        LUCKNOW,UTTAR PRADESH 226021
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-solar-100 to-green-100 rounded-xl">
                      <Clock className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                      <p className="text-gray-600">Same-day site visit available</p>
                      <p className="text-gray-600">24/7 emergency support</p>
                      <p className="text-sm text-gray-500 mt-1">Fast quotes within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-solar-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Why Choose Marechi Solar?</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  25+ years warranty on solar panels
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Government subsidy assistance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Professional installation & maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  EMI options available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
