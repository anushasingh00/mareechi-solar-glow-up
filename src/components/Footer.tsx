
import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-solar-400" />
              <span className="text-2xl font-bold font-poppins">Mareechi Solar</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of solar energy solutions in India. We help homes and businesses 
              reduce electricity costs while contributing to a cleaner environment.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-solar-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-solar-600 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-solar-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-solar-600 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Solar Panel Installation</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Maintenance & Repair</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Residential Solar</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Commercial Solar</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Battery Storage</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Grid-Tie Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-solar-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Solar Calculator</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Government Schemes</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">EMI Options</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Warranty</li>
              <li className="hover:text-solar-400 transition-colors cursor-pointer">Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-solar-400 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 8765432109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-solar-400 mt-1 flex-shrink-0" />
                <div>
                  <p>mareechisolar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-solar-400 mt-1 flex-shrink-0" />
                <p> SHOP NO. LGF-36 SHIVA PLAZA, NEAR ENGINEERING COLLEGE CHAURAHA,SECTOR E JANKIPURAM<br />
                        LUCKNOW,UTTAR PRADESH 226021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mareechi Solar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <span className="hover:text-solar-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-solar-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-solar-400 transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
