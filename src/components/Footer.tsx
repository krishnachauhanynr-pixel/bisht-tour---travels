import { Car, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-editorial-text text-white border-t border-editorial-text">
      <div className="container mx-auto px-4 md:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <span className="font-serif text-xl font-bold text-white tracking-tight">Bisht Tour & Travels</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your reliable travel partner in Rishikesh. Providing safe, comfortable, and timely 24/7 cab services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#999] mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex justify-between items-center text-gray-300 hover:text-white transition-colors border-b border-white/5 pb-1"
                  >
                    <span>{link.name}</span>
                    <span className="text-editorial-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#999] mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-1">
                <span>Char Dham Yatra</span>
                <span className="text-editorial-accent">→</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-1">
                <span>Delhi Airport Transfers</span>
                <span className="text-editorial-accent">→</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-1">
                <span>Local Rishikesh Drops</span>
                <span className="text-editorial-accent">→</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-1">
                <span>One-Way Taxi Services</span>
                <span className="text-editorial-accent">→</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#999] mb-4">Contact Us</h3>
            <ul className="space-y-4 text-xs leading-relaxed">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="">
                  Shyampur, Rishikesh,<br />
                  Uttarakhand, India - 249204
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a href="tel:+917895616847" className="text-gray-300 hover:text-white transition-colors">
                  +91 7895616847
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:info@bishttravels.com" className="text-gray-300 hover:text-white transition-colors">
                  info@bishttravels.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 bg-editorial-text">
        <div className="container mx-auto px-4 md:px-10 py-6 text-left text-[9px] text-[#666] uppercase tracking-tighter">
          <p>Copyright © {currentYear} Bisht Tour & Travels</p>
        </div>
      </div>
    </footer>
  );
}
