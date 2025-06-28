
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, Leaf, Battery, Award, IndianRupee, Home } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Electricity Bills",
      description: "Cut your monthly electricity costs by up to 90% with our efficient solar panel systems.",
      stat: "90%",
      statLabel: "Bill Reduction"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reduce your carbon footprint and contribute to a cleaner, greener environment.",
      stat: "25 Tons",
      statLabel: "CO₂ Saved/Year"
    },
    {
      icon: Battery,
      title: "Energy Independence",
      description: "Generate your own clean energy and reduce dependence on the grid.",
      stat: "24/7",
      statLabel: "Clean Power"
    },
    {
      icon: Award,
      title: "Government Incentives",
      description: "Take advantage of government subsidies and tax benefits for solar installations.",
      stat: "30%",
      statLabel: "Subsidy Available"
    },
    {
      icon: IndianRupee,
      title: "Return on Investment",
      description: "Excellent returns with payback period of 4-6 years and 25+ years of free electricity.",
      stat: "4-6 Years",
      statLabel: "Payback Period"
    },
    {
      icon: Home,
      title: "Increase Property Value",
      description: "Solar installations increase your property value and make it more attractive to buyers.",
      stat: "15%",
      statLabel: "Value Increase"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-solar-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Why Choose <span className="text-gradient">Solar Energy?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solar energy offers numerous benefits for homeowners and businesses. Here's why thousands 
            of customers have made the smart switch to solar power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-to-br from-solar-100 to-green-100 rounded-xl group-hover:from-solar-600 group-hover:to-green-600 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-solar-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">{benefit.stat}</div>
                      <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-solar-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-solar-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Saving?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who are already enjoying the benefits of solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹50,000+</div>
              <div className="text-sm opacity-90">Average Annual Savings</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">25+ Years</div>
              <div className="text-sm opacity-90">System Lifespan</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
