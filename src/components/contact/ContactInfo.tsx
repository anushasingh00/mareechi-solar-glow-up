
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
