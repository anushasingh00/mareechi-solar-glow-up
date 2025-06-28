
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Marechi Solar transformed our home's energy consumption. Our electricity bill dropped from ₹8,000 to just ₹800 per month. The installation was professional and hassle-free. Highly recommended!",
      savings: "₹7,200/month"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      text: "Amazing service from start to finish. The team was knowledgeable, punctual, and completed the installation in just 2 days. Our 5kW system is performing excellently even in Delhi's weather conditions.",
      savings: "₹5,500/month"
    },
    {
      name: "Suresh Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Best decision we made for our factory. The commercial solar installation has reduced our operational costs significantly. The ROI is excellent and the maintenance service is top-notch.",
      savings: "₹25,000/month"
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "The solar system has been running flawlessly for 2 years now. Great customer support and the monitoring app keeps us informed about our energy production. Very satisfied with the investment.",
      savings: "₹6,800/month"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Exceeded our expectations! The team handled everything from permits to grid connection. Our home now runs entirely on solar during the day, and we even sell excess power back to the grid.",
      savings: "₹9,200/month"
    },
    {
      name: "Deepa Nair",
      location: "Kochi, Kerala",
      rating: 5,
      text: "Professional installation and excellent after-sales service. Despite Kerala's monsoon season, our solar panels perform consistently. The battery backup system works perfectly during power cuts.",
      savings: "₹4,500/month"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across India 
            have to say about their solar energy experience with Marechi Solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <Quote className="h-8 w-8 text-solar-200 flex-shrink-0" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                        <div className="text-xs text-gray-500">Monthly Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-solar-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Family</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">₹2Cr+</div>
                <div className="text-sm text-gray-600">Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">15+</div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
