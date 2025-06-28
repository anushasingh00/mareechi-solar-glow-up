
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Wrench, Home, Building, Battery, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Panel Installation",
      description: "Professional installation of high-efficiency solar panels with complete system design and setup.",
      features: ["Free site assessment", "Custom design", "Professional installation", "Grid connection"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance services to keep your solar system running at peak performance.",
      features: ["Regular cleaning", "Performance monitoring", "Quick repairs", "System optimization"]
    },
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete solar solutions for homes, reducing electricity bills and increasing property value.",
      features: ["Rooftop installation", "Net metering", "Energy storage", "Smart monitoring"]
    },
    {
      icon: Building,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses, reducing operational costs significantly.",
      features: ["Industrial grade panels", "Bulk installations", "Corporate solutions", "Energy audits"]
    },
    {
      icon: Battery,
      title: "Solar Battery Storage",
      description: "Advanced battery storage solutions for energy independence and backup power.",
      features: ["Lithium batteries", "Smart inverters", "Backup systems", "Load management"]
    },
    {
      icon: Zap,
      title: "Grid-Tie Systems",
      description: "Connect your solar system to the grid and sell excess power back to the utility company.",
      features: ["Net metering setup", "Grid synchronization", "Power export", "Billing optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Our <span className="text-gradient">Solar Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to installation and maintenance, we provide comprehensive solar energy solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-solar-100 to-green-100 rounded-2xl group-hover:from-solar-600 group-hover:to-green-600 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-solar-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-solar-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
