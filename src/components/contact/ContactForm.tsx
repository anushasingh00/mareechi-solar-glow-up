
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData, createWhatsAppMessage, openWhatsApp, validateRequiredFields } from './contactUtils';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  // Set your WhatsApp number here (in international format, without + or spaces)
  const whatsappNumber = '918765432109'; // Example: '918765432109' for +91 8765432109

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateRequiredFields(formData)) {
      toast({
        title: "Please fill all required fields",
        description: "Name, Email, Phone, and Location are required to send WhatsApp message.",
        variant: "destructive"
      });
      return;
    }
    const whatsappMessage = createWhatsAppMessage(formData);
    // Redirect to WhatsApp with the specified number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
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
                placeholder="+91 8765432109"
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
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
